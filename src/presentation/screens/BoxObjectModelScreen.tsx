import { StyleSheet, Text, View } from "react-native"

export const BoxObjectModelScreen = () => {
  return (
    <View style={ styles.container }>
        {/* <Text style={ styles.title }>BoxObjectModelScreen</Text> */}
        <View style={ styles.purplebox }>
            <Text>hola mundo</Text>
        </View>
        {/* <View style={ styles.purplebox }></View> */}
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        height: 50,
    },
    title: {
        fontSize: 30,
        paddingHorizontal: 30,

        borderWidth: 10,
    },
    purplebox: {
        height: 30,
        backgroundColor: 'purple',
        // margin: 20,
        marginHorizontal: 20,
        marginVertical: 50,
        padding: 5,
    }
})