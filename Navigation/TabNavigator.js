import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';

const Tab = createBottomTabNavigator();

const TabNavigator=()=>{
  return(
    <Tab.Navigator
    screenOptions = {({route})=>({
      tabBarIcon:({focused,color,size}) => {
        let iconName;
        if(route.name === 'Feeds'){
          iconName = focused ? 'book' : 'book-outline'
        } else if(route.name === 'Create Post'){
          iconName = focused ? 'create' : 'create-outline'
        }
        return <Ionicons name={iconName} size = {size} color = {color}/>
      
      }
    })}

    tabBarOptions = {{
      activeTintColor :'tomato',
      inactiveTintColor :'green'
    }}

    
    >
    <Tab.Screen name ='Feeds' component = {Feed} options ={{headerShown:false}}/>
    <Tab.Screen name ='Create Post' component = {CreatePost} options ={{headerShown:false}}/>
    </Tab.Navigator>
  )
}

export default TabNavigator;