import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    
    campoView:{
        // backgroundColor:"rgb(45,55,125)",
        marginBottom:5,
        width:"55%",
    },

    input:{
        width:"55%",
        height:50,
        backgroundColor:"rgb(215,215,215)",
        borderRadius:5,
        padding:10,
        border:1,
        
    },

    labelPassWord:{
        width:"100%",
        marginTop:15,
        fontSize:15,
        fontFamily:"arial",
        // backgroundColor:"rgb(254,145,32)",
    },

    text:{
        fontFamily:"arial",
        fontSize:12,
        fontWeight:"400"
    },
    linkSenha:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end",
        paddingLeft:220,
    },
    lnk:{
        color:"rgb(45,55,125)",
        fontSize:12,
        fontWeight:"bold",
    }

})

export default style;