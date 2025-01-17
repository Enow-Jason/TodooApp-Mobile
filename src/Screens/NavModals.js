import React, { useState, useContext } from "react";
import { View, Modal, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TodoListContext } from "../Context/TodoListContext";

const NavModals = ({ isMenuOpen, toggleMenu, isAddMoreButtonOpen, toggleAddMore }) => {
    const [todo, setTodo] = useState('');
    const { dispatch } = useContext(TodoListContext);
    const [dueDate, setDueDate] = useState('');

    const addTodo = () => {
        if (todo) {
            dispatch({
                type: 'ADD_TODO',
                task: todo,
                due: dueDate,
                priority: 'normal',
            });
            setTodo('');
            setDueDate('');
            toggleAddMore();
        }
    };

    const addMoreModal = () => (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isAddMoreButtonOpen}
            onRequestClose={() => {
                setIsAddMoreOpen(false);
            }}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Add More Tasks</Text>
                    <TextInput
                        placeholder="Enter Task"
                        value={todo}
                        onChangeText={setTodo}
                    />
                    <TextInput
                        placeholder="Enter Due Date(YYYY/MM/DD)"
                        value={dueDate}
                        onChangeText={setDueDate}
                    />
                    <TouchableOpacity
                        style={{ ...styles.openButton, backgroundColor: "green", marginBottom: 20 }}
                        onPress={addTodo}
                    >
                        <Text style={styles.textStyle}>Add Task</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={toggleAddMore}
                    >
                        <Text style={styles.textStyle}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
    const menuModal = () => (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isMenuOpen}
            onRequestClose={() => toggleMenu()}
        >
            <View style={styles.modalBackground}>
                <View style={styles.menuContainer}>
                    <Text style={styles.menuHeader}>Menu</Text>
                    <TouchableOpacity><Text style={styles.menuOptions}>Home</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.menuOptions}>Add New Task</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.menuOptions}>Search</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.menuOptions}>Categories</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.menuOptions}>Completed Tasks</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.menuOptions}>Settings</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.menuOptions}>Refer a friend</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.menuCloseButton} onPress={toggleMenu}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );

    return (
        <>
            {addMoreModal()}
            {menuModal()}

        </>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 15,
        textAlign: "center"
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    menuContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,

        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        padding: 20,
    },
    menuHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    menuOptions: {
        fontSize: 15,
        marginBottom: 20,
        alignItems: "flex-start"
    },
    menuCloseButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f44336',
        borderRadius: 5,
        alignSelf: 'flex-start'
    },
    menuCloseButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});


export default NavModals;
