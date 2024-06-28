import { StyleSheet, View } from "react-native"

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>

        <View style={[styles.box, styles.box1]}/>
        <View style={[styles.box, styles.box2]}/>
        <View style={[styles.box, styles.box3]}/>
        <View style={[styles.box, styles.box4]}/>
        <View style={[styles.box, styles.box1]}/>
        <View style={[styles.box, styles.box2]}/>
        <View style={[styles.box, styles.box3]}/>
        <View style={[styles.box, styles.box4]}/>
        <View style={[styles.box, styles.box1]}/>
        <View style={[styles.box, styles.box2]}/>
        <View style={[styles.box, styles.box3]}/>
        <View style={[styles.box, styles.box4]}/>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        flexWrap: 'wrap',
        gap: 10,
    },
    box: {
        // flex: 1,
        width: 80,
        height: 80,
    },
    box1: {
        backgroundColor: '#5856D6',
    },
    box2: {
        backgroundColor: '#3c3b93',
    },
    box3: {
        backgroundColor: '#19183f',
    },
    box4: {
        backgroundColor: '#070610',
    },
})