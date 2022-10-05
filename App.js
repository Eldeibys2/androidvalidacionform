import { useState } from "react";
import { StyleSheet,Text,View,TouchableOpacity,TextInput } from "react-native";
import {useForm,Controller, useFormState} from "react-hook-form";// Componentes permiten la validacion de Textinput

export default function App() {
  const {control,handleSubmit, formState: {errors}} = useForm({
      defaultValues:{
        fullname: '',
        email: '',
        password: '',
        salary: '',
        age: '',
        dateofbirth: ''
      }
  })
    const onSubmit = data => console.log(data) 
  return (

  
    <View style={styles.container}>
    <Controller
    control={control}
    rules={{
      required:true,
      pattern:/^[A-Za-zÑñáéíóú ]+$/i, //letras y espacios
      maxLength:30,
      minLength:5
    }}
    render={({field: {onChange,onBlur, value}})=>(
      <TextInput
        style={styles.inputs}
        placeholder="Nombre Completo"
        onChange={onChange}
        onBlur= {onBlur}
        value = {value}
      />
    )}
    name = 'fullname'//estado a validar
    />
    {errors.fullname?.type == "required" && <Text style={{color:'red'}}>El nombre es obligatorio</Text>}
    {errors.fullname?.type == "pattern" && <Text style={{color:'red'}}>El nombre solo debe tener letras y espacios</Text>}
    {errors.fullname?.type == "maxLength" && <Text style={{color:'red'}}>El nombre no puede exceder de 30 caracteres</Text>}
    {errors.fullname?.type == "minLength" && <Text style={{color:'red'}}>El nombre debe de tener minimo 5 caracteres </Text>}
    <Controller
    control={control}
    rules={{
      required:true,
      pattern:/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ //letras y espacios
      
      
    }}
    render={({field: {onChange,onBlur, value}})=>(
      <TextInput
        style={styles.inputs}
        placeholder="Correo Electronico"
        onChange={onChange}
        onBlur= {onBlur}
        value = {value}
      />
    )}
    name = 'email'//estado a validar
    />
    {errors.email?.type == "required" && <Text style={{color:'red'}}>El Correo es obligatorio</Text>}
    {errors.email?.type == "pattern" && <Text style={{color:'red'}}>Ingrese un correo valido</Text>}

    <Controller
    control={control}
    rules={{
      required:true,
      pattern:/^[0-9]*(\.?)[ 0-9]+$/,//letras y espacios
      max:10000000,
      min:2000000

      
    }}
    render={({field: {onChange,onBlur, value}})=>(
      <TextInput
        style={styles.inputs}
        placeholder="Salario"
        onChange={onChange}
        onBlur= {onBlur}
        value = {value}
      />
    )}
    name = 'salary'//estado a validar
    />
    {errors.salary?.type == "required" && <Text style={{color:'red'}}>El Salario es obligatorio</Text>}
    {errors.salary?.type == "pattern" && <Text style={{color:'red'}}>Ingrese un salario con numeros</Text>}
    {errors.salary?.type == "max" && <Text style={{color:'red'}}>El salario no puede exceder los 10 millones de pesos</Text>}
    {errors.salary?.type == "min" && <Text style={{color:'red'}}>El salario no puede ser menor a 2 millones de pesos</Text>}
    <Controller
    control={control}
    rules={{
      required:true,
      pattern:/^[0-9]+$/,//letras y espacios
      max:35,
      min:18

      
    }}
    render={({field: {onChange,onBlur, value}})=>(
      <TextInput
        style={styles.inputs}
        placeholder="Edad"
        onChange={onChange}
        onBlur= {onBlur}
        value = {value}
      />
    )}
    name = 'age'//estado a validar
    />
    {errors.age?.type == "required" && <Text style={{color:'red'}}>La edad es obligatoria</Text>}
    {errors.age?.type == "pattern" && <Text style={{color:'red'}}>Ingrese la edad solo con numeros</Text>}
    {errors.age?.type == "max" && <Text style={{color:'red'}}>La edad no puede exceder a los 35 años</Text>}
    {errors.age?.type == "min" && <Text style={{color:'red'}}>La edad no puede ser menor a los 18 años</Text>}

    <Controller
    control={control}
    rules={{
      required:true,
      pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/,//letras y espacios
  

      
    }}
    render={({field: {onChange,onBlur, value}})=>(
      <TextInput
        style={styles.inputs}
        placeholder="Contraseña"
        secureTextEntry= {true}
        onChange={onChange}
        onBlur= {onBlur}
        value = {value}
      />
    )}
    name = 'password'//estado a validar
    />
    {errors.password?.type == "required" && <Text style={{color:'red'}}>La contraseña es obligatoria</Text>}
    {errors.password?.type == "pattern" && <Text style={{color:'red'}}> entre 8 y 15 caracteres al menos un caracter especial</Text>}
    <Controller
    control={control}
    rules={{
      required:true,
      pattern:/^([012][1-9]|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$///letras y espacios
  

      
    }}
    render={({field: {onChange,onBlur, value}})=>(
      <TextInput
        style={styles.inputs}
        placeholder="Fecha de naci: dd/mm/aaaa"
        onChange={onChange}
        onBlur= {onBlur}
        value = {value}
      />
    )}
    name = 'dateofbirth'//estado a validar
    />
    {errors.dateofbirth?.type == "required" && <Text style={{color:'red'}}>La fecha de nacimiento es obligatoria</Text>}
    {errors.dateofbirth?.type == "pattern" && <Text style={{color:'red'}}> entre 8 y 15 caracteres al menos un caracter especial</Text>}
  
  



    <TouchableOpacity
    style = {{backgroundColor:'green',padding:10,borderRadius:10,marginTop:20,width:100}}    
    onPress = {handleSubmit(onSubmit)}
    >
        <Text style = {{color:'white',textAlign:'center'}}>Enviar</Text>

    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputs:{
    paddding:10,
    borderWidth:1,
    borderColor:'green',
    textAlign:'center',
    borderRadius: 10,
    color: 'black',
    marginBottom: 5
  }
});
