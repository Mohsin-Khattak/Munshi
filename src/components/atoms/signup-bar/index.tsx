import { mvs } from 'config/metrices'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../../config/colors'
import { Row } from '../row'
 type props={
   currentIndex?:number
}
const len=6;
export const SignupBar = (props:props) => {
    const {currentIndex}=props;
    return (
        <Row style={styles.container}>
            {new Array(len).fill('').map((item,index)=><View style={[styles.barStyle,{backgroundColor:(index+1)===currentIndex?colors.primary :colors.secondary,}]}/>)}
        </Row>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
    },
    barStyle:{
        flex:1,
        height:mvs(5),
        backgroundColor:colors.secondary,
        borderRadius:mvs(5),
        marginHorizontal:mvs(3),
    }
})