import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {fontSize, paddingSizes} from "../utils/sizes"

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size={size},
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]}>
      <Text style={[styles(size).text, textStyle]} onPress={props.onPress}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 3,
      justifyContent: "center",
      alignItems:'center',
      width: size,
      height: size,
      borerWidth: 2,
      borderColor: '#2E8BC0',
      borderWidth: 2,
      
    },

    text: { color: 'black', fontSize: size/3 },
  });
