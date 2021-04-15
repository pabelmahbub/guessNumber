
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props)=>{
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
        width:'100%',
        height:130,
        padding:41,
        backgroundColor:'#f7287b',
        alignItems:'center',
        justifyContent:'center',

  },
  headerTitle:{
        color:'#fff',
        fontSize:36,
        fontWeight:'bold',
        
  }
});

export default Header;