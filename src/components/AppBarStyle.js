import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, Switch } from 'material-bread';

const AppBarStyle = ({ checkedButton, setCheckedButton }) => {
  return (
    <Appbar
      barType={'normal'}
      title={'News Sabse Tez'}
      color='#34495e'
      actionItems={[
        <Switch
          key={1}
          color={'#009688'}
          onPress={setCheckedButton}
          checked={checkedButton}
        />,
      ]}
    />
  );
};

export default AppBarStyle;

const styles = StyleSheet.create({});
