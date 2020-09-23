// import React, { Component } from 'react';
// import { View, Text,TouchableOpacity,Image,ScrollView,StyleSheet } from 'react-native';

// export default class Host extends Component {

//     static navigationOptions = {
//         headerShown: false
//     }

//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//     <View style={{flex:1,backgroundColor:'white'}}>

//           <View style={{height:50,width:'100%',}}>
              
//           <TouchableOpacity
//               onPress = {() => this.props.navigation.navigate('Profile')}
//             style={{height:50,width:50,justifyContent:'center',alignItems:'center',marginLeft:20}}>
//                <Image source={require('./Images/back.png')} style={{height:25,width:25}} />
//             </TouchableOpacity>

//            </View>
        
//     <ScrollView 
//       showsVerticalScrollIndicator = {false} >

//          <View style={{height:280,width:'100%',}}>
//            <Image source = {require('./Images/art.jpg')} style={{height:280,width:'100%'}} />
//          </View>

//          <Text style={{fontSize:26,fontWeight:'bold',marginLeft:25,color:'#454545',marginTop:15}} >Host when and how you want</Text>
//          <Text style={styles.textStyle}>You get to choose your own schedule</Text>
//          <Text style={styles.textStyle}>and prices,and you can add extra</Text>
//          <Text style={styles.textStyle}>controls over who can book with you.</Text>
//          <Text style={styles.textStyle}>We're there to help along the way.</Text>



//          <View style={{height:280,width:'100%',marginTop:40}}>
//            <Image source = {require('./Images/garden.jpg')} style={{height:280,width:'100%'}} />
//          </View>

//          <Text style={{fontSize:26,fontWeight:'bold',marginLeft:25,color:'#454545',marginTop:15}}>We've got you covered</Text>
//          <Text style={styles.textStyle}>From our $1M protection for</Text>
//          <Text style={styles.textStyle}>property damage to 24/7 global service,</Text>
//          <Text style={styles.textStyle}>you're always supported as a host.</Text>
//          <Text style={styles.textStyle}>And we always offer the chance.</Text>



//          <View style={{height:280,width:'100%',marginTop:40}}>
//            <Image source = {require('./Images/sett.jpg')} style={{height:280,width:'100%'}} />
//          </View>

//          <Text style={{fontSize:26,fontWeight:'bold',marginLeft:25,color:'#454545',marginTop:15}} >Earning made simple</Text>
//          <Text style={styles.textStyle}>You have the freedom to charge</Text>
//          <Text style={styles.textStyle}>what you want and we have tools</Text>
//          <Text style={styles.textStyle}>to help you choose.</Text>
//          <Text style={styles.textStyle}>We're there to help along the way.</Text>

//     </ScrollView>

//         <View style={{height:85,width:'100%',justifyContent:'center'}}>
//             <View style={{height:50,width:'80%',alignSelf:'center',justifyContent:'center',backgroundColor:'#458796',borderRadius:5}}>
//                 <Text style={{textAlign:'center',fontSize:18,color:'white'}}>Become a host</Text>
//             </View>
//         </View>


//     </View>
//     );
//   }
// }


// const styles = StyleSheet.create({
    
//     textStyle : {
//         fontSize:18,
//         color:'#454545',
//         marginLeft:25
//     },
//   });



// Swiper screen code//



import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native'
 
import Swiper from 'react-native-swiper'
 

 
export default class Host extends Component {

        static navigationOptions = {
        headerShown: false
    }


  render() {
    return (
        <View style={{flex:1,backgroundColor:'white'}}>

       <View style={{height:50,width:'100%',}}>
              
              <TouchableOpacity
               onPress = {() => this.props.navigation.navigate('Profile')}
               style={{height:50,width:50,justifyContent:'center',alignItems:'center',marginLeft:20}}>
               <Image source={require('./Images/back.png')} style={{height:25,width:25}} />
              </TouchableOpacity>
               
          </View>

  <ScrollView 
    showsVerticalScrollIndicator = {false} >

      <Swiper style={styles.wrapper} >


        <View style={{flex:1,backgroundColor:'white'}}>
          
           <View style={{height:250,width:'100%',}}>
            <Image source = {require('./Images/art.jpg')} style={{height:250,width:'100%'}} />
           </View>

         <Text style={{fontSize:25,fontWeight:'bold',marginLeft:25,color:'#454545',marginTop:10}} >Host when and how you want</Text>
          <Text style={styles.textStyle}>You get to choose your own schedule</Text>
          <Text style={styles.textStyle}>and prices,and you can add extra</Text>
          <Text style={styles.textStyle}>controls over who can book with you.</Text>
          <Text style={styles.textStyle}>We're there to help along the way.</Text>


        </View>

        <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{height:250,width:'100%',marginTop:0}}>
            <Image source = {require('./Images/garden.jpg')} style={{height:250,width:'100%'}} />
         </View>

         <Text style={{fontSize:25,fontWeight:'bold',marginLeft:25,color:'#454545',marginTop:10}}>We've got you covered</Text>
          <Text style={styles.textStyle}>From our $1M protection for</Text>
          <Text style={styles.textStyle}>property damage to 24/7 global service,</Text>
          <Text style={styles.textStyle}>you're always supported as a host.</Text>
          <Text style={styles.textStyle}>And we always offer the chance.</Text>

        </View>

        <View style={{flex:1,backgroundColor:'white'}} >
            <View style={{height:250,width:'100%',marginTop:0}}>
            <Image source = {require('./Images/sett.jpg')} style={{height:250,width:'100%'}} />
          </View>

          <Text style={{fontSize:25,fontWeight:'bold',marginLeft:25,color:'#454545',marginTop:10}} >Earning made simple</Text>
          <Text style={styles.textStyle}>You have the freedom to charge</Text>
          <Text style={styles.textStyle}>what you want and we have tools</Text>
          <Text style={styles.textStyle}>to help you choose.</Text>
          <Text style={styles.textStyle}>We're there to help along the way.</Text>
        </View>

      </Swiper>
      </ScrollView>

         <View style={{height:85,width:'100%',justifyContent:'center'}}>
             <TouchableOpacity
             onPress = {() => this.props.navigation.navigate('Hosting')}
              style={{height:50,width:'80%',alignSelf:'center',justifyContent:'center',backgroundColor:'#008080',borderRadius:5}}>
                 <Text style={{textAlign:'center',fontSize:18,color:'white'}}>Become a host</Text>
             </TouchableOpacity>
         </View>

      </View>
    )
  }
}
 

const styles = StyleSheet.create({
    wrapper: {
        height:450,
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
 
        textStyle : {
          fontSize:18,
          color:'#454545',
          marginLeft:25
      },
  });