import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HomeService } from '../../api/home.service';
var AddItemPage = /** @class */ (function () {
    function AddItemPage(homeService) {
        this.homeService = homeService;
    }
    AddItemPage.prototype.ngOnInit = function () {
    };
    AddItemPage = tslib_1.__decorate([
        Component({
            selector: 'app-add-item',
            templateUrl: './add-item.page.html',
            styleUrls: ['./add-item.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [HomeService])
    ], AddItemPage);
    return AddItemPage;
}());
export { AddItemPage };
//# sourceMappingURL=add-item.page.js.map