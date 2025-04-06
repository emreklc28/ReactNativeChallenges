import React from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

const MiniChallenge = () => {
  const showAlert = () => {
    Alert.alert('Hello World');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Patika{' '}
        <Text style={styles.boldText}>Patika</Text>
      </Text>

      <Button title="Click" onPress={showAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default MiniChallenge;
