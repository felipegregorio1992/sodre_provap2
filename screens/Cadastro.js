import styles from '../style/MainStyle';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Cadastro({navigation}) {

  const [email, setEmail] = useState(null)
  const [nome, setNome] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [telefone, setTelefone] = useState(null)

  const [isSelected, setSelected] = useState(false)

  const [errorEmail, setErrorEmail] = useState(false)
  const [errorNome, setErrorNome] = useState(false)
  const [errorCpf, setErrorCpf] = useState(false)
  const [errorTelefone, setErrorTelefone] = useState(false)

  const validar = () => {
    let error = false
    setErrorEmail(null)
    setErrorNome(null)
    setErrorTelefone(null)
    setErrorCpf(null)

     const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
     if(!re.test(String(email).toLowerCase())){
      setErrorEmail('E-mail invalido!')
      error = true
    }
    if(cpf == null){
      setErrorCpf('O CPF não pode ser vazio!')
      error = true
    }
    if(telefone == null){
      setErrorTelefone('O telefone não pode ser vazio!')
      error = true
    }
    if(nome == null){ 
      setErrorNome('O nome não pode ser vazio!')
      error = true
    }

    return !error

  }

  const salvar = () =>{
    if(validar()){
    console.log('salvou')
    }
    
  }

  return (
    <View style={styles.container}>
      <Text h1>cadastre-se</Text>
        
      <Input
          placeholder = 'E-mail'
          onChangeText={value => {setEmail(value)
          setErrorEmail(null)
          
          }}
          keyboardType='email-address'
          errorMessage={errorEmail}
          />

      <Input
          placeholder = 'Nome'
          onChangeText={value => {
          setNome(value)
          setErrorNome(null)

          }}
          errorMessage={errorNome}
          
          />

       <Input
          placeholder = 'CPF'
          onChangeText={value =>{
            setCpf(value)
          setErrorCpf(null)
          }}
          keyboardType='number-pad'
          returnKeyType='done'
          errorMessage={errorCpf}
          />

       <Input
          placeholder = 'Telefone'
          onChangeText={value => {
            setTelefone(value)
            setErrorTelefone(null)
          }}
          keyboardType='phone-pad'
          returnKeyType='done'
          errorMessage={errorTelefone}
          />

        <CheckBox 
        title='Eu estou ciente dos termos de uso deste programa!'
        checkedIcon='check'
        uncheckedIcon='square-o'
        checkedColor='green'
        uncheckedColor='red'
        checked={isSelected}

        onPress={() => setSelected(!isSelected)}


        />


      
      <Button
        icon={
          <Icon
            name="check"
            size={15}
            color="white"

          />  

        }
        title='Salvar'    
        buttonStyle={specificStyle.button}
        onPress={() => salvar()}    
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

  }

})