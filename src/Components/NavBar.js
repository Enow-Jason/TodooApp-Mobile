import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Platform, StatusBar } from "react-native";

const NavBar = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent={false}
                backgroundColor="#f9f9f9"
                barStyle="dark-content"
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

        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
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
