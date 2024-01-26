import { MovieCardProps } from "../types/MovieCard";

export default function MovieCard({movieCard}:MovieCardProps){

  return(
    <>
     <div id="images">
    {
        movieCard.map(detaMovieCard=>
      
         
            <div id="image">
           
            <img src={detaMovieCard.imageURL} alt={detaMovieCard.title} />

            </div>
         
          
          )
    }
     </div>
    </>
  )
}