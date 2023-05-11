import React from 'react'
import {Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';

interface Props {
    btnText: string;
    color?: string;
    broad?: boolean;
    accion: ( numText: string ) => void;
}

export const BtnCal = ({btnText, color = '#2d2d2d', broad = false, accion}:Props) => {

  return (
    <TouchableOpacity
    onPress={ () => accion (btnText)}
    >
    <View style={{
        ...styles.btn,
        backgroundColor: color,
        width: (broad) ? 180 : 80 }}>
        <Text style={styles.btnText}>{btnText}</Text>
    </View>
    </TouchableOpacity>
  )
}
