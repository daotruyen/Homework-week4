import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const ActiveItem = (props) => {

  const { navigation, route } = props;

  const { updatedTodo } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        {updatedTodo.id}.{updatedTodo.status}
      </Text>
   <Text style={styles.bodyText}>{updatedTodo.body}</Text> 
    </View>
  );
};

export default ActiveItem;
// export default function Active(props) {
//   const { id, status, body } = props.navigation.state.params.updatedTodo;
//   return (
//     /* <View style={styles.container}>
//       <Text style={styles.headerText}>
//         {JSON.stringify(id)} .{JSON.stringify(status)}
//       </Text>
//       <Text style={styles.bodyText}>{JSON.stringify(body)}</Text>
//     </View> */
//     <View style={styles.container}>
//       <Text style={styles.headerText}>
//         {id}. {status}
//       </Text>
//       <Text style={styles.bodyText}>{body}</Text>
//     </View>

//   );
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContainer: {
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 30
  },
  bodyText: {
    fontSize: 50
  }
});