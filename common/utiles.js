

  const movieGenre = {
    genreMovieList: (genre) => {
      console.log(global.genreList);
      console.log(genre);
      return (global.genreList.filter(item => genre.includes(item.id)).map(movie => movie.name));
    }
  }

  export default movieGenre;
