import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image,ScrollView } from 'react-native';


export default class Contact extends Component {

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

         
         <View style={{height:50,width:'100%',marginTop:10,}}>
              
              <TouchableOpacity
               onPress = {() => this.props.navigation.navigate('Visit')}
               style={{height:50,width:50,justifyContent:'center',alignItems:'center',marginLeft:20}}>
               <Image source={require('./Images/back.png')} style={{height:25,width:25}} />
              </TouchableOpacity>
               
          </View>

     <ScrollView
       showsVerticalScrollIndicator = {false} >     

          <View style={{height:350,width:'85%',alignSelf:'center',borderRadius:10,marginTop:10,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                
                elevation: 2}}>
              <Text style={{fontSize:16,marginLeft:15,color:'#454545',top:10}}>Waiting times are longer than</Text>
              <Text style={{fontSize:16,marginLeft:15,color:'#454545',top:5}}>usual right now due to COVID-19</Text>

               <Text style={{marginLeft:15,color:'#454545',marginTop:10}}>
                   If you're not travelling or hosting in the next 72 hours,please contact us later. To find cancellation
                   and refund options,select a reservation from the Trips page if you're a guest,or from your dashboard if you're a host.
                   We continue to monitor COVID-19 and intend to provide updates about our extenuating circumstances policy on the 1st
                   and 15th of each month.

               </Text> 

               <TouchableOpacity
                onPress = {() => this.props.navigation.navigate('Trips') }
                style={{justifyContent:'center',alignItems:'center',height:50,width:140,marginTop:10,borderRadius:5,marginLeft:15,backgroundColor:'#008080'}}>
                   <Text style={{color:'white',fontWeight:'bold'}}>Go to your trips</Text>
               </TouchableOpacity>

               <View style={{justifyContent:'center',alignItems:'center',height:50,width:140,marginTop:15,borderRadius:5,marginLeft:15,borderWidth:2,borderColor:'#008080'}}>
                   <Text style={{color:'#008080',fontWeight:'bold'}}>Learn more</Text>
               </View>
               


          </View>
        
          <Text style={{fontSize:25,fontWeight:'bold',marginLeft:26,marginTop:30,color:'#454545'}}>What is this about?</Text>


          <View style={{height:490,width:'85%',alignSelf:'center',marginTop:20}}>
            
            <View style={{flexDirection:'row',justifyContent:'space-between',height:150,width:'100%',}}>
               <View style={{justifyContent:'center',alignItems:'center',height:150,width:147,borderWidth:.5,borderColor:'gray',borderRadius:5}}>
                  <Image source = {require('./Images/tripadvisor.png')} style={{height:35,width:35,resizeMode:'cover'}} />
                  <Text style={{textAlign:'center',color:'gray'}}>Corona virus (COVID-19)</Text> 
               </View>

               <View style={{justifyContent:'center',alignItems:'center',height:150,width:147,borderWidth:.5,borderColor:'gray',borderRadius:5}}>
                  <Image source = {require('./Images/cal.png')} style={{height:35,width:35,resizeMode:'cover'}} />
                  <Text style={{textAlign:'center',color:'gray'}}>Booking and    travelling</Text> 
               </View>


            </View>


            <View style={{flexDirection:'row',justifyContent:'space-between',height:150,width:'100%',marginTop:10,}}>
               <View style={{justifyContent:'center',alignItems:'center',height:150,width:147,borderWidth:.5,borderColor:'gray',borderRadius:5}}>
                  <Image source = {require('./Images/checklist.png')} style={{height:35,width:35,resizeMode:'cover'}} />
                  <Text style={{textAlign:'center',color:'gray'}}>Listing and hosting tools</Text> 
               </View>

               <View style={{justifyContent:'center',alignItems:'center',height:150,width:147,borderWidth:.5,borderColor:'gray',borderRadius:5}}>
               <Image source = {require('./Images/fil.png')} style={{height:35,width:35,resizeMode:'cover'}} />
                  <Text style={{textAlign:'center',color:'gray'}}>My account</Text> 
               </View>


            </View>


            <View style={{flexDirection:'row',justifyContent:'space-between',height:150,width:'100%',marginTop:10,}}>
               <View style={{justifyContent:'center',alignItems:'center',height:150,width:147,borderWidth:.5,borderColor:'gray',borderRadius:5}}>
               <Image source = {require('./Images/refund.png')} style={{height:35,width:35,resizeMode:'cover'}} />
                  <Text style={{textAlign:'center',color:'gray'}}>Payments,refunds      and more</Text> 
               </View>

               <View style={{justifyContent:'center',alignItems:'center',height:150,width:147,borderWidth:.5,borderColor:'gray',borderRadius:5}}>
               <Image source = {require('./Images/safety.png')} style={{height:35,width:35,resizeMode:'cover'}} />
                  <Text style={{textAlign:'center',color:'gray'}}>Safety, accessibility and discrimination</Text> 
               </View>


            </View>


          </View>  


    </ScrollView>
      </View>
    );
  }
}
