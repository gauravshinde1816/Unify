import React from 'react'
import { View,Text,StyleSheet, Alert, ScrollView } from 'react-native'
import { Button,Appbar,Card} from 'react-native-paper'
import { MaterialIcons,FontAwesome5,FontAwesome,Entypo,Ionicons } from '@expo/vector-icons'


const Submit = (props,) => {
    const handleBack = ()=>{
        props.prevStep()
    }
    const submitData=()=>{
        Alert.alert("Details Submitted")
        props.goBack()
      
        
    }
    return(
            
            <ScrollView containerStyle = {styles.containerStyle}>
                <Text style = {styles.textStyle}>
                    Final Step!
                </Text>
                  <Card style = {styles.cardStyle}>
                      <View style = {styles.cardViewStyle}>
                      <FontAwesome5 name="user-alt" size={25} color="black" />
                      <Text style = {styles.infoStyle}>{props.values.donorName}</Text>
                      </View>   
                  </Card>
                  <Card style = {styles.cardStyle}>
                      <View style = {styles.cardViewStyle}>
                      <MaterialIcons name="email" size={25} color="black" />
                      <Text style = {styles.infoStyle}>{props.values.email}</Text>
                      </View>   
                  </Card>
                  <Card style = {styles.cardStyle}>
                      <View style = {styles.cardViewStyle}>
                      <FontAwesome name="phone" size={25} color="black" />
                      <Text style = {styles.infoStyle}>{props.values.phoneNo}</Text>
                      </View>   
                  </Card>
                  <Card style = {styles.cardStyle}>
                      <View style = {styles.cardViewStyle}>
                      <Entypo name="address" size={25} color="black" />
                      <Text style = {styles.infoStyle}>{props.values.address}</Text>
                      </View>   
                  </Card>
                  <Card style = {styles.cardStyle}>
                      <View style = {styles.cardViewStyle}>
                      <FontAwesome5 name="city" size={25} color="black" />
                      <Text style = {styles.infoStyle}>{props.values.city}</Text>
                      </View>   
                  </Card>
                  <Card style = {styles.cardStyle}>
                      <View style = {styles.cardViewStyle}>
                      <Ionicons style = {styles.iconStyle} name="fast-food" size={25} color="black" />
                      <Text style = {styles.infoStyle}>{props.values.itemName}</Text>
                      </View>   
                  </Card>
                  <Card style = {styles.cardStyle}>
                      <View style = {styles.cardViewStyle}>
                      <MaterialIcons name="description" size={25} color="black" />
                      <Text style = {styles.infoStyle}>{props.values.description}</Text>
                      </View>   
                  </Card>
                  <Card style = {styles.cardStyle}>
                      <View style = {styles.cardViewStyle}>
                      <MaterialIcons name="category" size={25} color="black" />
                      <Text style = {styles.infoStyle}>{props.values.category}</Text>
                      </View>   
                  </Card>
                  <Card style = {styles.cardStyle}>
                      <View style = {styles.cardViewStyle}>
                      <MaterialIcons name="storage" size={25} color="black" />
                      <Text style = {styles.infoStyle}>{props.values.quantity}</Text>
                      </View>   
                  </Card>

                  <View style = {{flexDirection:'row',justifyContent:'center'}}>
                                    <Button
                                    icon = "update"
                                    style = {styles.buttonStyle}
                                    mode = "contained"
                                    onPress = {handleBack}
                                    >
                                        Updtae Details
                                    </Button>

                                    <Button
                                    icon = "upload"
                                    style = {styles.buttonStyle}
                                    mode = "contained"
                                    onPress = {submitData}
                                    >
                                        Submit
                                    </Button>
                                    
                    </View>
               
                </ScrollView>

                

           
       
    )
}
export default Submit

const styles = StyleSheet.create({
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

        color:"black",
        fontWeight:'bold',
        fontSize:30,
       
        
    },
    containerStyle:{
        marginTop:70,
        padding : 5,
        alignItems:"center",
        justifyContent:"space-around"        
    },
    contentStyle:{
        flexDirection:'row',
        margin:20,
        
    },
    iconStyle:{
        fontSize:20,
        fontWeight:'bold',
        marginRight:10
        
    },
    infoStyle:{
        marginTop:10,
        fontSize:20,
        marginLeft:10
    },
    cardStyle:{
       // flexDirection:'row',
       margin:5
        
    },
    cardViewStyle:{
        flexDirection:'row',
        padding:10,
        alignItems:'center',
        
    },
    buttonStyle:{
        alignSelf:'center',
        margin:10,
        color:"#ffffff",
        backgroundColor:'black'
    },
})