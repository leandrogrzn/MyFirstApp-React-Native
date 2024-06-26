import { useState } from "react"
import { View, Text, StyleSheet } from "react-native";
import { globalstyles } from "../theme/global.styles";
import { FAB } from 'react-native-paper';
import Icon from "react-native-vector-icons/Ionicons";


export const CounterM3Screen = () => {

    const [count, setCount] = useState(10);

  return (
    <View style={ globalstyles.centerContainer }>
        <Text style={ globalstyles.title }>{ count }</Text>

        <Icon name="game-controller-outline" size={ 35 } />

        <FAB
            label="+1"
            onPress={ () => setCount(count + 1) }
            onLongPress={ () => setCount(0) }
            style={ globalstyles.fab }
            // icon={ () => <Icon name="game-controller-outline" size={ 20 } /> }
        />
    </View>
  )
}
