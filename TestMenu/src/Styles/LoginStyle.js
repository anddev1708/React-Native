import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C2833',
        alignItems: 'center',
        flexDirection:'column',
        justifyContent: 'center', 
    },
    top:{
        flex:1,
        justifyContent: 'center', 
    },
    bottom:{
        flex:1,
    },
    textheader:{
        color:'white',
        fontSize: 50
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;