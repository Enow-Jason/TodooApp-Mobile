import React, {useState, useContext} from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    StatusBar,
    Modal,
    TextInput
} from "react-native";
import {TodoListContext} from "../Context/TodoListContext";

const NavBar = () => {
    const [todo, setTodo] = useState('')
    const { dispatch } = useContext(TodoListContext);
    const [dueDate, setDueDate] = useState('')
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAddMoreButtonOpen, setIsAddMoreOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const toggleAddMore = () => {
        setIsAddMoreOpen((prev) => !prev); // Toggle the state
    };

    const addTodo = () => {
        if (todo) {
            dispatch({
                type: 'ADD_TODO',
                task: todo,
                due: dueDate, // Assuming due date is formatted correctly
                priority: 'normal', // Default priority, adjust as needed
            });
            setTodo('');
            setDueDate('');
            toggleAddMore(); // Close the modal after adding
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent={false}
                backgroundColor="#f9f9f9"
                barStyle="dark-content"
            />
            <View style={styles.navbar}>
                <TouchableOpacity style={styles.hamburgerMenu} onPress={toggleMenu}>
                    <View style={[styles.bar, styles.barTop]} />
                    <View style={[styles.bar, styles.barMiddle]} />
                    <View style={[styles.bar, styles.barBottom]} />
                </TouchableOpacity>
                <Text style={styles.title}>Todoo</Text>
                <TouchableOpacity
                    style={styles.addMoreMenu}
                    onPress={toggleAddMore}
                >
                    <View style={styles.plusSign}>
                        <View style={[styles.line, styles.horizontalLine]}/>
                        <View style={[styles.line, styles.verticalLine]}/>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Modal for the Add More functionality */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={isAddMoreButtonOpen}
                onRequestClose={() => {
                    setIsAddMoreOpen(false);
                }}
            >
                <View style={styles.centeredView}>
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'black',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        height: 80,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    addMoreMenu: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 3.84,
        elevation: 1, // for Android
    },
    plusSign: {
        justifyContent: 'center',
        alignItems: "center",
        width: 30,
        height: 30,
    },
    line: {
        position: "absolute",
        backgroundColor: "black",
        width: 2,
        height: 20,
        borderRadius: 2,
    },
    horizontalLine: {
        transform: [{ rotate: '0deg' }]
    },
    verticalLine: {
        transform: [{ rotate: '90deg' }]
    },
    hamburgerMenu: {
        justifyContent: 'center',
        width: 30,
        height: 30,
    },
    bar: {
        position: 'absolute',
        width: '100%',
        height: 2,
        backgroundColor: 'black',
        borderRadius: 2,
        transition: 'all 0.3s ease',
    },
    barTop: {
        top: 4,
    },
    barMiddle: {
        top: 12,
    },
    barBottom: {
        top: 20,
    },
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
    }
});

export default NavBar;
