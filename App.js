import { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import TodoInput from "./components/todoInput";
import TodoItem from "./components/todoItem";

export default function App() {
    const [todoList, setTodoList] = useState([]);

    const handleSubmit = (input) => {
        setTodoList([...todoList, { id: Math.random().toString(), text: input }]);
        // setInput("");
    };

    return (
        <View style={styles.appContainer}>
            <TodoInput onTodoSubmit={handleSubmit} />
            <View style={styles.listContainer}>
                <Text style={styles.listTitle}>Todo List</Text>
                <FlatList
                    data={todoList}
                    keyExtractor={(item, index) => item.id}
                    renderItem={(todo) => {
                        return <TodoItem todo={todo} />;
                    }}
                ></FlatList>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingHorizontal: 16,
        paddingTop: 48,
        flex: 1,
    },
    listContainer: {
        flex: 5,
    },
});
