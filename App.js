import { useState } from "react";
import { StyleSheet, View, FlatList, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import TodoInput from "./components/todoInput";
import TodoItem from "./components/todoItem";

export default function App() {
    const [todoList, setTodoList] = useState([]);
    const [IsInputVisible, setIsInputVisible] = useState(false);

    const handleSubmitTodo = (input) => {
        setTodoList([...todoList, { id: Math.random().toString(), text: input }]);
        setIsInputVisible(false);
    };

    const handleDeleteTodo = (id) => {
        setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));
    };

    const handleShowInput = () => {
        setIsInputVisible(true);
    };

    const handleCancelInput = () => {
        setIsInputVisible(false);
    };

    return (
        <>
            <StatusBar />
            <View style={styles.appContainer}>
                <Button title="Add new todo" color="salmon" onPress={handleShowInput} />
                {IsInputVisible && <TodoInput onTodoSubmit={handleSubmitTodo} visible={IsInputVisible} closeInput={handleCancelInput} />}
                <View style={styles.listContainer}>
                    <Text style={styles.listTitle}>Todo List</Text>
                    <FlatList
                        data={todoList}
                        keyExtractor={(item) => item.id}
                        renderItem={(todo) => {
                            return <TodoItem todo={todo} onItemDelete={handleDeleteTodo} />;
                        }}
                    ></FlatList>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 48,
        paddingHorizontal: 16,
    },
    listContainer: {
        flex: 5,
    },
    listTitle: {
        fontSize: 24,
        fontWeight: "800",
        color:"#fff"
    },
});
