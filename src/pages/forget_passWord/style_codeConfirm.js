import {StyleSheet} from "react-native";

const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        padding:15,
        backgroundColor:"rgb(22,50,80)",
    },
    containerFilho:{
        width: "95%", 
        height:"100%",
        padding:10,
        flexDirection: "row",
        justifyContent:"space-between",
        borderRadius: 25,
        gap:35,
        backgroundColor: "rgb(230,230,230)",
    },
    containerFields:{
        width:"50%",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        gap:46,
        borderRadius:25,
        backgroundColor:"rgb(230,230,230)",
    },
    containerImage:{
        width:"35%",
        borderRadius:25,
        backgroundColor:"rgb(22,50,80)",
    },

    campoS:{
        flexDirection:"row",
        justifyContent:"center",
        gap:20,
    },
    inputs:{
        width:"15%",
        height:95,
        borderRadius:20,
        backgroundColor:"rgb(210,210,210)",
    },
    btnContinuar:{
        width:350,
        height:45,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgb(22,50,80)",
    },
    txtBtnContinuar:{
        color:"rgb(230,230,230)",
        fontSize:15,
        fontWeight:"bold",
    },
    reenviar:{
        flexDirection:"row",
        justifyContent:"Center",
        alignItems:"center",
        width:"100%",
        height:5,
    },
    txtReenviar:{
        height:"100%",
        fontSize:14,
        fontWeight:"bold",
        color:"rgb(143,143,143)",
    },
    lineReenviar:{
        height:"100%",
        color:"rgb(143,143,143)", 
        fontWeight:"bold", 
        fontSize:35,
        marginTop:0,

    }
    
})


export default style;