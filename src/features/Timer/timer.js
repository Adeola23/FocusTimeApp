import React, { useState } from 'react';
import { Text, View, StyleSheet, Vibration, Platform } from 'react-native';
import { Spacing, fontSizes } from '../../utils/sizes';
import { Countdown } from '../../components/countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
import { Timing } from './timing';

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();

  const [minutes, setMinutes] = useState(20);
  const [isStarted, setStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  };
  const onEnd = () => {
    vibrate();
    setMinutes(20);
    setProgress(1);
    setStarted(false);
    onTimerEnd();
  };

  const vibrate = () => {
    if (Platform === 'ios') {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval, 1000));
    } else {
      Vibration.vibrate(1000);
    }
  };

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(progress);
    setStarted(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}> Focusing on :</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <ProgressBar color="#5E14E4" style={{ height: 10 }} progress={progress} />
      <View style={styles.buttonwrap}>
        <Timing minutes={minutes} onChangeTime={changeTime} />
      </View>

      <View style={styles.buttonwrap}>
        {isStarted ? (
          <RoundedButton
            title="pause"
            size={70}
            onPress={() => {
              setStarted(false);
            }}
          />
        ) : (
          <RoundedButton
            title="start"
            size={70}
            onPress={() => {
              setStarted(true);
            }}
          />
        )}
      </View>
      <View style={styles.clearsubject}>
        <RoundedButton
          title="-"
          size={45}
          onPress={() => {
            clearSubject();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 0.4,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#360940',
    fontSize: 20,
  },
  task: {
    color: '#360940',
    fontWeight: 'bold',
    fontSize: 20,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonwrap: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  clearsubject: {
    padding: 15

  }
});
