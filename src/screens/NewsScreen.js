import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';

const NewsScreen = (props) => {
  console.log(props.route.params.checkedButton);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <ScrollView>
        <Card>
          <View
            style={[
              props.route.params.checkedButton
                ? styles.bgcolorBlack
                : styles.bgcolorWhite,
            ]}
          >
            <Card.Title>
              <Text
                style={[
                  props.route.params.checkedButton
                    ? styles.bgcolorBlack
                    : styles.bgcolorWhite,
                ]}
                h4
              >
                {props.route.params.title}
              </Text>
            </Card.Title>
          </View>

          <Card.Divider />
          <Card.Image
            source={{ uri: props.route.params.urlToImage }}
          ></Card.Image>
          <Text
            style={[
              props.route.params.checkedButton
                ? styles.bgcolorBlack
                : styles.bgcolorWhite,
            ]}
          >
            Author: {props.route.params.author}
          </Text>
          <Text
            style={[
              props.route.params.checkedButton
                ? styles.bgcolorBlack
                : styles.bgcolorWhite,
            ]}
          >
            Published At: {props.route.params.publishedAt}
          </Text>
          <Text
            style={[
              props.route.params.checkedButton
                ? styles.bgcolorBlack
                : styles.bgcolorWhite,
            ]}
          >
            Story: {props.route.params.description}
          </Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  bgcolorWhite: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 15,
    margin: 10,
  },
  bgcolorBlack: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 20,
  },
});
