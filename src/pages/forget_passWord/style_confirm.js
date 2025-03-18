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
    containerFundo:{
        width: "95%", 
        height:"100%",
        padding:10,
        flexDirection: "row",
        justifyContent:"space-between",
        borderRadius: 25,
        gap:35,
        backgroundColor: "rgb(230,230,230)",
    },
    ConfirmeEmail:{
        width:"50%",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        gap:40,
        borderRadius:25,
        backgroundColor:"rgb(230,230,230)",
    },
    containerImagem:{
        width:"35%",
        borderRadius:25,
        backgroundColor:"rgb(123,42,122)",
    },
    input:{
        width:"70%",
        height:50,
        borderRadius:15,
        padding:15,
        backgroundColor:"rgb(215,215,215)"
    },
    btn:{
        width:350,
        height:45,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:15,
        backgroundColor:"rgb(12,52,80)",
    },
    txt:{
        fontFamily:"arial",
        fontSize:15,
        fontWeight:"600",
        color:"rgb(245,245,245)",
    }
})

export default style;