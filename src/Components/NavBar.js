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
import NavModals from "../Screens/NavModals";

const NavBar = ({navigation}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAddMoreButtonOpen, setIsAddMoreOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const toggleAddMore = () => {
        setIsAddMoreOpen((prev) => !prev); // Toggle the state
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
            <NavModals
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
                isAddMoreButtonOpen={isAddMoreButtonOpen}
                toggleAddMore={toggleAddMore}
                navigation={navigation}
            />
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
    }
});

export default NavBar;
