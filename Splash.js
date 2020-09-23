import React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native';





export default class Splash extends React.Component {
  render() {
    const viewStyles = [styles.container, { backgroundColor: 'orange' }];
    const textStyles = {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold'
    };

    return (
        <View style={{flex:1,}}>
    
            <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                    <ImageBackground source={require('./Images/logg1.jpg')} style={{height:100,width:250}} />  
                        
            </View>
          
       </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  back: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});

