import { createStackNavigator } from 'react-navigation'

//import Login from './Interfaces/Login'
import Home from './Interfaces/Home'
import Login from './Interfaces/Login'
import Register from './Interfaces/Register'

import Medico from './Interfaces/Medico'
import Paciente from './Interfaces/Paciente'
import Adm from './Interfaces/Adm'
import Consulta from './Interfaces/Consulta'
import Agenda from './Interfaces/Agenda'

export default createStackNavigator({
   
    Home,
    Login,
    Register,
    Medico,
    Paciente,
    Agenda,
    Adm,
    
    Consulta,



},
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f8f220'
            },
            headerTintColor: '#22df22'

        }
    }
)