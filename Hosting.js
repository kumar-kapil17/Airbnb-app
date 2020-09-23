import React, { Component } from 'react';
import { View, Text,StatusBar,TouchableOpacity,Image,ScrollView } from 'react-native';

export default class Hosting extends Component {

    static navigationOptions = {
        headerShown: false
    }


  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'#008080'}}>

         <StatusBar translucent backgroundColor='transparent' />

<ScrollView 
    showsVerticalScrollIndicator = {false} >
            <View style={{height:30,width:'100%',marginTop:30,}}>
              
              <TouchableOpacity
                onPress = {() => this.props.navigation.navigate('Host')}
                style={{height:30,width:50,justifyContent:'center',alignItems:'center',marginLeft:15}}>
               <Image source={require('./Images/back.png')} style={{height:25,width:25,tintColor:'white'}} />
              </TouchableOpacity>
              
            </View>

            <View style={{justifyContent:'center',height:100,width:'100%',marginTop:20,}}>
                <Text style={{fontSize:28,fontWeight:'bold',color:'white',marginLeft:25}}>Let's setup your </Text>
                <Text style={{fontSize:28,fontWeight:'bold',color:'white',marginLeft:25}}>listing </Text>
            </View>

         <View style={{flex:1,backgroundColor:'white'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:80,width:'100%',}}>
               
               <View style={{justifyContent:'center'}}> 
               <Text style={{fontSize:18,fontWeight:'bold',marginLeft:25,color:'#454545'}}>Property and guests</Text>
               </View>

               <View style={{justifyContent:'center',alignItems:'center',borderRadius:5,height:50,width:100,backgroundColor:'#008080',marginRight:25}}>
                  <Text style={{color:'white',}}>Continue</Text>
               </View>

            </View>
            <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:0,width:'85%',alignSelf:'center'}}></View>

            <View style={{justifyContent:'center',height:50,width:'100%'}}>
            <Text style={{color:'gray',marginLeft:25}}>Location</Text>
            </View>
            <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:0,width:'85%',alignSelf:'center'}}></View>

            <View style={{justifyContent:'center',height:50,width:'100%'}}>
            <Text style={{color:'gray',marginLeft:25}}>Building</Text>
            </View>
            <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:0,width:'85%',alignSelf:'center'}}></View>

            <View style={{justifyContent:'center',height:50,width:'100%'}}>
            <Text style={{color:'gray',marginLeft:25}}>Amenities</Text>
            </View>
            <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:0,width:'85%',alignSelf:'center'}}></View>

            <View style={{justifyContent:'center',height:50,width:'100%'}}>
            <Text style={{color:'gray',marginLeft:25}}>Photos</Text>
            </View>
            <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:0,width:'85%',alignSelf:'center'}}></View>

            <View style={{justifyContent:'center',height:50,width:'100%'}}>
            <Text style={{color:'gray',marginLeft:25}}>Title</Text>
            </View>
            <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:0,width:'85%',alignSelf:'center'}}></View>

            <View style={{justifyContent:'center',height:50,width:'100%'}}>
            <Text style={{color:'gray',marginLeft:25}}>Booking settings</Text>
            </View>
            <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:0,width:'85%',alignSelf:'center'}}></View>

            <View style={{justifyContent:'center',height:50,width:'100%'}}>
            <Text style={{color:'gray',marginLeft:25}}>Availability</Text>
            </View>
            <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:0,width:'85%',alignSelf:'center'}}></View>

            <View style={{justifyContent:'center',height:50,width:'100%'}}>
            <Text style={{color:'gray',marginLeft:25}}>Pricing</Text>
            </View>
            <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:0,width:'85%',alignSelf:'center'}}></View>

            <View style={{justifyContent:'center',height:50,width:'100%'}}>
            <Text style={{color:'gray',marginLeft:25}}>Review</Text>
            </View>

            {/* <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:0,width:'85%',alignSelf:'center'}}></View> */}

            
         </View>


  </ScrollView>      
      </View>
    );
  }
}
