import { View, Text, StyleSheet } from "react-native"

export const PositionScreen = () => {
  return (
    <View style={ styles.container }>
        <View style={ styles.greenbox } />
        <View style={ styles.purplebox } />
        <View style={ styles.orangebox } />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: 250,
        // width: 300,
        backgroundColor: '#28C4D9',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    purplebox: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    orangebox: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    greenbox: {
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        // position: 'absolute',
        // bottom: 0,
        // right: 0,
        // top: 0,
        // left: 0,
        ...StyleSheet.absoluteFillObject,
    }
})