import { View, Text, StyleSheet, ActivityIndicator, ColorValue } from 'react-native'
import React from 'react'
import { colors } from '../../../config/colors'
import Medium from 'typography/medium-text'
import Bold from 'typography/bold-text'
import { mvs } from 'config/metrices'
type props = {
    size?: number
    color?: ColorValue
    label?: string
}
export const AuthLabel = (props: props) => {
    const { size = 24, color = colors.white, label } = props;
    return (
        <Bold label={label} fontSize={size} color={color} style={styles.label} />
    )
}
const styles = StyleSheet.create({
    label: {
        marginTop: mvs(60),
        marginBottom: mvs(34),
    }

})