import React,{useState} from 'react'
import { View,Text,StyleSheet,Image} from 'react-native'
import { Formik } from 'formik'
import {TextInput,Button,Appbar,RadioButton} from 'react-native-paper'
import * as yup from 'yup'
import { ScrollView } from 'react-native'

const FoodDetails = (props)=>{

    const [checked,setChecked] = useState('first')
    const formValidationSchema = yup.object().shape({
        itemName:yup
        .string()
        .min(3)
        .required("Item name is required"),
        quantity:yup
        .string()
        .required("Quantity is required ")

    })
    const handleBack = ()=>{
        props.prevStep()
    }
    return(
        <ScrollView style={{backgroundColor:"white", flex:1}}>
            
                <Text style = {styles.textStyle}>
                    Food Details
                </Text>
           
           
          
            <View style = {styles.formStyle}>
                <Formik
                    initialValues = {{
                        itemName: props.values.itemName,
                        description : props.values.description,
                        category : props.values.category,
                        quantity : props.values.quantity,
                    }}
                    onSubmit = {(values)=>{
                        values.category = checked
                        console.log(values)
                        props.handleFoodDetails(values)
                        props.nextStep()
                    }}
                    validationSchema = {formValidationSchema}
                >
                 {/* ----------------------------display form components-------------------------------------------- */}
                    {(props)=>(
                        <View>
                             <TextInput
                                mode = "outlined"
                                style = {styles.inputStyle}
                                theme = {theme}
                                label = "Item Name*"
                                value = {props.values.itemName}
                                onChangeText = {props.handleChange("itemName")}
                            ></TextInput> 
                           {/*  ---------------------------------------dislay errors */}
                           <Text style = {styles.errorStyle}>{props.touched.itemName && props.errors.itemName}</Text>
                            <TextInput
                                mode = "outlined"
                                 style = {styles.inputStyle}
                                 theme = {theme}
                                multiline
                                label = "Description"
                                value = {props.values.description}
                                onChangeText = {props.handleChange("description")}
                            ></TextInput>
                            
                            <View style = {{flexDirection:'row'}}>

                                <RadioButton
                                    theme = {theme}
                                     value={props.values.category}
                                     status={ checked === 'Veg' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('Veg')}
                                />
                                <Text style = {{marginTop:7}}>Veg</Text>
                                <RadioButton
                                    value={props.values.category}
                                    status={ checked === 'NonVeg' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('NonVeg')}
                                />
                                <Text style = {{marginTop:7}}>Non-veg</Text>
                            </View>
                            
                            <TextInput
                                 mode = "outlined"
                                 style = {styles.inputStyle}
                                 theme = {theme}
                                label = "Quantity*"
                                value = {props.values.quantity}
                                onChangeText = {props.handleChange("quantity")}
                            ></TextInput>
                            <Text style = {styles.errorStyle}>{props.touched.quantity && props.errors.quantity}</Text>
                            <View style = {{flexDirection:'row',justifyContent:'center'}}>
                                    <Button
                                    icon = "arrow-left"
                                    style = {styles.buttonStyle}
                                    mode = "contained"
                                    onPress = {handleBack}
                                    >
                                        Back
                                    </Button>

                                    <Button
                                    icon = "arrow-right"
                                    style = {styles.buttonStyle}
                                    mode = "contained"
                                    onPress = {props.handleSubmit}
                                    >
                                        Continue
                                    </Button>
                                    
                            </View>
                           
                        </View>
                    )}

                </Formik>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    formStyle:{
        margin:10,
        backgroundColor:"#ffffff",
        padding : 5
    },
    appbarStyle:{
        backgroundColor:"black",
        //position:'relative',
        marginTop:50,
        alignContent:'center',
        justifyContent:'center'
    },
    textStyle:{

        color:"black",
        fontWeight:'bold',
        fontSize:30,
        fontStyle:'italic'
        
    },
    inputStyle:{
        margin:5,
        padding:5,
        backgroundColor:'#ffffff'
    },
    buttonStyle:{
        alignSelf:'center',
        margin:10,
        color:"#ffffff",
        backgroundColor:'black',        
    },
    errorStyle:{
        color:'red',
        fontWeight:'bold',
        marginLeft:12
    }

})
const theme = {
    colors:{
        primary:'#f26005',

        
    }
}

export default FoodDetails