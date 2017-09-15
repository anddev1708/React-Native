import React, { Component } from 'react';
import {
    Container
    , Header
    , Content
    , InputGroup
    , Input
    , Button
    , Text
    ,View
} from 'native-base';
import {StyleSheet} from 'react-native'
import {connect} from 'react-redux';
/* Import to use reducer */
import CalReducer from '../../redux/Calculate';


var Style = StyleSheet.create({
    button: {
        width: 50,
        fontSize: 20,
        alignSelf: 'center',
        marginHorizontal: 10
    },
    text : {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center'
    },
    view: {
        flexDirection: 'row',
        alignSelf: 'center',
    }
});

class CalculateForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            number : 0,
        };
    }

    addValue(){
        console.log('Add value');
    }

    subValue(){
        console.log('Sub value');
    }

    render(){
        return(
            <Container>
                <Header />
                <Content>
                    <Text style={Style.text}>Example Calculate</Text>
                    <Text style={Style.text}>{this.state.number}</Text>
                <View style={Style.view}>
                    <Button 
                        onPress={() => {this.addValue()}}
                        style={Style.button}>
                        <Text>+</Text>
                    </Button>
                    <Button 
                    onPress={() => {this.subValue()}}
                        style={Style.button}>
                        <Text>-</Text>
                    </Button>
                </View>

                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    const tracks = {
        add: state.addValue,
        sub : state.subValue,
    };
    return {tracks}
}
  
export default connect(mapStateToProps)(CalculateForm);