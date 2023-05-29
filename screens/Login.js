import styles from '../style/MainStyle';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const [errorEmail, setErrorEmail] = useState(false)
  const [errorSenha, setErrorSenha] = useState(false)

  
    


    const entrar = () => {

      let error = false
      setErrorEmail(null)
      setErrorSenha(null)
      
       const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
       if(!re.test(String(email).toLowerCase())){
        setErrorEmail('E-mail invalido!')
        error = true
      }

      
      if (email == null){
        setErrorEmail('a senha não pode ser vazio!')
  
      }
  
      if(password == null){ 
        setErrorSenha('a senha não pode ser vazio!')
        error = true
      }
  
     return !error 

    

      navigation.reset({
          index:0,
          routes: [{ name: 'Principal'}]

      })

     

          
      
    }

  const cadastrar = () => {
    navigation.navigate('Cadastro')

  }

  return (
    <View style={styles.container}>
      <Text h1>Bem vindo!</Text>
        
      <Input
          placeholder = 'E-mail'
          leftIcon={{ type: 'font-awesome', name:'envelope'}}
          onChangeText={value =>{
             setEmail(value)
             setErrorEmail(null)

            }}
          keyboardType='email-address'
          errorMessage={errorEmail}
          />

      <Input
          placeholder = 'senha'
          leftIcon={{ type: 'font-awesome', name:'key'}}
          onChangeText={value => {
            
            setPassword(value)
            setErrorSenha(null)
          }}
          secureTextEntry = {true}
          errorMessage={errorSenha}
      />

      <Button
        icon={
          <Icon
            name="check"
            size={15}
            color="white"

          />  

        }
        title='Entrar'    
        buttonStyle={specificStyle.button}
        onPress={() => entrar()}    
        
      />

      <Button
        icon={
          <Icon
            name="user"
            size={10}
            color="white"
            
          />  

        }
        justifyContent= 'center'
        title='Cadastrar'   
        buttonStyle={specificStyle.button} 
        onPress={() => cadastrar()}    
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer:{
    backgroundColor:'#fff'
    
  },

  button:{
  
    
    width:"100%",
    marginTop: 10
    
  },
  

})