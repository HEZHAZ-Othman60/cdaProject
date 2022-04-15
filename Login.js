import React from 'react';
import { Text, View } from 'react-native';
import { Dimensions, ImageBackground } from 'react-native-web';
import ScrollViewNativeComponent from 'react-native/Libraries/Components/ScrollView/ScrollViewNativeComponent';

const LoginScreen = ({ navigation }) => {
	return (
		//Container start
		<ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }} showsVerticalScrollIndicator={false}>
			{/*Brand View*/}
			<ImageBackground
				source={require('./assets/LogoAppli.png')}
				style={{
					height: Dimensions.get('window').height / 2.5,
				}}
			>
				<View style={StyleSheet.brandView}>
                    <Icon name="location-sharp"
                        style={{ color: '#ffffff', fontSize: 100 }}
                    />
					<Text style={styles.brandViewText}>Vision Go</Text>
				</View>
            </ImageBackground>
            {/* Bottom View*/}
            <View style={styles.bottomView}>
                {/*Welcome View */}
                <View style={{padding: 40}}>
                    <Text style={{color: '#4632A1', fontSize: 34}}>Welcome</Text>
                    <Text>
                        Don't have an account?
                        <Text style={{ color: 'red', fontStyle: 'italic' }}>
                            {' '}
                            Register now
                        </Text>
                    </Text>
                    {/*Form inputs View */}
                    <View style={{ marginTop: 50 }}>
                        <Item floatingLabel style={{borderColor: '#4632A1'}}>
                            <Label>Email</Label>
                            <Input value='design@test.com' keyboardType='email-address' />
                        </Item>
                    </View>
                </View>
            </View>

		</ScrollView>
	);
};

export default LoginScreen;

const styles = Stylesheet.create({
    brandView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    brandViewText: {
        color: '#ffffff',
        fontSize: 40,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    bottomView: {
        flex: 1,
        backgroundColor: 'red',
        bottom: 50,
        borderTopStarRadius: 60,
        borderTopEndRadius: 60,
    }
})
