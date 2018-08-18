// @flow
import * as React from 'react'
import type {
  ImageStyleProp,
  TextStyleProp,
  ViewStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {Text, TouchableOpacity, View} from "react-native";

type Props = {
  text: string,
  style?: ViewStyleProp,
  onClick: () => any
}

const Button = ({text, style, onClick}: Props) =>
  <View style={style}>
    <TouchableOpacity onPress={onClick}>
      <Text>{text}</Text>
    </TouchableOpacity>
  </View>;

export default Button;