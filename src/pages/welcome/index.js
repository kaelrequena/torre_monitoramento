import React from "react";
import { View,Text,Image,Platform } from "react-native";
import {Link} from "react-router-dom";
import style from "../welcome/style_index.js";
import Fieldemail from "../../components/fields/field_email/field_email.js";
import FieldPassword from "../../components/fields/field_passard/field_password.js";
import Botao from "../../components/button/search/index.js";
import logo from "../../assets/logoOriginal.png";

function Welcome() {

    return (
        <View style={style.container}>
            <View style={style.containerFilho}>
                
                <View style={style.containerLogin}>
                    <Image source={logo} style={{width:250, height:50, marginBottom:35,}}/>
                    <Text style={style.tituloBoasVindas}>Bem-vindo ao Portal do aplicativo Ok.Piloto</Text>
                    {/* <Text style={style.subtitulo}>Aqui você encontrará informações sobre a localização dos motoristas</Text> */}
                    <View style={style.fields}>
                        <Fieldemail/>
                        <FieldPassword/>
                    </View>
                   <Link to="./mapa" style={style.link}><Botao/></Link> 
                   <Link to="/cadastro"><Text>Cadastra-se</Text></Link>
                </View>
                <View
                    style={
                        Platform.OS === "web"
                            ? [style.containerMapa, { background: "linear-gradient(170deg, rgb(12,52,80), rgb(15,65,95), rgb(12,52,80),rgb(15,65,95), rgb(12,52,80))" }]
                            : style.containerMapa
                    }
                >
                </View>
            </View>

        </View>
    );
}

export default Welcome;