import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from "../screens/Splash";
import Auth from ".";


export default function AuthStack(){


 const Stack = createNativeStackNavigator();
 return (
    
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Auth" component={Auth} />
      </Stack.Navigator>
    
  );
}