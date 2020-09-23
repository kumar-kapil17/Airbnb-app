import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image,ImageBackground,ScrollView, Alert } from 'react-native';

export default class Visit extends Component {

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
               onPress = {() => this.props.navigation.navigate('Trips')}
               style={{height:50,width:50,justifyContent:'center',alignItems:'center',marginLeft:20}}>
               <Image source={require('./Images/back.png')} style={{height:25,width:25}} />
              </TouchableOpacity>
               
          </View>

          <View style={{justifyContent:'center',height:40,width:'100%',marginTop:20,}}>
             <Text style={{fontSize:14,fontWeight:'bold',color:'#008080',marginLeft:75}}>Hosting</Text>
          </View>


    <ScrollView
    showsVerticalScrollIndicator = {false} >

          <View style={{justifyContent:'center',height:40,width:'100%',marginTop:0}}>
             <Text style={{fontSize:16,fontWeight:'bold',marginLeft:25}}>Recommended for you</Text>
          </View>


          <View style={{flexDirection:'row', height:60,width:'100%'}}>
            
             <View style={{justifyContent:'center',height:50,width:70,}}>
                 <Image source = {require('./Images/r.png')} style={{height:30,width:30,tintColor:'pink',marginLeft:25}} />
            </View>          

            <View style={{justifyContent:'center',height:50,width:190,marginLeft:20}}>
                 <Text style={{fontSize:16,color:'black'}}>Popular help articles</Text>
            </View> 


          </View>


          <View style={{justifyContent:'center',height:40,width:'100%',marginTop:0}}>
             <Text style={{fontSize:16,fontWeight:'bold',marginLeft:25}}>Browse all topics</Text>
          </View>



          <View style={{flexDirection:'row', height:60,width:'100%',}}>
            
             <View style={{justifyContent:'center',height:50,width:70,}}>
             <Image source = {require('./Images/open-book.png')} style={{height:30,width:30,tintColor:'pink',marginLeft:25}} />
            </View>          

            <View style={{justifyContent:'center',height:50,width:190,marginLeft:20}}>
            <Text style={{fontSize:16,color:'black'}}>About hosting</Text>
            </View> 


          </View>
          <View style={{borderWidth:.5,backgroundColor:'black',marginTop:0,width:'85%',alignSelf:'center'}}></View>

          
          <View style={{flexDirection:'row', height:60,width:'100%',}}>
            
             <View style={{justifyContent:'center',height:50,width:70,}}>
             <Image source = {require('./Images/calendar.png')} style={{height:30,width:30,tintColor:'pink',marginLeft:25}} />
            </View>          

            <View style={{justifyContent:'center',height:50,width:190,marginLeft:20}}>
            <Text style={{fontSize:16,color:'black'}}>calendar and bookings</Text>
            </View> 


          </View>
          <View style={{borderWidth:.5,backgroundColor:'black',marginTop:0,width:'85%',alignSelf:'center'}}></View>



          <View style={{flexDirection:'row', height:60,width:'100%',}}>
            
             <View style={{justifyContent:'center',height:50,width:70,}}>
             <Image source = {require('./Images/m.png')} style={{height:30,width:30,tintColor:'pink',marginLeft:25}} />
            </View>          

            <View style={{justifyContent:'center',height:50,width:190,marginLeft:20}}>
            <Text style={{fontSize:16,color:'black'}}>Payouts and taxes</Text>
            </View> 


          </View>
          <View style={{borderWidth:.5,backgroundColor:'black',marginTop:0,width:'85%',alignSelf:'center'}}></View>


          <View style={{flexDirection:'row', height:60,width:'100%',}}>
            
             <View style={{justifyContent:'center',height:50,width:70,}}>
             <Image source = {require('./Images/hme.png')} style={{height:30,width:30,tintColor:'pink',marginLeft:25}} />
            </View>          

            <View style={{justifyContent:'center',height:50,width:190,marginLeft:20}}>
            <Text style={{fontSize:16,color:'black'}}>Managing your listing</Text>
            </View> 


          </View>
          <View style={{borderWidth:.5,backgroundColor:'black',marginTop:0,width:'85%',alignSelf:'center'}}></View>


