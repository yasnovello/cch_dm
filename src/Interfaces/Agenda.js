import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Picker,Alert } from 'react-native'


export default class Home extends React.Component {
    static navigationOptions = {
        header: null
    }
    // constructor(props) {
    //     super(props)
    //     this.state = {

    //     }
    // }

    // componentDidMount() {
    //     this.language(this.props.state)
    // }

    // troca = ()=>{
    //     this.setState({ isPress: true})
    // }
    consultaPress(itemValue) {
        try {
            Alert.alert('Consulta agendada com sucesso')
            this.props.navigation.navigate('Paciente')

        } catch (error) {
            console.log(error.toString());
            Alert.alert('Erro no agendamento')


        }

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.container}>
                        <View style={styles.imagemBox}>
                            <Image source={require('../Imagens/usuario.jpg')}
                                style={styles.imagem}
                            ></Image>
                        </View>
                        <View style={styles.definicao}>
                            <Text style={styles.textNome}>Dr. Genezio</Text>
                            <Text style={styles.textEsp}>Clínico Geral</Text>
                        </View>
                        <View style={styles.viewButton}>

                            <Picker
                                style={{ height: 50, width: 300 }}
                                onValueChange={(itemValue) =>
                                    this.setState({ language: itemValue })
                                }>
                                <Picker.Item label="23/07/2019 - 09:00" value="consulta1" />
                                <Picker.Item label="23/07/2019 - 11:00" value="consulta2" />
                                <Picker.Item label="23/07/2019 - 14:00" value="consulta3" />
                                <Picker.Item label="23/07/2019 - 16:00" value="consulta4" />
                                <Picker.Item label="27/07/2019 - 09:00" value="consulta5" />
                                <Picker.Item label="27/07/2019 - 11:00" value="consulta6" />
                                <Picker.Item label="27/07/2019 - 14:00" value="consulta7" />
                                <Picker.Item label="27/07/2019 - 16:00" value="consulta8" />
                                <Picker.Item label="06/08/2019 - 09:00" value="consulta9" />
                                <Picker.Item label="06/08/2019 - 11:00" value="consulta10" />
                                <Picker.Item label="06/08/2019 - 14:00" value="consulta11" />
                                <Picker.Item label="06/08/2019 - 16:00" value="consulta12" />
                                <Picker.Item label="11/08/2019 - 09:00" value="consulta13" />
                                <Picker.Item label="11/08/2019 - 11:00" value="consulta14" />
                                <Picker.Item label="11/08/2019 - 14:00" value="consulta15" />
                                <Picker.Item label="11/08/2019 - 16:00" value="consulta16" />
                            </Picker>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.consultaPress()}
                            >
                                <Text style={styles.btnText}>Agendar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.imagemBox}>
                        <Image source={require('../Imagens/usuario.jpg')}
                            style={styles.imagem}
                        ></Image>
                    </View>
                    <View style={styles.definicao}>
                        <Text style={styles.textNome}>Dr. Ademir</Text>
                        <Text style={styles.textEsp}>Cardiologista</Text>
                    </View>
                    <View style={styles.viewButton}>

                        <Picker
                            style={{ height: 50, width: 300 }}
                            onValueChange={(itemValue) =>
                                this.setState({ language: itemValue })
                            }>
                            <Picker.Item label="23/07/2019 - 09:00" value="consulta1" />
                            <Picker.Item label="23/07/2019 - 11:00" value="consulta2" />
                            <Picker.Item label="23/07/2019 - 14:00" value="consulta3" />
                            <Picker.Item label="23/07/2019 - 16:00" value="consulta4" />
                            <Picker.Item label="27/07/2019 - 09:00" value="consulta5" />
                            <Picker.Item label="27/07/2019 - 11:00" value="consulta6" />
                            <Picker.Item label="27/07/2019 - 14:00" value="consulta7" />
                            <Picker.Item label="27/07/2019 - 16:00" value="consulta8" />
                            <Picker.Item label="06/08/2019 - 09:00" value="consulta9" />
                            <Picker.Item label="06/08/2019 - 11:00" value="consulta10" />
                            <Picker.Item label="06/08/2019 - 14:00" value="consulta11" />
                            <Picker.Item label="06/08/2019 - 16:00" value="consulta12" />
                            <Picker.Item label="11/08/2019 - 09:00" value="consulta13" />
                            <Picker.Item label="11/08/2019 - 11:00" value="consulta14" />
                            <Picker.Item label="11/08/2019 - 14:00" value="consulta15" />
                            <Picker.Item label="11/08/2019 - 16:00" value="consulta16" />
                        </Picker>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.consultaPress()}
                        >
                            <Text style={styles.btnText}>Agendar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    },
    imagemBox: {
        flex: 2,
        marginHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'center'

    },
    imagem: {
        width: 100,
        height: 100,
        borderRadius: 400 / 2
    },
    definicao: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'

    },
    textNome: {
        color: 'black',
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    textEsp: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center'

    },
    viewButton: {
        flex: 3,
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
        marginBottom: 300,
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
