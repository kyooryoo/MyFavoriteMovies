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
            //Simulate server latency with 5 second delay
            setTimeout(() => resolve(this.getMovies()), 5000);
        });
    }
}