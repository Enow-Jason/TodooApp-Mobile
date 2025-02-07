import React from "react";
import {Text, View, StyleSheet} from "react-native"
import NavBar from "../Components/NavBar";
import ViewTodos from "../Components/ViewTodos";
import TodoListContextProvider from "../Context/TodoListContext";



const OverviewScreen = ({navigation}) => {
    return(
        <TodoListContextProvider>
            <View>
                <View>
                    <NavBar navigation={navigation}/>
                </View>
                <View style={styles.textStyle}>
                    <ViewTodos/>
                </View>
            </View>
        </TodoListContextProvider>



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
