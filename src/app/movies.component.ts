import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'my-movies',
  templateUrl: './movies.component.html',
  styleUrls: [ './movies.component.css' ],
})

export class MoviesComponent implements OnInit  {
  movies : Movie[];
  selectedMovie: Movie;

  constructor(
    private movieService: MovieService,
    private router: Router) {}

  getMovies(): void {
    this.movieService.getMovies()
      .then(movies => this.movies = movies);
  }

  add(name: string, year: number): void {
    name = name.trim();
    if (!name||!year) { return; }
    this.movieService.create(name, year)
      .then(movie => {
        this.movies.push(movie);
        this.selectedMovie = null;
      });
  }

  delete(movie: Movie): void {
    this.movieService
      .delete(movie.id)
      .then(() => {
        this.movies = this.movies.filter(m => m !== movie);
        if (this.selectedMovie === movie) { this.selectedMovie = null; }
      });
  }

  ngOnInit(): void { this.getMovies(); }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedMovie.id]);
  }
}
