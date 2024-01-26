import Header from "./components/Header";
import MovieList from "./components/MoviesList";
import TopThree from "./components/TopThreeMovies";
import { MovieArray } from "./types/MovieListTypes";
import { MemberNameArray } from "./types/FooterTypes";
import MovieCard from "./components/MovieCard";
import { MovieCardArray } from "./types/MovieCard";
import Footer from "./components/Footer";
import './App.css'; 

export default function App() {
let detalis:Array<MovieArray>=[{movieName:"The Lion King"},{movieName:"The Little Mermaid"},{movieName:"Aladdin"},
{movieName:"Encanto"},{movieName:"Coco"},{movieName:"Alice In Wonnderland"},{movieName:"The Beauty And The Beast"},
{movieName:"Inside Out"},{movieName:"Brave"},{movieName:"Pinocchio"},];
let topThreeDet:Array<MovieArray>=[{movieName:"The Lion King"},{movieName:"The Little Mermaid"},{movieName:"Aladdin"}];
let detaMovieCard:Array<MovieCardArray>=[{title:"The Lion King", imageURL:"./images/TheLionKing.jpeg"},{title:"The Little Mermaid",imageURL:"./images/TheLittleMermaid.jpeg"},{title:"Aladdin",imageURL:"./images/Aladdine.jpeg"}]
let memberDet:Array<MemberNameArray>=[{memberName:"Martine Caasi"}]


  return (
    <>
    <Header pageTitle="DisneyLand"/>
    <MovieList detailsMovieName={detalis}/>
    <TopThree topThree={topThreeDet}/>
    <MovieCard movieCard={detaMovieCard}/>
    <Footer memberDetails={memberDet}/>
    </>
  )
}


