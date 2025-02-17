import { StyleSheet } from "react-native";
import { myColors } from "./Colors";
export const Style = StyleSheet.create({
    btnblue:{
        width:72,
        height:72,
        borderRadius:24,
        backgroundColor:myColors.blue,
        justifyContent:'center',
        alignItems:'center',
        margin:8,
    },
    btndark:{
        width:72,
        height:72,
        borderRadius:24,
        backgroundColor:myColors.btndark,
        justifyContent:'center',
        alignItems:'center',
        margin:8,
    },
    btnlight:{
        width:72,
        height:72,
        borderRadius:24,
        backgroundColor:myColors.white,
        justifyContent:'center',
        alignItems:'center',
        margin:8,
    },
    btngray:{
        width:72,
        height:72,
        borderRadius:24,
        backgroundColor:myColors.btngray,
        justifyContent:'center',
        alignItems:'center',
        margin:8,
    },
    smallTextlight:{
        fontSize:32,
        color:myColors.white,
    },
    smallTextdark:{
        fontSize:32,
        color:myColors.black,
    },
    row:{
        maxWidth:'100%',
        flexDirection:'row',
    },
    viewBottom:{
        position:'absolute',
        bottom:50,
    },
    screenfirstbottom:{
        fontSize:96,
        color:myColors.gray,
        fontWeight:'200',
        alignSelf:'flex-end',
    },
    screensecond:{
        fontSize:40,
        color:myColors.gray,
        fontWeight:'200',
        alignSelf:'flex-end',
    },
})