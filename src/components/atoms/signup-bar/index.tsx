import { mvs } from 'config/metrices'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Medium from 'typography/medium-text'
import { colors } from '../../../config/colors'
import { AuthLabel } from '../auth-label'
import { Row } from '../row'
type props = {
    currentIndex?: number
}
const len = 6;
export const SignupBar = (props: props) => {
    const { currentIndex } = props;
    return (
        <View style={styles.mainContainer}>
            <AuthLabel label={'Sign Up'} />
            <Row style={styles.container}>
                {new Array(len).fill('').map((item, index) => <View style={[styles.barStyle, { backgroundColor: (index + 1) === currentIndex ? colors.blue : colors.secondary, }]} />)}
            </Row>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: mvs(20),
    },
    container: {
        // flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    barStyle: {
        flex: 1,
        height: mvs(3),
        backgroundColor: colors.secondary,
        borderRadius: mvs(5),
        marginHorizontal: mvs(3),
    },

})