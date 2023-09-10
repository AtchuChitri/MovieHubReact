import { View,StyleSheet,Text } from "react-native";

export function Circle(props) {
    return (
<View style = {style.circle}>
    <View style={style.progressFill}>
    <View style={style.circleScoreView}>
    <Text style={style.circleText(16)}>{props.score}</Text>
    <Text style={style.circleText(10)}>%</Text>
    </View>
    </View>
  </View>
    );
}

const style = StyleSheet.create({
 circle: {
    width:50,
    height:50,
    borderRadius:50,
    borderColor: '#204529',
    backgroundColor:'rgb(3,37,65)',
    marginTop:-20,
    marginLeft:5,
    borderStyle:"solid",
    display:'flex',
 },
 progressFill: {
  borderStyle: 'solid',
  borderWidth:3,
  marginLeft:4.5,
  marginTop:4,
  display:'flex',
  width:40,
  height:40,
  borderColor:'#32CD32',
  borderRadius:50,
  alignItems:'center',
  justifyContent:'center',

 },
 circleText:(size) =>({
  color:'white',
  fontStyle: 'normal',
 fontWeight:'bold',
 fontFamily: 'Cochin',
 fontSize:size,
 alignItems:'center',
 }),
 circleScoreView: {
  direction: 'flex',
  flexDirection: 'row',
  alignItems:'center',
  justifyContent:'center',
},
}

);