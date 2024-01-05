import { View, Text, TouchableOpacityBase } from "react-native";
import react from "react";
import { Ionicons } from '@expo/vector-icons';

const DrawerButton = () => {
    return (
        <TouchableOpacity>
            <Ioncicons name={iconmae} size={size} color={color} />
        </TouchableOpacity>
    );
};

export default DrawerButton;