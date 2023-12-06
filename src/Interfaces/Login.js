import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native'
import firebase from './firebase'


const { width: WIDTH } = Dimensions.get('window')

export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }
    }
    loginPress = (username, password) => {
        try {

            firebase.auth().signInWithEmailAndPassword(username, password)
                .then((username) => { console.log(username); })
            if (username == 'admin' && password == 'admin') {
                this.props.navigation.navigate('Adm')
            }else{
            this.props.navigation.navigate('Paciente')}


        } catch (error) {
            console.log(error.toString())
            Alert.alert('Email ou senha errados')


        }

    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewInput}>
                    <TextInput style={styles.input}
                        placeholder='Email'
                        placeholderTextColor='black'
                        textContentType='emailAddress'
                        onChangeText={(username) => { this.setState({ username: username }) }}
                    ></TextInput>
                    <TextInput style={styles.input}
                        placeholder='Password'
                        placeholderTextColor='black'
                        secureTextEntry={true}
                        onChangeText={(password) => { this.setState({ password: password }) }}
                    ></TextInput>
                </View>
                <View style={styles.viewButton}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Register')}
                    >
                        <Text style={styles.btnText}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.loginPress(this.state.username, this.state.password)}
                    >
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>


                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d7a7d',
        
    },
    viewInput: {
        flex: 2,
        justifyContent: 'center',
        marginTop: 200,
    },
    viewButton: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:200
    },
    input: {
        width: WIDTH - 66,
        height: 45,
        borderRadius: 25,
        paddingLeft: 45,
        marginVertical: 5,
        backgroundColor: 'transparent',
        borderColor: 'black',
        borderWidth: 2,
        color: '#55c6c9',
        fontSize: 14,
        fontWeight: 'bold'

    },
    button: {
        width: 120,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 36,
        margin: 12,
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
})