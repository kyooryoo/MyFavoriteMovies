import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './mock-movies';

@Injectable()
export class MovieService {
    getMovies(): Promise<Movie[]> {
        return Promise.resolve(MOVIES);
    }
    getMoviesSlowly(): Promise<Movie[]> {
        return new Promise(resolve => {
            //Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getMovies()), 2000);
        });
    }
    getMovie(id: number): Promise<Movie> {
        return this.getMovies()
            .then(movies => movies.find(movie =>movie.id ===id));
    }
}