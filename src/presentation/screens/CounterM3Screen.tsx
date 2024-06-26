import { useState } from "react"
import { View, Text, StyleSheet } from "react-native";
import { globalstyles } from "../theme/global.styles";
import { FAB } from 'react-native-paper';


export const CounterM3Screen = () => {

    const [count, setCount] = useState(10);

  return (
    <View style={ globalstyles.centerContainer }>
        <Text style={ globalstyles.title }>{ count }</Text>
        <FAB
            label="+1"
            onPress={ () => setCount(count + 1) }
            onLongPress={ () => setCount(0) }
            style={ globalstyles.fab }
        />
    </View>
  )
}
