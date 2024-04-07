import { Metadata } from "next";
import Movie from "../../components/movie";
import styles from "../../style/home.module.css";

export const metadata: Metadata = {
  title: "Home",
};

export const API_URL = "http://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
