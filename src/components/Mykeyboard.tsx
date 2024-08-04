import { Text, View } from 'react-native'
import React, {useState } from 'react'
import { Style } from '../styles/GlobalStyle'
import Button from './Button'
import { myColors } from '../styles/Colors'
import { styled } from 'nativewind'

export default function  Mykeyboard() {
    const [firstnumber,setfirsetnumber] = useState("")
    const [secondnumber,setsecondnumber] = useState("")
    const [operation,setoperation] = useState("")
    const [result,setresult] = useState<number | null >(null);
    const handlenumberpress = (buttonvalue:string) =>{
        if (firstnumber.length < 10){
            setfirsetnumber(firstnumber + buttonvalue);
        }
    };

    const handleoperationpress = (buttonvalue:string) =>{
        setoperation(buttonvalue);
        setsecondnumber(firstnumber);
        setfirsetnumber("");
    }

    const clear = () =>{
        setfirsetnumber("");
        setsecondnumber("");
        setoperation("");
        setresult(null);
    }

    const getresult = () =>{
        switch(operation) {
            case '+':
                clear();
                setresult(parseInt(secondnumber) + parseInt(firstnumber))
                break;
            case '-':
                clear();
                setresult(parseInt(secondnumber) - parseInt(firstnumber))
                break;
            case '*':
                clear();
                setresult(parseInt(secondnumber) * parseInt(firstnumber))
                break;

            case '/':
                clear();
                setresult(parseInt(secondnumber) / parseInt(firstnumber))
                break;
            default:
                clear();
                setresult(0);
                break;
        }

    }

    const firstnumberdistplay = () =>{
        if (result !== null){
            return <Text style ={result < 99999 ?  [Style.screenfirstbottom, {color:myColors.result}] :[Style.screenfirstbottom,{fontSize:50,color:myColors.result}] }>{result?.toString()}</Text>;
        }
        if (firstnumber && firstnumber.length < 6){
            return <Text style ={ Style.screenfirstbottom}>{firstnumber}</Text>
        }
        if (firstnumber === ""){
            return <Text style={Style.screenfirstbottom}>{"0"}</Text>
        }
        if (firstnumber.length > 5 && firstnumber.length <8){
            <Text style = {[Style.screenfirstbottom,{fontSize:70}]}>
                {firstnumber}
            </Text>
        }
        if (firstnumber.length > 7){
            return (
                <Text style={[Style.screenfirstbottom,{fontSize:50}]}>
                    {firstnumber}
                </Text>
            )
        }
    }
    return (
        <View style={Style.viewBottom}>
            <View style={{
                height:120,
                width:'90%',
                justifyContent:'flex-end',
                alignSelf:'center',
            }}>
                <Text style= {Style.screenfirstbottom}>
                    {secondnumber}
                    <Text style = {{color:'purple',fontSize:50,fontWeight:'500'}}>
                        {operation}
                    </Text>

                </Text>
                {firstnumberdistplay()}
            </View>
      <View  style ={Style.row} >
        <Button  title='C' isGray onPress={clear}/>
        <Button  title='+/-' isGray onPress={() => handleoperationpress("+/-")}/>
        <Button  title='%' isGray onPress={() => handleoperationpress("%")}/>
        <Button  title='/' isblue onPress={() => handleoperationpress("/")}/>
      </View>
      <View style ={Style.row}>
        <Button  title='7'  onPress={()=> handlenumberpress('7')}/>
        <Button  title='8'  onPress={()=> handlenumberpress('8')}/>
        <Button  title='9'  onPress={()=> handlenumberpress('9')}/>
        <Button  title='x' isblue onPress={() => handleoperationpress("*")}/>
      </View>
      <View style ={Style.row}>
        <Button  title='4'  onPress={()=> handlenumberpress('4')}/>
        <Button  title='5'  onPress={()=> handlenumberpress('5')}/>
        <Button  title='6'  onPress={()=> handlenumberpress('6')}/>
        <Button  title='-' isblue onPress={() => handleoperationpress("-")}/>
      </View>
      <View style ={Style.row}>
        <Button  title='1'  onPress={()=> handlenumberpress('1')}/>
        <Button  title='2'  onPress={()=> handlenumberpress('2')}/>
        <Button  title='3'  onPress={()=> handlenumberpress('3')}/>
        <Button  title='+' isblue onPress={() => handleoperationpress("+")}/>
      </View>
      <View style ={Style.row}>
        <Button  title='.'  onPress={() => handlenumberpress('.')}/>
        <Button  title='0'  onPress={() => handleoperationpress("+/-")}/>
        <Button  title='⌫ '  onPress={() => setfirsetnumber(firstnumber.slice(0,-1))}/>
        <Button  title='=' isblue onPress={() => getresult()}/>
      </View>
      </View>
    )

}