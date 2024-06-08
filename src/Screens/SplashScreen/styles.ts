import { StyleSheet } from "react-native";
import { Colors } from "../../res/AppColors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black'
    },
    slogan:{
        position:'absolute',
        bottom:30,
        color:Colors.appTheme,
        fontSize:16,
        fontFamily:'Montserrat-Regular',

    }
});