import React from "react";
import {useNavigation} from '@react-navigation/native';
import { NativeBaseProvider,HStack,Text, Box, VStack, Toast,Input,Button, Heading } from "native-base";

const DefaultPage = () => {
    const navigation = useNavigation();

    const handleNavigationToRegistration = () => {
        navigation.navigate('RegistrationPage')
    }
    const handleNavigationToAbout = () => {
        navigation.navigate('AboutPage')
    }
return (
    <NativeBaseProvider>
        <VStack space={4} alignItems="center" style={{marginTop:60}}>
            <Text>Just a default page</Text>
        </VStack>
        <VStack space={4} alignItems="center" style={{marginTop:20}}>
            <Button title="Registration" onPress={handleNavigationToRegistration}>Registration</Button>
            <Button title="About" onPress={handleNavigationToAbout}>About</Button>
        </VStack>
    </NativeBaseProvider>
);
}

export default DefaultPage;