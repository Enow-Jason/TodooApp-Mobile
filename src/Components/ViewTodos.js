import React, {useContext, useState} from 'react';

import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import {TodoListContext} from "../Context/TodoListContext";

const TodoList = () => {
    const {todos, dispatch } = useContext(TodoListContext);


    const renderTask = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.taskText}>{item.task}</Text>
            <Text style={styles.dueText}>{item.due}</Text>
            <TouchableOpacity
                onPress={() => dispatch({ type: 'MARK_DONE', payload: item.id })}
                style={styles.markDoneButton}
                accessible={true}
                accessibilityLabel="Mark task as done">
                <Text style={styles.markDoneText}>Done</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            {/* Header with "Due Soon" and "Filter" */}
            <View style={styles.headerContainer}>
                <Text style={styles.dueSoonText}>Due Soon</Text>
                <Text style={styles.filterText}>Filter By Category:</Text>
            </View>
            {/* Card with tasks */}
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Task</Text>
                        <Text style={styles.headerText}>Due</Text>
                        <Text style={styles.headerText}>Mark Done</Text>
                    </View>
                    {todos.length > 0 ? (
                        <FlatList
                            data={todos}
                            keyExtractor={(item) => item.id}
                            renderItem={renderTask}
                            contentContainerStyle={styles.list}
                        />
                    ):(
                        <View>
                            <Text>No tasks to display</Text>
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 5,
        marginBottom: 20,
        width: '100%',
    },
    dueSoonText: {
        fontSize: 17,
        color: 'Grey',
        fontWeight: "bold",
        textAlign: 'left',
        paddingVertical: 10,
    },
    filterText: {
        fontSize: 17,
        color: 'Grey',
        textAlign: 'right',
        paddingVertical: 10,
    },
    card: {
        width: 300,
        height: 400,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 100,
        borderRadius: 20,
        elevation: 20,
        padding: 15,
        marginBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingBottom: 10,
        marginBottom: 30,
    },
    headerText: {
        fontSize: 15,
        flex: 1,
        textAlign: 'center',
    },
    list: {
        paddingBottom: 10,

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.2,
        borderBottomColor: 'grey',
        paddingBottom: 30,
        marginBottom: 30,
    },
    taskText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 14,
        color: 'dark grey',
    },
    dueText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 14,
        color: 'dark grey',
    },
    markDoneButton: {
        flex: 0.9,
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        paddingVertical: 3,
        borderRadius: 10,

    },
    markDoneText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
});


export default TodoList;
