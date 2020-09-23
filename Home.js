import React, { Component } from 'react';
import { View, Text, TextInput,ImageBackground,
    ScrollView,StyleSheet,StatusBar,
    TouchableOpacity, Alert,Linking
    } from 'react-native';



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>

     <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" translucent = {false}/>

      <View
       
       style={{height:90,width:'100%',}}>

            <View style={{height:40,width:'95%',paddingLeft:15,backgroundColor:'white',marginLeft:10,marginTop:30,borderRadius:5,borderColor:'gray',borderWidth:1,
                  shadowColor: "#000",
                  // borderWidth:.1,
                  shadowOffset: {
                     width: 0,
                     height: 0,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 2,}}>
             <TextInput
            
              keyboardType={'name-phone-pad'}
              textStyle={{color: 'white'}}
              placeholder="Location, landmark, or address"
              underlineColorAndroid="transparent">
            </TextInput>

            <ImageBackground  source={require('../Component/Images/search.png')} style={{ resizeMode: 'contain',width: 15, height:15,marginLeft:290,marginTop:-25,}}>
            </ImageBackground>
            </View>
      </View>


    <ScrollView
       showsVerticalScrollIndicator={false}>

            <TouchableOpacity 
            // onPress = {() => Alert.alert('hiii')}
             onPress = {() => this.props.navigation.navigate('Explore')}
            style={{height:370,width:'85%',alignSelf:'center',marginTop:20}}>

            <ImageBackground  source={require('../Component/Images/1.jpg')} style={{height:370,width:'100%',}} imageStyle={{borderRadius:20}}>
               <Text style={{fontSize:35,fontWeight:'bold',color:'white',textAlign:'center',marginTop:20}}>Get out and</Text>
               <Text style={{fontSize:35,fontWeight:'bold',color:'white',textAlign:'center'}}>stretch your</Text>
               <Text style={{fontSize:35,fontWeight:'bold',color:'white',textAlign:'center'}}>imagination</Text>

               <Text style={{fontSize:15,color:'white',textAlign:'center',marginTop:80,letterSpacing:1}}>Plan a different kind of getaway to uncover the hidden gems near you.</Text>
            
            </ImageBackground>

            </TouchableOpacity>   


            <View style={{flexDirection:'row',marginTop:50}}>

                <ScrollView
                 horizontal= {true}
                 showsHorizontalScrollIndicator={false} >

               <TouchableOpacity
               // onPress = {()=> Alert.alert('Under Development')}
               // onPress={() => Linking.openURL('https://www.airbnb.co.in/s/experiences/online')}
               onPress={()=> this.props.navigation.navigate('Online')}
               
                style={{ height:300,width:250,marginLeft:30,}}>
              
                 <ImageBackground  source={require('../Component/Images/tv.jpg')} style={{ resizeMode: 'contain',width: 250, height:210,}} imageStyle={{borderTopLeftRadius:20,borderTopRightRadius:20}}>
                 </ImageBackground>



                  <View style={styles.card}>
                  
                  <Text style={{fontSize:20, textAlign:'left',marginLeft:10,marginTop:10}}>Online Experiences</Text>
                  <Text style={{fontSize:12, textAlign:'left',marginLeft:10}}>Unique activity we can do together.</Text>
            
                  </View>

               </TouchableOpacity>

               <TouchableOpacity 
               //  onPress = {()=> Alert.alert('Under Development')}
               onPress={()=> this.props.navigation.navigate('Main')}
               style={{ height:300,width:250,marginLeft:10,}}>
              
                 <ImageBackground  source={require('../Component/Images/ni1.jpg')} style={{ resizeMode: 'contain',width: 250, height:210,}} imageStyle={{borderTopLeftRadius:20,borderTopRightRadius:20}}>
                 </ImageBackground>



               <View style={styles.card}>
               
               <Text style={{fontSize:20, textAlign:'left',marginLeft:10,marginTop:10}}>Unique Stays</Text>
               <Text style={{fontSize:12, textAlign:'left',marginLeft:10}}>Spaces that are more than just a place</Text>
               <Text style={{fontSize:12, textAlign:'left',marginLeft:10}}>to sleep.</Text>
               </View>

               </TouchableOpacity>

               <TouchableOpacity
               //  onPress = {()=> Alert.alert('Under Development')}
               onPress={() => Linking.openURL('https://www.airbnb.co.in/s/homes?refinement_paths[]=homes/section/NEARBY_LISTINGS&room_types[]=Entire%20home%2Fapt&title_type=NEARBY_LISTINGS')}
                style={{ height:300,width:250,marginLeft:10,marginRight:30}}>
              
                 <ImageBackground  source={require('../Component/Images/stay.jpg')} style={{ resizeMode: 'contain',width: 250, height:210,}} imageStyle={{borderTopLeftRadius:20,borderTopRightRadius:20}}>
                 </ImageBackground>



               <View style={styles.card}>
               
               <Text style={{fontSize:20, textAlign:'left',marginLeft:10,marginTop:10}}>Entire Homes</Text>
               <Text style={{fontSize:12, textAlign:'left',marginLeft:10}}>Comfortable private places, with room</Text>
               <Text style={{fontSize:12, textAlign:'left',marginLeft:10}}>for friends or family</Text>
               </View>

               </TouchableOpacity>

               </ScrollView>  
            </View>



    <View style={{height:450,width:'100%',}} >

           <Text style={{fontSize:25,marginLeft:30,marginTop:20}}>Your next escape</Text>

         <View style={{flexDirection:'row',marginTop:20}}>
        
         <ScrollView
                 horizontal= {true}
                 showsHorizontalScrollIndicator={false} >

             <View style={{flexDirection:'column',height:330,width:250,marginLeft:30}}>


                <View style={{flexDirection:'row'}}>

                 <TouchableOpacity style={{height:100,width:100,marginTop:10}}
                   onPress={()=> this.props.navigation.navigate('Delhi')}  >
                     <ImageBackground  source={require('../Component/Images/delhi.jpg')} style={{ resizeMode: 'contain',width: 90, height:90,}} imageStyle={{borderRadius:15,}}>
                     </ImageBackground>
                 </TouchableOpacity>

                    <View  style={{justifyContent:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10}}>Delhi</Text>
                     <Text style={{fontSize:15,marginLeft:10}}>$21/Night Avg.</Text>
                    </View>

                 </View>



                 <View style={{flexDirection:'row'}}>
                 <View style={{height:100,width:100,marginTop:10}}>
                 <ImageBackground  source={require('../Component/Images/farida.jpg')} style={{ resizeMode: 'contain',width: 90, height:90,}} imageStyle={{borderRadius:15,}}>
                 </ImageBackground>
                 </View>

                    <View  style={{justifyContent:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10}}>Faridabad</Text>
                     <Text style={{fontSize:15,marginLeft:10}}>$27/Night Avg.</Text>
                    </View>


                
                 </View>
                 


                 <View style={{flexDirection:'row'}}>
                 <View style={{height:100,width:100,marginTop:10}}>
                 <ImageBackground  source={require('../Component/Images/hal.jpg')} style={{ resizeMode: 'contain',width: 90, height:90,}} imageStyle={{borderRadius:15,}}>
                 </ImageBackground>
                 </View>

                    <View  style={{justifyContent:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10}}>Haldwani</Text>
                     <Text style={{fontSize:15,marginLeft:10}}>$40/Night Avg.</Text>
                    </View>

                 </View>

             </View>



             <View style={{flexDirection:'column',height:330,width:250,marginLeft:30,marginRight:80}}>


                <View style={{flexDirection:'row'}}>
                 <View style={{height:100,width:100,marginTop:10}}>
                 <ImageBackground  source={require('../Component/Images/newd.jpg')} style={{ resizeMode: 'contain',width: 90, height:90,}} imageStyle={{borderRadius:15,}}>
                 </ImageBackground>
                 </View>

                    <View  style={{justifyContent:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10}}>New Delhi</Text>
                     <Text style={{fontSize:15,marginLeft:10}}>$24/Night Avg.</Text>
                    </View>


                
                 </View>



                 <View style={{flexDirection:'row'}}>
                 <View style={{height:100,width:100,marginTop:10}}>
                 <ImageBackground  source={require('../Component/Images/kas.jpg')} style={{ resizeMode: 'contain',width: 90, height:90,}} imageStyle={{borderRadius:15,}}>
                 </ImageBackground>
                 </View>

                    <View  style={{justifyContent:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10}}>Naini Tal</Text>
                     <Text style={{fontSize:15,marginLeft:10}}>$44/Night Avg.</Text>
                    </View>


                
                 </View>
                 


                 <View style={{flexDirection:'row'}}>
                 <View style={{height:100,width:100,marginTop:10}}>
                 <ImageBackground  source={require('../Component/Images/kass.jpg')} style={{ resizeMode: 'contain',width: 90, height:90,}} imageStyle={{borderRadius:15,}}>
                 </ImageBackground>
                 </View>

                    <View  style={{justifyContent:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10}}>Kasauli</Text>
                     <Text style={{fontSize:15,marginLeft:10}}>$61/Night Avg.</Text>
                    </View>

                 </View>

             </View>

            </ScrollView>

         </View>

      </View>





   <View style={{height:500,width:'100%',backgroundColor:'#f4f4f4'}}>

        <Text style={{fontSize:25,marginLeft:30,marginTop:20}}>Stay informed</Text>

       



        <View style={{flexDirection:'row',marginTop:20}}>
        
        <ScrollView
                horizontal= {true}
                showsHorizontalScrollIndicator={false} >

            <View style={{flexDirection:'column',height:330,width:250,marginLeft:30}}>


                  <View  style={{justifyContent:'center'}}>
                  
                    <Text style={{fontSize:15}}>For guests</Text>
                   </View>

                  <View style={{borderWidth:.3,marginTop:10,width:250,marginLeft:0,color:'gray'}}></View>



        
                   <TouchableOpacity
                  //   onPress={() => Linking.openURL('https://www.airbnb.co.in/d/howairbnbworks')}
                  onPress = {() => this.props.navigation.navigate('Updates')}

                     style={{justifyContent:'center',marginTop:50}}>
                   <Text style={{fontSize:18,fontWeight:'bold'}}>Updates for travel</Text>
                    <Text style={{fontSize:15}}>Whats you should know</Text>
                   </TouchableOpacity>

                  <View style={{borderWidth:.3,marginTop:10,width:250,marginLeft:0,color:'gray'}}></View>
               
    

                  <View  style={{justifyContent:'center',marginTop:50}}>
                   <Text style={{fontSize:18,fontWeight:'bold'}}>Cancellation Options</Text>
                    <Text style={{fontSize:15}}>Learn whats's covered</Text>
                   </View>

                  <View style={{borderWidth:.3,marginTop:10,width:250,marginLeft:0,color:'gray'}}></View>
                


                  <View  style={{justifyContent:'center',marginTop:50}}>
                   <Text style={{fontSize:18,fontWeight:'bold'}}>Help Centre</Text>
                    <Text style={{fontSize:15}}>Get support</Text>
                   </View>

                  <View style={{borderWidth:.3,marginTop:10,width:250,marginLeft:0,color:'gray'}}></View>


            </View>


            <View style={{flexDirection:'column',height:350,width:250,marginLeft:30}}>


            <View  style={{justifyContent:'center'}}>
                  
                  <Text style={{fontSize:15}}>For hosts</Text>
                 </View>

                <View style={{borderWidth:.3,marginTop:10,width:250,marginLeft:0,color:'gray'}}></View>



        
                   <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.airbnb.co.in/resources/hosting-homes/t/leadership-updates-35')}
                     style={{justifyContent:'center',marginTop:50}}>
                   <Text style={{fontSize:18,fontWeight:'bold'}}>Message from Brain Chesky</Text>
                    <Text style={{fontSize:15}}>Hear from our CEO</Text>
                   </TouchableOpacity>

                  <View style={{borderWidth:.3,marginTop:10,width:250,marginLeft:0,color:'gray'}}></View>
               
    

                  <View  style={{justifyContent:'center',marginTop:50}}>
                   <Text style={{fontSize:18,fontWeight:'bold'}}>Resources</Text>
                    <Text style={{fontSize:15}}>Whats you should know</Text>
                   </View>

                  <View style={{borderWidth:.3,marginTop:10,width:250,marginLeft:0,color:'gray'}}></View>
                


                  <View  style={{justifyContent:'center',marginTop:50}}>
                   <Text style={{fontSize:18,fontWeight:'bold'}}>Providing frontline stays</Text>
                    <Text style={{fontSize:15}}>Learn how to help</Text>
                   </View>

                  <View style={{borderWidth:.3,marginTop:10,width:250,marginLeft:0,color:'gray'}}></View>




            </View>



            <View style={{flexDirection:'column',height:330,width:250,marginLeft:30}}>

            <View  style={{justifyContent:'center'}}>
                  
                  <Text style={{fontSize:15}}>For responders</Text>
                 </View>

                <View style={{borderWidth:.3,marginTop:10,width:250,marginLeft:0,color:'gray'}}></View>



        
                   <View  style={{justifyContent:'center',marginTop:50}}>
                   <Text style={{fontSize:18,fontWeight:'bold'}}>Frontline stays</Text>
                    <Text style={{fontSize:15}}>Learn about our programme</Text>
                   </View>

                  <View style={{borderWidth:.3,marginTop:10,width:250,marginLeft:0,color:'gray'}}></View>
               
    

                  <View  style={{justifyContent:'center',marginTop:50}}>
                   <Text style={{fontSize:18,fontWeight:'bold'}}>Sign up</Text>
                    <Text style={{fontSize:15}}>Check for housing options</Text>
                   </View>

                  <View style={{borderWidth:.3,marginTop:10,width:250,marginLeft:0,color:'gray'}}></View>
                


                  <View  style={{justifyContent:'center',marginTop:50}}>
                   <Text style={{fontSize:18,fontWeight:'bold'}}>Make a donation</Text>
                    <Text style={{fontSize:15}}>Support nonprofit Organization</Text>
                   </View>

                  <View style={{borderWidth:.3,marginTop:10,width:250,marginLeft:0,color:'gray'}}></View>

            </View>




            <View style={{flexDirection:'column',height:330,width:250,marginLeft:30,marginRight:80}}>

            <View  style={{justifyContent:'center'}}>
                  
                  <Text style={{fontSize:15}}>More</Text>
                 </View>

                <View style={{borderWidth:.3,marginTop:10,width:250,marginLeft:0,color:'gray'}}></View>




        
                   <View  style={{justifyContent:'center',marginTop:50}}>
                   <Text style={{fontSize:18,fontWeight:'bold'}}>Newsroom</Text>
                    <Text style={{fontSize:15}}>Latest announcements</Text>
                   </View>

                  <View style={{borderWidth:.3,marginTop:10,width:250,marginLeft:0,color:'gray'}}></View>
               
    

                  <View  style={{justifyContent:'center',marginTop:50}}>
                   <Text style={{fontSize:18,fontWeight:'bold'}}>World Health Organization</Text>
                    <Text style={{fontSize:15}}>Education and updates</Text>
                   </View>

                  <View style={{borderWidth:.3,marginTop:10,width:250,marginLeft:0,color:'gray'}}></View>
                


                  <View  style={{justifyContent:'center',marginTop:50}}>
                   <Text style={{fontSize:18,fontWeight:'bold'}}>Updates for travel</Text>
                    <Text style={{fontSize:15}}>Whats you should know</Text>
                   </View>

                  <View style={{borderWidth:.3,marginTop:10,width:250,marginLeft:0,color:'gray'}}></View>


            </View>

           </ScrollView>

        </View>
  
        </View>


   <View style={{borderWidth:1,marginTop:0}}></View>


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
        height:80,
        width:250,
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