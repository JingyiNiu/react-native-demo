import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const TodoItem = ({ todo, onItemDelete } = props) => {
    return (
        <View style={styles.listItem}>
            <Pressable android_ripple={{ color: "#ccc" }} style={({ pressed }) => pressed && styles.onPressStyle} onPress={() => onItemDelete(todo.item.id)}>
                <Text style={styles.listText}>{todo.item.text}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        margin: 8,
        borderRadius: 4,
        backgroundColor: "orange",
    },
    listText: {
        paddingHorizontal: 8,
        paddingVertical: 16,
        color: "#fff",
    },
    onPressStyle: {
        backgroundColor: "salmon",
        borderRadius: 4,
    },
});

export default TodoItem;
