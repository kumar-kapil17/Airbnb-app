import React, { Component } from 'react';
import { View, Text,StatusBar,TouchableOpacity, ImageBackground,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Online extends Component {

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
          <StatusBar translucent backgroundColor='transparent' />
          
          <ScrollView
           showsVerticalScrollIndicator = {false} >
            <View style={{height:462,width:'100%',}}>
              <ImageBackground source = {require('./Images/on.jpg')} style={{height:460,width:'100%',resizeMode:'cover'}} >
                 <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:50,width:'100%',marginTop:35}}>
                    <TouchableOpacity
                     onPress = {() => this.props.navigation.navigate('Home')}
                     style={{justifyContent:'center',alignItems:'center',height:40,width:40,borderRadius:100,backgroundColor:'white',marginLeft:15}}>
                       <Image source = {require('./Images/back.png')} style={{height:25,width:25}} />
                    </TouchableOpacity>

                    <View style={{justifyContent:'center',alignItems:'center',height:40,width:40,borderRadius:100,backgroundColor:'white',marginRight:15}}>
                    <Image source = {require('./Images/filter.png')} style={{height:25,width:25}} />
                    </View>
                 </View>
              </ImageBackground>

              <View style={{height:120,width:'100%',marginTop:-115}}>
                 <Text style={{fontSize:50,fontWeight:'bold',marginLeft:25}}>Online</Text>
                 <Text  style={{fontSize:50,fontWeight:'bold',marginLeft:25,marginTop:-20}}>Experiences</Text>
             </View>


          </View>

          <Text style={{fontSize:18,color:'#454545',marginLeft:25}}>Find unique activities led by one-of-a-</Text>
          <Text style={{fontSize:18,color:'#454545',marginLeft:25}}>kind hosts - all without leaving home.</Text>


          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:80,width:'100%'}}>
              
              <ScrollView 
              horizontal = {true}
                showsHorizontalScrollIndicator = {false}>

         
                    <View style={{justifyContent:'center',alignItems:'center',height:40,width:80,borderWidth:.5,borderColor:'gray',borderRadius:20,marginLeft:25}}>
                         <Text>Dates</Text>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:40,width:160,borderWidth:.5,borderColor:'gray',borderRadius:20,marginLeft:10}}>
                         <Text>Great for groups</Text>
                         <Image source = {require('./Images/plus.png')} style = {{height:15,width:15,marginLeft:15}} />
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:40,width:160,borderWidth:.5,borderColor:'gray',borderRadius:20,marginLeft:10}}>
                         <Text>Family-friendly</Text>
                         <Image source = {require('./Images/plus.png')} style = {{height:15,width:15,marginLeft:15}} />
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:40,width:120,borderWidth:.5,borderColor:'gray',borderRadius:20,marginLeft:10}}>
                         <Text>Animals</Text>
                         <Image source = {require('./Images/plus.png')} style = {{height:15,width:15,marginLeft:15}} />
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:40,width:140,borderWidth:.5,borderColor:'gray',borderRadius:20,marginLeft:10}}>
                         <Text>Art & writing</Text>
                         <Image source = {require('./Images/plus.png')} style = {{height:15,width:15,marginLeft:15}} />
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:40,width:120,borderWidth:.5,borderColor:'gray',borderRadius:20,marginLeft:10}}>
                         <Text>Baking</Text>
                         <Image source = {require('./Images/plus.png')} style = {{height:15,width:15,marginLeft:15}} />
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:40,width:140,borderWidth:.5,borderColor:'gray',borderRadius:20,marginLeft:10}}>
                         <Text>Cooking</Text>
                         <Image source = {require('./Images/plus.png')} style = {{height:15,width:15,marginLeft:15}} />
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:40,width:120,borderWidth:.5,borderColor:'gray',borderRadius:20,marginLeft:10}}>
                         <Text>Dance</Text>
                         <Image source = {require('./Images/plus.png')} style = {{height:15,width:15,marginLeft:15}} />
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:40,width:140,borderWidth:.5,borderColor:'gray',borderRadius:20,marginLeft:10}}>
                         <Text>Drinks</Text>
                         <Image source = {require('./Images/plus.png')} style = {{height:15,width:15,marginLeft:15}} />
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:40,width:160,borderWidth:.5,borderColor:'gray',borderRadius:20,marginLeft:10}}>
                         <Text>Entertainment</Text>
                         <Image source = {require('./Images/plus.png')} style = {{height:15,width:15,marginLeft:15}} />
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:40,width:120,borderWidth:.5,borderColor:'gray',borderRadius:20,marginLeft:10,marginRight:25}}>
                         <Text>Fitness</Text>
                         <Image source = {require('./Images/plus.png')} style = {{height:15,width:15,marginLeft:15}} />
                    </View>
         
              </ScrollView>

          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:50,width:'100%',}}>
            
             <Text style={{fontSize:22,fontWeight:'bold',marginLeft:25}}>Top sellers</Text>
             <Image source = {require('./Images/shr.png')} style={{height:18,width:18,marginRight:25}} />

          </View>

    <View style={{height:380,width:'100%',marginTop:20}}>
             
          <ScrollView
                    horizontal= {true}
                    showsHorizontalScrollIndicator={false} >


              <View style={{flexDirection:'row',height:320,width:'100%',}}>
                 
                 <View style={{flexDirection:'column',height:220,width:150,marginLeft:25,marginTop:20,}}>
                     
                       <Image source={require('./Images/seller.jpg')} style={{height:220,width:150,borderRadius:10,resizeMode:'cover'}} />

                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',height:20,width:230,marginTop:10}}>
                        <Image source={require('./Images/star.png')} style={{height:10,width:10,tintColor:'red',resizeMode:'cover'}} />
                        <Text style={{color:'gray',textAlign:'center',marginLeft:5}}>4.96(2957).Portugal</Text> 
                        </View> 

                         <Text style={{fontSize:15}}>Sangria and Secrets</Text>
                         <Text style={{fontSize:15}}>with Drag Queens</Text>
                         <Text style={{fontSize:15,fontWeight:'bold'}}>From $23/person</Text>

                 </View>


                 <View style={{flexDirection:'column',height:220,width:150,marginLeft:10,marginTop:20}}>
                     
                     <Image source={require('./Images/seller2.jpg')} style={{height:220,width:150,borderRadius:10,resizeMode:'cover'}} />

                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',height:20,width:230,marginTop:10}}>
                        <Image source={require('./Images/star.png')} style={{height:10,width:10,tintColor:'red',resizeMode:'cover'}} />
                        <Text style={{color:'gray',textAlign:'center',marginLeft:5}}>4.97(1482).Mexico</Text> 
                        </View> 

                         <Text style={{fontSize:15}}>Coffee Masterclass</Text>
                         <Text style={{fontSize:15,fontWeight:'bold'}}>From $36/person</Text>

                 </View>


                 <View style={{flexDirection:'column',height:220,width:150,marginLeft:10,marginTop:20}}>
                     
                     <Image source={require('./Images/seller3.jpg')} style={{height:220,width:150,borderRadius:10,resizeMode:'cover'}} />

                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',height:20,width:230,marginTop:10}}>
                        <Image source={require('./Images/star.png')} style={{height:10,width:10,tintColor:'red',resizeMode:'cover'}} />
                        <Text style={{color:'gray',textAlign:'center',marginLeft:5}}>4.97(531).U.K</Text> 
                        </View> 

                 
                         <Text style={{fontSize:15}}>Secret of Magic</Text>
                         <Text style={{fontSize:15,fontWeight:'bold'}}>From $10/person</Text>

                 </View>


                 <View style={{flexDirection:'column',height:220,width:150,marginLeft:10,marginTop:20}}>
                     
                     <Image source={require('./Images/seller4.jpg')} style={{height:220,width:150,borderRadius:10,resizeMode:'cover'}} />

                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',height:20,width:230,marginTop:10}}>
                        <Image source={require('./Images/star.png')} style={{height:10,width:10,tintColor:'red',resizeMode:'cover'}} />
                        <Text style={{color:'gray',textAlign:'center',}}>4.9(1350).Czech</Text> 
                        </View> 

                         <Text style={{fontSize:15}}>Follow a Plauge Doctor</Text>
                         <Text style={{fontSize:15}}>Through Prague</Text>
                         <Text style={{fontSize:15,fontWeight:'bold'}}>From $15/person</Text>

                 </View>


                 <View style={{flexDirection:'column',height:220,width:150,marginLeft:10,marginTop:20,}}>
                     
                     <Image source={require('./Images/sel.png')} style={{height:220,width:150,borderRadius:10,resizeMode:'cover'}} />

                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',height:20,width:230,marginTop:10}}>
                        <Image source={require('./Images/star.png')} style={{height:10,width:10,tintColor:'red',resizeMode:'cover'}} />
                        <Text style={{color:'gray',textAlign:'center',marginLeft:5}}>4.97(897).Mexico</Text> 
                        </View> 

                         <Text style={{fontSize:15}}>Cook Mexican Street</Text>
                         <Text style={{fontSize:15}}>Tacos with a Pro Chef</Text>
                         <Text style={{fontSize:15,fontWeight:'bold'}}>From $15/person</Text>

                 </View>


                 <View style={{flexDirection:'column',height:220,width:150,marginLeft:10,marginTop:20,}}>
                     
                     <Image source={require('./Images/seller6.jpg')} style={{height:220,width:150,borderRadius:10,resizeMode:'cover'}} />

                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',height:20,width:230,marginTop:10}}>
                        <Image source={require('./Images/star.png')} style={{height:10,width:10,tintColor:'red',resizeMode:'cover'}} />
                        <Text style={{color:'gray',textAlign:'center',marginLeft:5}}>4.98(214).Japan</Text> 
                        </View> 

                         <Text style={{fontSize:15}}>Family Magic Show and</Text>
                         <Text style={{fontSize:15}}>Magic Lesson</Text>
                         <Text style={{fontSize:15,fontWeight:'bold'}}>From $12/person</Text>

                 </View>


                 <View style={{flexDirection:'column',height:220,width:150,marginLeft:10,marginTop:20,marginRight:25}}>
                     
                     <Image source={require('./Images/seller7.jpg')} style={{height:220,width:150,borderRadius:10,resizeMode:'cover'}} />

                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',height:20,width:230,marginTop:10}}>
                        <Image source={require('./Images/star.png')} style={{height:10,width:10,tintColor:'red',resizeMode:'cover'}} />
                        <Text style={{color:'gray',textAlign:'center',marginLeft:5}}>4.99(797).Spain</Text> 
                        </View> 

                         <Text style={{fontSize:15}}>Secret Phone Tricks by</Text>
                         <Text style={{fontSize:15}}>a NetGeo Winner</Text>
                         <Text style={{fontSize:15,fontWeight:'bold'}}>From$10/person</Text>

                 </View>

              </View>
            </ScrollView>


          </View>


          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:50,width:'100%',}}>
            
             <Text style={{fontSize:22,fontWeight:'bold',marginLeft:25}}>New this week</Text>
             <Image source = {require('./Images/shr.png')} style={{height:18,width:18,marginRight:25}} />

          </View>


          <View style={{height:390,width:'100%',}}>

            <ScrollView
             horizontal= {true}
             showsHorizontalScrollIndicator={false}
             >

                 <View style={{flexDirection:'row',height:345,width:'100%',}}>

                   <View style={{height:345,width:270,marginLeft:25,justifyContent:'center'}}>
                    <ImageBackground source = {require('./Images/on1.jpg')} style={{height:342,width:268,resizeMode:'cover'}} imageStyle ={{borderRadius:20}}>
                       <Text style={{marginLeft:15,marginTop:10}}>COLLECTION</Text>
                       <Text style={{fontSize:25,marginLeft:15,marginTop:5}}>The show must go online</Text>
                       <View style={{justifyContent:'center',alignItems:'center',marginLeft:15,marginTop:180,height:40,width:80,backgroundColor:'white',borderRadius:10}}>
                           <Text>Show all</Text>
                       </View>
                    </ImageBackground>
                   </View>

                   <View style={{height:345,width:270,marginLeft:15,justifyContent:'center'}}>
                    <ImageBackground source = {require('./Images/on2.jpg')} style={{height:342,width:268,resizeMode:'cover'}} imageStyle ={{borderRadius:20}}>
                    <Text style={{marginLeft:15,marginTop:10,color:'white'}}>COLLECTION</Text>
                       <Text style={{fontSize:25,marginLeft:15,marginTop:5,color:'white'}}>Most popular around the world</Text>
                       <View style={{justifyContent:'center',alignItems:'center',marginLeft:15,marginTop:180,height:40,width:80,backgroundColor:'white',borderRadius:10}}>
                           <Text>Show all</Text>
                       </View>
                    </ImageBackground>
                   </View>


                   <View style={{height:345,width:270,marginLeft:15,justifyContent:'center'}}>
                    <ImageBackground source = {require('./Images/on3.jpg')} style={{height:342,width:268,resizeMode:'cover'}} imageStyle ={{borderRadius:20}}>
                    <Text style={{marginLeft:15,marginTop:10,color:'white'}}>COLLECTION</Text>
                       <Text style={{fontSize:25,marginLeft:15,marginTop:5,color:'white'}}>Great for team building</Text>
                       <View style={{justifyContent:'center',alignItems:'center',marginLeft:15,marginTop:180,height:40,width:80,backgroundColor:'white',borderRadius:10}}>
                           <Text>Show all</Text>
                       </View>
                    </ImageBackground>
                   </View>


                   <View style={{height:345,width:270,marginLeft:15,justifyContent:'center'}}>
                    <ImageBackground source = {require('./Images/on4.jpg')} style={{height:342,width:268,resizeMode:'cover'}} imageStyle ={{borderRadius:20}}>
                    <Text style={{marginLeft:15,marginTop:10,color:'white'}}>COLLECTION</Text>
                       <Text style={{fontSize:25,marginLeft:15,marginTop:5,color:'white'}}>Connect with the world's best athletes</Text>
                       <View style={{justifyContent:'center',alignItems:'center',marginLeft:15,marginTop:180,height:40,width:80,backgroundColor:'white',borderRadius:10}}>
                           <Text>Show all</Text>
                       </View>
                    </ImageBackground>
                   </View>


                   <View style={{height:345,width:270,marginLeft:15,justifyContent:'center'}}>
                    <ImageBackground source = {require('./Images/on5.jpg')} style={{height:342,width:268,resizeMode:'cover'}} imageStyle ={{borderRadius:20}}>
                    <Text style={{marginLeft:15,marginTop:10,color:'white'}}>COLLECTION</Text>
                       <Text style={{fontSize:25,marginLeft:15,marginTop:5,color:'white'}}>Fun for the family</Text>
                       <View style={{justifyContent:'center',alignItems:'center',marginLeft:15,marginTop:180,height:40,width:80,backgroundColor:'white',borderRadius:10}}>
                           <Text>Show all</Text>
                       </View>   
                    </ImageBackground>
                   </View>


                   <View style={{height:345,width:270,marginLeft:15,justifyContent:'center'}}>
                    <ImageBackground source = {require('./Images/seller8.jpg')} style={{height:342,width:268,resizeMode:'contain'}} imageStyle ={{borderRadius:20}}>
                    <Text style={{marginLeft:15,marginTop:10,color:'white'}}>COLLECTION</Text>
                       <Text style={{fontSize:25,marginLeft:15,marginTop:5,color:'white'}}>Cook with Award-Winning Chefs</Text>
                       <View style={{justifyContent:'center',alignItems:'center',marginLeft:15,marginTop:180,height:40,width:80,backgroundColor:'white',borderRadius:10}}>
                           <Text>Show all</Text>
                       </View>
                    </ImageBackground>
                   </View>


                   <View style={{height:345,width:270,marginLeft:15,marginRight:25,justifyContent:'center'}}>
                    <ImageBackground source = {require('./Images/seller9.jpg')} style={{height:342,width:268,resizeMode:'contain'}} imageStyle ={{borderRadius:20}}>
                    <Text style={{marginLeft:15,marginTop:10,color:'white'}}>COLLECTION</Text>
                       <Text style={{fontSize:25,marginLeft:15,marginTop:5,color:'white'}}>Meet Tik Tok top creators</Text>
                       <View style={{justifyContent:'center',alignItems:'center',marginLeft:15,marginTop:180,height:40,width:80,backgroundColor:'white',borderRadius:10}}>
                           <Text>Show all</Text>
                       </View>
                    </ImageBackground>
                   </View>


                 </View>
            </ScrollView>

          </View>

           

         
    </ScrollView>
    
      </View>
    );
  }
}
