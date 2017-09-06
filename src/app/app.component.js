"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var movie_service_1 = require("./movie.service");
var AppComponent = (function () {
    function AppComponent(movieService) {
        this.movieService = movieService;
        this.title = 'My Favorite Movies';
    }
    ;
    AppComponent.prototype.getMovies = function () {
        var _this = this;
        this.movieService.getMoviesSlowly()
            .then(function (movies) { return _this.movies = movies; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    AppComponent.prototype.onSelect = function (movie) {
        this.selectedMovie = movie;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <ul class=\"movies\">\n      <li *ngFor=\"let movie of movies\"\n        [class.selected]=\"movie === selectedMovie\"\n        (click)=\"onSelect(movie)\">\n        <span class=\"badge\">{{movie.id}}</span>\n        {{movie.name}} ({{movie.year}})\n\n      </li>\n    </ul>\n    <movie-detail [movie]=\"selectedMovie\"></movie-detail>\n  ",
        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .input {\n      width: 16em;\n    }\n    .movies {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 20em;\n    }\n    .movies li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .movies li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .movies li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .movies .text {\n      position: relative;\n      top: -3px;\n    }\n    .movies .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "],
        providers: [movie_service_1.MovieService],
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map