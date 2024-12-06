import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Platform, StatusBar } from "react-native";

const NavBar = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent={false} // Do not allow the background to extend into the status bar
                backgroundColor="#f9f9f9" // Matches navigation bar background color
                barStyle="dark-content" // Dark icons/text
            />
            <View style={styles.navbar}>
                <View style={styles.buttonLeft}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Menu</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>Todoo</Text>
                <View style={styles.buttonRight}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Add More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black', // Matches navbar and app's main background
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        height: 80,
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1, // Reduce shadow intensity for a cleaner look
        shadowRadius: 3,
        elevation: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        flex: 1, // Centers the title while allowing left/right buttons
    },
    buttonLeft: {
        justifyContent: 'center',
    },
    buttonRight: {
        justifyContent: 'center',
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'grey',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },
});

export default NavBar;
