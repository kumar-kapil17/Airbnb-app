import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
       <Text style={{fontSize:30,fontWeight:'bold',margin:25,letterSpacing:1}}> Inbox </Text>

       <View style={{borderWidth:.15,backgroundColor:'gray',marginTop:30,width:'80%',alignSelf:'center'}}></View>

       <Text style={{fontSize:20,fontWeight:'bold',margin:25,}}> You have no unread messages </Text>
      
      
       <Text style={{fontSize:15,marginLeft:30,color:'gray'}}> When you contact a host or send a</Text>
        <Text style={{fontSize:15,marginLeft:30,color:'gray'}}> reservation request,you'll see your</Text>
        <Text style={{fontSize:15,marginLeft:30,color:'gray'}}> messages here</Text>
      
      </View>
    );
  }
}










