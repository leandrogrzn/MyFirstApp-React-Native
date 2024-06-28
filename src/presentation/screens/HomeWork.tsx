import { StyleSheet, Text, View } from "react-native"

export const HomeWork = () => {
  return (
    <View style={ styles.container }>
        <View style={[ styles.box, styles.purplebox ]}></View>
        <View style={[ styles.box, styles.orangebox ]}></View>
        <View style={[ styles.box, styles.bluebox ]}></View>
    </View>
  )
}


//1
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425B',
//     },
//     box: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//     },
//     purplebox: {
//         flex: 1,
//         backgroundColor: '#5856D6',
//     },
//     orangebox: {
//         flex: 7,
//         backgroundColor: '#F0A23B',
//         alignSelf: "stretch",
//     },
//     bluebox: {
//         flex: 1,
//         backgroundColor: '#28C4D9',
//     },
// })



//2
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425B',
//         justifyContent: 'center'
//     },
//     box: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//     },
//     purplebox: {
//         backgroundColor: '#5856D6',
//     },
//     orangebox: {
//         backgroundColor: '#F0A23B',
//     },
//     bluebox: {
//         backgroundColor: '#28C4D9',
//         alignSelf: 'stretch',
//         width: 'auto',
//     },
// })


//3
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425B',
//         justifyContent: "center",
//     },
//     box: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//     },
//     purplebox: {
//         backgroundColor: '#5856D6',
//         alignSelf: "flex-end",
//     },
//     orangebox: {
//         backgroundColor: '#F0A23B',
//     },
//     bluebox: {
//         backgroundColor: '#28C4D9',
//         alignSelf: "center",
//     },
// })


//4
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425B',
//         justifyContent: "space-between",
//         alignItems: "center"
//     },
//     box: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//     },
//     purplebox: {
//         backgroundColor: '#5856D6',
//         alignSelf: "flex-end",
//     },
//     orangebox: {
//         backgroundColor: '#F0A23B',
//     },
//     bluebox: {
//         backgroundColor: '#28C4D9',
//         alignSelf: "flex-start",
//     },
// })




//5
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425B',
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "stretch",
//     },
//     box: {
//         width: 100,
//         height: 'auto',
//         borderWidth: 10,
//         borderColor: 'white',
//     },
//     purplebox: {
//         backgroundColor: '#5856D6',
//     },
//     orangebox: {
//         backgroundColor: '#F0A23B',
//     },
//     bluebox: {
//         backgroundColor: '#28C4D9',
//     },
// })




//6
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425B',
//         alignItems: "stretch",
//     },
//     box: {
//         width: 'auto',
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//     },
//     purplebox: {
//         flex: 1,
//         backgroundColor: '#5856D6',
//     },
//     orangebox: {
//         flex: 1,
//         backgroundColor: '#F0A23B',
//     },
//     bluebox: {
//         flex: 2,
//         backgroundColor: '#28C4D9',
//     },
// })



//7
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425B',
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     box: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//     },
//     purplebox: {
//         backgroundColor: '#5856D6',
//     },
//     orangebox: {
//         backgroundColor: '#F0A23B',
//     },
//     bluebox: {
//         backgroundColor: '#28C4D9',
//     },
// })



//8
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425B',
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     box: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//     },
//     purplebox: {
//         backgroundColor: '#5856D6',
//     },
//     orangebox: {
//         backgroundColor: '#F0A23B',
//         right: -100,
//     },
//     bluebox: {
//         backgroundColor: '#28C4D9',
//     },
// })



//9
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425B',
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     box: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//     },
//     purplebox: {
//         backgroundColor: '#5856D6',
//         top: 100,
//     },
//     orangebox: {
//         backgroundColor: '#F0A23B',
//         right: -100,
//     },
//     bluebox: {
//         backgroundColor: '#28C4D9',
//     },
// })



//10
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425B',
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     box: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//     },
//     purplebox: {
//         backgroundColor: '#5856D6',
//     },
//     orangebox: {
//         backgroundColor: '#F0A23B',
//         top: 50,
//     },
//     bluebox: {
//         backgroundColor: '#28C4D9',
//     },
// })



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
    },
    purplebox: {
        backgroundColor: '#5856D6',
    },
    orangebox: {
        flex: 1,
        backgroundColor: '#F0A23B',
    },
    bluebox: {
        backgroundColor: '#28C4D9',
    },
})