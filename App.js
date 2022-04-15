import React from 'react';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.container}>
			<StatusBar style="auto" />
          <Image source={require('./assets/LogoAppli.png')} style={ styles.Image } />
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginVertical: 35 }}>Bienvenue dans votre restaurant!</Text>
        </View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'green',
	},

	Text: {
		margin: 55,
	},

	Image: {
		height: 300,
		width: 300,
		marginTop: 35,
		borderRadius: 300,
	}
});
