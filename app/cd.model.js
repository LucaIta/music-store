System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CD;
    return {
        setters:[],
        execute: function() {
            CD = (function () {
                function CD(name, artist, price, genre, id) {
                    this.name = name;
                    this.artist = artist;
                    this.price = price;
                    this.genre = genre;
                    this.id = id;
                }
                return CD;
            }());
            exports_1("CD", CD);
        }
    }
});
//# sourceMappingURL=cd.model.js.map