import React from "react";
import {Text, View, StyleSheet} from "react-native"
import NavBar from "../Components/NavBar";
import ViewTodos from "../Components/ViewTodos";


const OverviewScreen = () => {
    return(
        <View>
            <View>
                <NavBar/>
            </View>
            <View style={styles.textStyle}>
                <ViewTodos/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 100
    },
    helpingStyle: {
        backgroundColor: 'white',
        color: 'white'
    }
});

export default OverviewScreen;
