import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
        this.items = [
            {
                'id': "1",
                'title': "Example 1",
                'description': 'description 1'
            },
            {
                'id': "2",
                'title': "Example 2",
                'description': 'description 2'
            },
            {
                'id': "3",
                'title': "Example 3",
                'description': 'description 3'
            },
            {
                'id': "4",
                'title': "Example 4",
                'description': 'description 4'
            },
            {
                'id': "5",
                'title': "Need a more complex app?",
                'description': 'Check the Ionic 4 Full Starter App.'
            }
        ];
    }
    HomeService.prototype.getItem = function () {
        return of(this.items);
    };
    HomeService.prototype.getItemBy = function (id) {
        var response = this.items.filter(function (item) { return item.id === id; });
        return of(response);
    };
    HomeService.prototype.updateItem = function (home) {
        var index = this.items.findIndex(function (item) { return item.id == home.id; });
        this.items[index] = home;
    };
    HomeService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], HomeService);
    return HomeService;
}());
export { HomeService };
//# sourceMappingURL=home.service.js.map