import * as React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Spacer from './Spacer';

export default class CarouselStyle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1,
      carouselItems: [...this.props.headLines, {}],
      // {
      //   title: 'Item 1',
      //   text: 'Text 1',
      // },
      // {
      //   title: 'Item 2',
      //   text: 'Text 2',
      // },
      // {
      //   title: 'Item 3',
      //   text: 'Text 3',
      // },
      // {
      //   title: 'Item 4',
      //   text: 'Text 4',
      // },
      // {
      //   title: 'Item 5',
      //   text: 'Text 5',
      // },
    };
  }
  componentDidMount() {
    setInterval(() => {
      const x = Math.floor(Math.random() * 4) + 1;
      this.setState({ activeIndex: x });
    }, 4000);
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: '#f5f6fa',
          borderRadius: 5,
          height: 150,
          padding: 10,
          marginLeft: 25,
          marginRight: 25,
          marginBottom: 10,
        }}
      >
        <Text h5>{item.title}</Text>
      </View>
    );
  }

  get pagination() {
    const { carouselItems, activeIndex } = this.state;
    return (
      <Pagination
        dotsLength={carouselItems.length - 1}
        activeDotIndex={activeIndex}
        containerStyle={{ backgroundColor: '#576574' }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#576574',
          paddingTop: 10,
          paddingBottom: 5,
        }}
      >
        <Spacer>
          <Text style={{ color: 'white' }} h4>
            Headlines
          </Text>
        </Spacer>
        <View
          style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}
        >
          <Carousel
            layout={'tinder'}
            layoutCardOffset={5}
            // layout={'default'}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            firstItem={this.state.activeIndex}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
            //     (index) => this.setState({ activeIndex: index })
          />
        </View>
        <View
          style={{
            backgroundColor: '#576574',
          }}
        >
          <Spacer>{this.pagination}</Spacer>
        </View>
      </SafeAreaView>
    );
  }
}
