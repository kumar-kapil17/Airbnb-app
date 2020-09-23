import React, { Component } from 'react';
import { View, Text,StatusBar,ImageBackground,ScrollView,TouchableOpacity,Image,StyleSheet,Alert } from 'react-native';

export default class Explore extends Component {

    static navigationOptions = {
        headerShown: false,
        // tabBarVisible: false
    }


  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
           <StatusBar translucent backgroundColor='transparent' />
       
  <ScrollView
    showsVerticalScrollIndicator={false}>

         <View style={{height:480,width:'100%',}}>

             <ImageBackground source = {require('./Images/1.jpg')} style={{height:480,width:'100%'}}>

                <TouchableOpacity 
                    onPress = {() => this.props.navigation.navigate('Home')}
                    style={{height:30,width:35,margin:30,justifyContent:'center',alignItems:'center',top:10}}>

                    <Image  source= {require('./Images/back.png')} style={{height:25,width:25,tintColor:'white'}} />

                </TouchableOpacity>


               <Text style={{fontSize:35,fontWeight:'bold',color:'white',textAlign:'center',marginTop:10}}>Get out and stretch </Text>
               <Text style={{fontSize:35,fontWeight:'bold',color:'white',textAlign:'center'}}>your imagination</Text>

               <Text style={{fontSize:15,color:'white',textAlign:'center',marginTop:130,letterSpacing:1}}>Plan a different kind of getaway to </Text>
               <Text style={{fontSize:15,color:'white',textAlign:'center',marginTop:0,letterSpacing:1}}>uncover the hidden gems near you.</Text>



             </ImageBackground>

         </View>

         <Text style={{fontSize:24,fontWeight:'900',color:'black',marginLeft:25,marginTop:30}}>Explore near and far from ordinary</Text>  

         
         <View style={{flexDirection:'row',marginTop:50}}>

                <ScrollView
                 horizontal= {true}
                 showsHorizontalScrollIndicator={false} >

               <TouchableOpacity
               onPress = {()=> Alert.alert('Under Development')}
                style={{ height:330,width:270,marginLeft:30,}}>
              
                 <ImageBackground  source={require('../Component/Images/11.jpg')} style={{ resizeMode: 'contain',width: 270, height:210,}} imageStyle={{borderTopLeftRadius:20,borderTopRightRadius:20}}>
                 </ImageBackground>



                  <View style={styles.card}>
                  
                  <Text style={{fontSize:20, textAlign:'left',marginLeft:10,marginTop:10}}>Surprising stays just next door</Text>
                  <Text style={{fontSize:12, textAlign:'left',marginLeft:10,color:'gray'}}>Find unique spaces close to home that</Text>
                  <Text style={{fontSize:12, textAlign:'left',marginLeft:10,color:'gray'}}>make any trip feel like an adventure.</Text>
                  </View>

               </TouchableOpacity>

               <TouchableOpacity 
                 onPress = {()=> Alert.alert('Under Development')}
            //     onPress={()=> this.props.navigation.navigate('Main')}
                 style={{ height:330,width:270,marginLeft:10,}}>
              
                 <ImageBackground  source={require('../Component/Images/2.jpg')} style={{ resizeMode: 'contain',width: 270, height:210,}} imageStyle={{borderTopLeftRadius:20,borderTopRightRadius:20}}>
                 </ImageBackground>



               <View style={styles.card}>
               
               <Text style={{fontSize:20, textAlign:'left',marginLeft:10,marginTop:10}}>Instant Book some serendipity</Text>
               <Text style={{fontSize:12, textAlign:'left',marginLeft:10,color:'gray'}}>Make the most of opportunities to</Text>
               <Text style={{fontSize:12, textAlign:'left',marginLeft:10,color:'gray'}}>explore in spur of the moment stays.</Text>
               </View>

               </TouchableOpacity>

