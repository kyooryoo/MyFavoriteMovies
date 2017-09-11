"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var movies = [
            { id: 0, name: 'Gloria', year: 1980 },
            { id: 11, name: 'Melody', year: 1971 },
            { id: 12, name: 'All That Jazz', year: 1979 },
            { id: 13, name: 'Blue Velvet', year: 1986 },
            { id: 14, name: 'Pulp Fiction', year: 1994 },
            { id: 15, name: 'Seven', year: 1995 },
            { id: 16, name: 'The Spirit of the Beehive', year: 1973 },
            { id: 17, name: 'Birdy', year: 1984 },
            { id: 18, name: 'Midnight Run', year: 1988 },
            { id: 19, name: 'The Shawshank Redemption', year: 1994 },
            { id: 20, name: 'Billy Elliot', year: 2000 },
            { id: 21, name: 'Little Miss Sunshine', year: 2006 },
        ];
        return { movies: movies };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map