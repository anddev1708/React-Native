import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    TouchableHighlight,
    ActivityIndicator,
    AsyncStorage,
    AlertIOS,
    Text,
    View, 
    Button
} from 'react-native';

import { Input, Icon, InputGroup} from 'native-base';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
          isLoggenIn: "",
          showProgress: false,
          accessToken: "",
          userName : "",
          passsWord: "",
        }

        // Bind button click
        
    }

    static navigationOptions = {
        title: 'Login Screen',
    };


    render() {

        let flashMessage;
        if (this.props.flash) {
           flashMessage = <Text style={styles.flash}>{this.props.flash}</Text>
        } else {
           flashMessage = null
        }

        const { navigate } = this.props.navigation;

        return(
            <View style={styles.container}>
                {flashMessage}
                <Text style={styles.title}> Welcome User </Text>
                <Text style={styles.text}> Your new token is {this.state.accessToken} </Text>

                
                    <InputGroup>
                        <Icon name="person" />
                        <Input placeholder="EMAIL"
                        onChangeText={(text) => this.setState({userName: text})} value={this.state.userName}
                        />
                    </InputGroup>

                    <InputGroup>
                        <Icon name="unlock" />
                        <Input placeholder="PASSWORD" 
                        onChangeText={(text) => this.setState({passsWord: text})} value={this.state.passsWord}
                        secureTextEntry={true}/>
                    </InputGroup>

                <TouchableHighlight onPress={this.login.bind(this, 'Main', this.state.userName , this.state.passsWord)} style={styles.button}>
                <Text style={styles.buttonText}>
                    Đăng nhập
                </Text>
                </TouchableHighlight>

                <ActivityIndicator animating={this.state.showProgress} size="large" style={styles.loader} />

            </View>
        );
    }

      login(routeName, name, age){

        console.log('userName = '+name+" Password = "+age);

        this.props.navigation.navigate(routeName, {
            username : name,
            password : age,
        });
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      padding: 10,
    },
    title: {
      fontSize: 25,
      marginTop: 15,
      marginBottom: 15
    },
    text: {
      marginBottom: 30
    },
    button: {
      height: 50,
      backgroundColor: 'red',
      alignSelf: 'stretch',
      marginTop: 10,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: 22,
      color: '#FFF',
      alignSelf: 'center'
    },
    flash: {
      height: 40,
      backgroundColor: '#00ff00',
      padding: 10,
      alignSelf: 'center',
    },
    loader: {
      marginTop: 20
    }
  });
  
export default Login;