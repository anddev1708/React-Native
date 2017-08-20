import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation'
import Icon from "react-native-vector-icons/FontAwesome";
import DetailScreen from './detail';
import MainScreen from './main';

const stackNav = StackNavigator({
    Main: {
        screen: MainScreen,
        navigationOptions:({navigation, screenProps}) => ({
            title: "Main screen",
            headerLeft:(
              <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <Icon name="bars" size={30} color="#000000" />
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: (props) => ({
            title: "Detail",
        })
    }
})

export default stackNav;