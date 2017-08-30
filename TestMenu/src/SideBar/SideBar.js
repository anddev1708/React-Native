import React from "react";
import { AppRegistry,
   Image,
  StatusBar,
  TouchableOpacity,
 } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  View,
} from "native-base";
const routes = ["Home", "Chat", "Profile", "Logout"];
export default class SideBar extends React.Component {

  xxx()  {
    alert('Ahihi');
  }

  render() {
    return (
      <Container>
        <Content>
        <View>
                
        <Image
            source={require('../Images/drawer-cover.png')}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 0
            }} />

          <TouchableOpacity 
          style={{ 
              zIndex: 1,
              position: 'absolute',
              right: 0,
              margin: 10,
              }}
          onPress={this.xxx.bind(this)}>
            <Image
              square
              style={{
                height: 80, 
              width: 70 , 
              }}
              source={require('../Images/logo.png')}
            />
            </TouchableOpacity>
          </View>
          
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                  renderRow={{}}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
