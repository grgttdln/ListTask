import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";

 
const Task = (props) => {
    return (
        <View style={[styles.taskItem]}>

            <View style={styles.item} >
                <View style={styles.square}></View>
                <Text style={styles.textContent}>{props.Text}</Text>   
            </View>

            <View style={styles.circle} ></View>
        </View>
    ); 
}

const styles = StyleSheet.create({
    taskItem: {
        padding: 18,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderColor: '#e1d8f7',
        borderWidth: 1
    },

    box: {
        ...Platform.select({
            ios: {
                shadowColor: '#171717',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 1,
                shadowRadius: 6,
            },
            android: {
                elevation: 6,
            },
        }),
    },

    item: {
        alignItems: 'center',
        flexWrap: "wrap",
        flexDirection: "row"
    },

    square: {
        width: 24,
        height: 24,
        backgroundColor: "#957fef",
        opacity: 0.3,
        borderRadius: 5,
        marginRight: 15
    },

    textContent: {
        maxWidth: '80%'
    },

    circle: {
        width: 12,
        height: 12,
        borderColor: "#7161ef",
        borderRadius: 5,
        borderWidth: 2
    },
});

export default Task; 
