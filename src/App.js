import React, { Component } from 'react';
import MovieList from './MovieList';
import Navbar from "./Navbar";
import './index.css'
import { movies } from './moviesData';


class App extends Component{
  constructor(){
    super();
    this.state={
        movies:movies,
        cartCount:0
    }
}

handleIncStars=(movie)=>{
    const {movies}=this.state
    const mid=movies.indexOf(movie);
    if(movies[mid].stars >=5){
        return;
    }
    movies[mid].stars +=0.5;
    this.setState({
        movies
    })
}

handleDecStars=(movie)=>{
    const {movies}=this.state
    const mid=movies.indexOf(movie);
    if(movies[mid].stars <=0){
        return;
    }
    movies[mid].stars -=0.5;
    this.setState({
        movies
    })
}

handleToggleFav=(movie)=>{
    const {movies}=this.state;
    const mid=movies.indexOf(movie);
    movies[mid].fav=!movies[mid].fav;
    this.setState({
        movies
    })
}

handleToggleCart=(movie)=>{
    let  {movies,cartCount}=this.state;
    const mid=movies.indexOf(movie);
    movies[mid].isInCart=!movies[mid].isInCart;
    if(movies[mid].isInCart){
        cartCount = cartCount +1
    }
    else{
        cartCount -=1
    }
    this.setState({
        movies,
        cartCount:cartCount
    })
    console.log(cartCount)
}

  render() {
    const {cartCount,movies}=this.state
    return (
    <div>
    <Navbar cartCount={cartCount}/>
    <MovieList movies={movies}
                addStars={this.handleIncStars}
                decStars={this.handleDecStars}
                toggleFav={this.handleToggleFav}
                toggleCart={this.handleToggleCart} />
                <MovieList movies={movies}
                addStars={this.handleIncStars}
                decStars={this.handleDecStars}
                toggleFav={this.handleToggleFav}
                toggleCart={this.handleToggleCart} />
                <MovieList movies={movies}
                addStars={this.handleIncStars}
                decStars={this.handleDecStars}
                toggleFav={this.handleToggleFav}
                toggleCart={this.handleToggleCart} />
    </div>
    )
  }
}

export default App
