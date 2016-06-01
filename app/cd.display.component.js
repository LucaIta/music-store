System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var cdDisplayComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            cdDisplayComponent = (function () {
                function cdDisplayComponent() {
                }
                cdDisplayComponent = __decorate([
                    core_1.Component({
                        selector: "CD-display",
                        inputs: ['CD'],
                        template: "\n\n  <h4> CD's tile: {{CD.name}}</h4>\n  <h4> Artist: {{CD.artist}}</h4>\n  <h4> Price: {{CD.price}}</h4>\n  <h4> Genre: {{CD.genre}}</h4>\n  <br>\n\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], cdDisplayComponent);
                return cdDisplayComponent;
            }());
            exports_1("cdDisplayComponent", cdDisplayComponent);
        }
    }
});
//# sourceMappingURL=cd.display.component.js.map