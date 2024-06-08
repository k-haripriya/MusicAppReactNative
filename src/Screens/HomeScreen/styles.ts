import { StyleSheet } from "react-native";
import { ContinousBaseGesture } from "react-native-gesture-handler/lib/typescript/handlers/gestures/gesture";
import { Colors } from "../../res/AppColors";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.black,
        flex:1
    },
    headerView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:15
    },
    headerChild:{
        flexDirection:'row',
        alignItems:'center', 
    },
    welcomeText:{
        color:Colors.appTheme,
        fontFamily:'Montserrat-Bold',
        fontSize:20,
        marginLeft:15
    }
})