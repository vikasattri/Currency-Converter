import React from 'react';
import { StyleSheet, Text, View ,
  TextInput,Alert,TouchableOpacity,
  TouchableWithoutFeedback,Keyboard,
  SafeAreaView} from 'react-native';


const currencyPerRupee={
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL:0.93,
  AUSDOLLAR:0.2,
  CANDOLLAR:0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041
}
export default class App extends React.Component 
{
  constructor(props){
    super(props);
    this.state={
      inputValue: "",
      resultValue:"0.0"
    }
  }
  buttonPressed=(currency)=>{
    if(this.state.inputValue===""){
      Alert.alert("Enter value");
    }

    let result=parseFloat(this.state.inputValue) * currencyPerRupee[currency]
    this.setState({resultValue:result.toFixed(2)});
  }
  render()
  {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
       <View style={styles.screenview}>
        <View style ={styles.resultcontainer}>
           <Text style={styles.resultValue}>
            {this.state.resultValue} </Text>
         </View>

         <View style={styles.inputcontainer}>
          <TextInput
          style={styles.input}
          selectionColor="#FFF"
          keyboardType="numeric"
          placeholder="Enter Value"
          value={this.state.inputValue}
          onChangeText={inputValue=>
             this.setState({
              inputValue
             }
           
             )}
          
          />
         </View>
         <View style={styles.convertorbutcontainer}>
             <TouchableOpacity
            onPress={()=>this.buttonPressed("DOLLAR")}
            style={styles.convertorbut}
             >
               <Text style={styles.convertorbuttext}>
                  $
               </Text>

             </TouchableOpacity>

             <TouchableOpacity
            onPress={()=>this.buttonPressed("EURO")}
            style={styles.convertorbut}
             >
               <Text style={styles.convertorbuttext}>
                  Euro
               </Text>

             </TouchableOpacity>

             <TouchableOpacity
            onPress={()=>this.buttonPressed("POUND")}
            style={styles.convertorbut}
             >
               <Text style={styles.convertorbuttext}>
                  Pound
               </Text>

             </TouchableOpacity>

             <TouchableOpacity
            onPress={()=>this.buttonPressed("RUBEL")}
            style={styles.convertorbut}
             >
               <Text style={styles.convertorbuttext}>
                  Rubel
               </Text>

             </TouchableOpacity>
             <TouchableOpacity
            onPress={()=>this.buttonPressed("AUSDOLLAR")}
            style={styles.convertorbut}
             >
               <Text style={styles.convertorbuttext}>
                 AusDollar
               </Text>

             </TouchableOpacity>

             <TouchableOpacity
            onPress={()=>this.buttonPressed("CANDOLLAR")}
            style={styles.convertorbut}
             >
               <Text style={styles.convertorbuttext}>
                 CanDolllar
               </Text>

             </TouchableOpacity>

             <TouchableOpacity
            onPress={()=>this.buttonPressed("YEN")}
            style={styles.convertorbut}
             >
               <Text style={styles.convertorbuttext}>
                 Yen
               </Text>

             </TouchableOpacity>

             <TouchableOpacity
            onPress={()=>this.buttonPressed("DINAR")}
            style={styles.convertorbut}
             >
               <Text style={styles.convertorbuttext}>
                 Dinar
               </Text>

             </TouchableOpacity>

             <TouchableOpacity
            onPress={()=>this.buttonPressed("BITCOIN")}
            style={styles.convertorbut}
             >
               <Text style={styles.convertorbuttext}>
                Bitcoin
               </Text>

             </TouchableOpacity>

         </View>
       </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333945",
    
  },
  screenview:{
    flex:1
  },
  resultcontainer:{
   height:70,
   marginTop:20,
   justifyContent:"center",
   borderColor:"#c1c1c1",
   backgroundColor: "#0A79DF",
   alignItems:"center",
   borderWidth:2
  },
  resultValue:{
    fontSize:30,
    fontWeight:"bold",
    color:"#FFF"
  },
  inputcontainer:{
    height:70,
    marginTop:20,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderColor:"#c1c1c1",
    backgroundColor:"#0A79DF"

  },
  input:{
    color:"#fff",
    fontSize:30
  },
  convertorbutcontainer:
  {
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:20,
    borderColor:"#c1c1c1",
    borderWidth:2
  },
  convertorbut:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#0A79DF",
    height:100,
    borderColor:"#c1c1c1",
    borderWidth:2,
    width:"33.3%"
  },
  convertorbuttext:{
    color:"#fff",
    fontSize:20,

  }
});
