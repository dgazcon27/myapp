import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HomeService } from '../api/home.service';
import { Router } from '@angular/router';
var HomePage = /** @class */ (function () {
    function HomePage(router, homeService) {
        this.router = router;
        this.homeService = homeService;
    }
    HomePage.prototype.ngOnInit = function () {
        this.getItems();
    };
    HomePage.prototype.getItems = function () {
        var _this = this;
        this.homeService.getItem()
            .subscribe(function (items) { return _this.items = items; });
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            HomeService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map