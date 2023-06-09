import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CarsList from './components/carsList';
export default function App() {
  return (
    <View style={styles.container}>
      <CarsList />
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