               <TouchableOpacity
                onPress = {()=> Alert.alert('Under Development')}
                style={{ height:330,width:270,marginLeft:10,marginRight:30}}>
              
                 <ImageBackground  source={require('../Component/Images/3.jpg')} style={{ resizeMode: 'contain',width: 270, height:210,}} imageStyle={{borderTopLeftRadius:20,borderTopRightRadius:20}}>
                 </ImageBackground>



               <View style={styles.card}>
               
               <Text style={{fontSize:20, textAlign:'left',marginLeft:10,marginTop:10}}>Remote discoveries </Text>
               <Text style={{fontSize:12, textAlign:'left',marginLeft:10,color:'gray'}}>Get off the beaten path together in </Text>
               <Text style={{fontSize:12, textAlign:'left',marginLeft:10,color:'gray'}}>these scenic escapes near you.</Text>
               </View>

               </TouchableOpacity>

               </ScrollView>  
            </View>


            <View style={{height:470,width:'100%',}}>
              
              <Text style={{fontSize:23,fontWeight:'900',marginLeft:25,marginTop:20}}>Ever wondered about Rishikesh?</Text>
              <Text style={{fontSize:15, textAlign:'left',marginLeft:25,marginTop:10}}>Check into cozy stays in places you've</Text>
              <Text style={{fontSize:15, textAlign:'left',marginLeft:25,}}>been meaning to check out</Text>

            <ScrollView
                    horizontal= {true}
                    showsHorizontalScrollIndicator={false} >


              <View style={{flexDirection:'row',height:295,width:'100%',}}>
                 
                 <View style={{flexDirection:'column',height:295,width:230,marginLeft:25,marginTop:20}}>
                     
                     <Image source={require('./Images/deacon.jpg')} style={{height:155,width:230,borderRadius:10}} />

                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',height:20,width:230,marginTop:10}}>
                        <Image source={require('./Images/star.png')} style={{height:10,width:10,tintColor:'red',resizeMode:'contain'}} />
                        <Text style={{color:'gray',textAlign:'center',marginLeft:5}}>5.00(4)</Text> 
                        </View> 

                         <Text style={{fontSize:18}}>Entire flat - Rishikesh</Text>
                         <Text style={{fontSize:15}}>Furnished Apartment for Rent..</Text>
                         <Text style={{fontSize:15}}>$10/night</Text>

                 </View>


                 <View style={{flexDirection:'column',height:295,width:230,marginLeft:15,marginTop:20}}>
                     
                     <Image source={require('./Images/rishi.jpg')} style={{height:155,width:230,borderRadius:10}} />

                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',height:20,width:230,marginTop:10}}>
                        <Image source={require('./Images/star.png')} style={{height:10,width:10,tintColor:'red',resizeMode:'contain'}} />
                        <Text style={{color:'gray',textAlign:'center',marginLeft:5}}>4.40(155)</Text> 
                        </View> 

                         <Text style={{fontSize:18}}>Entire flat - Rishikesh</Text>
                         <Text style={{fontSize:15}}>Renovated 1 BR: With Gange..</Text>
                         <Text style={{fontSize:15}}>$36/night</Text>

                 </View>


                 <View style={{flexDirection:'column',height:295,width:230,marginLeft:15,marginTop:20}}>
                     
                     <Image source={require('./Images/flat.jpg')} style={{height:155,width:230,borderRadius:10}} />

                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',height:20,width:230,marginTop:10}}>
                        <Image source={require('./Images/star.png')} style={{height:10,width:10,tintColor:'red',resizeMode:'contain'}} />
                        <Text style={{color:'gray',textAlign:'center',marginLeft:5}}>4.53(15)</Text> 
                        </View> 

                         <Text style={{fontSize:18}}>Entire flat - Rishikesh</Text>
                         <Text style={{fontSize:15}}>Cozy & Spacious Apartment..</Text>
                         <Text style={{fontSize:15}}>$10/night</Text>

