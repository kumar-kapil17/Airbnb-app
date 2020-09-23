import React, {Component} from 'react';
import {View, Text, ScrollView, ImageBackground,Image,TouchableOpacity,StatusBar} from 'react-native';


export default class Delhi extends Component {

  static navigationOptions = {
    headerShown: false
}


  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{flex: 1,backgroundColor:'rgba(29,151,180,100)'}}>
          <StatusBar translucent backgroundColor='transparent' />
        <ScrollView 
          showsVerticalScrollIndicator={false}>
          {/* <ImageBackground
            source={require('./Images/1.jpg')}
            style={{height: '100%', width: '100%'}}> */}

            <TouchableOpacity 
             onPress = {() => this.props.navigation.navigate('Home')}
             style={{height:30,width:35,margin:40,justifyContent:'center',alignItems:'center'}}>

              <Image  source= {require('./Images/back.png')} style={{height:25,width:25,tintColor:'white'}} />

            </TouchableOpacity>


            <View style={{height: 120, width: '100%', marginTop:5}}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'white',
                  marginLeft: 40,
                  letterSpacing: 1,
                }}>
                What are you
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'white',
                  marginLeft: 40,
                  letterSpacing: 1,
                }}>
                looking for?
              </Text>
            </View>

            {/* <View style={{height:120,width:'100%',marginTop:120}}>
            <Text style={{fontSize:30,fontWeight:'bold',color:'white',marginLeft:40,letterSpacing:1}}>What are you </Text>
            <Text style={{fontSize:30,fontWeight:'bold',color:'white',marginLeft:40,letterSpacing:1}}>looking for? </Text>
            </View> */}

            <View
              style={{
                // height: 440,
                // width: '100%',
                flex:1,
                backgroundColor: 'white',
                borderTopLeftRadius: 20,
                borderTopEndRadius: 20,
              }}>


              <View
                style={{
                    flexDirection:'row',
                    // justifyContent:'center',
                  height: 110,
                  width: '80%',
                  alignSelf: 'center',
                  marginTop: 40,
                  borderRadius: 20,
                  backgroundColor: 'white',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                }}>
                <View style={{height:90,width:'67%',marginTop:10,marginLeft:0,justifyContent:'center'}}>
                 <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10,marginTop:0}}>Find a place to stay</Text>
                 <Text style={{marginLeft:10,marginTop:0,color:'gray'}}>Entire homes,rooms & more</Text>
                 </View>

                <View style={{height:90,width:90,marginTop:10,justifyContent:'center'}}> 
                 
                <ImageBackground  source={require('../Component/Images/hom.jpg')} style={{ resizeMode: 'contain',width: 70, height:70,marginLeft:10}} imageStyle={{borderRadius:10}}>
                 </ImageBackground>
                </View>


                </View>




              <View
                style={{
                  flexDirection:'row',
                  height: 110,
                  width: '80%',
                  alignSelf: 'center',
                  marginTop: 20,
                  borderRadius: 20,
                  backgroundColor: 'white',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                }}>

                <View style={{height:90,width:'67%',marginTop:10,marginLeft:0,justifyContent:'center'}}>
                 <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10,marginTop:0}}>Find a monthly stay</Text>
                 <Text style={{marginLeft:10,marginTop:0,color:'gray'}}>Stays for 4+ weeks</Text>
                 </View>

                <View style={{height:90,width:90,marginTop:10,justifyContent:'center'}}> 
                 
                <ImageBackground  source={require('../Component/Images/kit.jpg')} style={{ resizeMode: 'contain',width: 70, height:70,marginLeft:10}} imageStyle={{borderRadius:10}}>
                 </ImageBackground>
                </View>



                </View>

              <View
                style={{
                  flexDirection:'row',
                  height: 110,
                  width: '80%',
                  alignSelf: 'center',
                  marginTop: 20,
                  borderRadius: 20,
                  backgroundColor: 'white',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                }}>

                <View style={{height:90,width:'67%',marginTop:10,marginLeft:0,justifyContent:'center'}}>
                 <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10,marginTop:0}}>Find an experience</Text>
                 <Text style={{marginLeft:10,marginTop:0,color:'gray'}}>Activities hosted by locals</Text>
                 </View>

                <View style={{height:90,width:90,marginTop:10,justifyContent:'center'}}> 
                 
                <ImageBackground  source={require('../Component/Images/suff.jpg')} style={{ resizeMode: 'contain',width: 70, height:70,marginLeft:10}} imageStyle={{borderRadius:10}}>
                 </ImageBackground>
                </View>


                </View>


              <View style={{height:100,width:'100%',}} />
                
              


            </View>


          {/* </ImageBackground> */}
        </ScrollView>

        {/* <View
          style={{
            borderWidth: 0.2,
            backgroundColor: 'gray',
            marginTop: 0,
            width: '100%',
            alignSelf: 'center',
          }}></View> */}


      </View>
    );
  }
}
