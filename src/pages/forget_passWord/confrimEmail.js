import React from "react";
import {View, TextInput, Text, Image, TouchableOpacity, Platform} from "react-native";
import {Link} from "react-router-dom";
import style from "./style_confirm";
import logo from "../../assets/logoOriginal.png";

export default function ConfirmeEmail(){
    return(
        <View style={style.container}>
           <View style={style.containerFundo}> 
                <View style={style.ConfirmeEmail}>
                    <Image source={logo} style={{width:250, height:50}}/>
                    <TextInput style={style.input}
                    placeholder="Digite o seu email aqui..."
                    placeholderTextColor="rgb(112,112,112)"/>
                    <Link to="/cadastro/confimEmail/CodeCofirm"><TouchableOpacity style={style.btn}>
                        <Text style={style.txt}>Confirmar</Text>
                    </TouchableOpacity></Link>
                </View>
                <View 
                style={
                    Platform.OS === "web"
                        ? [style.containerImagem, { background: "linear-gradient(170deg, rgb(12,52,80), rgb(15,65,95), rgb(12,52,80),rgb(15,65,95), rgb(12,52,80))" }]
                        : style.containerImagem}>

                    <Text>Imagem aqui</Text>
                </View>
           </View>
        </View>
    );
}