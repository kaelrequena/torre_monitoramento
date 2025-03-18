import {View,Text,TextInput, TouchableOpacity} from "react-native";
import {Link} from "react-router-dom";
import style from "./style_fpassWord";

function Field_password(){
    return(
    <>
         <View style={style.campoView}>
            <Text style={style.labelPassWord}>Senha </Text>
         </View>
         <TextInput
            style={style.input}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            maxLength={100}
            placeholder="Diginte aqui ..."
            placeholderTextColor="rgb(112,112,112)"
            required
            />
        <TouchableOpacity style={style.linkSenha}>
        <Link to="/cadastro/confimEmail"><Text style={style.lnk}>Esqueceu senha?</Text></Link>
        </TouchableOpacity>
    </>
    )
}

export default Field_password;