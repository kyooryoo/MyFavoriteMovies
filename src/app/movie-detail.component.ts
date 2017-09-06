import { Component, Input } from '@angular/core';
import { Movie } from './movie';

@Component({
    selector: 'movie-detail',
    template: `
    <div *ngIf="movie">
        <h2>{{movie.name}} details!</h2>
        <div><label>id: </label>{{movie.id}}</div>
        <div>
            <label>name: </label>
            <input 
                class="input"
                [(ngModel)]="movie.name" 
                placeholder="name"
            />
        </div>
        <div>
            <label>year: </label>
            <input 
                class="input"
                [(ngModel)]="movie.year" 
                placeholder="year"
            />
        </div>
    </div>
    `
})

export class MovieDetailComponent {
    @Input() movie: Movie;
}