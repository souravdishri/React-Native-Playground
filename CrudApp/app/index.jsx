import { Text, View, TextInput, Pressable, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { data } from "@/data/todo"
import { Inter_500Medium, useFonts } from "@expo-google-fonts/inter";
import Octicons from "@expo/vector-icons/Octicons";

export default function Index() {
  const [todos, setTodos] = useState(data.sort((a, b) => b.id - a.id))
  const [text, setText] = useState('')    //for input
  const { colorScheme, setColorScheme, theme } = useContext(ThemeContext)

  const [loaded, error] = useFonts({
    Inter_500Medium,
  }) 

  if (!loaded && !error) {
    return null
  }

  const styles = createStyles(theme, colorScheme)

  //Performing CRUD operations below

  //Create
  const addTodo = () => {
    if (text.trim()) {
      const newId = todos.length > 0 ? todos[0].id + 1 : 1;   //because we are sorting in descending order
      setTodos([{ id: newId, title: text, completed: false }, ...todos])
      setText('')
    }
  }

  // The toggleTodo function is used to update the 'completed' status of a to-do item
  //Update (here we are toggling here)
  const toggleTodo = (id) => {  //updating the 'completed' status of a todo item based on its id
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))

    // setTodos(todos.map((todo) => {
    //   //it creates a new object with the same properties as todo, but with completed set to the opposite value (true becomes false, and false becomes true).
    //   return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    // }));
    
  }
  //Delete
  //(The filter method is used to create a new array that only includes items that do not match the given id.)
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  //Read
  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text
        //to add more style properties,(if 'item.completed' is true, we add the 'styles.completedText' to the existing styles.todoText)
        style={[styles.todoText, item.completed && styles.completedText]}
        onPress={() => toggleTodo(item.id)}
      >
        {item.title}
      </Text>
      
      <Pressable onPress={() => removeTodo(item.id)}>
        <MaterialCommunityIcons name="delete-circle" size={35} color="#FF7F3E" selectable={undefined} />
      </Pressable>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new todo"
          placeholderTextColor="gray"
          value={text}
          onChangeText={setText}
        />
        <Pressable onPress={addTodo} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
        
        <Pressable
          onPress={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')} style={{ marginLeft: 10 }}>
          <Octicons name={colorScheme === 'dark' ? "moon" : "sun"} size={36} color={theme.text} selectable={undefined} style={{ width: 36 }} />
        </Pressable>

      </View>

      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={todo => todo.id}
        contentContainerStyle={{ flexGrow: 1 }}
      />

    </SafeAreaView>
  );
}

// The createStyles function is responsible for creating styles for the components in your To-Do app.
// It takes in theme and colorScheme as arguments and returns a StyleSheet object with styles that are tailored based on the current theme and color scheme.
// The styles object returned by createStyles is then used to style the components in the To-Do app.

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      padding: 10,
      width: '100%',
      maxWidth: 1024,
      marginHorizontal: 'auto',
      pointerEvents: 'auto',
    },
    input: {
      flex: 1,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      fontSize: 18,
      fontFamily: 'Inter_500Medium',
      minWidth: 0,
      color: theme.text,
    },
    addButton: {
      backgroundColor: theme.button,
      borderRadius: 5,
      padding: 10,
    },
    addButtonText: {
      fontSize: 18,
      color: colorScheme === 'dark' ? 'black' : 'white',
    },
    todoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 4,
      padding: 10,
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
      width: '100%',
      maxWidth: 1024,
      marginHorizontal: 'auto',
      pointerEvents: 'auto',
    },
    todoText: {
      flex: 1,
      fontSize: 18,
      fontFamily: 'Inter_500Medium',
      color: theme.text,
    },
    completedText: {
      textDecorationLine: 'line-through',
      color: 'gray',
    }
  })
}