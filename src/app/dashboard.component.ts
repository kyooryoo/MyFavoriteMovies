import { Component, OnInit } from '@angular/core';

import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
    movies: Movie[] = [];
    constructor(private movieService: MovieService) { }
    ngOnInit(): void {
        this.movieService.getMovies()
            .then(movies => this.movies = movies.slice(1,5));
    }

}