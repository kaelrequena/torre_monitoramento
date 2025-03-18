import React from 'react';
import {View, Text, TextInput, Image, Platform} from 'react-native-web';
import Style from "./style_codeConfirm";
import Logo from "../../assets/logoOriginal.png";
import { TouchableOpacity } from 'react-native';
export default function CodeCofirm(){
    return(
        <View style={Style.container}>
            <View style={Style.containerFilho}>
                <View style={Style.containerFields}>
                    <Image source={Logo} style={{width:250, height:50}}/>
                    <View style={Style.campoS}>
                        <TextInput style={Style.inputs}/>
                        <TextInput style={Style.inputs}/>
                        <TextInput style={Style.inputs}/>
                        <TextInput style={Style.inputs}/>
                    </View>
                    <TouchableOpacity style={Style.btnContinuar}>
                        <Text style={Style.txtBtnContinuar}>Continuar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.reenviar}>
                    <Text style={Style.txtReenviar}><Text style={Style.lineReenviar}>_______ </Text>Reenviar<Text style={Style.lineReenviar}> _______</Text></Text>
                    </TouchableOpacity>
                </View>
                <View   
                style={
                    Platform.OS === "web"
                        ? [Style.containerImage, { background: "linear-gradient(170deg, rgb(12,52,80), rgb(15,65,95), rgb(12,52,80),rgb(15,65,95), rgb(12,52,80))" }]
                        : Style.containerImage}>
                    <Text>Sou o lado da imagem</Text>
                </View>
            </View>
        </View>
    );
}