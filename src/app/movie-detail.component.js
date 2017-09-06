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
var movie_1 = require("./movie");
var MovieDetailComponent = (function () {
    function MovieDetailComponent() {
    }
    return MovieDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", movie_1.Movie)
], MovieDetailComponent.prototype, "movie", void 0);
MovieDetailComponent = __decorate([
    core_1.Component({
        selector: 'movie-detail',
        template: "\n    <div *ngIf=\"movie\">\n        <h2>{{movie.name}} details!</h2>\n        <div><label>id: </label>{{movie.id}}</div>\n        <div>\n            <label>name: </label>\n            <input \n                class=\"input\"\n                [(ngModel)]=\"movie.name\" \n                placeholder=\"name\"\n            />\n        </div>\n        <div>\n            <label>year: </label>\n            <input \n                class=\"input\"\n                [(ngModel)]=\"movie.year\" \n                placeholder=\"year\"\n            />\n        </div>\n    </div>\n    "
    })
], MovieDetailComponent);
exports.MovieDetailComponent = MovieDetailComponent;
//# sourceMappingURL=movie-detail.component.js.map