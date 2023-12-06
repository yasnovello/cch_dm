import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'


export default class Home extends React.Component {
    static navigationOptions = {
        header: null
    }
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         isPress: false
    //     }
    // }

    // componentDidMount() {
    //     this.setState(this.props.state)
    // }

    // troca = ()=>{
    //     this.setState({ isPress: true})
    // }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imagem}>
                    <Image source={require('../Imagens/logo.png')}
                    //style={styles.imagem}
                    >
                    </Image></View>
                <View style={styles.viewButton}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Register')}
                    >
                        <Text style={styles.btnText}>Register</Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem: {
        flex: 2,
        // width: 300,
        // height: 300,
        marginTop: 200,
        marginHorizontal: 100,
    },
    viewButton: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        width: 120,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 36,
        margin: 12,
        marginBottom:300,
        borderRadius: 25,
        backgroundColor: '#55c6c9',
        borderColor: 'black',
        borderWidth: 2,

    },
    btnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
