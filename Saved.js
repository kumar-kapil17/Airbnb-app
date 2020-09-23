import React, { Component } from 'react';
import { View, Text,ImageBackground, Image } from 'react-native';

export default class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        <Text style={{fontSize:30,fontWeight:'bold',margin:25,letterSpacing:1}}> Saved </Text>


        <Text style={{fontSize:15,marginLeft:30,color:'gray'}}> Collect places to stay and things to do by</Text>
        <Text style={{fontSize:15,marginLeft:30,color:'gray'}}> tapping the heart icon.</Text>


       <View style={{justifyContent:'center',alignItems:'center',}}>
           <Image  source={require('../Component/Images/girl.gif')} style={{ resizeMode: 'center',width: '100%', height:300,}}>
          </Image>
       </View>






      </View>
    );
  }
}
