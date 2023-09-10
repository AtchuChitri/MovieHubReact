import { NavigationContainer } from "@react-navigation/native";
import {ScrollView, View,StyleSheet,Image, ImageBackground,Text } from "react-native";
import { HeaderBackButton } from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import { Circle } from "../Circle";
import movieGenre from "../common/utiles";

export function getReleaseDate(date) {
  const dateResult = new Date(date);
  console.log(dateResult);
 return dateResult.getFullYear();
}
export function getGenre(genre) {
    return genre.map(item=>item.name).toString();
}


export function MovieDetail({route,navigation}) {
    const { itemId} = route.params;
    const[datasource,setdatasource] = useState({});
    const baseImage = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
    console.log(itemId);
    const getURL = () => {
        return `https://api.themoviedb.org/3/movie/${itemId}?api_key=0e7274f05c36db12cbe71d9ab0393d47`;
    };
    let posterPath = 'https://image.tmdb.org/t/p/w300';

    let time=datasource.runtime;
    var Hours = Math.floor(time /60);
    var minutes = time % 60;
    
    

    const getMovieDetail = async () => {
        try {
            console.log(getURL());
        const response = await fetch(getURL());
        const json = await response.json();
        setdatasource(json);
        } catch(error) {
            console.error(error);
        }
        finally {

        }
    };
    useEffect(() => {
        getMovieDetail();
    },[]);
    return (
    <ScrollView style={style.container}>
    <ImageBackground style={style.bannerImage} source={{uri: baseImage+datasource.backdrop_path,}}> 
    
    <Image style={style.posterImage} source={{uri: posterPath+datasource.poster_path}} ></Image>
    </ImageBackground>
    <View>
    <Text style={style.title(22,0,0)}>{datasource.original_title}</Text>
    <Text style={style.title(16,0,0)}>{getReleaseDate(datasource.release_date)}</Text>
    </View>
    <View style={style.scoreView}>
    <Circle score={Math.round(datasource.vote_average*10)}></Circle>
    <Text style={style.title(16,-10,0)}>User Score</Text>
    </View>
    <View style={style.scoreView}>
    <View style={style.rateView}>
        <Text style={style.title(15,0,0)}>{datasource.adult ? "PG 16" : "PG 13"}</Text>
    </View>
    <Text style={style.title(15,0,5)}>{datasource.release_date}</Text>
    <Text style={style.title(15,0,5)}>{Hours + "h" + " " + minutes + "m"}</Text>
    </View>
    <View style={style.scoreView}>
    {/* <Text style={style.title(15,0,5)}>{getGenre(datasource.genres)}</Text> */}
</View>
<View style={style.overView}>
    <Text style={style.spaceText(false,18)}>{datasource.tagline}</Text>
    <Text style={style.spaceText(true,17)}>{"OverView"}</Text>
    <Text style={style.spaceText(false,18)}>{datasource.overview}</Text>
</View>
    </ScrollView>
    );
};

const style = StyleSheet.create({

    container: {
        backgroundColor:'rgb(3,37,65)',
    },
    bannerImage: {
     width: '100%',
     height: 160,
     resizeMode: "cover",
     resizeMethod: 'scale',
    },
    posterImage: {
        top:10,
        left:10,
        width: 130,
        height: 130,
        resizeMode: "center",
        resizeMethod:'scale',
        alignItems: 'center',
        borderRadius:6,
    },
    title: (size,top,padding) =>({
        fontSize: size,
        fontFamily:'Cochin',
        fontWeight:'bold',
        textAlign: 'center',
        color:'white',
        top:top,
        padding:padding,
    }),
    spaceText:(isBold,size) =>({
        color:'white',
        padding: 5,
        textAlign: 'left',
        fontWeight: isBold ? 'bold' : 'normal',
        fontSize: size,


    }),
    scoreView: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        top:30,
    },

    rateView: {
        width:50,
        height:30,
        borderWidth:1, 
        borderColor:'#32CD32',
        alignItems:'center',
        justifyContent:'center',
    },
    overView: {
        flex: 1,
        flexDirection: 'column',
        alignItems:'flex-start',
        justifyContent:'center',
        top:50,
    },

}) 

