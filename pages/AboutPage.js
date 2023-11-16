import React from "react";
import {useNavigation} from '@react-navigation/native';
import { NativeBaseProvider,Text, VStack, Button } from "native-base";
import { Linking } from 'react-native';
const AboutPage = () => {
    const navigation = useNavigation();

    const handleNavigationToDefault = () => {
        navigation.navigate('DefaultPage')
    }
    const handleNavigationToRegistration = () => {
        navigation.navigate('RegistrationPage')
    }
return (
    <NativeBaseProvider>
        <VStack space={4} alignItems="center" style={{marginTop:60}}>
            <Text onPress={() => {Linking.openURL("https://moodle3.chmnu.edu.ua")}}>Instagram</Text>
            <Text onPress={() => {Linking.openURL("https://moodle3.chmnu.edu.ua")}}>Telegram</Text>
            <Text onPress={() => {Linking.openURL("https://moodle3.chmnu.edu.ua")}}>Facebook</Text>
        </VStack>
        <VStack space={4} alignItems="center" style={{marginTop:20}}>
            <Button title="Registration" onPress={handleNavigationToRegistration}>Registration</Button>
            <Button title="Default" onPress={handleNavigationToDefault}>Default</Button>
        </VStack>
    </NativeBaseProvider>
);
}

export default AboutPage;