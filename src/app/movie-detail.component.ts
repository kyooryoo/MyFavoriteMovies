import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
    selector: 'movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: [ './movie-detail.component.css' ],
})

export class MovieDetailComponent implements OnInit {
    constructor(
        private movieService: MovieService,
        private route: ActivatedRoute,
        private location: Location,
    ) {}

    @Input() movie: Movie;

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.movieService.getMovie(+params.get('id')))
            .subscribe(movie => this.movie = movie);
    }

    goBack(): void {
        this.location.back();
    }
}