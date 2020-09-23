import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image,ScrollView, } from 'react-native';

export default class Updates extends Component {

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
      <View style={{flex:1,backgroundColor:'white'}}>

         <View style={{height:50,width:'100%',marginTop:10}}>
              
              <TouchableOpacity
               onPress = {() => this.props.navigation.navigate('Home')}
               style={{height:50,width:50,justifyContent:'center',alignItems:'center',marginLeft:20}}>
               <Image source={require('./Images/back.png')} style={{height:25,width:25}} />
              </TouchableOpacity>
               
          </View>

    <ScrollView 
       showsVerticalScrollIndicator = {false} >      

          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:80,width:'100%',borderWidth:.1,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.18,
                shadowRadius: 1.00,

                elevation: 1,}}>

                <Text style={{fontSize:17,fontWeight:'bold',marginLeft:35}}>Resource centre</Text>

            <View style={{justifyContent:'center',alignItems:'center',height:35,width:70,marginRight:25,borderRadius:5,borderWidth:1,borderColor:'black'}}>
                <Text>Menu</Text>
            </View>

          </View>


          <View style={{height:120,width:'100%',marginTop:20}}>

              <Text style={{fontSize:45,fontWeight:'bold',color:'#e41f51',marginLeft:25}}>Airbnb resources</Text>

          </View>

          <Text style={{fontSize:18,color:'#454545',marginLeft:25,marginTop:15}}>Learn how to navigate hosting and traveling during COVID-19 and beyond.</Text>

           <Text style={{marginLeft:25,fontWeight:'bold',marginTop:40,color:'#454545'}}>For hosts</Text>
           <View style={{borderWidth:.3,marginTop:5,width:'90%',marginLeft:20,color:'gray'}}></View>

           <Text style={{fontSize:30,fontWeight:'bold',color:'#454545',marginLeft:25,marginTop:50}}>Updates</Text>

      <View style={{height:220,width:'100%'}}>
          
           <View style={{height:150,width:'80%',alignSelf:'center',backgroundColor:'white',borderColor:'white',marginTop:20,borderRadius:10,
                       shadowColor: '#000000',
                       shadowOffset: {
                         width: 0,
                         height: 1
                       },
                       shadowRadius: .5,
                       shadowOpacity: 0.26,
                       elevation:5

                       
                  }}>
                      <Text style={{color:'gray',marginLeft:15,marginTop:10}}>24 AUG 2020</Text>
                      <Text style={{color:'#454545',marginLeft:15,fontSize:16,marginTop:15}}>Get more details about our updated</Text>
                      <Text style={{color:'#454545',marginLeft:15,fontSize:16}}>Parties and Events policy, new</Text>
                      <Text style={{color:'#454545',marginLeft:15,fontSize:16}}>occupancy limit for stays, and more.</Text>

           </View>
           </View>

           <View style={{justifyContent:'center',alignItems:'center',height:45,width:'80%',alignSelf:'center',borderWidth:1,borderColor:'black',borderRadius:5}}>
               <Text style={{fontSize:15,fontWeight:'bold',color:'#454545'}}>Show All</Text>
           </View>

           <Text style={{fontSize:30,fontWeight:'bold',color:'#454545',marginLeft:25,marginTop:50}}>Featured articles</Text>

            
            <View style={{flexDirection:'row',justifyContent:'space-between',height:160,width:'100%',alignSelf:'center',marginTop:20}}>
               
               <View style={{height:150,width:145,borderRadius:10,marginLeft:25}}>

                  <Image source = {require('./Images/corona.jpg')} style={{borderRadius:10,height:150,width:145,resizeMode:'cover'}} />

               </View>

               <View style={{height:150,width:145,borderRadius:10,marginRight:25}}>

               <Image source = {require('./Images/corona1.jpg')} style={{borderRadius:10,height:150,width:145,resizeMode:'cover'}} />
              
               </View>

            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',height:180,width:'100%',alignSelf:'center',marginTop:0}}>
              <View style={{height:145,width:145,marginLeft:25}}>
                 <Text style={{fontSize:15,fontWeight:'bold',color:'#454545'}}>Getting started with Airbnb's cleaning protocol</Text>
                 <Text style={{color:'gray'}}>Learn what's covered</Text>
                 <Text style={{color:'gray'}}>-and why cleanlines...</Text>
              </View>

              <View style={{height:145,width:145,marginRight:25}}>
                <Text style={{fontSize:15,fontWeight:'bold',color:'#454545'}}>Coronavirus and our extenuating circumstances policy</Text>
                 <Text style={{color:'gray'}}>Find out what the</Text>
                 <Text style={{color:'gray'}}>policy means for hos...</Text>
              </View>
            </View>







    </ScrollView>
      </View>
    );
  }
}
