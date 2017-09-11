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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var movie_service_1 = require("./movie.service");
var MovieDetailComponent = (function () {
    function MovieDetailComponent(movieService, route, location) {
        this.movieService = movieService;
        this.route = route;
        this.location = location;
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            return _this.movieService.getMovie(+params.get('id'));
        })
            .subscribe(function (movie) { return _this.movie = movie; });
    };
    MovieDetailComponent.prototype.goBack = function () { this.location.back(); };
    MovieDetailComponent.prototype.save = function () {
        var _this = this;
        this.movieService.update(this.movie)
            .then(function () { return _this.goBack(); });
    };
    return MovieDetailComponent;
}());
MovieDetailComponent = __decorate([
    core_1.Component({
        selector: 'movie-detail',
        templateUrl: './movie-detail.component.html',
        styleUrls: ['./movie-detail.component.css'],
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService,
        router_1.ActivatedRoute,
        common_1.Location])
], MovieDetailComponent);
exports.MovieDetailComponent = MovieDetailComponent;
//# sourceMappingURL=movie-detail.component.js.map