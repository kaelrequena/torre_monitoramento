import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastraSe from "../pages/login/cadastraSe.js";
import Welcome from "../pages/welcome/index.js";

export default function LoginStack(){
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="CadastraSe"
            component={CadastraSe}
            options={{headerShown: false}}
            />
              
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
}