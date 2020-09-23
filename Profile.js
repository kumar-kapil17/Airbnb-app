import React, { Component } from 'react';
import { View, Text,Image ,ScrollView,TouchableOpacity} from 'react-native';


export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        

     <ScrollView showsVerticalScrollIndicator={false}>

         <View style={{flexDirection:'row',height:130,width:'100%',
               shadowColor: "#000",
               borderWidth:.1,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 2,}}>

          <View style={{justifyContent:'center',alignItems:'center',height:80,width:80,margin:30,top:10}}>

              <Image source={require('./Images/pic.png')} style={{height:70,width:70,resizeMode:'center',borderRadius:1000}} />

          </View>

          <TouchableOpacity
            onPress = {() => this.props.navigation.navigate('ViewProfile')}
           style={{height:80,width:120,marginTop:40,marginLeft:-20}}>

            <Text style={{fontSize:30,fontWeight:'bold',textAlign:'left',letterSpacing:1}}>Igent</Text>
            <Text style={{fontSize:15,textAlign:'left',color:'#49d1c2'}}>View profile</Text>

          </TouchableOpacity>

         </View>

         <View style={{flexDirection:'row',height:120,width:'100%',}}>

          <View style={{justifyContent:'center',alignItems:'center',height:80,width:80,margin:30,top:0}}>

              <Image source={require('./Images/salary.png')} style={{height:70,width:70,resizeMode:'center'}} />

          </View>

          <TouchableOpacity
           onPress = {() => this.props.navigation.navigate('Host')}
           style={{height:80,width:230,marginTop:30,marginLeft:-20,}}>

            <Text style={{fontSize:15,textAlign:'left',}}>Earn money from your extra</Text>
            <Text style={{fontSize:15,textAlign:'left',}}>space</Text>
            <Text style={{fontSize:15,textAlign:'left',color:'#49d1c2'}}>Learn more</Text>

          </TouchableOpacity>

         </View>

         <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:0,width:'85%',alignSelf:'center'}}></View>

       <View style={{flexDirection:'row',justifyContent:'space-between',height:100,width:'100%'}}>

        <View style={{justifyContent:'center',alignSelf:'center',marginLeft:35}}>
        <Text style={{fontSize:14,color:'gray'}}>ACCOUNT SETTINGS</Text>
        <Text style={{fontSize:18,color:'gray'}}>Personal information</Text>
        </View>

         <View style={{height:30,width:30,justifyContent:'center',alignSelf:'center',marginRight:35}}>
          <Image source={require('./Images/pro.png')} style={{height:30,width:30,}} />
        </View>

        </View>
        <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:-15,width:'85%',alignSelf:'center'}}></View>

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', height:60,width:'100%',}}>

          <View style={{justifyContent:'center',alignSelf:'center',marginLeft:35}}>
           <Text style={{fontSize:18,textAlign:'center',color:'gray'}}>Payments and payouts</Text>
          </View>

          <View style={{height:30,width:30,justifyContent:'center',alignSelf:'center',marginRight:35}}>
          <Image source={require('./Images/pay.png')} style={{height:30,width:30,}} />
          </View>

        </View>
        <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:0,width:'85%',alignSelf:'center'}}></View>



        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', height:60,width:'100%',}}>

          <View style={{justifyContent:'center',alignSelf:'center'}}>
           <Text style={{fontSize:18,textAlign:'center',color:'gray',marginLeft:40}}>Notifications</Text>
          </View>

          <View style={{height:30,width:30,justifyContent:'center',alignSelf:'center',marginRight:35}}>
          <Image source={require('./Images/bell.png')} style={{height:30,width:30,}} />
          </View>

        </View>
        <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:0,width:'85%',alignSelf:'center'}}></View>




        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', height:60,width:'100%',}}>

        <View style={{justifyContent:'center',alignSelf:'center',marginLeft:35}}>
        <Text style={{fontSize:18,textAlign:'center',color:'gray'}}>Travel for work</Text>
        </View>

        <View style={{height:30,width:30,justifyContent:'center',alignSelf:'center',marginRight:35}}>
        <Image source={require('./Images/airport.png')} style={{height:30,width:30,}} />
        </View>

        </View>
        <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:0,width:'85%',alignSelf:'center'}}></View>

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:100,width:'100%'}}>

        <View style={{justifyContent:'center',alignSelf:'center',marginLeft:35}}>
        <Text style={{fontSize:14,color:'gray'}}>HOSTING</Text>
        <Text style={{fontSize:18,color:'gray'}}>List your space</Text>
        </View>

        <View style={{height:30,width:30,justifyContent:'center',alignSelf:'center',marginRight:35}}>
        <Image source={require('./Images/home.png')} style={{height:30,width:30,}} />
        </View>

        </View>
        <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:-15,width:'85%',alignSelf:'center'}}></View>



        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', height:60,width:'100%',}}>

        <View style={{justifyContent:'center',alignSelf:'center',marginLeft:35}}>
        <Text style={{fontSize:18,textAlign:'center',color:'gray'}}>Learn about hosting</Text>
        </View>

        <View style={{height:30,width:30,justifyContent:'center',alignSelf:'center',marginRight:35}}>
        <Image source={require('./Images/home.png')} style={{height:30,width:30,}} />
        </View>

        </View>
        <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:0,width:'85%',alignSelf:'center'}}></View>



        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', height:60,width:'100%',}}>

        <View style={{justifyContent:'center',alignSelf:'center',marginLeft:35}}>
        <Text style={{fontSize:18,textAlign:'center',color:'gray'}}>Host an experience</Text>
        </View>

        <View style={{height:30,width:30,justifyContent:'center',alignSelf:'center',marginRight:35}}>
        <Image source={require('./Images/molecule.png')} style={{height:30,width:30,}} />
        </View>

        </View>
        <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:0,width:'85%',alignSelf:'center'}}></View>

        <View style={{flexDirection:'row',justifyContent:'space-between',height:100,width:'100%'}}>

        <View style={{justifyContent:'center',alignSelf:'center',marginLeft:35}}>
        <Text style={{fontSize:14,color:'gray'}}>REFERRALS& CREDITS</Text>
        <Text style={{fontSize:18,color:'gray'}}>Invite friends</Text>
        </View>

        <View style={{height:30,width:30,justifyContent:'center',alignSelf:'center',marginRight:35}}>
        <Image source={require('./Images/gift.png')} style={{height:30,width:30,}} />
        </View>

        </View>
        <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:-15,width:'85%',alignSelf:'center'}}></View>

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', height:60,width:'100%',}}>

        <View style={{justifyContent:'center',alignSelf:'center',marginLeft:35}}>
        <Text style={{fontSize:18,textAlign:'center',color:'gray'}}>Get help</Text>
        </View>

        <View style={{height:30,width:30,justifyContent:'center',alignSelf:'center',marginRight:35}}>
        <Image source={require('./Images/question.png')} style={{height:30,width:30,}} />
        </View>

        </View>
        <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:0,width:'85%',alignSelf:'center'}}></View>

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', height:60,width:'100%',}}>

        <View style={{justifyContent:'center',alignSelf:'center',marginLeft:35}}>
        <Text style={{fontSize:18,textAlign:'center',color:'gray'}}>Log out</Text>
        </View>

        <View style={{height:30,width:30,justifyContent:'center',alignSelf:'center',marginRight:35}}>
        <Image source={require('./Images/log.png')} style={{height:30,width:30,}} />
        </View>

        </View>
        {/* <View style={{borderWidth:.5,backgroundColor:'gray',marginTop:0,width:'80%',alignSelf:'center'}}></View> */}

</ScrollView>
      </View>
    );
  }
}









