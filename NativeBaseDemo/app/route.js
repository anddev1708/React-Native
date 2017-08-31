import { StackNavigator } from 'react-navigation';
import Login from './screens/login';
import Main from './screens/main';
import MenuExample from './screens/DrawerExample';

const SimpleApp = StackNavigator({
    Menu: { screen: MenuExample},
    Login: { screen: Login },
    Main: { screen: Main },
  },{
    initialRouteName : 'Main',
    headerMode: 'none',
  });

export default SimpleApp;