import { Component } from "react";

class MovieCard extends Component{
    render(){
        console.log(this.props)
        const {title,plot,price,rating,stars,fav,isInCart,poster_1,poster_2,poster_3}=this.props.movies
        const {movies,addStars,decStars,toggleFav,toggleCart}=this.props
        return(
            <>
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        {poster_1}
                        {poster_2}
                        {poster_3}
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" alt="Decrease" onClick={()=>{decStars(movies)}}/>

                                <img className="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>

                                <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" alt="Increase" onClick={()=>{addStars(movies)}}/>
                            </div>
                            <span className="starCount">{stars}</span>

                            {/* favorite and add to cart button */}

                            {/* {fav ? <button className="favorite-btn" onClick={this.handleFav}>favorite</button>:
                            <button className="unfavorite-btn" onClick={this.handleFav}>un-favorite</button>} */}

                            {/* Two button code in online */}
                            <button className={fav ? "unfavorite-btn":"favorite-btn"}
                            onClick={()=>{toggleFav(movies)}}>
                            {fav ? "unfavorite-btn":"favorite-btn"}</button>

                            {/* {button add to cart} */}
                            
                            <button className={isInCart ? "unfavorite-btn":"cart-btn"}
                            onClick={()=>{toggleCart(movies)}}>
                            {isInCart ?"remove from cart":"add to cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default MovieCard