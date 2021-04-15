import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';


const Screen = (props)=> {
  return (
    <View style={styles.screen}>
      <Text style ={styles.title}>START YOUR GAME</Text>
            <View style={styles.inputContainer}>
                        <Text>Select a Number</Text>
                        <TextInput style={styles.input}></TextInput>
                <View style ={styles.buttonContainer}>
                      <View style={styles.button}> <Button  title="Reset" onPress={()=>{}} color={'purple'}></Button></View> 
                        <View style={styles.button}><Button title="Confirm" onPress={()=>{}} color={'#f7287b'}></Button></View>
                </View>
            
            </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
    screen:{
    flex:1,
    padding:16,
    alignItems:'center',      

},
title:{
    
    fontWeight:'bold',
    fontSize:23,
    paddingVertical:15,
    marginVertical:10,
    
},
inputContainer:{
    width:300,
    maxWidth:'80%',
    alignItems:'center',
   
    //shadow is only used in iOS
    shadowColor:'black',
    shadowOffset:{width:0, height:2},
    shadowRadius:6.5,
    shadowOpacity:0.25,
    //elevation only used in Android
    elevation:7,
    backgroundColor:'white',
    padding:23,
    borderRadius:7
},

buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingVertical:30,
        
    },
    input:{
        height:34,
        width:45,
        borderBottomColor:'gray',
        borderBottomWidth:2,
        marginVertical:13,
        textAlign:'center',
        fontWeight:'bold',
        
    },
    button:{
        width:100,


    }

});

export default Screen;