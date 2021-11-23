import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import AppBarStyle from '../components/AppBarStyle';
import CarouselStyle from '../components/CarouselStyle';
import Spacer from '../components/Spacer';
import axios from 'axios';
import CardStyles from '../components/CardStyle';

class MainPage extends Component {
  state = {
    articles: null,
    headLines: null,
    checkedButton: false,
  };
  navigate = (path, params) => {
    this.props.navigation.navigate(path, {
      title: params.title,
      urlToImage: params.urlToImage,
      author: params.author,
      publishedAt: params.publishedAt,
      description: params.description,
      checkedButton: this.state.checkedButton,
    });
  };
  componentDidMount() {
    axios
      .get(
        'http://newsapi.org/v2/top-headlines?country=in&apiKey=c7f9316eb109478a8947bbeff0a9c6e2'
      )
      .then((res) => {
        const articles = res.data.articles;
        this.setState({ articles: articles });
        var size = 5;
        const newArray = articles.slice(0, size);
        this.setState({ headLines: newArray });
      });
  }
  setCheckedButton = () => {
    this.setState({ checkedButton: !this.state.checkedButton });
  };
  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }}>
        <ScrollView>
          <View
            style={[
              this.state.checkedButton
                ? styles.bgcolorBlack
                : styles.bgcolorWhite,
            ]}
          >
            <View style={{ height: 20 }}>
              <AppBarStyle
                checkedButton={this.state.checkedButton}
                setCheckedButton={this.setCheckedButton}
              />
            </View>

            {this.state.headLines === null ? (
              <ActivityIndicator size='large' />
            ) : (
              <View style={{ marginTop: 36 }}>
                <CarouselStyle headLines={this.state.headLines} />
              </View>
            )}

            {this.state.articles === null ? (
              <ActivityIndicator size='large' />
            ) : (
              this.state.articles.map((article) => {
                return (
                  <View key={article.url}>
                    <Spacer>
                      <CardStyles
                        article={article}
                        checkedButton={this.state.checkedButton}
                        navigateNews={(path, params) =>
                          this.navigate(path, params)
                        }
                      />
                    </Spacer>
                  </View>
                );
              })
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default MainPage;

const styles = StyleSheet.create({
  bgcolorWhite: {
    backgroundColor: 'white',
  },
  bgcolorBlack: {
    backgroundColor: '#222f3e',
  },
});
