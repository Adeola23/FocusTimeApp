import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import {fontSizes, Spacing} from "../../utils/sizes"

export const Focus = ({ addSubject, focusHistory }) => {
  const [tmpItem, setTmpItem] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on pipe?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: 20 }}
            onSubmitEditing={({ nativeEvent }) => {
              setTmpItem(nativeEvent.text);
            }}
          />
        
          <RoundedButton
            title="+" size={50}
            onPress={() => {
              addSubject(tmpItem);
            }}
          />
        </View>
        <Text>{focusHistory}</Text>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleContainer: {
    flex: 0.5,
    padding:Spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: '#360940',
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop: Spacing.lg,
    alignItems: 'center',

    flexDirection: 'row',
  },
});
