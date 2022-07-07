import { StyleSheet, Text, View } from 'react-native';

export default function Navbar() {
	return (
	  <View style={styles.atTop}>
	  	<Text style={{ color: '#fff', fontWeight: 'bold', textTransform: 'uppercase' }}>
		 	Pokedex bitch
	  	</Text>
	  </View>

	)
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
