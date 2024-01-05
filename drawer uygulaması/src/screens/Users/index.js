import { View, Text, Button, FlatList } from "react-native";
import React from "react";
import Item from "./item"

const data = [
    {
        id: 1,
        name: "hasan",
    },
    {
        id: 2,
        name: "osman",
    },
    {
        id: 3,
        name: "Fatma",
    },
]

const UsersScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Item item={item} />}
            />
        </View>
    );
};

export default UsersScreen;