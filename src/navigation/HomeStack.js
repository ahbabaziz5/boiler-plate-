import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from "../screens/Splash";
import Home from "../screens/Home";


export default function HomeStack(){


 const Stack = createNativeStackNavigator();
 return (
    
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
       
      </Stack.Navigator>
    
  );
}