import React, { Component } from 'react';
import { View, Text, Image,TouchableHighlight, Alert,ScrollView, TouchableOpacity } from 'react-native';



export default class Trips extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
       <Text style={{fontSize:30,fontWeight:'bold',margin:25,letterSpacing:1}}> Trips </Text>

    <ScrollView
    showsVerticalScrollIndicator={false}>

        <Text style={{fontSize:15,marginLeft:30,color:'gray'}}> When you are ready to plan your next trip,</Text>
        <Text style={{fontSize:15,marginLeft:30,color:'gray'}}> we're here to help.</Text>


       
            <Image  source={require('../Component/Images/sum.jpg')} style={{ resizeMode: 'contain',width: '100%', height:350,marginLeft:0,marginTop:20,}}>
            </Image>
      

      <TouchableHighlight
           onPress= {() => this.props.navigation.navigate('Home') }
                style={{height:50,width:'80%',justifyContent:'center',alignSelf:'center',backgroundColor:'black',borderRadius:10,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,}}
                >

           <Text style={{textAlign:'center',color:'white',fontSize:20}}>Explore</Text>

      </TouchableHighlight>

      {/* <View style={{borderWidth:.15,backgroundColor:'gray',marginTop:30,width:'80%',alignSelf:'center'}}></View> */}

      <Text style={{fontSize:15,textAlign:'center',marginTop:20}}> Can't find your reservation here? 
      <TouchableOpacity onPress = {() => this.props.navigation.navigate('Visit')} ><Text style={{color:'#49d1c2',fontSize:18,fontWeight:'bold',top:5,left:5}}>visit</Text></TouchableOpacity>
      </Text>



      <View style={{borderWidth:0,marginTop:50}}></View>

</ScrollView>
      </View>
    );
  }
}
