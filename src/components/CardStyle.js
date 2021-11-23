import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, CardContent, CardMedia } from 'material-bread';

const CardStyle = ({ article, navigateNews, checkedButton }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Card
        radius={15}
        shadow={10}
        outlined
        style={{
          maxWidth: 100,
          width: '100%',
        }}
        onPress={() =>
          navigateNews('News', {
            title: article.title,
            urlToImage: article.urlToImage,
            author: article.author,
            publishedAt: article.publishedAt,
            description: article.description,
            checkedButton: checkedButton,
          })
        }
      >
        <CardMedia
          image={
            <Image
              style={{ flex: 1, width: '100%' }}
              source={{ uri: article.urlToImage }}
              resizeMode='cover'
            />
          }
        />
        <CardContent
          style={[checkedButton ? styles.bgcolorBlack : styles.bgcolorWhite]}
        >
          <Text
            style={[checkedButton ? styles.bgcolorBlack : styles.bgcolorWhite]}
          >
            {article.title}
          </Text>
          <Text style={{ color: 'white', fontSize: 15 }}>
            Article By: {article.author}
          </Text>
        </CardContent>
      </Card>
    </View>
  );
};

export default CardStyle;

const styles = StyleSheet.create({
  bgcolorWhite: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 20,
  },
  bgcolorBlack: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 20,
  },
});
