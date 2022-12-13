import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const TodoInput = ({ onTodoSubmit, visible, closeInput } = props) => {
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e);
    };

    const handleSubmit = () => {
        onTodoSubmit(input);
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Please enter..." style={styles.textInput} onChangeText={handleInput} value={input} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Submit" onPress={handleSubmit} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={closeInput} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};
 
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 8,
        padding:16, 
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width:"100%",
        padding: 8,
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
});

export default TodoInput;
