import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import {Style} from '../styles/GlobalStyle'
import { Text } from "react-native";
interface ButtonProps {
    onPress:() =>void;
    title:string;
    isblue?:boolean;
    isGray?:boolean;
}

export default function Button({title,onPress,isblue,isGray}:ButtonProps){
    const theme = useContext(ThemeContext)
    return (
        <TouchableOpacity
        style={
            isblue
            ? Style.btnblue
            :isGray
            ? Style.btngray
            :theme === 'light'
            ? Style.btnlight
            :Style.btngray
        }
        onPress={onPress}
        >
        <Text
        style={
            isblue || isGray
            ? Style.smallTextlight
            :theme == 'dark'
            ?Style.smallTextlight
            :Style.smallTextdark
        }
        >
            {title}
        </Text>

        </TouchableOpacity>
    )
}