import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

const App = () => {
    const tasks = [
        { id: '1', task: 'Task 1', due: '2024-12-10' },
        { id: '2', task: 'Task 2', due: '2024-12-12' },
        { id: '3', task: 'Task 3', due: '2024-12-15' },
        { id: '4', task: 'Task 4', due: '2024-12-15' },
        { id: '5', task: 'Task 5', due: '2024-12-15' },
        { id: '6', task: 'Task 6', due: '2024-12-15' },
        { id: '7', task: 'Task 7', due: '2024-12-15' }
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
        <View>
            {/* Header with "Due Soon" and "Filter" */}
            <View style={styles.headerContainer}>
                <Text style={styles.dueSoonText}>Due Soon</Text>
                <Text style={styles.filterText}>Filter</Text>
            </View>

            {/* Card with tasks */}
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
        marginTop: 50,
        marginBottom: 20,
        width: '100%',
    },
    dueSoonText: {
        fontSize: 18,
        color: 'Grey',
        textAlign: 'left',
        paddingVertical: 10,
    },
    filterText: {
        fontSize: 18,
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


export default App;
