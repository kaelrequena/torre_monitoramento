import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "../pages/welcome/index.js";
import CadastraSe from "../pages/login/cadastraSe.js";

export default function MainStack(){
    return(
        <NavigationContainer>
            <Welcome>
                <CadastraSe />
            </Welcome>
        </NavigationContainer>
    );
}