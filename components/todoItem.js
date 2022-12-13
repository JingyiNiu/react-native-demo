import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const TodoItem = ({ todo, onItemDelete } = props) => {
    
    return (
        <Pressable onPress={()=>onItemDelete(todo.item.id)}>
            <View style={styles.listItem}>
                <Text style={styles.listText}>{todo.item.text}</Text>
            </View>
        </Pressable>
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
