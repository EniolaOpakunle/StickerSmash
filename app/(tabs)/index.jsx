import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  [todo, onChangeTodo] = React.useState("");
  //   [todos, onChangeTodos] = React.useState([]);
  const [todos, setTodos] = useState([]);
  const handleAddTodo = () => {
    setTodos([...todos, todo]);
    onChangeTodo("");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          gap: 5,
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="enter your todo"
          onChangeText={onChangeTodo}
          value={todo}
        />
        <Button title="Add Todo" color="black" onPress={handleAddTodo} />
      </View>
      <View>
        {todos.map((value, index) => (
          <View key={index} style={{flexDirection:"row"}}>
            <Text>{value}</Text>
            <Button title="Edit" 
            color='black'/>

            <Button title="Delete" 
            color='black'/>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 20,
    // backgroundColor: 'black',
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  input: {
    width: 250,
    borderWidth: 1,
    height: 50,
    padding: 10,
  },
  button: {
    // height: 50,
    // // width:20,
    // paddingHorizontal: 30,
  },
});
