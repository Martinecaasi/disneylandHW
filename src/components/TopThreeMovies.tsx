import { TopThreeProps } from "../types/TopThree";


export default function TopThree({topThree}:TopThreeProps){

          return(
                    <>
                    <main>
                    <div>
                     <h2>Top 3 Movies</h2>
                     <div id="top-container">
                    {
                              topThree.map(topThreeDet=>
                                        
                                     <div id="top-items">
                                       <div id="top-item">
                                        <h3>{topThreeDet.movieName}</h3>
                                        </div>
                                       </div>
                                     
                                        
                                        )
                                       
                                        
                            
                    }
                    </div>
                    </div>
                    </main>
                    </>
          )
}