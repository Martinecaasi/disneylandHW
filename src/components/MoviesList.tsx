import { MovieProps } from "../types/MovieListTypes";

export default function MovieList({detailsMovieName}:MovieProps)
{
         return(
          <>
          <div>
            <h2>Last 10 Movies</h2>
              <div id="list">      
            {
                
                detailsMovieName.map(detail=>
                    
                    <div id="detail">
                                <h3>{detail.movieName}</h3>

                    </div> 
                    
                ) 

                          
                        
            }
            </div> 
            </div>
        
          </>
         )
}