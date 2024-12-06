import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

const App = () => {
    const tasks = [
        { id: '1', task: 'Do the mathematics homework', due: '2024-12-10' },
        { id: '2', task: 'Clean the house', due: '2024-12-12' },
        { id: '3', task: 'Empty the Trash', due: '2024-12-15' },
    ];

    const renderTask = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.taskText}>{item.task}</Text>
            <Text style={styles.dueText}>{item.due}</Text>
            <TouchableOpacity style={styles.markDoneButton}>
                <Text style={styles.markDoneText}>Done</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Task</Text>
                    <Text style={styles.headerText}>Due</Text>
                    <Text style={styles.headerText}>Mark Done</Text>
                </View>
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id}
                    renderItem={renderTask}
                    contentContainerStyle={styles.list}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', // Content starts at the top
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginTop: 50, // Space from the top, adjust as needed
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 30, // Adjust to add space below the top bar
        marginBottom: 10, // Adds space between header and card
    },
    dueSoonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    helloText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    card: {
        width: 300,
        height: 400,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 100,
        elevation: 20,
        padding: 15,
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
        fontSize: 16,
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
        marginBottom: 30
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
        flex: 1,
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

export default App;
