import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <View style={styles.container}>
	  <Navbar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
	height: '100%'
  },
	atTop: {
		paddingTop: 40,
		paddingBottom: 20,
		backgroundColor: '#ff0000',
		width: '100%',
		top: 0,
		display: "flex",
		flexDirection: "row",
		justifyContent: 'center',
	}
});
