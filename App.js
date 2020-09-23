import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Home from './Component/Home';
import Main from './Component/Main';
import Saved from './Component/Saved';
import Trips from './Component/Trips';
import Inbox from './Component/Inbox';
import Profile from './Component/Profile';
import Delhi from './Component/Delhi';
import ViewProfile from './Component/ViewProfile';
import Splash from './Component/Splash';
import Explore from './Component/Explore';
import Host from './Component/Host';
import Hosting from './Component/Hosting';
import Online from './Component/Online';
import Visit from './Component/Visit'
import Contact from './Component/Contact';
import Updates from './Component/Updates';



const TripsStack = createStackNavigator ({

  Trips : {
     screen: Trips,
      navigationOptions: {
      headerShown: false,
    },
  },
 

  Visit : {

    screen:  Visit,
    
  },

  Contact : {
    screen : Contact,
  },
 

});







const ProfileStack = createStackNavigator ({

  Profile : {
     screen: Profile,
      navigationOptions: {
      headerShown: false,
    },
  },
 

  ViewProfile : {

    screen:  ViewProfile,
    
  },
  Host : {
    screen : Host,
    
  },
  Hosting : {
    screen : Hosting,
  },

});






const Pro = createStackNavigator({
 

Home : {
  screen: Home,
  navigationOptions: {
          headerShown: false,
          // style: {
          //   elevation: 0,
           
          // },
      },
},
Explore : {

  screen : Explore,

},
Online : {
 screen : Online,
},

Main:{

 screen:Main,
},

Delhi : {
  screen : Delhi,
},
Updates : {
  screen : Updates,
},

  
  
});

// You Can hide the tab bar
// Commented code used for avoid the tab bar to the multiple screen.

// Pro.navigationOptions = ({ navigation }) => {
//   let tabBarVisible;
//   if (navigation.state.routes.length > 1) {
//     navigation.state.routes.map(route => {
//       if (route.routeName === "Explore") {
//         tabBarVisible = false;
        
//       } 
//       else if(route.routeName === "Online")
      
//     {
 
//       tabBarVisible = false;
 
//     }

//     else if(route.routeName === "Main")
      
//     {
 
//       tabBarVisible = false;
 
//     }

//     else if(route.routeName === "Delhi")
      
//     {
 
//       tabBarVisible = false;
 
//     }
      
      
      
//       else {
//         tabBarVisible = true;
//       }
//     });
//   }

//   return {
//     tabBarVisible
//   };
// };






export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
          5000
      )
    );
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }




  render() {
    if (this.state.isLoading) {
      return <Splash /> ;
      } 
    return (
      <View style={{flex:1}}>
        
        <MyApp />

      </View>
    );
  }
}








const TabNav = createBottomTabNavigator(
  {
     Home:{
         screen:Pro,
        // screen : HomeStack,
         navigationOptions:{
         tabBarLabel:'Home',
         activeColor:'red',
         inactiveColor:'gray',
         barStyle:{backgroundColor: 'black',elevation: 0,},
         tabBarIcon:()=>(
          
          
             <Entypo name="home" size={25} color="gray" />
            
          
         ),
       }
     },
     Saved:{

      screen:Saved,
      navigationOptions:{
      tabBarLabel:'Saved',
      activeColor:'#ff0000',
      inactiveColor:'#000000',
      barStyle:{backgroundColor: '#01CBC6',elevation: 0,},
      tabBarIcon:()=>(
       
          <Entypo name="heart-outlined" size={25} color="gray" />
         
       
      ),
    }
  },
     Trips:{

        screen:TripsStack,
        navigationOptions:{
        tabBarLabel:'Trips',
        activeColor:'#ff0000',
        inactiveColor:'#000000',
        barStyle:{backgroundColor: '#01CBC6',elevation: 0,},
        tabBarIcon:()=>(
          <Entypo name="tripadvisor" size={25} color="gray" />
        )
      }
     },

     Inbox:{

      screen:Inbox,
      navigationOptions:{
      tabBarLabel:'Inbox',
      activeColor:'#ff0000',
      inactiveColor:'#000000',
      barStyle:{backgroundColor: '#01CBC6',elevation: 0,},
      tabBarIcon:()=>(
        <Entypo name="inbox" size={25} color="gray" />
      )
    }
   },
     Profile:{

      screen:ProfileStack,
      navigationOptions:{
      tabBarLabel:'Profile',
      activeColor:'#ff0000',
      inactiveColor:'#000000',
      barStyle:{backgroundColor: '#01CBC6',elevation: 0,},
      tabBarIcon:()=>(

        <Entypo name="user" size={25} color="gray" />

          // <View>
          //   <Icon name="account-circle" size={30} style={{color:'#ff0000'}} />
          // </View>
      )
    }
   },
   
  }
);
  
   console.disableYellowBox = true; 
   const MyApp = createAppContainer(TabNav);  



