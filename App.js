import { useState } from "react";
import { StyleSheet, View, ScrollView, FlatList, Text, TextInput, Button } from "react-native";

export default function App() {
    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleInput = (e) => {
        setInput(e);
    };

    const handleSubmit = () => {
        setTodoList([...todoList, {id:Math.random().toString(),text:input}]);
        // setInput("");
    };

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Please enter..." style={styles.textInput} onChangeText={handleInput} value={input} />
                <Button title="Submit" onPress={handleSubmit} />
            </View>
            <View style={styles.listContainer}>
                <Text style={styles.listTitle}>Todo List</Text>
                <FlatList
                    data={todoList}
                    keyExtractor={(item,index)=>item.id}
                    renderItem={(todo) => {
                        return (
                            <View style={styles.listItem}>
                                <Text style={styles.listText}>{todo.item.text}</Text>
                            </View>
                        );
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
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 8,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        flex: 1,
        marginRight: 8,
        padding: 8,
    },
    listContainer: {
        flex: 5,
    },
    listTitle: {
        fontSize: 24,
        fontWeight: "800",
    },
    listItem: {
        margin: 8,
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderRadius: 4,
        backgroundColor: "orange",
    },
    listText: {
        color: "#fff",
    },
});
