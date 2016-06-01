System.register(['angular2/core', './cd.model', './cd.display.component'], function(exports_1, context_1) {
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
    var core_1, cd_model_1, cd_display_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cd_model_1_1) {
                cd_model_1 = cd_model_1_1;
            },
            function (cd_display_component_1_1) {
                cd_display_component_1 = cd_display_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.CDs = [
                        new cd_model_1.CD("Thriller.", "Michel Jackson", 6, "POP", 0),
                        new cd_model_1.CD("MammaMia.", "Abba ", 7, "POP", 1),
                        new cd_model_1.CD("Queen.", "The Queen", 5, "POP", 2),
                        new cd_model_1.CD("Bad.", "Michel Jackson", 6, "POP", 3)
                    ];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        directives: [cd_display_component_1.cdDisplayComponent],
                        template: "\n  <div class=\"container\">\n    <h1>Whatever</h1>\n    <h3 *ngFor=\"#currentCD of CDs\">\n\n      <CD-display [CD]=\"currentCD\"></CD-display>\n      \n    </h3>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map