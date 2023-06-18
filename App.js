import { StyleSheet, Text, View, StatusBar } from 'react-native';
import InshortsTab from './components/InshortsTab';
import NewsProvider from './contexts/NewsProvider';

export default function App() {
  return (
    <NewsProvider>

      <View style={{ ...styles.container, backgroundColor: "#282c35" }}>
        <InshortsTab></InshortsTab>
      </View>
    </NewsProvider>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
});
