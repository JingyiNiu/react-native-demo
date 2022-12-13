import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TodoItem = ({ todo } = props) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.listText}>{todo.item.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
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

export default TodoItem;
