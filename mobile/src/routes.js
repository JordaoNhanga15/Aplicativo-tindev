import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Login from './login'
import Main from './Main'

export default createAppContainer(
    createStackNavigator({
        Login,
        Main
    })
)