import React, { useState } from 'react'
import { View,Text,StyleSheet,KeyboardAvoidingView,Image, ScrollView } from 'react-native'
import { Formik } from 'formik'
import {TextInput,Button,Appbar} from 'react-native-paper'
import * as yup from 'yup'



const DonorDetails = (props)=>{

    const [enableShift,setEnableShift] = useState(false)

    //for phone no validation
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    //form validation
    const formValidationSchema = yup.object().shape({
        donorName:yup
        .string()
        .min(3)
        .required("Donor name is required"),
        email: yup
          .string()
          .email("Please enter valid email"),
        phoneNo: yup
        .string()
        .required("Phone no is required")
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(10),
        address:yup
        .string()
        .required("Address is required"),
        
      })
    
    return(
        
        <ScrollView >
            <KeyboardAvoidingView behavior = "position" enabled = {enableShift} style={{justifyContent:"space-around", alignItems:"center"}} >
                <Text style={{ color:"black", fontWeight:"800",fontSize:30, marginTop:20}}>Registration Form</Text>
            <View style = {styles.formStyle}>
                <Formik
                    enableReinitialize
                    initialValues = {{
                        donorName: props.values.donorName,
                        email: props.values.email,
                        phoneNo: props.values.phoneNo,
                        address: props.values.address,
                        city: props.values.city
                    }}
                    validationSchema = {formValidationSchema}
                    onSubmit={(values)=>{
                        console.log(values)
                        props.handleDonorDetails(values);
                        props.nextStep();

                    }}
                >
                    {/* ----------------------------display form components-------------------------------------------- */}
                    {(props)=>(
                        <View>
                            <TextInput
                                style = {styles.inputStyle}
                                theme = {theme}
                                mode = "outlined"
                                label = "Donor Name *"
                                onFocus = {()=>setEnableShift(false)}
                                value = {props.values.donorName}
                                onChangeText = {props.handleChange("donorName")}
                            >
                            </TextInput>
                            {/* display error for donor name */}
                            <Text style = {styles.errorStyle}>{props.touched.donorName && props.errors.donorName}</Text>
                            <TextInput
                                style = {styles.inputStyle}
                                theme = {theme}
                                mode = "outlined"
                                label = "Email ID"
                                onFocus = {()=>setEnableShift(false)}
                                keyboardType = "email-address"
                                value = {props.values.email}
                                onChangeText = {props.handleChange("email")}
                                onBlur = {props.handleBlur('email')}
                            >
                            </TextInput>
                            <Text style = {styles.errorStyle}>{props.touched.email && props.errors.email}</Text>
                            <TextInput
                                style = {styles.inputStyle}
                                theme = {theme}
                                mode = "outlined"
                                label = "Phone No *"
                                onFocus = {()=>setEnableShift(false)}
                                keyboardType = "number-pad"
                                value = {props.values.phoneNo}
                                onChangeText = {props.handleChange("phoneNo")}
                            >
                            </TextInput>
                            <Text style = {styles.errorStyle}>{props.touched.phoneNo && props.errors.phoneNo}</Text>
                            <TextInput
                                style = {styles.inputStyle}
                                theme = {theme}
                                mode = "outlined"
                                label = "Address *"
                                onFocus = {()=>setEnableShift(true)}
                                value = {props.values.address}
                                onChangeText = {props.handleChange("address")}
                            >
                            </TextInput>
                            <Text style = {styles.errorStyle}>{props.touched.address && props.errors.address}</Text>
                            <TextInput
                                style = {styles.inputStyle}
                                theme = {theme}
                                mode = "outlined"
                                label = "City"
                                onFocus = {()=>setEnableShift(true)}
                                value = {props.values.city}
                                onChangeText = {props.handleChange("city")}
                            >
                            </TextInput>
                            <Button
                            icon = "arrow-right"
                            style = {styles.buttonStyle}
                            //theme = {theme}
                            mode = "contained"
                            onPress = {props.handleSubmit}
                            >
                                Next
                            </Button>

                        </View>
                    )}
                    
                </Formik>
            </View>
            </KeyboardAvoidingView>
        </ScrollView>
        
    )
}
const styles = StyleSheet.create({
    formStyle:{
    
        marginTop : 50,
        padding : 10
    },
    appbarStyle:{
        backgroundColor:"white",
        //position:'relative',
       // marginTop:50,
       left:0,
       right:0,
       top:50,
       position:'relative',
        alignContent:'center',
        justifyContent:'center'
    },
    textStyle:{

        color:"#ffffff",
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
        marginTop:10,
        color:"#ffffff",
        backgroundColor:'black'
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
export default DonorDetails