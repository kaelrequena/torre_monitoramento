import React from "react";
import {View, Text, TextInput, TouchableOpacity, Platform, Image} from "react-native";
import {Link} from "react-router-dom";
import style from "./style_cadastro.js";
import Logo from "../../assets/logoOriginal.png"

export default function CadastraSe(){
    return(
        <View style={style.container}>
            <View style={style.containerFundo}>
                {/* Campos */}
                <View style={style.containerFields}>
                    <Image source={Logo} style={{width:250, height:50, marginBottom:35, marginLeft:220, marginTop:25}}/>
                    <Text style={style.titulo}>Cadastra-se</Text>
                    <Text style={style.subiTitulo}>Já possui uma conta? <Link to="/"><Text style={style.Login}>Login</Text></Link></Text>
                    <View style={style.containerField}>
                        <View style={style.FieldNameSobre}>
                            <TextInput 
                            style={style.inputNameSobre}
                            placeholder="Primeiro Nome"
                            placeholderTextColor="rgb(112,112,112)"/>
                            <TextInput 
                            style={style.inputNameSobre}
                            placeholder="Sobrenome"
                            placeholderTextColor="rgb(112,112,112)"/>    
                        </View>
                        <TextInput style={style.inputCadastro}
                        placeholder="Email"
                        placeholderTextColor="rgb(112,112,112)"/>
                        <TextInput style={style.inputCadastro}
                        rigth={<TextInput.Icon name="eye"/>}
                        placeholder="Senha"
                        placeholderTextColor="rgb(112,112,112)"/>
                        <Link to="/" style={style.link}><TouchableOpacity style={
                            Platform.OS ==="web" 
                            ?[style.bntCadastro,{ background: "linear-gradient(35deg, rgb(12,52,80),rgb(20,70,100),rgb(12,52,80),rgb(20,70,100),rgb(12,52,80),rgb(20,70,95))"}]    
                            :style.bntCadastro}>
                            <Text style={style.txtBtn}>Cadastrar</Text>
                        </TouchableOpacity></Link>
                    </View>
                </View>
                {/* Imagem */}
                <View style={
                        Platform.OS ==="web" 
                        ?[style.containerImg,{ background: "linear-gradient(35deg, rgb(12,52,80),rgb(20,70,100),rgb(12,52,80),rgb(20,70,100),rgb(12,52,80),rgb(20,70,95))"}]    
                        :style.containerImg} >
                    
                </View>
            </View>
        </View>
    );
}