                 </View>


                 <View style={{flexDirection:'column',height:295,width:230,marginLeft:15,marginTop:20}}>
                     
                     <Image source={require('./Images/apart.jpg')} style={{height:155,width:230,borderRadius:10}} />

                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',height:20,width:230,marginTop:10}}>
                        {/* <Image source={require('./Images/star.png')} style={{height:10,width:10,tintColor:'red',resizeMode:'contain'}} /> */}
                        <Text style={{color:'gray',textAlign:'center',}}>No reviews yet</Text> 
                        </View> 

                         <Text style={{fontSize:18}}>Entire flat - Jonk</Text>
                         <Text style={{fontSize:15}}>Holiday home apartment..</Text>
                         <Text style={{fontSize:15}}>$15/night</Text>

                 </View>


                 <View style={{flexDirection:'column',height:295,width:230,marginLeft:15,marginTop:20,marginRight:25}}>
                     
                     <Image source={require('./Images/flat3.jpg')} style={{height:155,width:230,borderRadius:10}} />

                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',height:20,width:230,marginTop:10}}>
                        <Image source={require('./Images/star.png')} style={{height:10,width:10,tintColor:'red',resizeMode:'contain'}} />
                        <Text style={{color:'gray',textAlign:'center',marginLeft:5}}>4.90(10)</Text> 
                        </View> 

                         <Text style={{fontSize:18}}>Entire flat - Rishikesh</Text>
                         <Text style={{fontSize:15}}>Happy Home</Text>
                         <Text style={{fontSize:15}}>$12/night</Text>

                 </View>





              </View>
            </ScrollView>

               <View style={{justifyContent:'center',height:50,width:'80%',alignSelf:'center',borderWidth:1,borderColor:'black',borderRadius:10}}>
                     <Text style={{fontSize:16,fontWeight:'bold',textAlign:'center'}}>Show all stays</Text>
               </View>

            </View>



             


        <View style={{height:250,width:'100%',marginTop:30}}>
          <Text style={{fontSize:23,fontWeight:'900',marginLeft:25,marginTop:20}}>Let's travel safely together</Text>
           
            <View style={{flexDirection:'row',height:40,width:'100%',marginTop:20}}>
                
                <View style={{height:40,width:40,marginLeft:25,justifyContent:'center',alignItems:'flex-start'}}>
                      <Image source = {require('./Images/shi.png')} style={{height:25,width:25}} />
                </View>



                <View style={{height:40,width:240,marginLeft:25,justifyContent:'center',alignItems:'flex-start'}}>
                      <Text style ={{fontSize:16}} >Stay healthy</Text>
                </View>


            </View>


            <View style={{flexDirection:'row',height:40,width:'100%',marginTop:20}}>
                
                <View style={{height:40,width:40,marginLeft:25,justifyContent:'center',alignItems:'flex-start'}}>
                <Image source = {require('./Images/hme.png')} style={{height:25,width:25}} />
                </View>



                <View style={{height:40,width:240,marginLeft:25,justifyContent:'center',alignItems:'flex-start'}}>
                      <Text style ={{fontSize:16}}>Be a good neighbour</Text>
                </View>


            </View>


            <View style={{flexDirection:'row',height:40,width:'100%',marginTop:20}}>
                
                <View style={{height:40,width:40,marginLeft:25,justifyContent:'center',alignItems:'flex-start'}}>
                <Image source = {require('./Images/sh.png')} style={{height:25,width:25}} />
                </View>



                <View style={{height:40,width:240,marginLeft:25,justifyContent:'center',alignItems:'flex-start'}}>
                      <Text style ={{fontSize:16}}>Travel responsibly</Text>
                </View>


            </View>


        </View>


 </ScrollView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#eaeaea"
    },
    card: {
        height:110,
        width:270,
        borderBottomStartRadius:20,
        borderBottomEndRadius:20,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
  });