import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../pages/welcome/index.js";
import Logintela from "../pages/login/cadastraSe.js";

export default function Login(){
    const Stack = createStackNavigator();
    
    return(
        <Stack.Navigator>
            
            {/* Tela de Welcome */}
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{header:false}}
            />

            {/* Tela de Login */}
            <Stack.Screen
            name="Login"
            component={Logintela}
            options={{header:false}}
            />

        </Stack.Navigator>
    );
}