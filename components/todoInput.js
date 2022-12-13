import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const TodoInput = ({ onTodoSubmit } = props) => {
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e);
    };

    const handleSubmit = () => {
        onTodoSubmit(input);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Please enter..." style={styles.textInput} onChangeText={handleInput} value={input} />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
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
});

export default TodoInput;
