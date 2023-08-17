import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Colorgenerator from "./src/Screens/Colorgenerator"
import HookEffect from './src/Screens/HookEffect';

export default function App() {
  return (
    <View style={styles.container}>
      {/*Colorgenerator/>*/}   

     <HookEffect/>  
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
