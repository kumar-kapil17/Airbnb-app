import React, { Component } from 'react';
import { View, Text,ImageBackground,ScrollView ,StatusBar,StyleSheet,Image,TouchableOpacity} from 'react-native';

export default class Main extends Component {
  
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
      {/* <StatusBar translucent backgroundColor='transparent' /> */}


           



        <ScrollView
        showsVerticalScrollIndicator={false}>
          <View style={{height:550,width:'100%',}}> 

               

              <ImageBackground source={require('./Images/ni1.jpg')} style={{height:550,width:'100%'}}>
            
              <TouchableOpacity 
                  onPress = {() => this.props.navigation.navigate('Home')}
                  style={{height:30,width:35,margin:30,justifyContent:'center',alignItems:'center'}}>

                  <Image  source= {require('./Images/back.png')} style={{height:25,width:25,tintColor:'white'}} />

            </TouchableOpacity>

                 <Text style={{fontSize:35,fontWeight:'bold',color:'white',textAlign:'center',marginTop:100}}>Unique stays </Text>
                 <Text style={{fontSize:16,color:'white',textAlign:'center',marginTop:10}}>Boats,treehouses,and more-these </Text>
                 <Text style={{fontSize:16,color:'white',textAlign:'center'}} >spaces are more than just a place to sleep. </Text>

              </ImageBackground>

          </View>


          <Text style={{fontSize:24,fontWeight:'900',color:'black',marginLeft:25,marginTop:30}}>Explore all types of unique stays</Text>  

          <View style={{flexDirection:'row',height:200,width:'100%',marginTop:30}}>

           <ScrollView
              horizontal= {true}
              showsHorizontalScrollIndicator={false}>


             <View style={{flexDirection:'column',height:150,width:130,alignSelf:'center',marginLeft:25,backgroundColor:'white',
                        borderRadius:10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,}}>

                <View style={{height:50,width:'100%',marginTop:45,justifyContent:'center',alignItems:'flex-start'}}>
                   <Image source = {require('./Images/treehouse.png')} style={{height:30,width:30,marginLeft:10}}  />
                </View>

                <View style={{height:50,width:'100%',justifyContent:'center',alignItems:'flex-start'}}>
                      <Text style={{fontSize:16,fontWeight:'900',marginLeft:10}}>Treehouses</Text>
                </View>
               




            </View>

            <View style={{height:150,width:130,alignSelf:'center',marginLeft:10,backgroundColor:'white',borderRadius:10,shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,}}>

                      
                <View style={{height:50,width:'100%',marginTop:45,justifyContent:'center',alignItems:'flex-start'}}>
                      <Image source = {require('./Images/boat.png')} style={{height:30,width:30,marginLeft:10}}  />
                </View>

                <View style={{height:50,width:'100%',justifyContent:'center',alignItems:'flex-start'}}>
                      <Text style={{fontSize:16,fontWeight:'900',marginLeft:10}}>Boats</Text>
                </View>



            </View>

            <View style={{height:150,width:130,alignSelf:'center',marginLeft:10,backgroundColor:'white',borderRadius:10,shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,}}>

                <View style={{height:50,width:'100%',marginTop:45,justifyContent:'center',alignItems:'flex-start'}}>
                   <Image source = {require('./Images/camper.png')} style={{tintColor:'black',height:30,width:30,marginLeft:10}}  />
                </View>

                <View style={{height:50,width:'100%',justifyContent:'center',alignItems:'flex-start'}}>
                      <Text style={{fontSize:16,fontWeight:'900',marginLeft:10}}>Motorhomes</Text>
                </View>



            </View>
            

            <View style={{height:150,width:130,alignSelf:'center',marginLeft:10,backgroundColor:'white',borderRadius:10,shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,}}>


                <View style={{height:50,width:'100%',marginTop:45,justifyContent:'center',alignItems:'flex-start'}}>
                   <Image source = {require('./Images/amusement-park.png')} style={{height:30,width:30,marginLeft:10}}  />
                </View>

                <View style={{height:50,width:'100%',justifyContent:'center',alignItems:'flex-start'}}>
                      <Text style={{fontSize:16,fontWeight:'900',marginLeft:10}}>Castles</Text>
                </View>



            </View>


            <View style={{height:150,width:130,alignSelf:'center',marginLeft:10,backgroundColor:'white',borderRadius:10,shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,}}>

                <View style={{height:50,width:'100%',marginTop:45,justifyContent:'center',alignItems:'flex-start'}}>
                   <Image source = {require('./Images/barn.png')} style={{height:30,width:30,marginLeft:10}}  />
                </View>

                <View style={{height:50,width:'100%',justifyContent:'center',alignItems:'flex-start'}}>
                      <Text style={{fontSize:16,fontWeight:'900',marginLeft:10}}>Barns</Text>
                </View>



            </View>


            <View style={{height:150,width:130,alignSelf:'center',marginLeft:10,backgroundColor:'white',borderRadius:10,shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,}}>

                <View style={{height:50,width:'100%',marginTop:45,justifyContent:'center',alignItems:'flex-start'}}>
                   <Image source = {require('./Images/facade.png')} style={{height:30,width:30,marginLeft:10}}  />
                </View>

                <View style={{height:50,width:'100%',justifyContent:'center',alignItems:'flex-start'}}>
                      <Text style={{fontSize:16,fontWeight:'900',marginLeft:10}}>Tinny houses</Text>
                </View>


            </View>



            <View style={{height:150,width:130,alignSelf:'center',marginLeft:10,marginRight:25,backgroundColor:'white',borderRadius:10,shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,}}>

                <View style={{height:50,width:'100%',marginTop:45,justifyContent:'center',alignItems:'flex-start'}}>
                   <Image source = {require('./Images/farm.png')} style={{height:30,width:30,marginLeft:10}}  />
                </View>

                <View style={{height:50,width:'100%',justifyContent:'center',alignItems:'flex-start'}}>
                      <Text style={{fontSize:16,fontWeight:'900',marginLeft:10}}>Farm stays</Text>
                </View>



            </View>






     </ScrollView>

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
      height:150,
      width:130,
      borderRadius:10,
      alignSelf:'center',
      marginLeft:25,
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