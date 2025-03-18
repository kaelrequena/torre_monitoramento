import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import LoginStack from "../pages/login/cadastraSe.js";
import Welcome from "../pages/welcome/index.js";

export default function MainStack(){

    return(
        <NavigationContainer>
           <Welcome>
             <LoginStack />
            </Welcome>
        </NavigationContainer>
    );
}