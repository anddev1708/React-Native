import React, { Component } from 'react';
import { Drawer,
     Container,
      Content, 
      Header,
       Footer,
       Text,
       Left, 
       Button,
       Icon,
       Body,
       Title,
       Right,
     } from 'native-base';
import SideBar from './SideBar';


export default class DrawerExample extends Component {


    static navigationOptions = {
        title: 'Menu test screen',
    };

    closeDrawer = () => {
        this.drawer._root.close()
      };
      openDrawer = () => {
        this.drawer._root.open()
      };

  render() {
    
    const { navigate } = this.props.navigation;

    return (
    
        <Drawer
            ref={(ref) => { this.drawer = ref; }}
            content={<SideBar  />}
            onClose={() => this.closeDrawer()} >

            <Container>
                    <Header>
                        <Left>
                            <Button transparent 
                            onPress={this.openDrawer.bind(this)}>
                            <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Header</Title>
                        </Body>
                    </Header>
                    <Content>
                    <Text>Ahihi day la noi dung chinh</Text>
                
                </Content>

            </Container>
        </Drawer>

        
    );
  }
}