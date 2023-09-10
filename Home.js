import { View , Text, StyleSheet, ScrollView, FlatList,StatusBar,SafeAreaView,Dimensions, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from 'react';
import { Card } from "./Card";
import { NavigationContainer } from '@react-navigation/native';

// Get the width of screen
const { width } = Dimensions.get('window');
const windowWidth = width;
const gap = 12;
const itemPerRow = 3;
const totalGapSize = (itemPerRow - 1) * gap;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;
let totalRecords = 0; 
let currentPage = 1;



export function HomeScreen({navigation}) {


  const [datasource, setdatasource] = useState([]);
  const getURL = () => {
    return `https://api.themoviedb.org/3/movie/now_playing?api_key=0e7274f05c36db12cbe71d9ab0393d47&page=${currentPage}`;
  };
  function genreListURL() {
    return 'https://api.themoviedb.org/3/genre/movie/list?api_key=0e7274f05c36db12cbe71d9ab0393d47'
  }

  handleSelection = async (id) => {
    console.log(id);
    navigation.navigate('MovieDetail',{
      itemId: id,
    });
  };

  
  const loadMore = () => {
      if(totalRecords > datasource.length) {
        currentPage = currentPage+1
      getMovies(); 
      };
  };


  async function getMovieGenreList() {
    const response = await fetch(genreListURL());
    const json = await response.json();
    global.genreList = json.genres;
  }

  const getMovies = async () => {
    try {
      console.log(getURL());
      const response = await fetch(getURL());
      const json = await response.json();
      totalRecords = json.total_results;
      setdatasource([...datasource, ...json.results]);
    } catch (error) {
      console.error(error);
    } finally {
     // setLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
    getMovieGenreList();
},[]);
    return (
      <SafeAreaView style={HomeStyle.container}>
      <FlatList 
        data={datasource}
        renderItem={({item}) =>(
          <TouchableOpacity
          onPress={()=> handleSelection(item.id)}
          
          >
            
         <View style={HomeStyle.CardListView}>
          <Card model={item}></Card>
         </View> 
         </TouchableOpacity>
        )
        
      }
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      numColumns={3}/>
      </SafeAreaView>
    );
  };


  const HomeStyle = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
   },
   CardListView: {
    display:'flex',
    flexDirection:'column',
     marginVertical: 4,
     marginHorizontal: 3,
   },
    item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  });