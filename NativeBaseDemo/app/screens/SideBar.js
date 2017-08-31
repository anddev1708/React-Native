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
    render() {
        return (
          <Container style={{
            backgroundColor: 'white'
          }}>
            <Content>
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