          <View style={{flexDirection:'row', height:60,width:'100%',}}>
            
             <View style={{justifyContent:'center',height:50,width:70,}}>
             <Image source = {require('./Images/folder.png')} style={{height:30,width:30,tintColor:'pink',marginLeft:25}} />
            </View>          

            <View style={{justifyContent:'center',height:50,width:190,marginLeft:20}}>
            <Text style={{fontSize:16,color:'black'}}>Managing your experience</Text>
            </View> 


          </View>
          <View style={{borderWidth:.5,backgroundColor:'black',marginTop:0,width:'85%',alignSelf:'center'}}></View>


          <View style={{flexDirection:'row', height:60,width:'100%',}}>
            
             <View style={{justifyContent:'center',height:50,width:70,}}>
             <Image source = {require('./Images/event.png')} style={{height:30,width:30,tintColor:'pink',marginLeft:25}} />
            </View>          

            <View style={{justifyContent:'center',height:50,width:190,marginLeft:20}}>
            <Text style={{fontSize:16,color:'black'}}>Your reservation</Text>
            </View> 


          </View>
          <View style={{borderWidth:.5,backgroundColor:'black',marginTop:0,width:'85%',alignSelf:'center'}}></View>


          <View style={{flexDirection:'row', height:60,width:'100%',}}>
            
             <View style={{justifyContent:'center',height:50,width:70,}}>
             <Image source = {require('./Images/flag.png')} style={{height:30,width:30,tintColor:'pink',marginLeft:25}} />
            </View>          

            <View style={{justifyContent:'center',height:50,width:190,marginLeft:20}}>
            <Text style={{fontSize:16,color:'black'}}>About the app </Text>
            </View> 


          </View>
          <View style={{borderWidth:.5,backgroundColor:'black',marginTop:0,width:'85%',alignSelf:'center'}}></View>


          <View style={{flexDirection:'row', height:60,width:'100%',}}>
            
             <View style={{justifyContent:'center',height:50,width:70,}}>
             <Image source = {require('./Images/person.png')} style={{height:30,width:30,tintColor:'pink',marginLeft:25}} />
            </View>          

            <View style={{justifyContent:'center',height:50,width:190,marginLeft:20}}>
            <Text style={{fontSize:16,color:'black'}}>Your account</Text>
            </View> 


          </View>
          <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:0,width:'85%',alignSelf:'center'}}></View>


          <View style={{flexDirection:'row', height:60,width:'100%',}}>
            
             <View style={{justifyContent:'center',height:50,width:70,}}>
             <Image source = {require('./Images/h.png')} style={{height:30,width:30,tintColor:'pink',marginLeft:25}} />
            </View>          

            <View style={{justifyContent:'center',height:50,width:190,marginLeft:20}}>
            <Text style={{fontSize:16,color:'black'}}>Responsible hosting</Text>
            </View> 


          </View>
          <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:0,width:'85%',alignSelf:'center'}}></View>


          <View style={{flexDirection:'row', height:60,width:'100%',}}>
            
             <View style={{justifyContent:'center',height:50,width:70,}}>
             <Image source = {require('./Images/open-book.png')} style={{height:30,width:30,tintColor:'pink',marginLeft:25}} />
            </View>          

            <View style={{justifyContent:'center',height:50,width:190,marginLeft:20}}>
            <Text style={{fontSize:16,color:'black'}}>Term and policies</Text>
            </View> 


          </View>
         
       <View style={{flexDirection:'row',alignItems:'center',height:100,width:'100%'}}>
        
         <View style={{justifyContent:'center',height:50,width:180,}}>
             <Text style={{fontSize:16,fontWeight:'bold',marginLeft:25}}>Still need help?</Text>
         </View>

               <TouchableOpacity
               // onPress = {() => Alert.alert('contact us')}
                  onPress = {() => this.props.navigation.navigate('Contact')}
                  style={{justifyContent:'center',alignItems:'center',borderRadius:5,height:50,width:120,backgroundColor:'#008080',marginLeft:40,}}>
                  <Text style={{color:'white',}}>Contact us</Text>
               </TouchableOpacity>

       </View>




    </ScrollView>
      </View>
    );
  }
}
