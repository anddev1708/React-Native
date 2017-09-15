import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/Reducer';
import {Container, Header, Content, InputGroup, Input, Button, Text} from 'native-base';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let {email, password} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
    return (

        <Container>
            <InputGroup>
                <Input 
                    value={this.state.email}
                    placeholder='Email' 
                    onChangeText={(text) => {
                        this.setState({
                            email: text,
                        });
                    }}
                    />
            </InputGroup>

            <InputGroup>
            <Input 
                    value={this.state.password}
                    placeholder='Password' 
                    onChangeText={(text) => {
                        this.setState({
                            password: text,
                        });
                    }}
                    />
            </InputGroup>

                <Button
                    onPress={() => {
                        console.log('Bat dau dang nhap');
                        this.onSubmit();
                    }}
                >
                    <Text>Login</Text>
                </Button>
        </Container>
    )
  }

  onSubmit() {
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);