import { StyleSheet, Text, View } from "react-native"

export const HelloWorldScreen = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.tittle }>Hello World</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    tittle: {
        fontSize: 45,
        textAlign: 'center',
        color: 'black',
        padding: 20
    }
})
