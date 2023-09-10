import { View, StyleSheet,Image ,Text} from "react-native";
import moment from "moment";
import { Circle } from "./Circle";

export function Card(props) {

    var moment = require('moment');
    var releaseDate = moment(props.model.release_date).format('DD MMM YYYY');
     let imageBaseUrl = 'https://image.tmdb.org/t/p/w300'+props.model.poster_path;
    return (
<View style={cardStyle.cardView}>
    <Image 
    style={cardStyle.imageView}
    source={{
        uri:imageBaseUrl,
       }}
       resizeMode={'cover'}
       />
       <Circle score={Math.round(props.model.vote_average*10)}></Circle>
       <Text style={cardStyle.title}>{props.model.original_title}</Text>
       <Text style={cardStyle.date}>{releaseDate}</Text>
</View>
    );
}

const cardStyle = StyleSheet.create({
cardView: {
width: 124,
height:270,
borderRadius:6,
backgroundColor:'white',
},
imageView: {
    width:124,
    height:180,
    borderRadius:5,
},
title: {
 fontSize:15,
 fontStyle: 'normal',
 fontWeight:'bold',
 fontFamily: 'Cochin',
},
date: {
    fontSize:14,
    fontStyle: 'normal',
    fontFamily: 'Cochin',
    color:'grey',
    marginTop:6,
   },
});