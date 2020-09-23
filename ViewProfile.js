import React, { Component } from 'react';
import { View, Text,Image,TouchableOpacity, Alert } from 'react-native';


export default class ViewProfile extends Component {

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
        
         <View style={{flexDirection:'row',justifyContent:'space-between',height:50,width:'100%',marginTop:30}}>
            
            <TouchableOpacity
              onPress = {() => this.props.navigation.navigate('Profile')}
            style={{height:50,width:50,justifyContent:'center',alignItems:'center',marginLeft:20}}>
               <Image source={require('./Images/back.png')} style={{height:25,width:25}} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress = { () => Alert.alert('Under Development')}
             style={{height:50,width:50,justifyContent:'center',alignItems:'center',marginRight:20}}>
               <Image source={require('./Images/pen.png')} style={{height:25,width:25,}} />
           </TouchableOpacity>



         </View>


          <View style={{flexDirection:'row',justifyContent:'space-between',height:80,width:'100%',marginTop:30,}}>

             <View style={{height:80,width:210,justifyContent:'center',}}>
               
               <Text style={{fontSize:25,fontWeight:'bold',marginLeft:30}}>Hi, I'm Igent</Text>
                <Text style={{fontSize:13,color:'gray',marginLeft:30}}>Joined in August, 2020</Text>


             </View>

             <View style={{height:80,width:100,justifyContent:'center',alignItems:'center',marginRight:10}}>

               <Image source={require('./Images/pic.png')} style={{height:70,width:70,resizeMode:'center',borderRadius:1000}} />

             </View>




          </View>


          <View style={{borderWidth:.2,backgroundColor:'gray',marginTop:50,width:'85%',alignSelf:'center'}}></View>

           
           <View style={{height:30,width:40,marginLeft:45,marginTop:30,justifyContent:'center',alignItems:'center'}}>
               <Image source={require('./Images/shield.png')} style={{height:30,width:30,resizeMode:'center'}} />
           </View>

           <View style={{height:100,width:'100%',marginTop:15}}>
              <Text style={{fontSize:18,fontWeight:'bold',marginLeft:50,letterSpacing:.5}}>Identity Verification</Text>
              <Text style={{fontSize:15,marginLeft:50,marginTop:10,color:'gray'}}>Show others you're really you with the</Text>
              <Text style={{fontSize:15,marginLeft:50,color:'gray'}}>identity verification badge.</Text>
           </View>


           <View style={{height:50,width:150,marginLeft:45,marginTop:30,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'black',borderRadius:10}}>
              <Text style={{fontSize:17,fontWeight:'bold'}} >Get the badge</Text>
           </View>




      </View>
    );
  }
}

