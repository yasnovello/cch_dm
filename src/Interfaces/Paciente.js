import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';



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
                <View style={styles.imagemBox}>
                    <Image source={require('../Imagens/usuario.jpg')}
                        style={styles.imagem}
                    ></Image>
                    <Text style={{ color: 'black', fontSize: 15, paddingLeft: 12 }} >Maria Aparecida Dos Santos</Text>
                </View>
                {/* <View style={styles.definicao}>
                    <Text style={styles.textNome}>Dr. Genézio</Text>
                    <Text style={styles.textEsp}>Clínico Geral</Text>
                </View> */}
                <View>
                    <Text style={{ color: 'black', fontSize: 50, fontWeight: 'bold' }}>Consultas:</Text>
                    <Text style={{ color: 'black', fontSize: 25 }}>Data: 23/07/2019 - Hora: 11:00 - Dr. Genézio</Text>
                    <Text style={{ color: 'black', fontSize: 25 }}>Data: 27/07/2019 - Hora: 11:00 - Dr. Ademar</Text>

                </View>

                <View style={styles.viewButton}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Agenda')}
                    >
                        <Text style={styles.btnText}>Agendar Consulta</Text>
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
    imagemBox: {
        flex: 2,
        marginTop: 50,
        marginHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    imagem: {
        paddingTop: 50,
        paddingRight: 60,
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        width: 150,
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
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 15,
    }
});
