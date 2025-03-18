import React from "react";
import {TouchableOpacity, Text, Platform} from "react-native";
import Push from 'push.js'
import style from "./style_search.js";

function ButtonSearch(){
    return(
        <TouchableOpacity style={Platform.OS ==="web" 
            ?[style.container,{ background: "linear-gradient(35deg, rgb(12,52,80),rgb(20,70,100),rgb(12,52,80),rgb(20,70,100),rgb(12,52,80),rgb(20,70,95))"}]    
            :style.container}
             onPress={()=>{
            if(Platform.OS === "web"){
                Push.create("Olá",{
                    body:"Seja Muito bem-vindo(a)",
                    timeout:5000,
                })}else{
                    console.log("não")
                }
            }
        }>
            <Text style={style.text}>Acessar</Text>
        </TouchableOpacity>
    );
}   

export default ButtonSearch;