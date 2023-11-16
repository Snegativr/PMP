import React, { useState } from "react";
import {useNavigation} from '@react-navigation/native';
import { NativeBaseProvider,HStack,Text, Box, VStack, Toast,Input,Button, Heading } from "native-base";

const RegistrationPage = () => {
    const navigation = useNavigation();

    const handleNavigationToDefault = () => {
        navigation.navigate('DefaultPage')
    }
    const handleNavigationToAbout = () => {
        navigation.navigate('AboutPage')
    }

    const [login,setLogin] = useState("");
    const [password,setPassword] = useState("");
  
    const handleButton = () => {
      if(login === "root" && password === "root") {
        Toast.show({
          description:"Авторизація пройшла успішно",
        });
      }
      else {
        Toast.show({
            description:"Помилка авторизації",
        });
    }
    }
return (
    <NativeBaseProvider>
        <VStack space={4} alignItems="center" style={{marginTop:60}}>
            <Heading>Enter your account</Heading>
            <Input size="2xl" w="50%" type="text" placeholder="Enter login" onChangeText={(text) => setLogin(text)} />
            <Input size="2xl" w="50%" type="password" placeholder="Enter password" onChangeText={(text) => setPassword(text)} />
            <Button size="lg" onPress={handleButton} >Submit</Button>
        </VStack>
        <VStack space={4} alignItems="center" style={{marginTop:20}}>
            <Button title="Default" onPress={handleNavigationToDefault}>Default</Button>
            <Button title="About" onPress={handleNavigationToAbout}>About</Button>
        </VStack>
    </NativeBaseProvider>
);
}

export default RegistrationPage;