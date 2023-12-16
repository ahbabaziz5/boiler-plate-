import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";


export default function Main(){


 const Stack = createNativeStackNavigator();
 return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="auth">
      <Stack.Screen name="auth" component={AuthStack}/>
      <Stack.Screen name="home" component={HomeStack}/>
    </Stack.Navigator>
  </NavigationContainer>

  );
}