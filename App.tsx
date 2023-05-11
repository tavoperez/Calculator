import {Platform, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { CalculatorScreens } from './src/screens/CalculatorScreens';
import { styles } from './src/theme/appTheme';

export default function App() {
  return (
    <SafeAreaView style={[safeArea.safeArea, styles.background]}>
      <StatusBar
      backgroundColor={'black'}
      barStyle= {'light-content'}
      />
      <CalculatorScreens/>
    </SafeAreaView>
  );
}

const safeArea = StyleSheet.create({
    safeArea:{
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : getStatusBarHeight(),
    }
});
