import { StyleSheet} from "react-native";

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
        gap:50,
        backgroundColor: "rgb(230,230,230)",
    },

    containerLogin:{
        width:"50%",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        flexWrap:"wrap",
        // backgroundColor:"rgb(20,230,230)",
        borderBottomLeftRadius:25,
        borderTopLeftRadius:25,
        margin:0,
        padding:15,
        gap:13,
    },
    fields:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
    },

    containerMapa:{
        padding:0,
        width:"35%",
        borderRadius:25,
        margin:0,
        backgroundColor: "rgb(245,245,245)",
    },

    text: {
        fontSize: 20,
        color: "#000",
        textAlign: "center",
    },
    tituloBoasVindas:{
        fontSize:20,
        fontWeight:"500",
        fontFamily:"arial",
        marginBottom:5,

    },
    subtitulo:{
        fontSize:14,
        fontWeight:"200",
        fontFamily:"arial",
        color:"rgb(145,145,145)",
        marginBottom:15,
        
    },
    link:{
        textDecorationLine:"none",
    }

});

export default style;
