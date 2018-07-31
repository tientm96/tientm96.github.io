(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    color: yellowgreen;\r\n    font-size: 20px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ĐÂY LÀ FILE HIỂN THỊ DUY NHẤT KHI GEN RA, TẤT CẢ CÁC HTML CỦA COMPONENT PHẢI ĐƯA VỀ ĐÂY -->\r\n\r\n<!-- các dấu {{}} là cú pháp để gọi biến title trong app.component.ts-->\r\n<!-- <h1>Welcome to {{ title }}!</h1> -->\r\n\r\n\r\n\r\n<!-- TẠO container, row, panel bằng bs3-container -row -panel -->\r\n<div class=\"container\" [style.margin-top.px]=\"20\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-14 col-sm-14 col-md-14 col-lg-14\">\r\n\r\n            <div class=\"panel panel-danger\">\r\n                <div class=\"panel-heading\">\r\n                    <h3 class=\"panel-title\">LEARN ANGULAR</h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n\r\n                    <app-world></app-world>\r\n                    <hr>\r\n\r\n                    <app-book></app-book>\r\n                    <hr>\r\n\r\n                    <app-user-form></app-user-form>\r\n                    <hr>\r\n\r\n\r\n                    <br>\r\n                    <app-struct></app-struct>\r\n                    <p>------------------------------</p>\r\n                    <hr>\r\n\r\n                    <app-words></app-words>\r\n                    <p>------------------------------</p>\r\n                    <hr>\r\n\r\n                    <!-- INPUT:\r\n                        -Tại app.component.html: Gọi comp con ra và đồng thời truyền input vào comp đó, các biến input phải để trong [] .\r\n                        \r\n                        -Các cách truyền input: biến name,age là 2 biến input của app-person đc gọi ra để gắn giá trị vào, phải để trong dấu [](là dạng property binding):\r\n                        +Nếu gán biến input với 1 biến nào đó từ comp cha: [name]=\"biến từ comp cha\"\r\n                        +Nếu gán cứng giá trị từ html: [name]=\"'Tèo Nguyễn'\" (chuỗi phải trong dấu ''), [age]=\"18\" (số nguyên thì ko cần '')\r\n                    -->\r\n\r\n                    <app-person [name]=\"nameComp\" [age]=\"ageComp\"></app-person>\r\n                    <!-- <app-person [name]=\"'Tèo Nguyễn'\" [age]=\"18\"></app-person> -->\r\n                    <app-person [name]=\"'Tí Nguyễn'\" [age]=\"15\"></app-person>\r\n\r\n                    <!-- Hoặc cách ko cần dùng [], gán trực tiếp, nhưng cách này ít dùng. -->\r\n                    <!-- <app-person name=\"Tí Nguyễn\" age=\"15\"></app-person> -->\r\n\r\n                    <p>------------------------------</p>\r\n                    <hr>\r\n\r\n                    <app-list-person></app-list-person>\r\n                    <p>------------------------------</p>\r\n                    <hr>\r\n\r\n                    <app-parent></app-parent>\r\n                    <p>------------------------------</p>\r\n                    <hr>\r\n\r\n\r\n\r\n                    <!-- ================NG-CONTENT===================== -->\r\n                    <!-- Trường hợp gọi comp con ra, rồi truyền dl vào, nhưng ko phải là dl @Input, mà là dl ở <comp>dl ở giữa<compcard> thẻ như bình thường, thì lúc này phải\r\n                    truyền vào vị trí ng-content của thẻ đó.\r\n                \r\n                    <compcard NẾU TRUYỀN THEO @INPUT THÌ PHẢI TRUYỀN TRONG NÀY>dl đưa vào mỗi khi gọi nó ra ở comp khác</compcard> -->\r\n\r\n                    <!-- Ở ĐÂY CÓ THỂ TRUYỀN LỘN XỘN, NHƯNG NÓ SẼ SX THEO ĐÚNG MÃ ng-content ĐÃ TRUYỀN QUA -->\r\n                    <app-card>\r\n                        <p>truyền vào ng-content ko đk</p>\r\n\r\n                        <!-- tương tự TH1 trên cùng, truyền mà ko vào class nào cả, sẽ truyền trong ng-content ko chứa điều kiện, ng-content trên cùng. -->\r\n                        <h1>Value: h1 tag</h1>        \r\n                        <h2>Value: h2 tag</h2>\r\n\r\n\r\n                        <p class=\"card-header\">truyền vào ng-content có đk là: select=\".card-header\"</p>\r\n                        <p class=\"card-body\">truyền vào ng-content có đk là: select=\".card-body\"</p>\r\n\r\n                        <!--thậm chí truyền vào thẻ là comp cũng đc. \r\n                            Truyền nguyên comp app-child vào body, nhưng dòng text thì lại truyền vào chổ <ng-content/> trong comp <app-child> chứ ko phải comp card -->\r\n                        <app-child class=\"card-body\">truyền nguyên cả comp child, vào ng-content có đk là: select=\".card-body\"</app-child>\r\n                        \r\n                        <!-- Vẫn là truyền theo class như 2 cái ở trên: truyền vào ng-content có select=\".myClass\"-->\r\n                        <h3 class=\"myClass\">Value: h3 tag: truyền vào ng-content có đk là: select=\".myClass\"</h3>\r\n\r\n\r\n\r\n                        <!-- Lẽ ra là ko có đk, nên truyền vào ng-content chính, nhưng bên card comp có ng-content cho thẻ h4 riêng, nên nó sẽ truyền vào  vị trí đó. -->\r\n                        <h4>Value: h4 tag: truyền vào ng-content có đk là thẻ h4: select=\"h4\"</h4>\r\n\r\n                        <!-- truyền vào ng-content có select=\"[myAttr]\" -->\r\n                        <div myAttr>div tag - Truyền theo Attr: select=\"[myAttr]\"</div>\r\n\r\n                        <!-- truyền vào ng-content có select=\"[course=angular6]\" -->\r\n                        <span course=\"angular6\">span tag - truyền theo: select=\"[course=angular6]\"</span>\r\n\r\n                        <!-- truyền vào ng-content có select=\"[handsome][demo]\" -->\r\n                        <p handsome demo>Multi tag - truyền theo: select=\"[handsome][demo]\"</p>\r\n\r\n                    </app-card>\r\n                    <p>------------------------------</p>\r\n                    <hr>\r\n                    <!-- ================NG-CONTENT===================== -->\r\n\r\n\r\n                    <app-learn-pipe></app-learn-pipe>\r\n                    <p>------------------------------</p>\r\n                    <hr>\r\n\r\n                    <!-- Lấy service từ http://ip.jsontest.com/ -->\r\n                    <app-ip></app-ip>\r\n                    <p>------------------------------</p>\r\n                    <hr>\r\n\r\n                    <app-ip2></app-ip2>\r\n                    <p>------------------------------</p>\r\n                    <hr>\r\n\r\n                    <app-weather></app-weather>\r\n                    <p>------------------------------</p>\r\n                    <hr>\r\n\r\n                    <!-- học service bổ sung: https://www.youtube.com/watch?v=AbQxPC4uKOU&list=PLJ5qtRQovuENHYHqlQP5XT7zwbCA5Q5He&index=31 -->\r\n                    <app-movie-list></app-movie-list>\r\n                    <p>------------------------------</p>\r\n                    <hr>\r\n\r\n                    <app-movie-handle></app-movie-handle>\r\n                    <p>------------------------------</p>\r\n                    <hr>\r\n\r\n\r\n\r\n                    <!-- ============================ -->\r\n                    <app-sign-in></app-sign-in>\r\n                    <p>------------------------------</p>\r\n                    <hr>\r\n\r\n                    <app-sign-in2></app-sign-in2>\r\n                    <p>------------------------------</p>\r\n                    <hr>\r\n\r\n                    <app-sign-in3></app-sign-in3>\r\n                    <p>------------------------------</p>\r\n                    <hr>\r\n\r\n                    <app-sign-up></app-sign-up>\r\n                    <p>------------------------------</p>\r\n                    <hr>\r\n\r\n\r\n                    <app-sign-up2></app-sign-up2>\r\n                    <p>------------------------------</p>\r\n                    <hr>\r\n\r\n                    <app-sign-up3></app-sign-up3>\r\n                    <p>------------------------------</p>\r\n                    <hr>\r\n\r\n\r\n                    \r\n                    <!-- ROUTER -->\r\n                    <div class=\"panel panel-success\">\r\n                        <div class=\"panel-heading\">\r\n                            <h3 class=\"panel-title\">Router</h3>\r\n                        </div>\r\n                        <div class=\"panel-body\">\r\n                            \r\n                            <!-- có thể dùng navbar như menu -->\r\n                            <nav class=\"navbar navbar-default\" role=\"navigation\">\r\n                                <div class=\"container-fluid\">\r\n                                    <div class=\"navbar-expand\">\r\n                                        <ul class=\"nav navbar-nav\">\r\n                                            <!-- Dạng navbar ban đầu sẽ chọn-tô màu(active) thẻ đầu tiên, ta cần phải điều chỉnh lại.\r\n                                            Để click vào 1 thẻ link nào thì link đó mới đổi màu, thì phải add một class của bs3, add 1 hoặc 2,3 class đều được, vd class active,active2. \r\n\r\n                                            +Sd routerLinkActive: để gọi class, khi nào những router trùng khớp(link đc click) thì nó sẽ đc kích hoạt để gọi class để đổi màu thẻ menu đó.\r\n\r\n                                            +routerLinkActiveOptions: để xác nhận thẻ menu link này có phải đường link mặc định ko,\r\n                                            nếu phải thì nó sẽ tô màu ngay khi vừa render lên, nghĩa là ban đầu nó sẽ tự động chọn menu đó.\r\n                                            (ở đây bên app-routing.module.ts đã thiết lập render mặc định là /index: là menu Home, nên ban đầu link menu Home sẽ được chọn và tô màu.)-->\r\n                                            <li routerLinkActive=\"active active2\" [routerLinkActiveOptions]=\"{ exact : true}\">\r\n                                                <a [routerLink]=\"['/index']\">Home</a>\r\n                                            </li>\r\n                                            <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact : true}\">\r\n                                                <a [routerLink]=\"['/contact2']\">Contact2</a>\r\n                                            </li>\r\n                                            <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact : true}\">\r\n                                                <a [routerLink]=\"['/about']\">About</a>\r\n                                            </li>\r\n                                            <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact : true}\">\r\n                                                <a [routerLink]=\"['/login']\">Login</a>\r\n                                            </li>\r\n                                            <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact : true}\">\r\n                                                <a [routerLink]=\"['/products']\">Products</a>\r\n                                            </li>\r\n                                            <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact : true}\">\r\n                                                <a (click)=\"logout();\">Logout</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </nav>\r\n\r\n                            <!-- có thể dùng button thay cho các menu trong navbar -->\r\n                            <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/index']\">Home</button>   <span>{{ ' ' }}</span>\r\n                            <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/contact2']\">Contact2</button>    <span>{{ ' ' }}</span>\r\n                            <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/about']\">About</button>  <span>{{ ' ' }}</span>  \r\n                            <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</button>  <span>{{ ' ' }}</span>\r\n                            <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/products']\">Products</button>  <span>{{ ' ' }}</span> \r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"logout();\">Logout</button>  \r\n                            <br><br>\r\n\r\n\r\n\r\n                            <!-- Bắt đầu phần tạo page cho app. Bài 58, 59\r\n                            Mục tiêu: Click vào link Contacts sẽ hiện comp contact, click vào link Detail sẽ hiện comp contacts-detail -->\r\n                            <!-- <a href=\"/contacts\">Contacts</a> : dùng href thì sẽ refresh lại trang, nên ta đổi href thành routerLink-->\r\n                            <a routerLink=\"/contacts\">Contacts</a> <span>{{ ' ' }}</span>\r\n                            <a routerLink=\"/detail\">Detail</a>\r\n                            <br>\r\n                            <hr>\r\n                            \r\n                            \r\n\r\n                            <!-- Tại vị trí thẻ router-outlet này sẽ hiển thị ra các comp đc kích vào link. (giống như ng-content vậy, nhưng thẻ này dùng cho routing)\r\n                            Mỗi template chỉ hiển thị 1 thẻ outlet thôi.-->\r\n                            <router-outlet></router-outlet>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                    <br>\r\n                    <br>\r\n                    <hr>\r\n\r\n\r\n\r\n\r\n\r\n                    <app-learn-pipe2></app-learn-pipe2>\r\n                    <br><br>\r\n                    <hr>\r\n\r\n\r\n                    <!-- học thêm về input, output: https://www.youtube.com/watch?v=0dp_5uD2lmw&list=PLJ5qtRQovuENHYHqlQP5XT7zwbCA5Q5He&index=13 -->\r\n                    <!-- <app-child2></app-child2> -->\r\n                    <app-parent2></app-parent2>\r\n                    <br><br>\r\n                    <hr>\r\n\r\n\r\n\r\n                    <!-- Vòng đời: xem note bài 37.1 \r\n                    Kích btn thì sẽ ẩn hiện lifecycle comp.\r\n                    Ban đầu đang hiện comp, đến lúc ẩn comp thì hàm OnDestroy() bên comp đó mới thực thi -->\r\n                    <ng-container *ngIf=\"!isDestroy\">\r\n                        <app-lifecycle-hooks [total]=\"total\"></app-lifecycle-hooks>\r\n                    </ng-container>\r\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"onHandleDestroy();\">Toggle-Deploy/Destroy Comp LifeCycle</button>\r\n                    <br><br>\r\n                    \r\n                    \r\n                    <!-- Cách 1 dùng ([ngModel]) -->\r\n                    <!-- Số thứ 1: <input type=\"number\" class=\"form-control\" [(ngModel)]=\"a\">\r\n                    Số thứ 2: <input type=\"number\" class=\"form-control\" [(ngModel)]=\"b\">\r\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"amount();\">Tính tổng</button> -->\r\n\r\n\r\n                    <!-- Cách 2 dùng template reference variable.\r\n                    CHÚ Ý:\r\n                    Dạng template ref var luôn nhận vào dạng text, dù ta có để input đầu vào là dạng number đi chăng nữa;\r\n                    ở đây nó sẽ nhận về dạng text và chuyển qua comp sẽ là string, nên bên comp muốn sd dạng số thì phải chuyển đổi trước khi sd.-->\r\n                    Số thứ 1: <input type=\"number\" class=\"form-control\" #a>\r\n                    Số thứ 2: <input type=\"number\" class=\"form-control\" #b>\r\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"amount(a.value, b.value);\">Tính tổng</button>\r\n                    <br><br>\r\n                    <hr>\r\n\r\n\r\n                    <app-rest-todo></app-rest-todo>\r\n                    <br>\r\n                    <hr>\r\n\r\n\r\n\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.nameComp = 'Tèo Nguyễn';
        this.ageComp = 18;
        this.total = 0;
        this.isDestroy = false;
    }
    AppComponent.prototype.onHandleDestroy = function () {
        this.isDestroy = !this.isDestroy;
    };
    //Nếu dùng ([ngModel])
    // amount(){
    //   this.total = this.a + this.b;
    //   console.log(typeof this.a, typeof this.b);
    // }
    //Nếu dùng template reference variable #a, #b
    /*Chú ý: vì là biến template nên nó luôn nhận vào dạng text, dù ta có để input đầu vào là number đi chăng nữa.
    Vậy nên template ref var luôn trả về dạng text ở mọi trường hợp.
  
    Muốn chuyển sang số thì ta phải ép kiểu: hoặc là Number(a) hoặc là parseInt(a)*/
    AppComponent.prototype.amount = function (a, b) {
        console.log(typeof a, typeof b);
        this.total = Number(a) + parseInt(b);
    };
    //bấm btn logout thì nó sẽ hủy biến toàn cục localStorage, nếu biến này difined với key là user.
    AppComponent.prototype.logout = function () {
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
            // localStorage.clear();
            //nếu ko remove thì nó sẽ lưu lại trạng thái của localStorage sau mỗi lần F5 đều v tự login vào đc. 
            //nên phải remove, hoặc xóa cokie của trình duyệt.
        }
        //bấm btn logout thì sẽ chuyển về đường dẫn mặc định là /index (home)
        //dùng navigate để định dạng lại đường link.
        this.router.navigate(['']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _folder_router_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./folder-router/app-routing.module */ "./src/app/folder-router/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _folder_components_word_word_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./folder-components/word/word.component */ "./src/app/folder-components/word/word.component.ts");
/* harmony import */ var _folder_components_book_book_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./folder-components/book/book.component */ "./src/app/folder-components/book/book.component.ts");
/* harmony import */ var _folder_components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./folder-components/user-form/user-form.component */ "./src/app/folder-components/user-form/user-form.component.ts");
/* harmony import */ var _folder_components_struct_struct_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./folder-components/struct/struct.component */ "./src/app/folder-components/struct/struct.component.ts");
/* harmony import */ var _folder_components_words_words_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./folder-components/words/words.component */ "./src/app/folder-components/words/words.component.ts");
/* harmony import */ var _folder_components_person_person_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./folder-components/person/person.component */ "./src/app/folder-components/person/person.component.ts");
/* harmony import */ var _folder_components_list_person_list_person_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./folder-components/list-person/list-person.component */ "./src/app/folder-components/list-person/list-person.component.ts");
/* harmony import */ var _folder_components_parent_parent_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./folder-components/parent/parent.component */ "./src/app/folder-components/parent/parent.component.ts");
/* harmony import */ var _folder_components_child_child_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./folder-components/child/child.component */ "./src/app/folder-components/child/child.component.ts");
/* harmony import */ var _folder_components_card_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./folder-components/card/card.component */ "./src/app/folder-components/card/card.component.ts");
/* harmony import */ var _folder_components_learn_pipe_learn_pipe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./folder-components/learn-pipe/learn-pipe.component */ "./src/app/folder-components/learn-pipe/learn-pipe.component.ts");
/* harmony import */ var _folder_components_ip_ip_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./folder-components/ip/ip.component */ "./src/app/folder-components/ip/ip.component.ts");
/* harmony import */ var _folder_components_ip2_ip2_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./folder-components/ip2/ip2.component */ "./src/app/folder-components/ip2/ip2.component.ts");
/* harmony import */ var _folder_components_weather_weather_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./folder-components/weather/weather.component */ "./src/app/folder-components/weather/weather.component.ts");
/* harmony import */ var _folder_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./folder-components/sign-in/sign-in.component */ "./src/app/folder-components/sign-in/sign-in.component.ts");
/* harmony import */ var _folder_components_sign_in2_sign_in2_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./folder-components/sign-in2/sign-in2.component */ "./src/app/folder-components/sign-in2/sign-in2.component.ts");
/* harmony import */ var _folder_components_sign_in3_sign_in3_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./folder-components/sign-in3/sign-in3.component */ "./src/app/folder-components/sign-in3/sign-in3.component.ts");
/* harmony import */ var _folder_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./folder-components/sign-up/sign-up.component */ "./src/app/folder-components/sign-up/sign-up.component.ts");
/* harmony import */ var _folder_components_sign_up2_sign_up2_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./folder-components/sign-up2/sign-up2.component */ "./src/app/folder-components/sign-up2/sign-up2.component.ts");
/* harmony import */ var _folder_components_sign_up3_sign_up3_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./folder-components/sign-up3/sign-up3.component */ "./src/app/folder-components/sign-up3/sign-up3.component.ts");
/* harmony import */ var _folder_components_learn_pipe2_learn_pipe2_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./folder-components/learn-pipe2/learn-pipe2.component */ "./src/app/folder-components/learn-pipe2/learn-pipe2.component.ts");
/* harmony import */ var _folder_components_child2_child2_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./folder-components/child2/child2.component */ "./src/app/folder-components/child2/child2.component.ts");
/* harmony import */ var _folder_components_parent2_parent2_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./folder-components/parent2/parent2.component */ "./src/app/folder-components/parent2/parent2.component.ts");
/* harmony import */ var _folder_components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./folder-components/user-list/user-list.component */ "./src/app/folder-components/user-list/user-list.component.ts");
/* harmony import */ var _folder_components_lifecycle_hooks_lifecycle_hooks_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./folder-components/lifecycle-hooks/lifecycle-hooks.component */ "./src/app/folder-components/lifecycle-hooks/lifecycle-hooks.component.ts");
/* harmony import */ var _folder_components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./folder-components/movie-list/movie-list.component */ "./src/app/folder-components/movie-list/movie-list.component.ts");
/* harmony import */ var _folder_components_movie_handle_movie_handle_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./folder-components/movie-handle/movie-handle.component */ "./src/app/folder-components/movie-handle/movie-handle.component.ts");
/* harmony import */ var _folder_components_rest_todo_rest_todo_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./folder-components/rest-todo/rest-todo.component */ "./src/app/folder-components/rest-todo/rest-todo.component.ts");
/* harmony import */ var _folder_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./folder-pipes/round.pipe */ "./src/app/folder-pipes/round.pipe.ts");
/* harmony import */ var _folder_pipes_format_data_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./folder-pipes/format-data.pipe */ "./src/app/folder-pipes/format-data.pipe.ts");
/* harmony import */ var _folder_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./folder-pipes/filter.pipe */ "./src/app/folder-pipes/filter.pipe.ts");
/* harmony import */ var _folder_pipes_sort_number_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./folder-pipes/sort-number.pipe */ "./src/app/folder-pipes/sort-number.pipe.ts");
/* harmony import */ var _folder_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./folder-pipes/capitalize.pipe */ "./src/app/folder-pipes/capitalize.pipe.ts");
/* harmony import */ var _folder_pipes_even_odd_pipe__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./folder-pipes/even-odd.pipe */ "./src/app/folder-pipes/even-odd.pipe.ts");
/* harmony import */ var _folder_pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./folder-pipes/sort.pipe */ "./src/app/folder-pipes/sort.pipe.ts");
/* harmony import */ var _folder_services_ip2_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./folder-services/ip2.service */ "./src/app/folder-services/ip2.service.ts");
/* harmony import */ var _folder_services_logging_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./folder-services/logging.service */ "./src/app/folder-services/logging.service.ts");
/* harmony import */ var _folder_services_movie_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./folder-services/movie.service */ "./src/app/folder-services/movie.service.ts");
/* harmony import */ var _folder_services_product_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./folder-services/product.service */ "./src/app/folder-services/product.service.ts");
/* harmony import */ var _folder_services_rest_todo_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./folder-services/rest-todo.service */ "./src/app/folder-services/rest-todo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//để dùng Template-driven forms; two-way binding; service: phải import FormsModule và gọi ra dưới phần imports: []
//để sử dụng Reactive Form phải import ReactiveFormsModule và cũng gọi ra dưới phần import[].

//để lấy service từ server phải import Http, để dùng GET hoặc POST

//Từ bài Git branch 86 trở đi, dùng GET, POST, PUT, DELETE với HttpClientModule, vì phiên bản mới đã cập nhật Http->HttpClient

//--------------------------------------------Phần import vài cài đặt để sử dụng router------------------------------------------------------
/*VÌ ĐÃ TÁCH NHỮNG GÌ LIÊN QUAN ĐẾN ROUTER RA RIÊNG BÊN app-routing.module.ts,
NÊN SẼ XÓA/CMT NHỮNG CÁI LIÊN QUAN ĐẾN ROUTER Ở ĐÂY.
(xem giải thích sẽ cmt/xóa những chỗ nào: bên phần giải thích bên file app-routing.module.ts)

XÓA XONG THÌ GỌI MODULE ROUTER ĐÃ TÁCH VÀO ĐÂY: gọi class AppRoutingModule từ file app-routing.module.ts
VÀ ADD AppRoutingModule DƯỚI imports[]


**CHÚ Ý: module chính app.module.ts chỉ add 1 file root duy nhất, nên phải gộp hết tất cả module con vào trong 1 file app-routing.module.ts, rồi mới add vào app.module.ts.
*/

//+để sử dụng đc router để di chuyển các page theo link thì import Routes, RouterModule từ @angular/router
// XEM GIẢI THÍCH CỤ THỂ TRONG contacts.component.ts
// import { Routes, RouterModule } from '@angular/router';
//+tạo ra biến routesConfig: để config các cái routes (là các hướng chuyển trang): nhấn vào đường link /contacts thì chuyển đến ContactsComponent;
//nhấn vào link /detail  thì chuyển đến ContactDetailComponent.
// const routesConfig: Routes = [
//   { path: 'contacts', component: ContactsComponent },
//   { path: 'detail', component: ContactDetailComponent },
//   //để chỉnh 1 trang làm home, nghĩa là khi vào http://localhost:4200 thì nó tự động chuyển đến /contacts: http://localhost:4200/contacts ;
//   //  giống kiểu thiết lập trang mặc định trong .net MVC, ở đây thiết lập trang mặc định là contacts.
//   { path: '', redirectTo: '/contacts', pathMatch: 'full' },
//   //Nếu + vào link 1 địa chỉ lỗi thì nó sẽ chạy đến trang của comp page-not-found (tự tạo comp này): vd: http://localhost:4200/sajsaksjla là 1 địa chỉ lỗi.
//   //Ở đây ta thiết lập dẫn đến trang LỖI khi chạy địa chỉ lỗi tại đây.
//   { path: '**', component: PageNotFoundComponent }  //dấu ** ý là ko vào đc tất cả comp nào rồi thì mới chạy đến comp PageNotFoundComponent
// ];
//+tiếp theo, kéo xuống chỗ imports: [, RouterModule.forRoot(routesConfig)], add RouterModule.forRoot() và truyền vào biến routesConfig đã tạo ở trên.
//--------------------------------------------Kết thúc phần import vài cài đặt để sử dụng router------------------------------------------------------





















// import { ContactsComponent } from './contacts/contacts.component';
// import { ContactDetailComponent } from './contact-detail/contact-detail.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';







// import { RouterHomeComponent } from './folder-components/router-home/router-home.component';
// import { RouterContact2Component } from './folder-components/router-contact2/router-contact2.component';
// import { RouterAboutComponent } from './folder-components/router-about/router-about.component'
// import { RouterProductsComponent } from './folder-components/router-products/router-products.component';
// import { RouterProductDetailComponent } from './folder-components/router-product-detail/router-product-detail.component';
// import { RouterProductListComponent } from './router-product-list/router-product-list.component';
// import { RouterProductEditComponent } from './folder-components/router-product-edit/router-product-edit.component';
// import { RouterLoginComponent } from './folder-components/router-login/router-login.component';

//import round.pipe.ts cũng giống như import 1 comp.







//import IpService trong ip.service.ts vào đây app.module.ts, kéo xuống providers[] gọi nó ra: để nhiều comp đều sử dụng đc service này.
//Còn nếu chỉ import và gọi providers trong comp nào đó thì chỉ mỗi comp đó sd đc service này.





/*TẠO COMPONENT
- app.module.ts : là file chạy đầu tiên.
+nên mọi component đc tạo dưới dạng Name.component.ts phải đc import vào app.module.cs,
và đc gọi vào bên trong declarations của file app.module.cs này.
+lúc này ta có thể gọi component ra giống như 1 thẻ </> ở file app.component.html(File truyền vào file hiển thị chính: index.html).
*/
//và gọi component vào đây
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _folder_components_word_word_component__WEBPACK_IMPORTED_MODULE_7__["WorldComponent"],
                _folder_components_book_book_component__WEBPACK_IMPORTED_MODULE_8__["BookComponent"],
                _folder_components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_9__["UserFormComponent"],
                _folder_components_struct_struct_component__WEBPACK_IMPORTED_MODULE_10__["StructComponent"],
                _folder_components_words_words_component__WEBPACK_IMPORTED_MODULE_11__["WordsComponent"],
                _folder_components_person_person_component__WEBPACK_IMPORTED_MODULE_12__["PersonComponent"],
                _folder_components_list_person_list_person_component__WEBPACK_IMPORTED_MODULE_13__["ListPersonComponent"],
                _folder_components_parent_parent_component__WEBPACK_IMPORTED_MODULE_14__["ParentComponent"],
                _folder_components_child_child_component__WEBPACK_IMPORTED_MODULE_15__["ChildComponent"],
                _folder_components_card_card_component__WEBPACK_IMPORTED_MODULE_16__["CardComponent"],
                _folder_components_learn_pipe_learn_pipe_component__WEBPACK_IMPORTED_MODULE_17__["LearnPipeComponent"],
                _folder_components_ip_ip_component__WEBPACK_IMPORTED_MODULE_18__["IpComponent"],
                _folder_components_ip2_ip2_component__WEBPACK_IMPORTED_MODULE_19__["Ip2Component"],
                _folder_components_weather_weather_component__WEBPACK_IMPORTED_MODULE_20__["WeatherComponent"],
                _folder_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_21__["SignInComponent"],
                _folder_components_sign_in2_sign_in2_component__WEBPACK_IMPORTED_MODULE_22__["SignIn2Component"],
                _folder_components_sign_in3_sign_in3_component__WEBPACK_IMPORTED_MODULE_23__["SignIn3Component"],
                _folder_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_24__["SignUpComponent"],
                _folder_components_sign_up2_sign_up2_component__WEBPACK_IMPORTED_MODULE_25__["SignUp2Component"],
                _folder_components_sign_up3_sign_up3_component__WEBPACK_IMPORTED_MODULE_26__["SignUp3Component"],
                // ContactsComponent,
                // ContactDetailComponent,
                // PageNotFoundCom,
                _folder_components_learn_pipe2_learn_pipe2_component__WEBPACK_IMPORTED_MODULE_27__["LearnPipe2Component"],
                _folder_components_child2_child2_component__WEBPACK_IMPORTED_MODULE_28__["Child2Component"],
                _folder_components_parent2_parent2_component__WEBPACK_IMPORTED_MODULE_29__["Parent2Component"],
                _folder_components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_30__["UserListComponent"],
                _folder_components_lifecycle_hooks_lifecycle_hooks_component__WEBPACK_IMPORTED_MODULE_31__["LifecycleHooksComponent"],
                _folder_components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_32__["MovieListComponent"],
                _folder_components_movie_handle_movie_handle_component__WEBPACK_IMPORTED_MODULE_33__["MovieHandleComponent"],
                // RouterHomeComponent,
                // RouterContact2Component,
                // RouterAboutComponent,
                // RouterProductsComponent,
                // RouterProductDetailComponent,
                // RouterProductListComponent,
                // RouterProductEditComponent,
                // RouterLoginComponent
                _folder_components_rest_todo_rest_todo_component__WEBPACK_IMPORTED_MODULE_34__["RestTodoComponent"],
                _folder_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_35__["RoundPipe"],
                _folder_pipes_format_data_pipe__WEBPACK_IMPORTED_MODULE_36__["FormatDataPipe"],
                _folder_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_37__["FilterPipe"],
                _folder_pipes_sort_number_pipe__WEBPACK_IMPORTED_MODULE_38__["SortNumberPipe"],
                _folder_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_39__["CapitalizePipe"],
                _folder_pipes_even_odd_pipe__WEBPACK_IMPORTED_MODULE_40__["EvenOddPipe"],
                _folder_pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_41__["SortPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                // RouterModule.forRoot(routesConfig)
                //CHÚ Ý: module chính app.module.ts chỉ add 1 file root duy nhất, nên phải gộp hết tất cả module con vào trong 1 file app-routing.module.ts, rồi mới add vào app.module.ts.
                _folder_router_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            //gọi service đã import, service đc import và gọi trong file này sẽ được dùng cho tất cả comp
            providers: [
                _folder_services_ip2_service__WEBPACK_IMPORTED_MODULE_42__["Ip2Service"],
                _folder_services_logging_service__WEBPACK_IMPORTED_MODULE_43__["LoggingService"],
                _folder_services_movie_service__WEBPACK_IMPORTED_MODULE_44__["MovieService"],
                _folder_services_product_service__WEBPACK_IMPORTED_MODULE_45__["ProductService"],
                _folder_services_rest_todo_service__WEBPACK_IMPORTED_MODULE_46__["RestTodoService"]
            ],
            //bootstrap: nơi khai báo comp chạy đầu tiên, là AppComponent.
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/folder-components/book/book.component.css":
/*!***********************************************************!*\
  !*** ./src/app/folder-components/book/book.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    color: thistle;\r\n    font-size: 30px;\r\n}"

/***/ }),

/***/ "./src/app/folder-components/book/book.component.html":
/*!************************************************************!*\
  !*** ./src/app/folder-components/book/book.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  book works! 123\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/folder-components/book/book.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/folder-components/book/book.component.ts ***!
  \**********************************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Dùng lệnh ng g c book để tạo component book có đầy đủ 4 file.
var BookComponent = /** @class */ (function () {
    function BookComponent() {
    }
    /*life cycle hooks: là cách để thực thi hành động nào đó, khi các sự kiện comp diễn ra như khi comp thay đổi trạng thái,
    create, destroy, khi render các try component bên trong nó...
  
    Vào https://angular.io/guide/lifecycle-hooks để xem thêm chi tiết.
    
    -để dùng lifecycle-hooks thì kế thừa interface OnInit, nên có override method ngOnInit(),
    hàm này đc chạy ngay sau constructor(): là thời điểm thích hợp để lấy dl trên server hoặc lấy dl các thuộc tính comp.
  
    */
    BookComponent.prototype.ngOnInit = function () {
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/folder-components/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/folder-components/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/card/card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/folder-components/card/card.component.ts ***!
  \**********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/* ngContent: phân vùng để đỗ dl vào. Dữ liệu đc đưa vào đi kèm mỗi khi gọi comp này ra.

vd:trong app.comp.html sẽ gọi comp này ra và truyền dl vào (NHƯNG KO PHẢI TRUYỀN THEO KIỂU @INPUT, MÀ LÀ TRUYỀN <comp>DL Ở GIỮA <comp> THẺ NTN)
    
<com này NẾU TRUYỀN THEO @INPUT THÌ PHẢI TRUYỀN TRONG NÀY>dl đưa vào mỗi khi gọi nó ra ở comp khác</com này>

- Chỉ truyền luôn vào class chính, truyền vào 1 chỗ :
Ở đây ta truyền <ng-content></ng-content> trong class="card" là class tạo 1 khung bọc xung quanh.

Lúc này trong app.component.html(page chính), ta khai báo comp này: <app-card><p>Khoa phạm training</p></app-card>
    với dl truyền vào là Khoa phạm training, dữ liệu truyền vào đó sẽ đc đưa vào vị trí <ng-content></ng-content>, nên nó sẽ đc nằm trong khung bọc.

-ngContent: có tính chất tái sử dụng khung viền đó mà ko cần phải khai báo lại. Chỉ cần gọi comp đó ra và truyền dl vào là đc.

-Truyền vào các class khác nhau, truyền vào nhiều chỗ thì ta dùng select để phân biệt class cần truyền vào:
+phân biệt bằng select .card-header hay .body-header

vd: bên app.comp.html: <p class="card-body">Khoa phạm: nhiều chỗ-vào body</p> sẽ truyền vào vị trí <ng-content> trong class body.

*/
var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-card",
            template: "\n        <div class=\"card\">\n            <h1>ng-content nh\u1EADn nh\u1EEFng c\u00E1i ko \u0111k n\u00E0o c\u1EA3</h1>\n            <ng-content></ng-content>\n            <br>\n\n            <h1>ng-content nh\u1EADn theo \u0111k class</h1>\n            <ng-content select=\".card-header\"></ng-content>\n            <br>\n            <ng-content select=\".card-body\"></ng-content>\n            <br>\n            <ng-content select=\".myClass\"></ng-content>\n            <br>\n\n            <h1>ng-content nh\u1EADn theo \u0111k th\u1EBB h4</h1>\n            <ng-content select=\"h4\"></ng-content>\n            <br>\n\n            <h1>ng-content nh\u1EADn theo \u0111k th\u1EBB (div myAttr), div hay p hay h \u0111\u1EC1u \u0111c </h1>\n            <ng-content select=\"[myAttr]\"></ng-content>\n            <br>\n\n            <h1>ng-content nh\u1EADn theo \u0111k th\u1EBB (span course=\"angular6\"), span hay div hay p \u0111\u1EC1u \u0111c</h1>\n            <ng-content select=\"[course=angular6]\"></ng-content>\n            <br><br>\n\n            <h1>Multi Attribute: ng-content nh\u1EADn theo \u0111k th\u1EBB (p handsome demo) </h1>\n            <ng-content select=\"[handsome][demo]\"></ng-content>\n            <br>\n\n        </div>\n    ",
            styles: [
                "\n      .card {\n        padding: 5px;\n        margin: 5px;\n        background: #fff;\n        border-radius: 2px;\n        display: inline-block;\n        width: 300px;\n        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),\n          0 6px 6px rgba(0, 0, 0, 0.23);\n      }\n    "
            ]
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/child/child.component.ts":
/*!************************************************************!*\
  !*** ./src/app/folder-components/child/child.component.ts ***!
  \************************************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChildComponent = /** @class */ (function () {
    function ChildComponent() {
        this.value2 = 0;
        /*Muốn gửi sự kiện từ child qua parent thì phải:
        Import EventEmitter, Output ở dòng trên cùng
        Khai báo sự kiện phải có @Output() eventname = new EventMiter().
        Sau khi khai báo đầy đủ, muốn kích hoạt myclick để có thể gửi sự kiện đi: this.myclick.emit()
    
        event myClick đã đc tạo ở đây, qua parent ta chỉ cần gọi đến myClick: <app-child (myClick)="value = value + 1"></app-child>
            +child.comp.ts gửi (myClick) đến parent.comp.ts, nhưng lúc này myClick chưa có tác dụng vì chưa đc kích hoạt.
            +tại child.comp.ts, mỗi lần kích btn Add thì myClick lại đc kích hoạt(gọi đến myClick.emit()), nên (myClick) bên parent mới có tác dụng và value bên parent sẽ ++ lên.
    
        =>Tóm lại: ở đây bấm Add thì kích hoạt myClick, làm cho myClick đc gọi bên parent.ts có tác dụng dẫn đến value++.
        */
        /*bài 28: Ouput có tham số
        -TH Ở parent.ts cần nhận tham số từ child.ts truyền về:
        +Vị trí nhận tham số ở parent.ts phải truyền vào LUÔN là tham số $event
        +Ở child mỗi khi xác nhận sự kiện myClick thì truyền kèm theo tham số
        +Ở @Output chỗ new EventEmitter<boolean> phải truyền kiểu dl vào, để khẳng định đúng kdl cần truyền qua bên parent, ở đây khẳng định tham số truyền qua là boolean.
        (nếu ko có <boolean> thì nó sẽ truyền qua bất kỳ cái gì mà sẽ ko báo lỗi)
        
        vd: ở child: this.myClick.emit(true);
            ở parent: changeValue($event);
            =>thì là truyền tham số true ở child qua tham số $event ở parent mỗi khi myClick đc kích hoạt.
    
        */
        //tạo ra keyname đồng thời là tên biến sự kiện output, kèm theo <kiểu dl tham số cần truyền qua parent2>, nếu ko biết kdl gì thì để <any>.
        // @Output() myClick = new EventEmitter<any>();
        this.myClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ChildComponent.prototype.ngOnInit = function () { };
    //cách khác: truyền keyname !==/=== tenbienOutput (biến thì sd cho child comp, còn keyname là để gọi bên parent comp)
    // @Output('myClickKey') myClick = new EventEmitter<boolean>();
    //kích hoạt sự kiện output
    ChildComponent.prototype.addForParent = function () {
        this.myClick.emit(true);
    };
    ChildComponent.prototype.subForParent = function () {
        this.myClick.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChildComponent.prototype, "myClick", void 0);
    ChildComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-child',
            template: "\n                <ng-content></ng-content>\n                <br>\n\n                <button (click)=\"addForParent();\">Add</button>\n                <button (click)=\"subForParent();\">Sub</button>\n                <br><br>\n                <h3>{{ value2 }}</h3>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], ChildComponent);
    return ChildComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/child2/child2.component.css":
/*!***************************************************************!*\
  !*** ./src/app/folder-components/child2/child2.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/child2/child2.component.html":
/*!****************************************************************!*\
  !*** ./src/app/folder-components/child2/child2.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-success\">\r\n  <div class=\"panel-heading\">\r\n    <h3 class=\"panel-title\">Child2 Component</h3>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <p>Name: {{ name }}</p>\r\n    <p>Married: {{ married ? 'Đã kết hôn' : 'Độc thân' }}</p>\r\n    <p>Age: {{ age }}</p>\r\n\r\n    <!-- Output: form gửi dl từ comp con child2 sang comp cha parent2 -->\r\n    <form>\r\n      <legend>Output: truyền dl từ child2 sang parent2 comp</legend>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"\">Full name: </label>\r\n      \r\n        <!-- nếu sd ngModel trong class form thì phải add dòng này sau ngModel: [ngModelOptions]=\"{standalone: true}\" -->\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"txtFullName\" [ngModelOptions]=\"{standalone: true}\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"\">Phone number: </label>\r\n\r\n        <!-- nếu sd ngModel trong class form thì phải add dòng này sau ngModel: [ngModelOptions]=\"{standalone: true}\" -->\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"txtphoneNumber\" [ngModelOptions]=\"{standalone: true}\">\r\n      </div>\r\n\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmitForm()\">Gửi dữ liệu output</button>\r\n    </form>\r\n\r\n    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/folder-components/child2/child2.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/folder-components/child2/child2.component.ts ***!
  \**************************************************************/
/*! exports provided: Child2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Child2Component", function() { return Child2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Child2Component = /** @class */ (function () {
    function Child2Component() {
        /*
        -Có 2 cách đặt tên biến input: Với keyname là tên input đc gọi ở comp cha
        (nếu comp cha muốn gọi tới input này thì nó sẽ gọi keyname và gắn giá trị vào keyname)
      
        +@Input() tenbienInput: kdl;  Cách này thì tenbienInput === keyname
        +@Input('keyname') tenbienInput : kdl;  Cách này thì tenbienInput có thể !==/=== keyname
        */
        //Dùng cách đặt tên biến input !== keyname
        // @Input('married') isMarried : boolean = false;
        //Dùng cách đặt tên biến input === keyname
        this.married = true;
        //Có thể gắn giá trị default hoặc ko. Giá trị default sẽ đc dùng nếu như input ko đc truyền giá trị vào.
        this.age = 20;
        this.name = "Tiến bình thường";
        //tạo ra keyname đồng thời là tên biến sự kiện output, kèm theo <kiểu dl tham số cần truyền qua parent2>, nếu ko biết kdl gì thì để <any>.
        // @Output() onHandleFullName = new EventEmitter<any>();
        this.onHandleFullName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHandlePhoneNumber = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Child2Component.prototype.ngOnInit = function () { };
    //cách khác: truyền keyname !==/=== tenbienOutput (biến thì sd cho child comp, còn keyname là để gọi bên parent comp)
    // @Output('onHandleFullName') myClick = new EventEmitter<boolean>();
    //mỗi lần gọi đến sk này thì sẽ gửi dl txtFullName qua comp cha, thông qua biến output onHandleFullName.
    Child2Component.prototype.onSubmitForm = function () {
        this.onHandleFullName.emit(this.txtFullName);
        this.onHandlePhoneNumber.emit(this.txtphoneNumber);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Child2Component.prototype, "married", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Child2Component.prototype, "age", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Child2Component.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Child2Component.prototype, "onHandleFullName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Child2Component.prototype, "onHandlePhoneNumber", void 0);
    Child2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-child2",
            template: __webpack_require__(/*! ./child2.component.html */ "./src/app/folder-components/child2/child2.component.html"),
            styles: [__webpack_require__(/*! ./child2.component.css */ "./src/app/folder-components/child2/child2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Child2Component);
    return Child2Component;
}());



/***/ }),

/***/ "./src/app/folder-components/contact-detail/contact-detail.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/folder-components/contact-detail/contact-detail.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/contact-detail/contact-detail.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/folder-components/contact-detail/contact-detail.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- các biến name, phoneNumber thuộc comp -->\r\n<p>Ten: {{ name }}</p> \r\n<p>SĐT: {{ phoneNumber }}</p>\r\n"

/***/ }),

/***/ "./src/app/folder-components/contact-detail/contact-detail.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/folder-components/contact-detail/contact-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: ContactDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailComponent", function() { return ContactDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/*Để nhận id,name,phoneNumber từ app-routing.module.ts vào component này.

-import ActivatedRoute, ParamMap từ router
-trong constructor sẽ khởi tạo biến cho ActivatedRoute
-Vào ngOnInit(): dùng ParamMap để get các biến truyền vào. vd params.get('id') là lấy giá trị biến id truyền qua từ app-routing.module.ts.
*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactDetailComponent = /** @class */ (function () {
    function ContactDetailComponent(route) {
        this.route = route;
        this.name = '';
        this.phoneNumber = '';
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = params.get('id'); //get id truyền qua từ app-routing.module.ts
            _this.name = params.get('name');
            _this.phoneNumber = params.get('phoneNumber');
            console.log(id, _this.name, _this.phoneNumber);
        });
    };
    ContactDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-detail',
            template: __webpack_require__(/*! ./contact-detail.component.html */ "./src/app/folder-components/contact-detail/contact-detail.component.html"),
            styles: [__webpack_require__(/*! ./contact-detail.component.css */ "./src/app/folder-components/contact-detail/contact-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/contacts/contacts.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/folder-components/contacts/contacts.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/contacts/contacts.component.html":
/*!********************************************************************!*\
  !*** ./src/app/folder-components/contacts/contacts.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- \r\n  -Yêu cầu: ở trong comp contacts sẽ hiện ra danh sách tên. \r\n  Click vào 1 trong các tên đó sẽ chuyển sang comp contactdetail là thông tin chi tiết của contact đc chọn.\r\n\r\n  THỰC HIỆN:\r\n  -tạo 1 mảng contacts chứa danh sách.\r\n  -viết html: Xem bên dưới.\r\n  -Vì trong html này có sd *ngFor, nhưng ở comp này ta đang thực hiện routing trong app-routing.module.ts, nên phải import thư viện chứa các ngFor,ngIf... vào module này.\r\n  Qua app-routing.module.ts import: import { CommonModule } from '@angular/common'; Và gọi xuống phần imports[] trong @NgModule({}) bên dưới module đó.\r\n\r\n  -Chỉnh format path của routesConfig trong file app-routing.module.ts; để nó có thể nhận ra đc format đường dẫn tương ứng từ html, để nó nhận và thực thi chuyển comp.\r\n\r\n  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\r\n  \r\n  QUY TRÌNH TRUYỀN DỮ LIỆU:\r\n  -dữ liệu ban đầu ở comp contacts là id,name,phoneNumber, sẽ đc truyền vào html contacts thông qua gọi {{ntn}}.\r\n  \r\n  -từ html contacts, thông qua routerLink sẽ truyền các id,name,phoneNumber đó qua app-routing.module.ts.\r\n  \r\n  -app-routing.module.ts sẽ thông qua điều khiển path đúng format với routerLink html: { path: 'detail/:id/:name/:phoneNumber', component: ContactDetailComponent }\r\n  để nhận các giá trị truyền từ routerLink html qua và gán chúng cho :id, :name,:phoneNumber(dấu : chỉ để nói đây là biến, còn gọi biến thì id, name như bt.);\r\n \r\n  Và lập tức truyền các giá trị :id,:name,:phoneNumber vừa nhận đc đến component ContactDetailComponent, và CHUYỂN MÀN HÌNH ĐẾN component ContactDetailComponent.\r\n\r\n  -component ContactDetailComponent: dùng ActivatedRoute, ParamMap để nhận dl truyền từ routing qua. (bên comp ContactDetailComponent có giải thích phần đó.)\r\n  \r\n  =>Lúc này comp Detail đã có dữ liệu, nó sẽ hiển thị lên bên html của nó như bình thường.\r\n\r\n   - - - - - - - -\r\n  ***CHÚ Ý: NẾU TỰ TRUYỀN VÀO 1 ĐƯỜNG LINK ĐÚNG FORMAT THÌ NÓ VẪN ĐẨY GIÁ TRỊ QUA CHO ROUTING MODULE.\r\n  VD: nhập vào đường link khi chạy web ra: http://localhost:4200/detail/123/Teooo/01663538331\r\n  thì nó vẫn gửi id=123, name=Teooo, phoneNumber=01663538331 qua app-routing.module.ts.\r\n\r\n-->\r\n\r\n<div *ngFor=\"let contact of contacts\">\r\n  <!-- Hiện lên mỗi contact trong danh sách contacts là mỗi đường link:\r\n  -Tên link là contact.name; Khi kích vào thì nó chuyển tới link: /detail/{{ contact.id }}; \r\n  với name,id,phoneNumber và contacts là các biến, mảng gọi từ comp.-->\r\n  <a routerLink=\"/detail/{{ contact.id }}/{{ contact.name }}/{{ contact.phoneNumber }}\">{{ contact.name }}</a>\r\n</div>"

/***/ }),

/***/ "./src/app/folder-components/contacts/contacts.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/folder-components/contacts/contacts.component.ts ***!
  \******************************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
Bài 58: Routing đơn giản
-Angular mạnh về single page application, chỉ tải 1 lần, khi chuyển giữa các page thì nó ko cần tải lại các trang web.
-Vậy Làm sao để tạo nhiều page cho app. => Sử dụng Router
-----------------------------

**CÁC BƯỚC
-Tạo folder comp bằng lện ng g c namecomp. (folder comp contacts và contact-detail)

-trong app.component.html: Ko gọi ra kiểu <app-contacts></app-contacts> mà là tạo đường link (Dùng thẻ a trong HTML để tạo links)
Mục tiêu: Click vào link Contacts sẽ hiện comp contacts, click vào link Detail sẽ hiện comp contact-detail.
vd:
  <a href="/contacts">Contacts</a>
  <a href="/detail">Detail</a>
  Nhưng dùng href thì sẽ refresh lại trang, nên ta đổi href thành routerLink: <a routerLink="/contacts">Contacts</a>  <a routerLink="/detail">Detail</a>

-Trong app.module.ts(nơi khai báo cho các comp): có giải thích cụ thể bên đó.
+import Routes, RouterModule từ @angular/router

+tạo ra biến routesConfig: để config các cái routes (là các hướng chuyển trang)
vd: biến đó sẽ phân biệt: nếu đường dẫn /contacts thì nó chuyển sang ContactsComponent; còn nếu đường dẫn /detail thì nó chuyển sang ContactDetailComponent.

+kéo xuống chỗ imports: [, RouterModule.forRoot(routesConfig)], thêm RouterModule.forRoot(tham số) và truyền vào biến routesConfig đã tạo ở trên.

*/
/*Bài 59: Xử lý route ngoại lệ

-Giống như trong .net, để thiết lập 1 đường dẫn mặc định, hay thiết lập trang chủ như vào http://localhost:4200 thì nó tự động chuyển đến home: http://localhost:4200/home
-ở đây ta muốn http://localhost:4200 thì nó tự động chuyển đến /contacts: http://localhost:4200/contacts

+vào app.module.ts: tại vị trí khởi tạo biến routesConfig, ta thêm 1 đường dẫn tới contacts như sau:
 { path: '', redirectTo: '/contacts', pathMatch: 'full' }

-Nếu thêm vào link 1 địa chỉ lỗi thì nó sẽ chạy đến trang của comp page-not-found (tự tạo comp này): vd: http://localhost:4200/sajsaksjla là 1 địa chỉ lỗi.\
Thiết lập nó cũng tại vị trí biến routesConfig của app.module.ts, với lệnh:
 { path: '**', component: PageNotFoundComponent }
(dấu ** ý là ko vào đc tất cả comp nào rồi thì mới chạy đến comp PageNotFoundComponent)

*/
var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
        //XEM GIẢI THÍCH bên html.
        //tạo 1 mảng chứa danh sách các contact
        this.contacts = [
            { id: 1, name: 'Teo', phoneNumber: '0123' },
            { id: 2, name: 'Ti', phoneNumber: '0456' },
            { id: 3, name: 'Tun', phoneNumber: '0789' },
        ];
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/folder-components/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/folder-components/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/contacts/contacts.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/folder-components/contacts/contacts.module.ts ***!
  \***************************************************************/
/*! exports provided: ContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts.component */ "./src/app/folder-components/contacts/contacts.component.ts");
/*
-Tạo ra những cái ngModule nhỏ hơn, để quản lý code tốt hơn trong những cái module riêng như app-routing.module.ts
=>Viết module riêng cho mỗi comp có sử dụng routing.

THỰC HIỆN
-trong folder contacts, tạo contacts.module.ts
-trong contacts.module.ts: (tương tự như app-routing.module.ts: xem cụ thể trong file đó).

GIẢI THÍCH CHO contacts.module.ts:
-----------------
**Tại routing module đc tách ra. Tạo ra file mới: app-routing.module.ts (ngang hàng với app.module.ts)
-import
+import NgModule từ core
+import Routes, RouterModule từ router
+import CommonModule từ common: để comp contacts routing với module này, khi render ra html sẽ sử dụng đc ngIF, ngFor
+import class component của nó: Contacts (ở đây làm module riêng cho comp contacts).

-Tạo ra routesConfig (copy từ app.module.ts qua, bên đó có giải thích rõ ràng rồi): bên trong chỉ cần 1 path để điều hướng đến ContactsComponent thôi.

-Tạo decurator function tên là: @NgModule({}) để chứa:
 +import[] những cái cần thiết cho router như trong app.module.ts
 +declarations[] để gọi class ContactsComponent từ comp đã import vào (giống như bên app.module.ts cũng import xong thì gọi xuống declarations)

 +(sẽ báo lỗi vì @NgModule({}) cần phải tạo thêm export class tiếp theo sau đây, để nó liên kết)

 +CÁI NÀY TRONG MODULE CON, NÊN KO CẦN: expors(exports có s): [RouterModule] : Tại vì trong app.component.html có dùng router-outlet nên ở đây ta phải exports RouterModule ra.

-Tạo export class ContactsModule{}
----------------------------------------------------------------------------------------------------

GIẢI THÍCH CHO app-routing.module.ts
----------
**Tại app-routing.module.ts: XÓA HOẶC Cmt LẠI CÁC khai báo đã tách ra bên này. IMPORT FILE module TÁCH (contacts.module.ts) VÀO LẠI app-routing.module.ts

-import ContactsModule của contacts.module.ts vào đây; kéo xuống phần import trong @NgModule để thêm ContactsModule vào:
    +nếu là Angular4 thì phải thêm ở đầu imports: [ContactsModule, RouterModule.forRoot(routesConfig), CommonModule ]
    +nếu là Angular6 thì thêm ở đâu cũng đc, ở đây thêm ở cuối imports: [RouterModule.forRoot(routesConfig), CommonModule, ContactsModule ]

-XÓA/cmt: import ContactsComponent và lần bỏ gọi nó trong declarations[] bên dưới

-XÓA/cmt: { path: 'contacts', component: ContactsComponent }, vì đã move qua bên contacts.module.ts

*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Để các comp có sử dụng module routing này: khi routing sẽ sử dụng đc ngIF, ngFor: thì ở module routing này phải import thư viện này. 
//Và gọi xuống phần imports[] trong @NgModule({}) bên dưới.


var routesConfig = [
    { path: 'contacts', component: _contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"] }
];
var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                // RouterModule.forRoot(routesConfig)
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routesConfig) //vì đây là module con chỉ với 1 comp, nên gọi forChild() chứ ko phải forRoot như module gộp nhiều comp.
            ],
            //declarations[] để gọi class ContactsComponent từ comp đã import vào (giống như bên app.module.ts cũng import xong thì gọi xuống declarations)
            declarations: [_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"]]
        })
    ], ContactsModule);
    return ContactsModule;
}());



/***/ }),

/***/ "./src/app/folder-components/ip/ip.component.css":
/*!*******************************************************!*\
  !*** ./src/app/folder-components/ip/ip.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/ip/ip.component.html":
/*!********************************************************!*\
  !*** ./src/app/folder-components/ip/ip.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>ip component: Cách 1 (folder ip): Gộp chung service với component</h3>\r\n\r\n<!-- gọi tới biến ip trong comp để xuất ra ip lấy về từ server -->\r\n<p>{{ ip }}</p>"

/***/ }),

/***/ "./src/app/folder-components/ip/ip.component.ts":
/*!******************************************************!*\
  !*** ./src/app/folder-components/ip/ip.component.ts ***!
  \******************************************************/
/*! exports provided: IpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpComponent", function() { return IpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import 'rxjs/add/operator/toPromise'; //trong angular 6 thì ko cần dòng này cũng có thể toPromise với get http.
var IpComponent = /** @class */ (function () {
    /*Khởi tạo http:
    cú pháp kb biến: (biến: kiểu dl) =>biến http có kiểu dl Http. Chỉ cần khai báo biến, Http nó sẽ tự động new ngầm.
    */
    function IpComponent(http) {
        var _this = this;
        this.http = http;
        //kb biến để tạo nhận Object http trả về
        this.ip = '';
        this.http.get('http://ip.jsontest.com/') //lấy dl từ server này về, trả dl về kiểu Observable
            .toPromise() //để chuyển dl sang dạng Promise. Để có toPromise() thì phải import ở trên cùng (Với Angular6 thì ko cần import nữa).
            .then(function (res) { return res.json(); }) //chuyển sang kiểu json
            .then(function (resJson) { return _this.ip = resJson.ip; }) //gán ip lấy từ service cho biến ip ở trên.
            .catch(function (err) { return console.log(err); }); //nếu có lỗi thì phóng lỗi ra console.
        //Ở đây then: nhận giá trị trả về, và catch phóng ngoại lệ.
    }
    IpComponent.prototype.ngOnInit = function () {
    };
    IpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ip',
            template: __webpack_require__(/*! ./ip.component.html */ "./src/app/folder-components/ip/ip.component.html"),
            styles: [__webpack_require__(/*! ./ip.component.css */ "./src/app/folder-components/ip/ip.component.css")]
        })
        /*Bài 35: Khái niệm service và http service
        Data service: lấy dữ liệu từ server thông qua cái API nào đó.
        -Có thể viết Api trong comp để thao tác lây service. Nhưng để cho component tập trung cho việc điều khiển các view, ta viết các service riêng ra.
        
        Bài này ta làm chung service trong comp
        
        
        **CÁC BƯỚC
        -Tại app.module.ts:
        +cũng giống như để dùng two-way binding [(ngModel)], ở service cũng phải import dòng này và gọi ra dưới phần imports, nếu đã import rồi thì thôi: []
        import { FormsModule } from '@angular/forms';
        
        +import thư viện HttpModule để lấy service từ server: import { HttpModule } from '@angular/http';
        và gọi nó ra dưới phần imports: []
        =>Lúc này trong ts ta mới có thể sử dụng HttpModule
        
        -Trong comp này ip.comp.ts:
        +import { Http } ở trên cùng.
        +import toPromise: import 'rxjs/add/operator/toPromise';
        Vì khi get dl về là dạng Observable, để chuyển dl sang dạng Promise thì phải import toPromise.
        (Trong Angular 6 thì đã tích hợp toPromise, nên ko cần import dòng đó nữa.)
        
        +Viết phần lấy service trong constructor. ( nên viết trong hàm ngOnInit(), còn constructor chỉ khai báo service thôi, qua comp ip2 sẽ làm như vậy)
        
        */
        ,
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], IpComponent);
    return IpComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/ip2/ip2.component.css":
/*!*********************************************************!*\
  !*** ./src/app/folder-components/ip2/ip2.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/ip2/ip2.component.html":
/*!**********************************************************!*\
  !*** ./src/app/folder-components/ip2/ip2.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>ip component: Cách 2: Cách 2 (folder ip2): Tách riêng service ra khỏi component</h3>\r\n\r\n<p>{{ ip }}</p>"

/***/ }),

/***/ "./src/app/folder-components/ip2/ip2.component.ts":
/*!********************************************************!*\
  !*** ./src/app/folder-components/ip2/ip2.component.ts ***!
  \********************************************************/
/*! exports provided: Ip2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ip2Component", function() { return Ip2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _folder_services_ip2_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../folder-services/ip2.service */ "./src/app/folder-services/ip2.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //IpService: là class bên trong ip.service.ts
var Ip2Component = /** @class */ (function () {
    //biến: kdl, ở đây là kb biến ipService
    //Cơ chế Dependence Injection sẽ Inject service vào constructor, mà ko cần phải khởi tạo đối tượng.
    function Ip2Component(ipService) {
        this.ipService = ipService;
        // this.ipService.getIp()  
        // .then(ip => this.ip = ip) 
        // .catch(err => console.log(err));
    }
    //Xem phần dưới sẽ giải thích tại sao dùng ngOnInit() để gán ip, thay cho dùng trong hàm tạo.
    Ip2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.ipService.getIp() //gọi tới hàm getIp(), hàm này lấy ip từ server về, rồi xử lý kiểu dl, rồi trả về ip.
            .then(function (ip) { return _this.ip = ip; }) //then: sẽ nhận ip trả về đó.
            .catch(function (err) { return console.log(err); });
    };
    Ip2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ip2',
            template: __webpack_require__(/*! ./ip2.component.html */ "./src/app/folder-components/ip2/ip2.component.html"),
            styles: [__webpack_require__(/*! ./ip2.component.css */ "./src/app/folder-components/ip2/ip2.component.css")],
        })
        /*Xem trước bài 35 trong folder ip: ip.component.ts
        ----------------------
        Bài 36: Cách 2: Viết riêng service, để comp tập trung vào việc điều khiển các view. Viết riêng còn thuận lợi cho việc testing.
        Tạo folder ip2.component.ts để thực hiện get service tách riêng.
        
        -Tạo file ip.service.ts: file này chứa service: qua file đó để xem giải thích chi tiết.
        -Vì dùng đến file ip.service.ts nên import nó vào.
        
        -trong @component: thêm vào mảng providers để chứa các file import qua để sử dụng nó trong comp này,
        ở đây nó chứa file IpService.
        
        -Trong class comp: nhận ip trả về.
        */
        ,
        __metadata("design:paramtypes", [_folder_services_ip2_service__WEBPACK_IMPORTED_MODULE_1__["Ip2Service"]])
    ], Ip2Component);
    return Ip2Component;
}());



/***/ }),

/***/ "./src/app/folder-components/learn-pipe/learn-pipe.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/folder-components/learn-pipe/learn-pipe.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/learn-pipe/learn-pipe.component.html":
/*!************************************************************************!*\
  !*** ./src/app/folder-components/learn-pipe/learn-pipe.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<p>đây là learn-pipe component</p>\r\n\r\n<!-- Pipe: công cụ show dữ liệu ra cho người dùng xem. Chuyển đổi từ dữ liệu thô, sang dữ liệu thân thiện hơn cho người dùng. -->\r\n\r\n<!-- Muốn tìm format của date thì angular.io/api rồi chọn pipe trong phần type.\r\nChọn vào DatePipe để xem các format của nó, có rất nhiều loại format. Kéo xuống để xem Examples ví dụ.-->\r\n<p>\r\n  {{ birthday | date:'medium' }}\r\n</p>\r\n\r\n<!-- định dạng json: gọi 1 kiểu OBJECT trong comp ra thì phải định dạng json cho nó. -->\r\n<p>{{ person | json }}</p>\r\n\r\n<!-- uppercase, lowercase, titlecase: định dạng hoa, thường, tiêu đề -->\r\n<p>{{ person.name | uppercase }}</p>\r\n\r\n<!-- Kết hợp giữa 2 hoặc nhiều pipe: vừa định dạng json, vừa uppercase-->\r\n<p>{{ person | json | uppercase }}</p>\r\n\r\n<!-- Dùng AsyncPipe để xử lý bất đồng bộ:  \r\nTH1: nếu là kdl bình thường gửi từ comp qua thì chỉ {{biến}} là đc\r\n-->\r\n<p>{{ addressBT }}</p>\r\n\r\n<!-- TH2: nếu là kdl từ server gửi về comp, rồi comp chuyển qua đây. Thì phải dùng async để chuyển.\r\nVào video sau để hiểu rõ hơn về permise async: https://www.youtube.com/watch?v=Xj0pqYWwX8Y -->\r\n<p>{{ addressServer | async }}</p>\r\n\r\n<!-- Custom pipe: tự tạo 1 pipe làm tròn: xem trong round.pipe.ts -->\r\n\r\n<!-- Sau khi gọi đến pipe làm tròn, xử lý số, sẽ render ra là 2, chứ ko phải 1.9 -->\r\n\r\n<!-- Ở đây ta có truyền vào tham số true/false cho hàm transform() của roundNum, để nó làm tròn lên xuống theo ý muốn. \r\n:10/:1 là 2 tham số truyền vào cho tham số addTo bên trong hàm  transform().\r\nTruyền vào bao nhiêu tham số cũng đc, mỗi tham số tương ứng truyền theo thứ tự: (pipename: ts1:ts2:ts3...)-->\r\n\r\n<p>{{ 1.9 | roundNum : true : 10 }}</p>\r\n<p>{{ 3.7 | roundNum : false : 1 }}</p>\r\n\r\n"

/***/ }),

/***/ "./src/app/folder-components/learn-pipe/learn-pipe.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/folder-components/learn-pipe/learn-pipe.component.ts ***!
  \**********************************************************************/
/*! exports provided: LearnPipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnPipeComponent", function() { return LearnPipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LearnPipeComponent = /** @class */ (function () {
    function LearnPipeComponent() {
        this.birthday = new Date(2015, 7, 25); //tháng đc tính từ 0->7 nên ghi 7 thì sẽ render ra tháng 8
        // person={ name: 'Khoa Phạm', age: 30 }; //tạo 1 object, nó tự hiểu kdl
        //gắn cứng kdl là any nghĩa là kiểu dl bất kỳ nào đó, thường là dùng cho object
        this.person = { name: 'Khoa Phạm', age: 30 };
        //Dùng AsyncPipe:
        //TH1: nếu là kdl string bình thường thì chỉ cần khai báo rồi gọi trong html {{ biến }} là đc.
        this.addressBT = '92 Lê Thị Riêng - BT';
        //TH2: nếu là kdl từ server gửi về thì sẽ là kdl phải là Promise của string, nên phải định dạng promise cho nó.
        this.addressServer = Promise.resolve('92 Lê Thị Riêng - Server gửi về');
    }
    LearnPipeComponent.prototype.ngOnInit = function () {
    };
    LearnPipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-learn-pipe',
            template: __webpack_require__(/*! ./learn-pipe.component.html */ "./src/app/folder-components/learn-pipe/learn-pipe.component.html"),
            styles: [__webpack_require__(/*! ./learn-pipe.component.css */ "./src/app/folder-components/learn-pipe/learn-pipe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LearnPipeComponent);
    return LearnPipeComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/learn-pipe2/learn-pipe2.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/folder-components/learn-pipe2/learn-pipe2.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/learn-pipe2/learn-pipe2.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/folder-components/learn-pipe2/learn-pipe2.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>learn-pipe2 component</h3>\r\n\r\n\r\n<!-- dùng bootstrap 3 - bs3-container -->\r\n<div class=\"container\">\r\n\r\n  <!-- bs3-row col -->\r\n  <div class=\"row\">\r\n    <!-- trong row thì có thể tạo nhiều class với thẻ div, để tạo nhiều table -->\r\n\r\n    \r\n    <!-- format-data.pipe.ts: cắt văn bản nếu quá dài, == pipe slice có sẵn -->\r\n    <!-- <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\"> -->\r\n    <div class=\"col-md-8\">\r\n\r\n      <!-- bs3-table bordered -->\r\n      <table class=\"table table-bordered table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>Tên pipe</th>\r\n            <th>Đầu vào</th>\r\n            <th>Đầu ra</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>FormatData</td>\r\n            <td>{{ content }}</td>\r\n            <td>{{ content | formatData }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n    </div>\r\n\r\n\r\n    <!-- filter.pipe.ts: lọc mảng theo điều kiện đưa vào -->\r\n    <div class=\"col-md-8\">\r\n      <!-- bs3-table bordered -->\r\n      <table class=\"table table-bordered table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Name</th>\r\n            <th>Status</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <!--nhập dl vào 3 ô input này, nó sẽ lọc từng cột ra theo dl nhập vào, kiểu như search -->\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"idFilter\">\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nameFilter\">\r\n            </td>\r\n            <td>\r\n              <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"statusFilter\"> -->\r\n\r\n              <!-- dạng drop-down(combobox), nếu chọn mục Active thì sẽ trả về cho biến comp string statusFilter='true'-->\r\n              <select class=\"form-control\" [(ngModel)]=\"statusFilter\">\r\n                <option value=\"all\">All</option>\r\n                <option value=\"true\">Active</option>\r\n                <option value=\"false\">Deactive</option>\r\n              </select>\r\n            </td>\r\n          </tr>\r\n\r\n          <!-- mỗi vòng for là 1 tr, mỗi tr là 1 hàng.\r\n          Gọi filter pipe và các tham số truyền vào pipe(các biến idFilter...là biến của comp, giá trị lấy từ input, gắn với ngModel ở trên )-->\r\n          <tr *ngFor=\"let product of products | filter : idFilter : nameFilter : statusFilter\">\r\n            <td>{{ product.id }}</td>\r\n            <td>{{ product.name }}</td>\r\n            <td>{{ product.status ? 'Active' : 'Deactive' }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n    </div>\r\n\r\n\r\n    <!-- sort-number.pipe.ts: sắp xếp mảng arrayNumber -->\r\n    <div class=\"col-md-8\">\r\n        <!-- bs3-table bordered -->\r\n        <table class=\"table table-bordered table-hover\">\r\n          <thead>\r\n            <tr>\r\n              <th>Đầu vào arrayNumber</th>\r\n              <th>Đầu ra sau khi sx</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td>\r\n                <!-- sự kiện click sẽ gọi hàm onHandleSort() trong comp và truyền vào 1,-1-->\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"onHandleSort(1);\">Tăng dần</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"onHandleSort(-1);\">Giảm dần</button>\r\n                <p>{{ sortValue }}</p>\r\n                <p>{{ arrNumber }}</p>\r\n              </td>\r\n              <!-- Đưa param sortValue từ comp vào pipe sortNumber để sx. -->\r\n              <td>{{ arrNumber | sortNumber : sortValue}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n  \r\n    </div>\r\n\r\n\r\n    <!-- capitalize.pipe.ts: định dạng viết hoa cho ký tự đầu, kể cả có dấu Đ,Â,Ô... -->\r\n    <div class=\"col-md-8\">\r\n        <!-- bs3-table bordered -->\r\n        <table class=\"table table-bordered table-hover\">\r\n          <thead>\r\n            <tr>\r\n              <th>Đầu vào chuỗi</th>\r\n              <th>Đầu ra: hoa chữ đầu</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\">\r\n                \r\n              </td>\r\n              <td> {{ name | capitalize }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n  \r\n    </div>\r\n\r\n\r\n    <!-- even-odd.pipe.ts: pipe lọc phần tử chẵn, lẽ trong arrayNumber -->\r\n    <div class=\"col-md-8\">\r\n      <!-- bs3-table bordered -->\r\n      <table class=\"table table-bordered table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>Đầu vào arrayNumber</th>\r\n            <th>Sau khi phân biệt chẵn lẽ</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>\r\n              <!-- sự kiện click sẽ gọi hàm onHandleEven() trong comp và truyền vào 1,-1-->\r\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"onHandleEven(1);\">Chẵn</button>\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"onHandleEven(-1);\">Lẽ</button>\r\n              <p>{{ evenValue }}</p>\r\n              <p>{{ arrNumber }}</p>\r\n            </td>\r\n            <!-- Đưa param sortValue từ comp vào pipe sortNumber để sx. -->\r\n            <td>{{ arrNumber | evenOdd : evenValue}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n    </div>\r\n\r\n\r\n    <!-- sort.pipe.ts: bài tập sắp xếp mảng -->\r\n    <div class=\"col-md-8\">\r\n      <!-- bs3-table bordered -->\r\n      <table class=\"table table-bordered table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <!--click  vào tiêu đề name thì sx theo name tăng/giảm, gửi param 'name' về; \r\n            click vào tiêu đề Price thì sx theo Price tăng/giảm, gửi param 'price' về truyền cho sortByBT của comp.\r\n            Truyền các tham số 'name' 'price' vào hàm onSort() trong comp-->\r\n            <th (click)=\"onSort('name')\">Name</th>\r\n            <th (click)=\"onSort('price')\">Price</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <!-- Vì pipe sort là sx luôn cho cả array, nên ta truyền trong ngFor -->\r\n          <tr *ngFor=\"let product of products2 | sort: sortByBT : sortValueBT; let i = index\">\r\n            <td>{{ i + 1 }}</td>\r\n            <td>{{ product.name }}</td>\r\n            <td>{{ product.price | currency:'USD':'symbol':'1.2-3'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/folder-components/learn-pipe2/learn-pipe2.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/folder-components/learn-pipe2/learn-pipe2.component.ts ***!
  \************************************************************************/
/*! exports provided: LearnPipe2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnPipe2Component", function() { return LearnPipe2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LearnPipe2Component = /** @class */ (function () {
    function LearnPipe2Component() {
        //1 dòng '', nhiều dòng ``
        this.content = "Thi\u1EBFt k\u1EBF quen thu\u1ED9c\n                            M\u00E1y \u0111\u01B0\u1EE3c ho\u00E0n thi\u1EC7n t\u1EEB kim lo\u1EA1i nguy\u00EAn kh\u1ED1i,\n                            k\u1EBFt h\u1EE3p v\u1EDBi m\u1EB7t k\u00EDnh cong nh\u1EB9 2.5D cho c\u1EA3m gi\u00E1c vu\u1ED1t ch\u1EA1m tho\u1EA3i m\u00E1i h\u01A1n.";
        this.products = [
            {
                id: 1,
                name: 'Dell n5110',
                status: true
            },
            {
                id: 2,
                name: 'Iphone 7',
                status: false
            },
            {
                id: 3,
                name: 'Samsung s7',
                status: false
            },
            {
                id: 4,
                name: 'Lenovo',
                status: true
            }
        ];
        //mảng dùng để học pipe sắp xếp arraynumber; và cũng là mảng học pipe lấy chẵn lẽ: even-odd
        this.arrNumber = [1, 3, 2, 4, 7, 10];
        this.sortValue = 1;
        this.evenValue = 1;
        //biến để học pipe viết hoa chữ đầu kể cả có dấu
        // name : string = ''; có string hay ko đều đc.
        this.name = '';
        //tạo mảng để làm bài tập về sắp xếp và lọc (filter)
        this.products2 = [
            {
                id: 1,
                name: 'Dell n5110',
                price: 500
            },
            {
                id: 2,
                name: 'Iphone 7',
                price: 300
            },
            {
                id: 3,
                name: 'Samsung s7',
                price: 100
            },
            {
                id: 4,
                name: 'Lenovo',
                price: 600
            },
            {
                id: 5,
                name: 'Nokia',
                price: 200
            },
            {
                id: 6,
                name: 'BPhone',
                price: 800
            }
        ];
        //2 biến phục vụ cho bài tập sort: sort.pipe.ts
        // Nếu truyền vào từ html cho sortByBT = 'name' thì sx theo name, còn sortByBT='price' thì sx theo price.  
        // sortValueBT chỉ là giá trị luân phiên 1/-1 để điều khiển sx tăng hay giảm thôi.
        this.sortByBT = 'name'; //mặc định là name.
        this.sortValueBT = 1; //price: 1 sx tăng, -1 sx giảm
    }
    LearnPipe2Component.prototype.ngOnInit = function () {
    };
    //hàm ko trả về gì cả thì nên để :void, nếu ko để cũng ko sao.
    // onHandleSort(value) : void{
    //   this.sortValue = value;
    // }
    LearnPipe2Component.prototype.onHandleSort = function (value) {
        this.sortValue = value;
    };
    LearnPipe2Component.prototype.onHandleEven = function (value) {
        this.evenValue = value;
    };
    // Nếu truyền từ html vào là 'name' thì sx theo name; nếu truyền từ html vào là 'price' thì sx theo price.
    //    sortByBT là giá trị quyết định sẽ sx theo name hay price.
    //Vì ban đầu khi mới render lên thì mặc định sẽ là name và 1: mặc định là sx tăng dần theo name. 
    //Nên khi kích vào tiêu đề Name/Price thì phải this.sortValueBT = -this.sortValueBT; để cho nó đổi
    //  chế độ sx tăng/giảm luân phiên sau mỗi lần kích.
    LearnPipe2Component.prototype.onSort = function (value) {
        this.sortByBT = value;
        this.sortValueBT = -this.sortValueBT;
        console.log(this.sortValueBT);
    };
    LearnPipe2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-learn-pipe2',
            template: __webpack_require__(/*! ./learn-pipe2.component.html */ "./src/app/folder-components/learn-pipe2/learn-pipe2.component.html"),
            styles: [__webpack_require__(/*! ./learn-pipe2.component.css */ "./src/app/folder-components/learn-pipe2/learn-pipe2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LearnPipe2Component);
    return LearnPipe2Component;
}());



/***/ }),

/***/ "./src/app/folder-components/lifecycle-hooks/lifecycle-hooks.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/folder-components/lifecycle-hooks/lifecycle-hooks.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/lifecycle-hooks/lifecycle-hooks.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/folder-components/lifecycle-hooks/lifecycle-hooks.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Comp học về lifecycle-hooks.</h3>\n    </div>\n    <div class=\"panel-body\">\n      <p>Tổng trước đó: {{ previousTotal }}</p>\n      <p>Tổng: {{ total }}</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/folder-components/lifecycle-hooks/lifecycle-hooks.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/folder-components/lifecycle-hooks/lifecycle-hooks.component.ts ***!
  \********************************************************************************/
/*! exports provided: LifecycleHooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifecycleHooksComponent", function() { return LifecycleHooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LifecycleHooksComponent = /** @class */ (function () {
    /* ko phải hook, nhưng đc gọi đầu tiên, thường dùng để tiêm các Dependency Injection như các Service.
    */
    function LifecycleHooksComponent() {
        this.products = [];
        this.total = 0;
        // console.log('Constructor()');
    }
    /*
    -ngOnChanges: đc thực hiện khi @INPUT có sự thay đổi, đc quản lý thông qua đối tượng SimpleChanges, đc gọi trước cả ngOnInit().
    -mỗi lần nhận giá trị input gửi từ app.comp.html gửi về thì hàm ngOnChanges() đc thực thi, dùng để xử lý khi @input có sự thay đổi.
    
    -cho ta 1 đối tượng kiểu SimpleChanges (SimpleChanges phải import từ @Angular/core).
    -object SimpleChanges có các thuộc tính:
      +currentValue: giá trị hiện tại,
      +previousValue: giá trị trước đó,
      +firstChange: thay đổi lần đầu tiên: true/false.
  
    Console.log và F12 ta thấy, sau mỗi lần input thay đổi thì: sẽ cho ra object total:simpleChanges với total là tên input nhận sự thay đổi,
      và object đó chứa đầy đủ các thuộc tính như trên. */
    LifecycleHooksComponent.prototype.ngOnChanges = function (simpleChanges) {
        // console.log('ngOnChanges()');
        // console.log(simpleChanges);
        this.previousTotal = simpleChanges.total.previousValue;
    };
    /* chạy ngay sau khi ngOnChanges() được gọi lần đầu tiên và chỉ chạy 1 lần duy nhất.
    Dùng để khởi tạo các giá trị, các thuộc tính đầu vào của comp.
    */
    LifecycleHooksComponent.prototype.ngOnInit = function () {
        // console.log('ngOnInit()');
        this.products = [
            {
                id: 1,
                name: 'Iphone 7',
                status: true
            }
        ];
    };
    /*ngDoCheck: cứ mỗi lần gọi ngOnChanges() HOẶC ngOnInit() thì hàm ngDoCheck() sẽ đc gọi theo.  */
    LifecycleHooksComponent.prototype.ngDoCheck = function () {
        // console.log('ngDoCheck()');
    };
    /*ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked:
    là các hook bên trong ngDoCheck*/
    /*ngAfterContentInit: Sử dụng ng-content để kiểm tra, sử dụng ContentChild (kiểu ElementRef) -template reference variable
    Chỉ đc gọi 1 lần duy nhất. Chỉ dành cho component*/
    LifecycleHooksComponent.prototype.ngAfterContentInit = function () {
        // console.log('ngAfterContentInit()');
    };
    //Được gọi nhiều lần. Chỉ dành cho component.
    LifecycleHooksComponent.prototype.ngAfterContentChecked = function () {
        // console.log('ngAfterContentChecked()');
    };
    /*ngAfterViewInit: đc gọi sau khi khởi tạo view của comp và các child views.
    Chú ý: template variable #tenbien cũng là sd child view.
    Chỉ đc gọi 1 lần.*/
    LifecycleHooksComponent.prototype.ngAfterViewInit = function () {
        // console.log('ngAfterViewInit()');
    };
    //ngAfterViewChecked: đc gọi nhiều lần. Chỉ dành cho comp.
    LifecycleHooksComponent.prototype.ngAfterViewChecked = function () {
        // console.log('ngAfterViewChecked()');
    };
    /*Hàm này chỉ thực thi khi comp đang hiện rồi bị ẩn đi, mỗi lần ẩn comp đi là nó lại đc thực thi.
    Sử dụng ngIf kết hợp với biến isDestroy trong app.component.html giúp việc ẩn hiện comp đc thực hiện mỗi lần ấn button.*/
    LifecycleHooksComponent.prototype.ngOnDestroy = function () {
        // console.log('ngOnDestroy()');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LifecycleHooksComponent.prototype, "total", void 0);
    LifecycleHooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lifecycle-hooks',
            template: __webpack_require__(/*! ./lifecycle-hooks.component.html */ "./src/app/folder-components/lifecycle-hooks/lifecycle-hooks.component.html"),
            styles: [__webpack_require__(/*! ./lifecycle-hooks.component.css */ "./src/app/folder-components/lifecycle-hooks/lifecycle-hooks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LifecycleHooksComponent);
    return LifecycleHooksComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/list-person/list-person.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/folder-components/list-person/list-person.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/list-person/list-person.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/folder-components/list-person/list-person.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--ngFor kết hợp Input:\r\n  Tương tác, truyền mảng từ comp list-person(cha) sang comp person(con).\r\n\r\n  Lấy giá trị từng person của mảng arrPeople trong comp, truyền qua cho folder person.component.ts.\r\n  Vì truyền từ đây qua folder person.component.ts nên phải gọi <app-person>.\r\n\r\n  Chú ý: <app-person [name]=\"person.name\" [age]=\"person.age\">: person là thành phần trong ngFor\r\n    Với [name],[age] là các thuộc tính Input của person.component.ts đc gọi ra để gắn các giá trị vào.\r\n    \r\n    Nếu ko có [] bọc ngoài name,age đầu, thì sẽ đc hiểu là gán trực tiếp giá trị chuỗi \"person.name\",\"person.age\" cho nó, \r\n    chứ ko phải giá trị lấy từ duyệt mảng.\r\n-->\r\n<!-- <div *ngFor=\"let person of arrPeople\">\r\n  <app-person [name]=\"person.name\" [age]=\"person.age\"></app-person>\r\n\r\n</div> -->\r\n\r\n<!-- Ở trên thẻ div, khi render ra thì Inspect(F12) sẽ cho ra code có dòng div. Nếu ko muốn xuất hiện thẻ bọc div thì ta dùng thẻ <ng-container>.\r\n  <ng-container>: là thẻ khi render ra sẽ mất đi, ko hiển thị trên element khi F12 -->\r\n\r\n<ng-container *ngFor=\"let person of arrPeople\">\r\n  <app-person\r\n    [name]=\"person.name\"\r\n    [age]=\"person.age\" \r\n    (removePerson)=\"removePersonByName($event)\"> \r\n    <!--Vì chưa biết param là gì, nên ta luôn để là $event. \r\n      (removePerson): là sự kiện output đc gửi từ person.js qua, sự kiện này gửi thêm param qua, param này đc đưa vào $event\r\n\r\n      -$event: thông qua thẻ <app-person>, biến này nhận name gửi qua từ output removePerson của com person.-->\r\n</app-person>\r\n\r\n</ng-container>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/folder-components/list-person/list-person.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/folder-components/list-person/list-person.component.ts ***!
  \************************************************************************/
/*! exports provided: ListPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPersonComponent", function() { return ListPersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListPersonComponent = /** @class */ (function () {
    function ListPersonComponent() {
        this.arrPeople = [
            { name: 'Ti', age: 10 },
            { name: 'Teo', age: 15 },
            { name: 'Tun', age: 7 }
        ];
    }
    ListPersonComponent.prototype.ngOnInit = function () {
    };
    //hàm xóa phần tử
    ListPersonComponent.prototype.removePersonByName = function (name) {
        var index = this.arrPeople.findIndex(function (e) { return e.name === name; });
        this.arrPeople.splice(index, 1); //xóa tại phần thử thứ index, xóa 1 phần tử
    };
    ListPersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-person',
            template: __webpack_require__(/*! ./list-person.component.html */ "./src/app/folder-components/list-person/list-person.component.html"),
            styles: [__webpack_require__(/*! ./list-person.component.css */ "./src/app/folder-components/list-person/list-person.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListPersonComponent);
    return ListPersonComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/movie-handle/movie-handle.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/folder-components/movie-handle/movie-handle.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/movie-handle/movie-handle.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/folder-components/movie-handle/movie-handle.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-success\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Học service bổ sung: comp movie-handle</h3>\n  </div>\n  <div class=\"panel-body\">\n    <!-- Test service: logging.service.ts -->\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"onClick();\">Test logging service</button>\n    <br>\n    <hr>\n\n    <!-- Handle movie -->\n    <!-- #name: dạng template deference variable -->\n    <form role=\"form\">\n      <div class=\"form-group\">\n        <label for=\"\">Tên phim</label>\n        <input type=\"text\" class=\"form-control\" #name>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"\">Đường dẫn</label>\n        <input type=\"text\" class=\"form-control\" #link>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"\">Tác giả</label> \n        <input type=\"text\" class=\"form-control\" #author>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"addVideo(name.value, link.value, author.value);\">Thêm</button>\n    </form>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/folder-components/movie-handle/movie-handle.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/folder-components/movie-handle/movie-handle.component.ts ***!
  \**************************************************************************/
/*! exports provided: MovieHandleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieHandleComponent", function() { return MovieHandleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _folder_services_logging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../folder-services/logging.service */ "./src/app/folder-services/logging.service.ts");
/* harmony import */ var _folder_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../folder-services/movie.service */ "./src/app/folder-services/movie.service.ts");
/* harmony import */ var _folder_models_movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../folder-models/movie */ "./src/app/folder-models/movie.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieHandleComponent = /** @class */ (function () {
    //Cơ chế Dependence Injection sẽ Inject service vào constructor, mà ko cần phải khởi tạo đối tượng.
    function MovieHandleComponent(loggingService, movieService) {
        this.loggingService = loggingService;
        this.movieService = movieService;
    }
    MovieHandleComponent.prototype.ngOnInit = function () { };
    MovieHandleComponent.prototype.onClick = function () {
        this.loggingService.logging();
    };
    MovieHandleComponent.prototype.addVideo = function (name, link, author) {
        var movie = new _folder_models_movie__WEBPACK_IMPORTED_MODULE_3__["Movie"](null, name, link, author);
        this.movieService.addVideo(movie); //truyền dl movie muốn thêm vào servcie
    };
    MovieHandleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-movie-handle",
            template: __webpack_require__(/*! ./movie-handle.component.html */ "./src/app/folder-components/movie-handle/movie-handle.component.html"),
            styles: [__webpack_require__(/*! ./movie-handle.component.css */ "./src/app/folder-components/movie-handle/movie-handle.component.css")]
        }),
        __metadata("design:paramtypes", [_folder_services_logging_service__WEBPACK_IMPORTED_MODULE_1__["LoggingService"], _folder_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], MovieHandleComponent);
    return MovieHandleComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/movie-list/movie-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/folder-components/movie-list/movie-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/movie-list/movie-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/folder-components/movie-list/movie-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Học service bổ sung: comp movie-list</h3>\n  </div>\n  <div class=\"panel-body\">\n    \n    <table class=\"table table-bordered table-hover\">\n      <thead>\n        <tr>\n          <th>Stt: index+1</th>\n          <th>ID</th>\n          <th>Name</th>\n          <th>Link</th>\n          <th>Author</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let movie of movies; let i = index\" (click)=\"enableUpdateVideo(movie.id, movie.name, movie.link, movie.author);\" (dblclick)=\"deleteVideo(movie.id);\">\n          <td>{{ i + 1 }}</td>\n          <td>{{ movie.id }}</td>\n          <td>{{ movie.name }}</td>\n          <td>\n            <a [href]=\"movie.link\">{{ movie.name }}</a>\n          </td>\n          <td>{{ movie.author }}</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div *ngIf=\"isCheckUpdate\">\n        Name: <input type=\"text\" class=\"form-control\" [value]=\"name\" #nameRef>\n        Link: <input type=\"text\" class=\"form-control\" [value]=\"link\" #linkRef>\n        Author: <input type=\"text\" class=\"form-control\" [value]=\"author\" #authorRef>\n        <!-- sự kiện click, khi click sẽ gọi đến hàm addWord() của comp để thêm phần tử.\n        Sau khi thêm thì ẩn form đi bằng cách set lại isShowForm=false-->\n        <br>\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"handleUpdateVideo(nameRef.value, linkRef.value, authorRef.value);\">Update</button>\n    </div>\n    \n    <br>\n    <p>Single click vào hàng cần sửa</p>\n    <p>Double click vào hàng cần xóa</p>\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/folder-components/movie-list/movie-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/folder-components/movie-list/movie-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _folder_services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../folder-services/movie.service */ "./src/app/folder-services/movie.service.ts");
/* harmony import */ var _folder_models_movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../folder-models/movie */ "./src/app/folder-models/movie.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieListComponent = /** @class */ (function () {
    function MovieListComponent(movieService) {
        this.movieService = movieService;
        this.movies = [];
        //UPDATE
        //kích đơn 1 lần sẽ hiện ra khung để update
        this.isCheckUpdate = false;
        this.name = '';
        this.link = '';
        this.author = '';
    }
    MovieListComponent.prototype.ngOnInit = function () {
        this.movies = this.movieService.getAllMovie();
        console.log(this.movies);
    };
    //hàm xóa nếu double click vào hàng đó: double click sẽ gửi id về đây, rồi hàm này sẽ gửi id qua service để xóa
    MovieListComponent.prototype.deleteVideo = function (id) {
        // console.log(id);
        this.movieService.deleteVideo(id);
    };
    //xử lý hiện lên khung update và binding dl ra ô input
    //Nhận các name cũ gửi về thông qua ngFor
    MovieListComponent.prototype.enableUpdateVideo = function (id, name, link, author) {
        this.isCheckUpdate = !this.isCheckUpdate; //khung hiện lên
        //các giá trị nhận về
        this.id = id;
        this.name = name;
        this.link = link;
        this.author = author;
        // console.log(id, name, link, author,  this.isCheckUpdate);
    };
    //xử lý update
    //Nhận các name mới gửi về, thông qua #nameRef là template reference variable
    MovieListComponent.prototype.handleUpdateVideo = function (name, link, author) {
        var movie = new _folder_models_movie__WEBPACK_IMPORTED_MODULE_2__["Movie"](this.id, name, link, author);
        this.movieService.updateVideo(movie);
        //update xong thì tắt form đi và remove id lại
        this.isCheckUpdate = false;
        this.id = null;
    };
    MovieListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-movie-list",
            template: __webpack_require__(/*! ./movie-list.component.html */ "./src/app/folder-components/movie-list/movie-list.component.html"),
            styles: [__webpack_require__(/*! ./movie-list.component.css */ "./src/app/folder-components/movie-list/movie-list.component.css")]
        }),
        __metadata("design:paramtypes", [_folder_services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/page-not-found/page-not-found.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/folder-components/page-not-found/page-not-found.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/page-not-found/page-not-found.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/folder-components/page-not-found/page-not-found.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/folder-components/page-not-found/page-not-found.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/folder-components/page-not-found/page-not-found.component.ts ***!
  \******************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/folder-components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/folder-components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/parent/parent.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/folder-components/parent/parent.component.ts ***!
  \**************************************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _child_child_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../child/child.component */ "./src/app/folder-components/child/child.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParentComponent = /** @class */ (function () {
    function ParentComponent() {
        this.value = 0;
    }
    ParentComponent.prototype.ngOnInit = function () { };
    ParentComponent.prototype.changeValue = function (isAdd) {
        isAdd ? this.value++ : this.value--; //isAdd=true thì ++
    };
    //gọi biến value2 từ ChildComponent
    ParentComponent.prototype.onAddForViewChild = function () {
        this.myChild.value2++;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_child_child_component__WEBPACK_IMPORTED_MODULE_1__["ChildComponent"]),
        __metadata("design:type", _child_child_component__WEBPACK_IMPORTED_MODULE_1__["ChildComponent"])
    ], ParentComponent.prototype, "myChild", void 0);
    ParentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parent',
            //$event nhận tham số truyền qua từ child.ts: qua đó xem.
            /*Bai 31: Tạo object. Thay đổi biến thông qua object:
            
            #child trong <app-child #child>: là tạo ra 1 biến/object child của class child.comp.ts.
                Do đó child có thể gọi đến biến value2 ở child.comp.ts để set lại giá trị cho nó.
        
                Vậy khi click btn Add for Child thì biến child sẽ gọi đến value2 ở child.comp.ts và set lại giá trị cho value2 đó.
        
                ***CÁCH 2: DÙNG ViewChild: xem bên dưới
            */
            //$event: thông qua thẻ <app-child>, biến này nhận value gửi qua từ output myClick của comp Child.
            //gọi đên sự kiện output bên child comp trong dấu ngoặc () như: (myClick)
            template: "\n        <h3>{{ value }}</h3>\n        \n        <app-child (myClick)=\"changeValue($event);\" #child></app-child>\n        \n        <button (click)=\"child.value2 = child.value2 + 1\">Add for Child-#Child</button> \n        \n        <button (click)=\"onAddForViewChild();\">Add for Child-ViewChild</button> \n        \n    "
        })
        /*Sử dụng ViewChild để: gọi luôn component child.ts qua bên parent.ts này:
        -add ViewChild vào trong import core.
        -import component cần gọi qua đây bằng ViewChild: import { ChildComponent } from './child.component';
        
        -Xuống dưới, vào trong class ParentComponent, dùng @ViewChild để gọi comp cần gọi qua đây (comp child.ts)
        và tạo 1 đối tượng bởi comp cần gọi qua đó.
        +Dùng đối tượng đó để thao tác. Đối tượng đc tạo từ comp viewchild cần gọi qua đó đc xem như là comp đó, nó có thể thao tác set lại mọi thuộc tính của comp đó.
        
        -kéo lên chỗ template thấy button Add for Child-ViewChild, sẽ sử dụng viewchild này.
        */
        ,
        __metadata("design:paramtypes", [])
    ], ParentComponent);
    return ParentComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/parent2/parent2.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/folder-components/parent2/parent2.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/parent2/parent2.component.html":
/*!******************************************************************!*\
  !*** ./src/app/folder-components/parent2/parent2.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-warning\">\r\n    <div class=\"panel-heading\">\r\n        <h3 class=\"panel-title\">parent2 comp: chứa child2 comp: học thêm về input, output</h3>\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n        <!-- \r\n        -Tại app.component.html: Gọi comp con ra và đồng thời truyền input vào comp đó, các biến input phải để trong [] .\r\n        -Các cách truyền input: biến name là biến input của comp con đc gọi ra để gắn giá trị vào, phải để trong dấu [](là dạng property binding):\r\n        +Nếu gán biến input với 1 biến nào đó từ comp cha: [name]=\"biến từ comp cha\"\r\n        +Nếu gán cứng giá trị từ html: [name]=\"'Tèo Nguyễn'\" (chuỗi phải trong dấu ''), [age]=\"18\" (số nguyên thì ko cần '')\r\n\r\n        vd:  <app-person [name]=\"nameComp\" [age]=\"ageComp\"></app-person> : gán bằng biến từ comp\r\n            <app-person [name]=\"'Tí Nguyễn'\" [age]=\"15\"></app-person>  : gán trực tiếp trong html-->\r\n        \r\n        <!-- onHandleFullName: là biến output của child2 comp, nó mang dl từ child2 comp truyền qua đây.\r\n        Comp cha gọi biến output của comp con bằng dấu ngoặc () bên ngoài (biến output),\r\n        $event: là tượng trưng giá trị biến output truyền qua, sẽ đưa vào param hàm, để hàm lấy giá trị về xử lý.-->\r\n        <app-child2 \r\n            [married]=\"isMarried\" \r\n            [age]=\"age\" [name]=\"'Tiến đẹp trai'\"\r\n            \r\n            (onHandleFullName)=\"onGetFullName($event);\"\r\n            (onHandlePhoneNumber)=\"onGetPhoneNumber($event);\"\r\n            >\r\n        </app-child2>\r\n\r\n        <p>Dl từ child2 gửi qua parent2 comp: </p>\r\n        <p>Fullname: {{ fullname }}</p>\r\n        <p>PhoneNumber: {{ phonenumber }}</p>\r\n\r\n\r\n        <!-- gửi mảng users bên comp parent2 này qua cho biến input [users] của user-list comp -->\r\n        <app-user-list [users]=\"users\" [fullname]=\"fullname\" [phone]=\"phonenumber\"></app-user-list>\r\n    \r\n\r\n        <!-- nếu check === true thì show thẻ này. -->\r\n        <p *ngIf=\"check\">Dl nhận vào từ output của child2 đã đc thêm vào mảng.</p>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/folder-components/parent2/parent2.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/folder-components/parent2/parent2.component.ts ***!
  \****************************************************************/
/*! exports provided: Parent2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parent2Component", function() { return Parent2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Parent2Component = /** @class */ (function () {
    function Parent2Component() {
        //tạo các biến chứa các giá trị gửi qua input cho comp child2
        this.isMarried = false;
        this.age = 18;
        //tạo mảng users để gửi bằng input qua comp user-list
        this.users = [
            {
                id: 1,
                name: 'Nguyễn Văn A',
                phone: 111
                // phone: '0111'
                // numbẻ thì ko để 0111 đc mà chỉ là 111. nếu muốn có số 0 thì phải string
            },
            {
                id: 2,
                name: 'Nguyễn Văn B',
                phone: 222
            },
            {
                id: 3,
                name: 'Nguyễn Văn C',
                phone: 333
            },
            {
                id: 4,
                name: 'Nguyễn Văn D',
                phone: 444
            },
            {
                id: 5,
                name: 'Nguyễn Văn E',
                phone: 555
            }
        ];
        //tạo các biến nhận các giá trị gửi từ output comp con child2, sang comp cha này.
        this.fullname = '';
        this.check = false;
    }
    Parent2Component.prototype.ngOnInit = function () {
    };
    //kdl có hay ko đều đc, nếu biết rồi thì tốt nhất nên để kdl vào
    // onGetFullName(value: string){
    //   this.fullname = value;
    // }
    Parent2Component.prototype.onGetFullName = function (value) {
        this.fullname = value;
    };
    Parent2Component.prototype.onGetPhoneNumber = function (value) {
        this.phonenumber = value;
        //thêm dl vừa nhận đc từ output của child2 vào mảng user.
        //phải thêm dưới hàm này, vì hàm này thực thi sau cùng các dl đã đc nhận và đc gắn vào đầy đủ.
        var elementUser = {
            id: 6,
            name: this.fullname,
            phone: this.phonenumber
        };
        this.users.push(elementUser);
        this.check = true; //nếu true mới cho hiện lên dòng thông báo đã push
    };
    Parent2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parent2',
            template: __webpack_require__(/*! ./parent2.component.html */ "./src/app/folder-components/parent2/parent2.component.html"),
            styles: [__webpack_require__(/*! ./parent2.component.css */ "./src/app/folder-components/parent2/parent2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Parent2Component);
    return Parent2Component;
}());



/***/ }),

/***/ "./src/app/folder-components/person/person.component.css":
/*!***************************************************************!*\
  !*** ./src/app/folder-components/person/person.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/person/person.component.html":
/*!****************************************************************!*\
  !*** ./src/app/folder-components/person/person.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- gọi các biến name, age trong comp ra. Các biến đó nhận dl truyền vào từ app.comp.html -->\r\n<h3>Tên: {{ name }}</h3>\r\n<p>Tuổi: {{ age }}</p>\r\n\r\n<button (click)=\"removeByClick();\">Xóa</button>"

/***/ }),

/***/ "./src/app/folder-components/person/person.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/folder-components/person/person.component.ts ***!
  \**************************************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Dùng lệnh ng g c person để tạo component person có đầy đủ 4 file.
var PersonComponent = /** @class */ (function () {
    function PersonComponent() {
        /*Để nhận input truyền vào từ app.component.html thì phải:
        import Input vào dòng import ở trên cùng.
        Khi khai báo các biến để lấy input thì phải @Input() biến: kdl;
        */
        /*string: kdl bình thường. Kiểu này ta có thể so sánh 2 chuỗi === nhau.
      
      String: object. Là kiểu hỗn hợp. Kiểu này ta ko thể so sánh 2 chuỗi được, vì ngoài giá trị 2 chuỗi còn các thuộc tính khác.
      (ko thể so sánh object như so sánh kdl bình thường)
        */
        /*Ứng dụng Output vào để gửi sự kiện từ person.ts qua list-person.ts: Xem các file child.comp.ts để hiểu rõ hơn về Output.
          -Import EventEmitter, Output ở dòng trên cùng
          -Khai báo sự kiện phải có @Output eventname = new EventMiter<kiểu dl tham số truyền từ đây qua list-person.html>();.
          -eventname.emit(tham số truyền đi): để kích hoạt sự kiện truyền đi, đồng thời gửi param truyền đi đó.
      
          -event removePerson đã đc tạo ở đây, qua list-person.html ta chỉ cần gọi đến event removePerson: <app-person (removePerson)="removePersonByName($event)"></app-person>
              +person.comp.ts gửi (removePerson) đến list-person.comp.html, nhưng lúc này removePerson chưa có tác dụng vì chưa đc kích hoạt.
              +tại person.comp.html, mỗi lần kích btnXóa thì event removePerson lại đc kích hoạt(gọi đến removePerson.emit(name)),
              nên (removePerson) bên list-person mới có tác dụng, mới hoạt động.
      
          =>Tóm lại: ở đây html bấm Xóa thì kích hoạt event removePerson, làm cho event removePerson đã đc gọi bên list-person.html có tác dụng, sẽ thực thi sự kiện đó.
      
          -Tại list-person.html: ( <app-person (removePerson)="removePersonByName($event)"></app-person> ): Vì chưa biết param là gì, nên ta luôn để là $event.
            +(removePerson): là sự kiện output đc gửi từ person.ts qua, sự kiện này gửi thêm param qua, param này đc đưa vào $event.
            +gửi param qua bằng cách removePerson.emit(param truyền qua);
            +ở đây param truyền qua là chuỗi, nên để tiện cho việc so sánh thì param truyền vào phải là string chứ ko phải String (vì String là object khó so sánh).
            -->
        
        */
        //khai báo các biến để nhận input truyền vào từ app.comp.html(comp cha)
        /* bên app.comp.html sẽ gọi đến comp person và truyền dl vào comp person này:
          <app-person name="Tèo Nguyễn" age="18"></app-person>
          <app-person name="Tí Nguyễn" age="15"></app-person>
        
          -tại comp person.ts ta chỉ cần import, rồi khai báo biến như 2 dòng bên dưới để nhận dl truyền vào.
        */
        /* Có 2 cách đặt tên biến input: Với keyname là tên input đc gọi ở comp cha
        (nếu comp cha muốn gọi tới input này thì nó sẽ gọi keyname và gắn giá trị vào keyname)
      
        +@Input() tenbienInput: kdl;  Cách này thì tenbienInput === keyname
      
        +@Input('keyname') tenbienInput : kdl;  Cách này thì tenbienInput có thể !== keyname
      
        */
        //Dùng cách truyền bằng keyname
        // @Input('name') Name : string = 'ABC'; 
        //Có thể gắn giá trị default hoặc ko. Giá trị default sẽ đc dùng nếu như input ko đc truyền giá trị vào.
        this.name = 'Tên Còn Trống';
        this.removePerson = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PersonComponent.prototype.ngOnInit = function () {
    };
    PersonComponent.prototype.removeByClick = function () {
        this.removePerson.emit(this.name);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PersonComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PersonComponent.prototype, "age", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PersonComponent.prototype, "removePerson", void 0);
    PersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-person',
            template: __webpack_require__(/*! ./person.component.html */ "./src/app/folder-components/person/person.component.html"),
            styles: [__webpack_require__(/*! ./person.component.css */ "./src/app/folder-components/person/person.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/rest-todo/rest-todo.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/folder-components/rest-todo/rest-todo.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/rest-todo/rest-todo.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/folder-components/rest-todo/rest-todo.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-success\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">Comp Rest-Todo</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\r\n          \r\n          <table class=\"table table-bordered table-hover\">\r\n            <thead>\r\n              <tr>\r\n                <th>ID</th>\r\n                <th>Title</th>\r\n                <th>Completed</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let resttodo of resttodos\">\r\n                <td>{{ resttodo.id }}</td>\r\n                <td>{{ resttodo.title }}</td>\r\n                <td>{{ resttodo.completed ? 'Completed' : 'Inprogress' }}</td>\r\n                <td>\r\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"onEditTodo(resttodo);\">Edit</button>\r\n                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDeleteTodo(resttodo.id);\">Delete</button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n          <hr>\r\n          <form>\r\n            <legend>Add RestTodo</legend>\r\n          \r\n            <div class=\"form-group\">\r\n              <label for=\"\">Title</label>\r\n              <!-- nếu sd ngModel trong class form thì phải add dòng này sau ngModel: [ngModelOptions]=\"{standalone: true}\" -->\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"title\" [ngModelOptions]=\"{standalone: true}\">\r\n            </div>\r\n\r\n            <!-- nếu sd ngModel trong class form thì phải add dòng này sau ngModel: [ngModelOptions]=\"{standalone: true}\" -->\r\n            <select class=\"form-control\" [(ngModel)]=\"completed\" [ngModelOptions]=\"{standalone: true}\">\r\n              <!-- Chú ý: bản chất của select là truyền vào các giá trị string, nên muốn trả về đúng giá trị true/false boolean, thì phải sd [ngValue] -->\r\n              <!-- <option value=\"true\">Completed</option> :TH NÀY SẼ TRUYỀN VỀ \"true\" kiểu string-->\r\n              \r\n              <!-- TH NÀY DÙNG ngValue nên trả về kiểu \"true/false\" boolean -->\r\n              <option [ngValue]=\"true\">Completed</option> <!--  -->\r\n              <option [ngValue]=\"false\">Inprogress</option>\r\n            </select>\r\n            \r\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onAddRestTodo();\">Add</button>\r\n          </form>\r\n\r\n          <hr>\r\n          <!-- Vì ban đầu bên comp, ta cho object resttodo=null, phải ktra trước, nếu =difined !=null thì mới cho hiển thị ra. \r\n          Cái này dùng cho edit, nếu đã chọn 1 object để edit thì resttodo lúc đó đã !=null, lúc đó form edit này mới hiện lên.-->\r\n          <form *ngIf=\"resttodo\">\r\n            <legend>Edit RestTodo</legend>\r\n          \r\n            <div class=\"form-group\">\r\n              <label for=\"\">Title</label>\r\n              <!-- nếu sd ngModel trong class form thì phải add dòng này sau ngModel: [ngModelOptions]=\"{standalone: true}\" -->\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"resttodo.title\" [ngModelOptions]=\"{standalone: true}\">\r\n            </div>\r\n\r\n            <!-- nếu sd ngModel trong class form thì phải add dòng này sau ngModel: [ngModelOptions]=\"{standalone: true}\" -->\r\n            <select class=\"form-control\" [(ngModel)]=\"resttodo.completed\" [ngModelOptions]=\"{standalone: true}\">\r\n              <option value=\"true\">Completed</option>\r\n              <option value=\"false\">Inprogress</option>\r\n            </select>\r\n            \r\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onUpdateRestTodo();\">Save</button>\r\n          </form>\r\n\r\n          \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/folder-components/rest-todo/rest-todo.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/folder-components/rest-todo/rest-todo.component.ts ***!
  \********************************************************************/
/*! exports provided: RestTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestTodoComponent", function() { return RestTodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _folder_services_rest_todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../folder-services/rest-todo.service */ "./src/app/folder-services/rest-todo.service.ts");
/* harmony import */ var _folder_models_rest_todo_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../folder-models/rest-todo.class */ "./src/app/folder-models/rest-todo.class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import ở đây để lất ra sd. Đã import và gọi ra providers[] trong app.module.ts (dùng đc cho all comp), nên ở đây ko cần providers[]

//gọi model

var RestTodoComponent = /** @class */ (function () {
    function RestTodoComponent(restTodoService) {
        this.restTodoService = restTodoService;
        this.resttodos = []; //array
        this.completed = false;
    }
    RestTodoComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    //hủy đối tượng subscription khi comp kết thúc.
    RestTodoComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    RestTodoComponent.prototype.loadData = function () {
        var _this = this;
        this.subscription = this.restTodoService.getAllTodos().subscribe(function (data) {
            _this.resttodos = data;
        }, function (error) {
            // console.log(error);
            _this.restTodoService.handleError(error); //gọi service xử lý lỗi nếu có.
        });
    };
    RestTodoComponent.prototype.onAddRestTodo = function () {
        var _this = this;
        console.log(this.title + " - " + this.completed); //ktra các dl nhập vào từ ngModel có đc ko
        // HÀM NÀY MUỐN DEBUGGER THÌ ĐẶT DÒNG debugger Ở ĐÂY. CHẠY LÊN F12>SOURCE, ĐƯA CHUỘT VÀO GIÁ TRỊ CẦN XEM, F8 ĐỂ THOÁT DEBUGGER.  
        // debugger
        //trong constructor của class RestTodo chỉ có title và completed, id ko vì đã set trên api là tự động tăng, nên ko cần.
        //Ta chỉ cần truyền lên những thành phần khác, id sẽ đc mockapi.io tự động tăng.
        var restTodo = new _folder_models_rest_todo_class__WEBPACK_IMPORTED_MODULE_2__["RestTodo"](this.title, this.completed);
        this.subscription = this.restTodoService.addRestTodo(restTodo).subscribe(function (data) {
            //sau khi Post dl lên thì nhận giá trị đc respone về là data là 1 object vừa post lên.
            //ta cần lấy data này về để cập nhật lại mảng hiển thị qua html.
            //cập nhật lại mảng.
            _this.resttodos.push(data); //lúc này push vào mảng resttodos, để nó hiển thị qua html cho đúng cập nhật.
            console.log(data.completed);
        }, function (error) {
            // console.log(error);
            _this.restTodoService.handleError(error); //gọi service xử lý lỗi nếu có.
        });
    };
    //-----------------------PUT, DELETE---------------------------------------------
    //Chỉ có khi bấm vào edit thì biến resttodo mới đc gán giá trị, mới hết null, như vậy form edit trong html mới hiện.
    RestTodoComponent.prototype.onEditTodo = function (resttodo) {
        this.resttodo = resttodo;
    };
    //sk khi nhấn nút save update trong form edit.
    RestTodoComponent.prototype.onUpdateRestTodo = function () {
        var _this = this;
        this.subscription = this.restTodoService.updateRestTodo(this.resttodo).subscribe(function (data) {
            //sau khi PUT dl lên thì nhận giá trị đc respone về là data là 1 object vừa đc cập nhật.
            //ta cần lấy data này về để cập nhật lại mảng hiển thị qua html.
            //cập nhật lại mảng, gán lại thành phần đã update vào mảng cũ.
            var index = _this.getIndex(data.id);
            _this.resttodos[index] = data;
        }, function (error) {
            _this.restTodoService.handleError(error);
        });
        // sau khi nhấn save để update, thì cho ẩn form edit đi, bằng cách gán null lại cho biến resttodo.
        this.resttodo = null;
    };
    //hàm lấy vị trí index của object trong mảng, lấy theo thuộc tính id của object đó.
    RestTodoComponent.prototype.getIndex = function (id) {
        var result = 0;
        this.resttodos.forEach(function (item, index) {
            if (item.id === id) {
                result = index;
            }
        });
        return result;
    };
    //kích vào nút Delete trên row of table, thì nó sẽ gửi về id, dựa theo id đó mà xóa.
    RestTodoComponent.prototype.onDeleteTodo = function (id) {
        var _this = this;
        this.subscription = this.restTodoService.deleteRestTodo(id).subscribe(function (data) {
            //sau khi delete thì nhận giá trị đc respone về là data chính là object vừa bị delete.
            //ta cần lấy data này về để cập nhật lại mảng hiển thị qua html.
            //cập nhật lại mảng.
            var index = _this.getIndex(data.id);
            _this.resttodos.splice(index, 1); //xóa tại vị trí index, xóa 1 phần tử
        }, function (error) {
            _this.restTodoService.handleError(error);
        });
    };
    RestTodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rest-todo',
            template: __webpack_require__(/*! ./rest-todo.component.html */ "./src/app/folder-components/rest-todo/rest-todo.component.html"),
            styles: [__webpack_require__(/*! ./rest-todo.component.css */ "./src/app/folder-components/rest-todo/rest-todo.component.css")]
        }),
        __metadata("design:paramtypes", [_folder_services_rest_todo_service__WEBPACK_IMPORTED_MODULE_1__["RestTodoService"]])
    ], RestTodoComponent);
    return RestTodoComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/router-about/router-about.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/folder-components/router-about/router-about.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/router-about/router-about.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/folder-components/router-about/router-about.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  router-about works!\n</p>\n"

/***/ }),

/***/ "./src/app/folder-components/router-about/router-about.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/folder-components/router-about/router-about.component.ts ***!
  \**************************************************************************/
/*! exports provided: RouterAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterAboutComponent", function() { return RouterAboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RouterAboutComponent = /** @class */ (function () {
    function RouterAboutComponent() {
    }
    RouterAboutComponent.prototype.ngOnInit = function () {
    };
    RouterAboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-router-about',
            template: __webpack_require__(/*! ./router-about.component.html */ "./src/app/folder-components/router-about/router-about.component.html"),
            styles: [__webpack_require__(/*! ./router-about.component.css */ "./src/app/folder-components/router-about/router-about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RouterAboutComponent);
    return RouterAboutComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/router-about/router-about.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/folder-components/router-about/router-about.module.ts ***!
  \***********************************************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _router_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router-about.component */ "./src/app/folder-components/router-about/router-about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Để các comp có sử dụng module routing này: khi routing sẽ sử dụng đc ngIF, ngFor: thì ở module routing này phải import thư viện này. 
//Và gọi xuống phần imports[] trong @NgModule({}) bên dưới.


var routesConfig = [
    { path: 'about', component: _router_about_component__WEBPACK_IMPORTED_MODULE_3__["RouterAboutComponent"] }
];
var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                // RouterModule.forRoot(routesConfig)
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routesConfig) //vì đây là module con chỉ với 1 comp, nên gọi forChild() chứ ko phải forRoot như module gộp nhiều comp.
            ],
            //declarations[] để gọi class ContactsComponent từ comp đã import vào (giống như bên app.module.ts cũng import xong thì gọi xuống declarations)
            declarations: [_router_about_component__WEBPACK_IMPORTED_MODULE_3__["RouterAboutComponent"]]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/app/folder-components/router-contact2/router-contact2.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/folder-components/router-contact2/router-contact2.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/router-contact2/router-contact2.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/folder-components/router-contact2/router-contact2.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  router-contact2 works!\n</p>\n"

/***/ }),

/***/ "./src/app/folder-components/router-contact2/router-contact2.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/folder-components/router-contact2/router-contact2.component.ts ***!
  \********************************************************************************/
/*! exports provided: RouterContact2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterContact2Component", function() { return RouterContact2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RouterContact2Component = /** @class */ (function () {
    function RouterContact2Component() {
    }
    RouterContact2Component.prototype.ngOnInit = function () {
    };
    RouterContact2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-router-contact2',
            template: __webpack_require__(/*! ./router-contact2.component.html */ "./src/app/folder-components/router-contact2/router-contact2.component.html"),
            styles: [__webpack_require__(/*! ./router-contact2.component.css */ "./src/app/folder-components/router-contact2/router-contact2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RouterContact2Component);
    return RouterContact2Component;
}());



/***/ }),

/***/ "./src/app/folder-components/router-contact2/router-contact2.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/folder-components/router-contact2/router-contact2.module.ts ***!
  \*****************************************************************************/
/*! exports provided: Contact2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact2Module", function() { return Contact2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _router_contact2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router-contact2.component */ "./src/app/folder-components/router-contact2/router-contact2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Để các comp có sử dụng module routing này: khi routing sẽ sử dụng đc ngIF, ngFor: thì ở module routing này phải import thư viện này. 
//Và gọi xuống phần imports[] trong @NgModule({}) bên dưới.


var routesConfig = [
    { path: 'contact2', component: _router_contact2_component__WEBPACK_IMPORTED_MODULE_3__["RouterContact2Component"] }
];
var Contact2Module = /** @class */ (function () {
    function Contact2Module() {
    }
    Contact2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                // RouterModule.forRoot(routesConfig)
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routesConfig) //vì đây là module con chỉ với 1 comp, nên gọi forChild() chứ ko phải forRoot như module gộp nhiều comp.
            ],
            //declarations[] để gọi class ContactsComponent từ comp đã import vào (giống như bên app.module.ts cũng import xong thì gọi xuống declarations)
            declarations: [_router_contact2_component__WEBPACK_IMPORTED_MODULE_3__["RouterContact2Component"]]
        })
    ], Contact2Module);
    return Contact2Module;
}());



/***/ }),

/***/ "./src/app/folder-components/router-home/router-home.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/folder-components/router-home/router-home.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/router-home/router-home.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/folder-components/router-home/router-home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Home component: key 123456</p>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\r\n    <div class=\"alert alert-warning\" *ngIf=\"error === -1\">\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\r\n      <strong>Key is wrong!</strong>\r\n    </div>\r\n    \r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Vui lòng nhập key\" #key>\r\n\r\n    <br>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"onAccess(key.value);\">Access</button>\r\n    \r\n    <span>'  '</span>\r\n\r\n    <span class=\"label label-success\" *ngIf=\"success === 1\">=>Key chính xác! => CHO PHÉP DI CHUYỂN ĐẾN TRANG KHÁC.</span>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/folder-components/router-home/router-home.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/folder-components/router-home/router-home.component.ts ***!
  \************************************************************************/
/*! exports provided: RouterHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterHomeComponent", function() { return RouterHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*Bài 40: CanDeactivate
Là ngược lại với CanActive
-là service cho phép người dùng thoát khỏi path router đó hay không
-cú pháp tương tự canactive

-hàm canDeactivate trả về:
+true : có thể thoát ra
+false: ko thể thoát ra.

---------
THỰC HIỆN

-vì CanDeactive cũng là 1 service, nên tạo fodel guards trong folder services, lần này tạo service làm nhiệm vụ candeativate.
-Vào cli, xem cú pháp: teminal: "ng g guard access" (my-new-guard) để tạo nhanh file: access.guard.ts

+default file tạo ra là dạng canactive,  nên phải sửa lại tên và các import thành dạng candeactive và xóa những import ko cần.

+candeactive yêu cầu truyền vào comp cần sd service candeactive này trong implement trong access.guard.ts với <comp sd>.


-Ở đây sd candeactive cho comp Router-Home, mà comp này có module riêng là router-home.module.ts, nên ta import file service
access.guard.ts vào Home module, vào kéo xuống providers thêm vào.

-gọi canDeactivate: [AccessGuard] : cho liên kết path nào muốn giữ lại, liên kế path trong router-home.module.ts.
nếu AccessGuard trả về true thì đc phép thoát ra, còn false thì ko được phép thoát ra.

-để điều chỉnh true/false của access.guard.ts, thông qua comp router-home thì phải dùng 1 biến toàn cục(cả hệ thống đều dùng đc): là biến localStorage(key: value(string)), biến này sẽ đc set,get giá trị theo key, all comp đều sd đc biến này.

-biến localStorage sẽ lưu lại giá trị với key đc set, vậy nên muốn thay đổi trạng thái sau mỗi lần F5 thì phải hủy biến đó, hoặc là xóa cokie của trình duyệt.

*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RouterHomeComponent = /** @class */ (function () {
    function RouterHomeComponent() {
        this.error = 0;
        this.success = 0;
    }
    RouterHomeComponent.prototype.ngOnInit = function () {
        //mỗi lần gọi đến comp này thì nó lại remove key 'key'
        localStorage.removeItem('key');
    };
    RouterHomeComponent.prototype.onAccess = function (key) {
        //sd biến toàn cục localStorage, mọi comp đều dùng đc, giống như bên CanActivate trong file: router-login.component.ts
        //Dùng biến này để set giá trị theo key: value(string) cho service access.guard.ts.
        // localStorage.setItem('key', key); //key sau: là value set vào cho biến localStorage với key là 'key'
        //nếu key nhập vào ='123456' thì mới cho phép thoát.
        if (key === '123456') {
            localStorage.setItem('key', key); //key sau: là value set vào cho biến localStorage với key là 'key'
            this.success = 1;
        }
        else {
            //ngc lại nếu người dùng chưa login thì gán -1
            this.error = -1;
        }
    };
    RouterHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-router-home',
            template: __webpack_require__(/*! ./router-home.component.html */ "./src/app/folder-components/router-home/router-home.component.html"),
            styles: [__webpack_require__(/*! ./router-home.component.css */ "./src/app/folder-components/router-home/router-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RouterHomeComponent);
    return RouterHomeComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/router-home/router-home.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/folder-components/router-home/router-home.module.ts ***!
  \*********************************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _router_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router-home.component */ "./src/app/folder-components/router-home/router-home.component.ts");
/* harmony import */ var _folder_services_guards_access_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../folder-services/guards/access.guard */ "./src/app/folder-services/guards/access.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Để các comp có sử dụng module routing này: khi routing sẽ sử dụng đc ngIF, ngFor: thì ở module routing này phải import thư viện này. 
//Và gọi xuống phần imports[] trong @NgModule({}) bên dưới.


//canDeactive service

var routesConfig = [
    {
        path: 'index',
        component: _router_home_component__WEBPACK_IMPORTED_MODULE_3__["RouterHomeComponent"],
        /*gọi service canDeactivate: [AccessGuard]: cho liên kết path nào muốn giữ lại, ko cho thoát ra khỏi path đó,
            liên kế path trong router-home.module.ts này.
        Nếu auth.guard.ts trả về true thì có thể thoát ra, còn false thì ko thể thoát ra khỏi path đó.
 
        Xem trong access.guard.ts. Nhớ import service và gọi xuống providers.*/
        canDeactivate: [_folder_services_guards_access_guard__WEBPACK_IMPORTED_MODULE_4__["AccessGuard"]]
    }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                // RouterModule.forRoot(routesConfig)
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routesConfig) //vì đây là module con chỉ với 1 comp, nên gọi forChild() chứ ko phải forRoot như module gộp nhiều comp.
            ],
            //declarations[] để gọi class ContactsComponent từ comp đã import vào (giống như bên app.module.ts cũng import xong thì gọi xuống declarations)
            declarations: [_router_home_component__WEBPACK_IMPORTED_MODULE_3__["RouterHomeComponent"]],
            //providers: nơi import service
            providers: [
                _folder_services_guards_access_guard__WEBPACK_IMPORTED_MODULE_4__["AccessGuard"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/folder-components/router-login/router-login.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/folder-components/router-login/router-login.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/router-login/router-login.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/folder-components/router-login/router-login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\r\n    <div class=\"alert alert-warning\" *ngIf=\"error === -1\">\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\r\n      <strong>Username or password is wrong!</strong>\r\n    </div>\r\n    \r\n    \r\n    <form>\r\n      <legend>Login Comp, user=pass=admin</legend>\r\n    \r\n      <div class=\"form-group\">\r\n        <label for=\"\">Username</label>\r\n        <input type=\"text\" class=\"form-control\" #username>\r\n      </div>\r\n    \r\n      <div class=\"form-group\">\r\n        <label for=\"\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" #password>\r\n      </div>\r\n    \r\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onLogin(username.value, password.value);\">Login</button>\r\n    </form>\r\n        \r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/folder-components/router-login/router-login.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/folder-components/router-login/router-login.component.ts ***!
  \**************************************************************************/
/*! exports provided: RouterLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterLoginComponent", function() { return RouterLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*Bài 39: CanActive
-Là 1 service kiểm tra việc cho phép người dùng có vào được router đó hay không. Thường đc dùng cho admin.
Nói cách khác là chặn ko cho người dùng vào router nào đó.
----------
THỰC HIỆN:
-vì CanActive cũng là 1 service, nên tạo fodel guards trong folder services.
-Vào cli, xem cú pháp: teminal: "ng g guard auth" (my-new-guard) để tạo nhanh service canactive với tên file: auth.guard.ts
-import vào router-products.module.ts, vào kéo xuống providers thêm vào.
-gọi canActivate: [AuthGuard]: cho liên kết path nào muốn bảo vệ, liên kế path trong router-products.module.ts.
nếu auth.guard.ts trả về true thì nó cho vào, còn false thì nó ko cho vào path đó.

-để điều chỉnh true/false của auth.guard.ts, thông qua comp router-login thì phải dùng 1 biến toàn cục(cả hệ thống đều dùng đc):
là biến localStorage(key: value(string)), biến này sẽ đc set,get giá trị theo key, all comp đều sd đc biến này.

-biến localStorage sẽ lưu lại giá trị với key đc set, vậy nên muốn logout thì phải hủy biến localStorage này:
hủy tại btn logout ở app.component.ts.
*/
var RouterLoginComponent = /** @class */ (function () {
    function RouterLoginComponent(router) {
        this.router = router;
        this.error = 0;
    }
    RouterLoginComponent.prototype.ngOnInit = function () {
        // this.checkLogin();
    };
    RouterLoginComponent.prototype.checkLogin = function () {
        if (localStorage.getItem('user')) {
            this.router.navigate(['']);
        }
    };
    //nhận các giá trị từ biến template ref variable #biến
    RouterLoginComponent.prototype.onLogin = function (username, password) {
        //biến object user có kiểu key:value
        var user = {
            username: username,
            password: password
        };
        // localStorage là biến toàn cục của angular, biến này dùng để kết nối với auth.guard.ts
        //  biến này nhận vào giá key: value(string), ở đây key là user.
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('user', JSON.stringify(user)); //JSON.stringify: chuyển obj user sang kiểu JSON (string).
            //nếu đúng thì set đường dẫn tới products.
            this.router.navigate(['products']);
        }
        else {
            //ngc lại nếu người dùng chưa login thì gán -1
            this.error = -1;
        }
    };
    RouterLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-router-login',
            template: __webpack_require__(/*! ./router-login.component.html */ "./src/app/folder-components/router-login/router-login.component.html"),
            styles: [__webpack_require__(/*! ./router-login.component.css */ "./src/app/folder-components/router-login/router-login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RouterLoginComponent);
    return RouterLoginComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/router-product-detail/router-product-detail.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/folder-components/router-product-detail/router-product-detail.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/router-product-detail/router-product-detail.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/folder-components/router-product-detail/router-product-detail.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Nếu product != null -->\r\n<ng-container *ngIf=\"product; else noProduct\">\r\n  <h1>ID: {{ product.id }}</h1>\r\n  <h1>Name: {{ product.name }}</h1>\r\n  <h1>Price: {{ product.price | currency:'USD':'symbol':'1.2-3' }}</h1>\r\n  <h3>Status: {{ product.status ? 'Active' : 'Deactive' }}</h3>\r\n</ng-container>\r\n\r\n\r\n<ng-template #noProduct>\r\n  <h2>This product has been deleted</h2>\r\n</ng-template>\r\n\r\n<br>\r\n<button type=\"button\" class=\"btn btn-success\" (click)=\"onEdit();\">Edit</button>\r\n<button \r\n  type=\"button\" \r\n  class=\"btn btn-danger\" \r\n  (click)=\"onDelete();\" \r\n  [routerLink]=\"['/products/list']\">Delete</button>\r\n\r\n<hr>\r\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"onBackToList();\">Back To List</button>"

/***/ }),

/***/ "./src/app/folder-components/router-product-detail/router-product-detail.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/folder-components/router-product-detail/router-product-detail.component.ts ***!
  \********************************************************************************************/
/*! exports provided: RouterProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterProductDetailComponent", function() { return RouterProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _folder_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../folder-services/product.service */ "./src/app/folder-services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouterProductDetailComponent = /** @class */ (function () {
    //Inject vào constructor giống như 1 service
    function RouterProductDetailComponent(activatedRoute, productService, routerService) {
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.routerService = routerService;
        this.product = null;
    }
    /*mỗi lần click đúng router thì nó sẽ gọi đến comp product detail này, thì hàm ngOnInit sẽ đc gọi, lúc này ta sẽ lấy params luôn.
    (Các lần router mang đến với các tham số khác nhau, nhưng mỗi lần đến thì comp này thì sẽ gọi lại hàm lấy tham số vì mỗi lần đến
    thì comp lại đc khởi động thì hàm ngOnInit lại đc gọi.)
    Vậy nên các hàm lấy tham số sẽ đc gọi trong ngOnInit*/
    RouterProductDetailComponent.prototype.ngOnInit = function () {
        // this.handleParamsRouteBySnapshot();
        this.handleParams();
    };
    //hủy đối tượng subcription mỗi lần kết thúc comp.
    RouterProductDetailComponent.prototype.ngOnDestroy = function () {
        if (this.subcription) {
            this.subcription.unsubscribe();
        }
    };
    //Cách 1: lấy về đối tượng snapshot từ đối tượng activatedRoute,
    RouterProductDetailComponent.prototype.handleParamsRouteBySnapshot = function () {
        // console.log(this.activatedRoute);
        // console.log(this.activatedRoute.snapshot.params['id']);
        var id = (+this.activatedRoute.snapshot.params['id']); // (+) để chuyển về kdl number, tránh lỗi xung đột kdl
        this.product = this.productService.getProductByID(id);
    };
    //Cách 2: lấy về đối tượng subcription từ đối tượng activatedRoute
    RouterProductDetailComponent.prototype.handleParams = function () {
        var _this = this;
        this.subcription = this.activatedRoute.params.subscribe(function (data) {
            var id = (+data.id); // (+) để chuyển về kdl number, tránh lỗi xung đột kdl
            _this.product = _this.productService.getProductByID(id);
            // console.log(this.product);
        });
    };
    //gọi hàm navigate để định hướng router muốn truyền đi.
    //vào router-products.component.ts để hiểu rõ hơn về navigate
    RouterProductDetailComponent.prototype.onBackToList = function () {
        //Cách 1: đưa đường dẫn trực tiếp, để lùi về
        // this.routerService.navigate(['products/list']);
        //Cách 2: sd relativeTo. Gọi tới đường dẫn trước nó 1 bước, rồi + thêm đường dẫn cần +
        //ban đầu http://localhost:4200/ khi kích vào hàng 1 của bảng thì + products/1(đúng với router của detail) thì ra  http://localhost:4200/products/1, 
        //thì activatedRoute chính là http://localhost:4200/products/1, .parent để quay về 1 bước trước http://localhost:4200/ + products/list từ this.routerService.navigate truyền vào.
        this.routerService.navigate(['products/list'], {
            relativeTo: this.activatedRoute.parent //gán dạng key: value //http://localhost:4200 + /products/list
        });
    };
    //cấu hình đường link khi nhấn nút edit. 
    //khi nhấn btn edit cho thành phần detail 1 thì thì link sẽ đc cấu hình thành: 
    //  http://localhost:4200/products/edit/1, ta phải cấu hình để đường dẫn nó ra đc như vậy.
    RouterProductDetailComponent.prototype.onEdit = function () {
        //đang ở http://localhost:4200/products/1, bấm edit thì về http://localhost:4200/products/edit
        // this.routerService.navigate([`products/edit/${this.product.id}`], { //vì có biến $ nên đổi thành dấu `` thay vì dấu '' như ở trên
        this.routerService.navigate(["products/edit", this.product.id], {
            relativeTo: this.activatedRoute.parent //gán dạng key: value //http://localhost:4200 + /products/edit
        });
    };
    RouterProductDetailComponent.prototype.onDelete = function () {
        // console.log(this.product.id);
        this.productService.deleteProduct(this.product.id);
    };
    RouterProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-router-product-detail',
            template: __webpack_require__(/*! ./router-product-detail.component.html */ "./src/app/folder-components/router-product-detail/router-product-detail.component.html"),
            styles: [__webpack_require__(/*! ./router-product-detail.component.css */ "./src/app/folder-components/router-product-detail/router-product-detail.component.css")]
        })
        /*Lấy Router params thông qua ActivatedRoute:
        
        **Cách 1: lấy về đối tượng snapshot từ đối tượng activatedRoute,
        -import ActivatedRoute từ @angular/router
        -tiến hành Inject như 1 service
        -lấy params từ snapshot
        => để dùng cách này thì trong ngOnInit() gọi hàm: handleParamsRouteBySnapshot()
        
        **Cách 2: lấy về đối tượng subcription từ đối tượng activatedRoute,
        -import ActivatedRoute từ @angular/router
        -import Subscription từ rxjs
        -tiến hành Inject như 1 service
        -Khai báo đối tượng subcription để nhận subcription trả về từ activatedRoute, lấy params thông qua subscribe.
        =>để dùng cách này thì trong ngOnInit() gọi hàm: handleParams()
        
        -tại comp nhận tham số này, nhớ hủy đối tượng subcription mỗi lần kết thúc comp, vào trong ngOnDestroy mà hủy.
        (Log xong F12 để xem các thành phần trong ActivatedRoute)
        */
        ,
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _folder_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RouterProductDetailComponent);
    return RouterProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/router-product-detail/router-product-detail.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/folder-components/router-product-detail/router-product-detail.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProductDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailModule", function() { return ProductDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _router_product_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router-product-detail.component */ "./src/app/folder-components/router-product-detail/router-product-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Để các comp có sử dụng module routing này: khi routing sẽ sử dụng đc ngIF, ngFor: thì ở module routing này phải import thư viện này. 
//Và gọi xuống phần imports[] trong @NgModule({}) bên dưới.


var routesConfig = [
    { path: 'products/:id', component: _router_product_detail_component__WEBPACK_IMPORTED_MODULE_3__["RouterProductDetailComponent"] }
];
var ProductDetailModule = /** @class */ (function () {
    function ProductDetailModule() {
    }
    ProductDetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                // RouterModule.forRoot(routesConfig)
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routesConfig) //vì đây là module con chỉ với 1 comp, nên gọi forChild() chứ ko phải forRoot như module gộp nhiều comp.
            ],
            //declarations[] để gọi class ContactsComponent từ comp đã import vào (giống như bên app.module.ts cũng import xong thì gọi xuống declarations)
            declarations: [_router_product_detail_component__WEBPACK_IMPORTED_MODULE_3__["RouterProductDetailComponent"]]
        })
    ], ProductDetailModule);
    return ProductDetailModule;
}());



/***/ }),

/***/ "./src/app/folder-components/router-product-edit/router-product-edit.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/folder-components/router-product-edit/router-product-edit.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/router-product-edit/router-product-edit.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/folder-components/router-product-edit/router-product-edit.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<form>\r\n  <legend>Edit Product Comp</legend>\r\n\r\n  <!-- nếu sd ngModel trong class form thì phải add dòng này sau ngModel: [ngModelOptions]=\"{standalone: true}\" -->\r\n  <div class=\"form-group\">\r\n    <label for=\"\">Name</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"product.name\" [ngModelOptions]=\"{standalone: true}\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"\">Price</label>\r\n    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"product.price\" [ngModelOptions]=\"{standalone: true}\">\r\n  </div>\r\n\r\n  <select class=\"form-control\" required=\"required\" [(ngModel)]=\"product.status\" [ngModelOptions]=\"{standalone: true}\">\r\n    <option value=\"true\">Active</option>\r\n    <option value=\"false\">Deactive</option>\r\n  </select>\r\n  \r\n\r\n  <br>\r\n  <button type=\"submit\" class=\"btn btn-primary\" \r\n    (click)=\"handleSaveEdit();\" \r\n    [routerLink]=\"['/products/list']\">Save</button>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/folder-components/router-product-edit/router-product-edit.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/folder-components/router-product-edit/router-product-edit.component.ts ***!
  \****************************************************************************************/
/*! exports provided: RouterProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterProductEditComponent", function() { return RouterProductEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _folder_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../folder-services/product.service */ "./src/app/folder-services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//để lấy params, cụ thể là lấy id cần edit từ url: http://localhost:4200/products/edit/3
//có id thì gọi tới hàm có chức năng edit của service


var RouterProductEditComponent = /** @class */ (function () {
    function RouterProductEditComponent(activatedRoute, productService) {
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.product = null;
        this.subcription = null;
    }
    //mỗi lần router tới đường dẫn path: 'edit/:id' thì sẽ tự động đến component này, theo cấu hình trong file router-products.module.ts,
    //do vậy, mỗi lần router tới thì comp đc gọi, và ngOnInit cũng đc gọi. Sẽ lấy đc id từ link edit.
    RouterProductEditComponent.prototype.ngOnInit = function () {
        this.handleParams();
    };
    //hủy đối tượng subcription mỗi lần kết thúc comp.
    RouterProductEditComponent.prototype.ngOnDestroy = function () {
        if (this.subcription) {
            this.subcription.unsubscribe();
        }
    };
    //Hàm lấy params.
    //để lấy params, cụ thể là lấy id cần edit từ url: http://localhost:4200/products/edit/3
    //có id thì gọi tới hàm có chức năng edit của service
    RouterProductEditComponent.prototype.handleParams = function () {
        var _this = this;
        //vì param bên path: 'edit/:id' chỉ mỗi id, nên lúc này id chính là params
        this.subcription = this.activatedRoute.params.subscribe(function (params) {
            // console.log(params.id);
            //params.id : là tham số id cần lấy
            var id = (+params.id); // (+) để chuyển về kdl number, tránh lỗi xung đột kdl
            _this.product = _this.productService.getProductByID(id); //lấy đc product với id tương ứng, để hiển thị các thành phần lên các ô thông qua ngModel
        });
    };
    //lưu lại các thông tin đã edit
    RouterProductEditComponent.prototype.handleSaveEdit = function () {
        this.productService.updateProduct(this.product);
    };
    RouterProductEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-router-product-edit',
            template: __webpack_require__(/*! ./router-product-edit.component.html */ "./src/app/folder-components/router-product-edit/router-product-edit.component.html"),
            styles: [__webpack_require__(/*! ./router-product-edit.component.css */ "./src/app/folder-components/router-product-edit/router-product-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _folder_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], RouterProductEditComponent);
    return RouterProductEditComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/router-product-list/router-product-list.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/folder-components/router-product-list/router-product-list.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/router-product-list/router-product-list.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/folder-components/router-product-list/router-product-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n    <label>Name: </label> <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\"> \r\n    <label>Price: </label> <input type=\"number\" class=\"form-control\" [(ngModel)]=\"price\"> <br>\r\n    \r\n    <!--làm cho dạng query param, nghĩa là truyền tham số kiểu url: định dạng params truyền đi, để hiển thị lên url.\r\n\r\n      +queryParams: dạng key-value, dùng toán tử 3 ngôi, nếu ko có để rỗng: http://localhost:4200/products?name=&price= \r\n    \r\n    Cách 1: lấy queryParams trực tiếp từ html, rồi truyền lên url theo đúng định dạng.\r\n  (nếu router có tham số con thì [routerLink]=\"['/products/id']\" sẽ cho ra: http://localhost:4200/products/id?name=&price=  )\r\n\r\n      Chú ý: Đây là cách thiết lập đường link, nên cần chú ý phải thiết lập trên đường dẫn hiện tại.\r\n      vd: lúc này đang ở /products/list muốn thiết lập link thì phải bắt đầu bằng /products/list, rồi mới tới các tham số.\r\n    -->\r\n    <button \r\n      type=\"button\" \r\n      class=\"btn btn-primary\"\r\n      [routerLink]=\"['/products/list']\"\r\n      [queryParams]=\"{ name: name ? name : '', price: price ? price : '' }\"\r\n    >Search</button>\r\n\r\n    <!--Cách 2: gọi hàm lấy queryParams trong comp. rồi truyền lên url theo đúng định dạng-->\r\n    <button \r\n      type=\"button\" \r\n      class=\"btn btn-danger\"\r\n      [routerLink]=\"['/products/list']\"\r\n      (click)=\"onSearch();\"\r\n    >Search</button>\r\n\r\n    <br><hr>\r\n  </div>\r\n</div>\r\n\r\n\r\n<table class=\"table table-bordered table-hover\">\r\n  <thead>\r\n    <tr>\r\n      <th>ID</th>\r\n      <th>Name</th>\r\n      <th>Price</th>\r\n      <th>Status</th>\r\n      <th>Action</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let product of products\" [routerLink]=\"['/products', product.id]\">\r\n      <td>{{product.id}}</td>\r\n      <td>{{product.name}}</td>\r\n      <td>{{product.price | currency:'USD':'symbol':'1.2-3'}}</td>\r\n      <td>{{product.status ? 'Active' : 'Deactive'}}</td>\r\n      \r\n      <td>\r\n        <a href=\"\" [routerLink]=\"['/products/edit', product.id]\">Edit</a>\r\n        /\r\n        <a href=\"\" [routerLink]=\"['/products', product.id]\">Delete</a>\r\n      </td>\r\n\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/folder-components/router-product-list/router-product-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/folder-components/router-product-list/router-product-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: RouterProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterProductListComponent", function() { return RouterProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _folder_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../folder-services/product.service */ "./src/app/folder-services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//

/*Để hiển thị dòng queryParams từ comp: http://localhost:4200/products?name=&price= hiển thị ra ntn
-import Router
-Inject vào constructro như service
-gọi hàm navigate để lấy các params từ url hay từ query nhập vào.

-để lấy đc các param về thì dùng Subscription để lấy, giống như bên router-product-detail.component.ts
*/
var RouterProductListComponent = /** @class */ (function () {
    //
    function RouterProductListComponent(productService, routerService, activatedRoute) {
        this.productService = productService;
        this.routerService = routerService;
        this.activatedRoute = activatedRoute;
        this.products = [];
    }
    RouterProductListComponent.prototype.ngOnInit = function () {
        //nếu ko sd activatedRoute bên dưới thì có thể lấy products theo cách thông thường, còn nếu sd activatedRoute thì dùng cách bên dưới
        // this.products = this.productService.getAllProducts();
        var _this = this;
        // sd ActivatedRoute để lấy params về
        this.queryParamsSubcription = this.activatedRoute.queryParams.subscribe(function (data) {
            var name = data['name'];
            var price = data['price'];
            //gán lại các biến để thay giữ giá trị trong khung input mỗi khi F5 lại
            _this.name = name;
            _this.price = price;
            _this.products = _this.productService.getAllProducts(name, price);
        });
    };
    RouterProductListComponent.prototype.ngOnDestroy = function () {
        if (this.queryParamsSubcription) {
            this.queryParamsSubcription.unsubscribe();
        }
    };
    //gọi hàm navigate định dạng params truyền đi, để hiển thị lên url.
    //Đây là cách thiết lập đường link, nên cần chú ý, phải thiết lập trên đường dẫn hiện tại.
    //vd: lúc này đang ở /products/list muốn thiết lập link thì phải bắt đầu bằng /products/list, rồi mới tới các tham số.
    RouterProductListComponent.prototype.onSearch = function () {
        //TH router chỉ đến products, ko có tham số con: thì ko cần khai báo tham số con trong [] như TH dưới
        this.routerService.navigate(['/products/list'], { queryParams: { name: this.name ? this.name : '', price: this.price ? this.price : '' } });
        // console.log(this.name);
        //TH nếu router có tham số con thì phải khai báo trong [ , 'id']
        //http://localhost:4200/products/id?name=&price=
        // this.routerServce.navigate(['/products', 'id'], { queryParams: {name: this.name ? this.name : '', price: this.price ? this.price : ''} });
    };
    RouterProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-router-product-list',
            template: __webpack_require__(/*! ./router-product-list.component.html */ "./src/app/folder-components/router-product-list/router-product-list.component.html"),
            styles: [__webpack_require__(/*! ./router-product-list.component.css */ "./src/app/folder-components/router-product-list/router-product-list.component.css")]
        }),
        __metadata("design:paramtypes", [_folder_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RouterProductListComponent);
    return RouterProductListComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/router-products/router-products.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/folder-components/router-products/router-products.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/router-products/router-products.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/folder-components/router-products/router-products.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Vì path: products có children, nên <router-outlet> ở đây sẽ là nơi hiện các path của children bên trong path: products .-->\r\n    \r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/folder-components/router-products/router-products.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/folder-components/router-products/router-products.component.ts ***!
  \********************************************************************************/
/*! exports provided: RouterProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterProductsComponent", function() { return RouterProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RouterProductsComponent = /** @class */ (function () {
    function RouterProductsComponent() {
    }
    RouterProductsComponent.prototype.ngOnInit = function () { };
    RouterProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-router-products',
            template: __webpack_require__(/*! ./router-products.component.html */ "./src/app/folder-components/router-products/router-products.component.html"),
            styles: [__webpack_require__(/*! ./router-products.component.css */ "./src/app/folder-components/router-products/router-products.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RouterProductsComponent);
    return RouterProductsComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/router-products/router-products.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/folder-components/router-products/router-products.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _router_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router-products.component */ "./src/app/folder-components/router-products/router-products.component.ts");
/* harmony import */ var _router_product_list_router_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../router-product-list/router-product-list.component */ "./src/app/folder-components/router-product-list/router-product-list.component.ts");
/* harmony import */ var _router_product_edit_router_product_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../router-product-edit/router-product-edit.component */ "./src/app/folder-components/router-product-edit/router-product-edit.component.ts");
/* harmony import */ var _router_login_router_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../router-login/router-login.component */ "./src/app/folder-components/router-login/router-login.component.ts");
/* harmony import */ var _folder_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../folder-services/guards/auth.guard */ "./src/app/folder-services/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//để dùng Template-driven forms; two-way binding(là ngModel); service: phải import FormsModule và gọi ra dưới phần imports: []
//để sử dụng Reactive Form phải import ReactiveFormsModule và cũng gọi ra dưới phần import[].
//VÌ TA TÁCH RIÊNG MODULE, NÊN Ở COMP NÀY MUỐN SD CÁI GÌ THÌ PHẢI IMPORT RIÊNG, CHỨ KO PHỤ THUỘC VÀO APP.MODULE.TS

//Để các comp có sử dụng module routing này: khi routing sẽ sử dụng đc ngIF, ngFor: thì ở module routing này phải import thư viện này. 
//Và gọi xuống phần imports[] trong @NgModule({}) bên dưới.





//service
//Guard là 1 service, làm canactive cho login.

var routesConfig = [
    {
        path: 'products',
        /*-nếu có dòng này thì có nghĩa là đi đến RouterProductsComponent, bên children muốn đc gọi ra thì phải nằm trong <outlet>
        của RouterProductsComponent, phải thiết lập 1 thẻ <outlet> bên trong RouterProductsComponent đó.
        -nếu ko có dòng này thì sẽ đi trực tiếp tới children mỗi khi link = products/
        -Ở đây ta để nguyên dòng này với ý muốn router 1 comp bên trong 1 comp, các nội dung của comp con sẽ đổ vào <router-outlet> của comp cha.
        */
        component: _router_products_component__WEBPACK_IMPORTED_MODULE_4__["RouterProductsComponent"],
        /*gọi service canActivate: [AuthGuard]: cho liên kết path nào muốn bảo vệ, liên kế path trong router-products.module.ts.
        nếu auth.guard.ts trả về true thì nó cho vào, còn false thì nó ko cho vào path đó.
        Xem trong auth.guard.ts. Nhớ import service và gọi xuống providers.*/
        canActivate: [_folder_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        //Thay vì /products sẽ đi thẳng tới RouterProductsComponent, thì sẽ đi vào child{} và sẽ nối các đuôi child vào, vd: /products/list
        children: [
            //cấu hình đường dẫn khi kích vào products thì sẽ chạy đường dẫn mặc định là: /products/list
            {
                path: '',
                redirectTo: '/products/list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _router_product_list_router_product_list_component__WEBPACK_IMPORTED_MODULE_5__["RouterProductListComponent"]
            },
            {
                path: 'edit/:id',
                component: _router_product_edit_router_product_edit_component__WEBPACK_IMPORTED_MODULE_6__["RouterProductEditComponent"]
            }
        ]
    },
    {
        path: 'login',
        component: _router_login_router_login_component__WEBPACK_IMPORTED_MODULE_7__["RouterLoginComponent"]
    }
];
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                // RouterModule.forRoot(routesConfig)
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routesConfig) //vì đây là module con chỉ với 1 comp, nên gọi forChild() chứ ko phải forRoot như module gộp nhiều comp.
            ],
            //declarations[] để gọi class ContactsComponent từ comp đã import vào (giống như bên app.module.ts cũng import xong thì gọi xuống declarations)
            declarations: [
                _router_products_component__WEBPACK_IMPORTED_MODULE_4__["RouterProductsComponent"],
                _router_product_list_router_product_list_component__WEBPACK_IMPORTED_MODULE_5__["RouterProductListComponent"],
                _router_product_edit_router_product_edit_component__WEBPACK_IMPORTED_MODULE_6__["RouterProductEditComponent"],
                _router_login_router_login_component__WEBPACK_IMPORTED_MODULE_7__["RouterLoginComponent"]
            ],
            //providers: nơi import service
            providers: [
                _folder_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/app/folder-components/sign-in/sign-in.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/folder-components/sign-in/sign-in.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/sign-in/sign-in.component.html":
/*!******************************************************************!*\
  !*** ./src/app/folder-components/sign-in/sign-in.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- placeholder: thuộc tính hiện ẩn trong khung -->\r\n<!-- Sử dụng [(ngModel)] để gắn với các biến email, password trong comp. Khi ta nhập từ form vào thì nó tự động gắn giá trị cho các biến đó.-->\r\n\r\n\r\n<!-- -Có 2 loại phổ biến là Template-driven forms và Reactive Forms: Bài này ta học Template-driven forms \r\n\r\n**Template-driven forms: https://angular.io/guide/forms\r\n-Các control đc bao lại trong thẻ <Form>\r\n-Button Submit trong form: không cần tạo sự kiện (click) trong btn Submit nữa, sự kiện sẽ đc đưa thẳng lên khai báo form, khi bấm btn Submit thì nó sẽ gọi tới sự kiện (submit/ngSubmit) trong khai báo form.\r\n\r\n-Tất cả thẻ input đều phải có [(ngModel)], có thể nó ko gắn cho 1 biến nào cả nhưng ép buộc phải có ngModel, chỉ cần ghi ngModel là đc.\r\nép buộc phải có thuộc tính name=\"biến mà ngModel gắn\" mới có thể sử dụng ngModel trong form.\r\n\r\n-Bên trong khai báo form: ngoài sự kiện (submit) đc khai báo tại đây; \r\nthì còn có directive ngForm đc khai báo: #formSignIn=\"ngForm\";\r\nTemplate variables #formSignIn đc gắn với directive ngForm để lấy ra các giá trị trong MỌI INPUT của ngForm.\r\n\r\n-->\r\n\r\n<!-- Xem giải thích ở trên: Tóm gọn ở đây.\r\n-khai báo name=\"biến gắn với ngModel\"\r\n-đưa sự kiện click của Submit lên form thành sự kiện submit/ngSubmit cùng tên với btn Submit.(cho đúng tiêu chuẩn, nếu ko đưa lên cũng đc ko sao cả)\r\n+Nếu để submit thì khi phóng ngoại lệ nó sẽ đưa lên link chứ ko phóng ra console: http://localhost:4200/?email=ffffg&password=f\r\n+Còn nếu để ngSubmit thì khi phóng ngoại lệ trong comp thì nó sẽ show ngoại lệ ra console. \r\n(Xem ví dụ   throw new Error('Form is invalid'); trong hàm onSubmit() trong comp)\r\n\r\n\r\n\r\n-***thêm directive ngForm, và Template variables #formSignIn gắn với nó:\r\n+ #formSignIn LẤY RA TẤT CẢ CÁC GIÁ TRỊ INPUT VÀO CỦA FORM. \r\n\r\n+Lúc này trong form tất cả input nhập vào là: email vầ password; sẽ được đưa vào ngForm và gắn cho #formSignIn;\r\nVậy nên ta muốn truyền mọi input về component thì chỉ cần truyền biến formSignIn là đủ.\r\n(Ở đây đưa vào hàm onSubmit(formSignIn) để truyền formSignIn về)\r\n\r\n+Lúc này comp thật dễ dàng để nhận và gửi dl lên server.\r\n\r\n+Thành phần trong formSignIn: Lúc này nếu bên comp console.log(formSignIn) thì F12 ta sẽ thấy 1 object NgForm{} lớn,\r\nkéo xuống phần value của object đó, sẽ thấy có chứa mọi input của form.\r\nNên bên comp muốn lấy ra value thì gọi  console.log(formSignIn.value)\r\n-->\r\n\r\n<!-- Bài 45: Validate template form\r\n-Validate dữ liệu: là kiểm tra dữ liệu trước khi form submit lên server, giúp người dùng biết được trường nào họ đang nhập có thể sai.\r\nvd: tại email ép buộc người dùng nhập vào, nếu người dùng chưa nhập vào thì chưa cho phép người dùng bấm btn Submit.\r\n\r\n-thuộc tính xét lỗi required(cần thiết: thêm vào sau name): nếu ô đó chưa nhập gì thì lỗi required=true, còn nhập rồi thì lỗi required=false.\r\nvà required nó trả về trong errors của Object (F12 ra sẽ thấy).\r\n\r\n(bên comp chỉ console.log(formSignIn): render rồi vào object form>controls>email>errors>thấy required=true nếu chưa nhập)\r\n\r\n+Nếu formSignIn.controls.email?.errors?.required = true : có nghĩa là chưa nhập, cho hiển thị dòng thông báo.\r\nDấu email? và errors?: Bởi vì lúc đầu render lên chưa thể có email hay error nếu chưa ấn btn Submit, nên để dấu ? ý là có thể ko có.\r\n(**render ko báo lỗi, nhưng dòng này trong vs code lại báo lỗi: nên tạm thời đóng nó lại).\r\n\r\n-Ẩn btn Submit nếu chưa nhập dl ô nào đó.\r\n+Sử dụng formSignIn.invalid. CHÚ Ý: invalid: Không hiệu lực >< valid: có hiệu lực\r\n(thuộc tính valid xem trong F12 của từng input đều có).\r\n\r\n+Khi ta đặt required cho input nào thì thuộc tính valid(có hiệu lực) sẽ phụ thuộc vào required đó. \r\nNếu chưa nhập input thì required=true, lúc đấy thuộc tính valid=false thì cho button Submit ẩn đi.\r\n\r\n+Ở đây formSignIn.invalid là KHÔNG HIỆU LỰC, nó ngược lại với valid, nên cho formSignIn.invalid=true \r\ncó nghĩa valid=false thì cho ẩn btn Submit đi.\r\n\r\n+Nếu ta xét valid cho nhiều input, thì nó sẽ xét nếu valid(có hiệu lực) của tất cả == true \r\nthì mới cho invalid(ko hiệu lực)=false, mới cho hiện lên.  \r\n-->\r\n<h3>Bài 43,44: Form - sign-in.component.html</h3>\r\n\r\n<!-- nếu ngSubmit thì khi phóng ngoại lê nó sẽ đưa ra console chứ ko đưa lên link -->\r\n<form (ngSubmit)=\"onSubmit(formSignIn);\" #formSignIn=\"ngForm\">\r\n    <!-- Nếu dùng ngForm để lấy input thì ko cần đến biến email và password trong comp để gắn; \r\n        còn phần ngModel thì phải để cho có, dù ko gắn gì. -->\r\n        \r\n    <!-- <input placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\" required> -->\r\n    <input placeholder=\"Email\" ngModel name=\"email\" required>\r\n    <p *ngIf=\"formSignIn.controls.email?.errors?.required\">Email is required</p>\r\n\r\n    <br>\r\n    <input type=\"password\" placeholder=\"Password\" ngModel name=\"password\">\r\n    <!-- <input type=\"password\" placeholder=\"Password\" ngModel name=\"password\" required> -->\r\n    <!-- <p *ngIf=\"formSignIn.controls.password?.errors?.required\">Password is required</p> -->\r\n\r\n    <br>\r\n    <button [disabled]=\"formSignIn.invalid\">Submit</button>\r\n</form>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/folder-components/sign-in/sign-in.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/folder-components/sign-in/sign-in.component.ts ***!
  \****************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignInComponent = /** @class */ (function () {
    //nếu dùng ngForm để lấy dữ liệu input từ form, thì sẽ ko cần 2 biến này
    // email = ''; //tạm thời rỗng, [(ngModel)] sẽ auto gắn giá trị cho nó.
    // password = '';
    function SignInComponent() {
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    // onSubmit(){
    //     console.log(this.email, this.password);
    // }
    //ở đây formSignIn chỉ là 1 tham số hàm bình thường thôi, muốn đặt tên gì cũng đc.
    //tham số ở đây để nhận tất cả input truyền từ ngForm(trong html) về, bằng cách gọi hàm này trong thẻ form trong html(qua đó mà xem).
    SignInComponent.prototype.onSubmit = function (formSignIn) {
        console.log(formSignIn.value); //.value có giải thích bên phần cuối giải thích của html.
        //Test cho ngSubmit bên html. Dùng ngSubmit, thì sẽ phóng ngoại lệ ra console chứ ko phóng lên url.
        // throw new Error('Form is invalid');
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/folder-components/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/folder-components/sign-in/sign-in.component.css")]
        })
        /*Hầu hết ứng dụng thu thập thông tin người dùng qua các form. Angular hỗ trở xử lý form input rất tốt.
        Đã học cách xử lý tập tin qua input bằng two-way binding, event binding.
        
        Tuy nhiên đối với các form nhập liệu lớn hơn, thì cách thu thập thông tin qua từng input sẽ gặp khó khăn.
        =>giải pháp: gộp các input đó thành các form để có sử dụng tốt hơn.
        
        Bài toán này: ta tạo ra 2 input và gộp 2 input đó lại thành 1 form. (xem trong file html)
        -----------------------------------
        Bài 44: Sử dụng ngForm để thực hiện bài toán trên (Qua html xem giải thích)
        
        
        */
        ,
        __metadata("design:paramtypes", [])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/sign-in2/sign-in2.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/folder-components/sign-in2/sign-in2.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/sign-in2/sign-in2.component.html":
/*!********************************************************************!*\
  !*** ./src/app/folder-components/sign-in2/sign-in2.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Bài 48: continouns from folder sign-in</h3>\r\n\r\n<form (ngSubmit)=\"onSubmit(formSignIn);\" #formSignIn=\"ngForm\">\r\n    <!--Trong thẻ input: ngoài required còn có các xử lý lỗi khác như email.\r\n    Lỗi required=true: chưa nhập; lỗi email=true: chưa đúng kiểu email, chưa xác định, not valid-->\r\n    <input placeholder=\"Email\" ngModel #txtEmail=\"ngModel\" name=\"email\" required email>\r\n\r\n    <!-- Sử dụng txtEmail thay cho formSignIn.controls.email?: trong thẻ input gán 1 template variable #txtEmail=\"ngModel\" thì txtEmail có thể nhận các giá trị input vào.\r\n    Còn ngModel đứng trước là vẫn để cho có.-->\r\n    <!-- <p *ngIf=\"formSignIn.controls.email?.errors?.required\">Email is required</p> -->\r\n \r\n    <!-- Thêm sự kiện touched vào có nghĩa là ban đầu chưa show ra lỗi required ngay, khi người dùng kích vào rồi kích chuột ra bên ngoài thì lúc đó nó mới kiểm tra lỗi hay ko.-->\r\n    <p *ngIf=\"txtEmail.touched && txtEmail.errors?.required\">Email is required</p>\r\n    \r\n    <!-- Xử lý lỗi email=true:chưa đúng định dạng. -->\r\n    <p *ngIf=\"txtEmail.touched && txtEmail.errors?.email\">Email is not valid</p>\r\n\r\n    <br>\r\n\r\n    <!-- Thêm 2 dạng validate là minlength và pattern để quy định kiểu độ dài tối thiểu và kiểu dl nhập vào cho password .\r\n    Vào đây để xem những dạng validate dữ liệu: https://angular.io/api?query=validator  -->\r\n    <input type=\"password\" placeholder=\"Password\" ngModel #txtPassword=\"ngModel\" name=\"password\" minlength=\"6\" pattern=\"[a-z]*\">\r\n    <!-- <input type=\"password\" placeholder=\"Password\" ngModel name=\"password\" required> -->\r\n    <!-- <p *ngIf=\"formSignIn.controls.password?.errors?.required\">Password is required</p> -->\r\n\r\n    <br>\r\n\r\n    <!-- Bài 49: Xử lý checkbox và ngModelGroup \r\n      -ngModelGroup=\"subjects\": đặt các checkbox vào trong 1 group subjects, khi kiểm tra thì nó sẽ in ra \"subjects\": { \"NodeJS\": false, \"Angular\": false, \"ReactJS\": false } \r\n\r\n      -checkbox: [ngModel]=\"false\": ban đầu ko check\r\n    -->\r\n    <div ngModelGroup=\"subjects\">\r\n      <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"NodeJS\">NodeJS</label>\r\n      <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"Angular\">Angular</label>\r\n      <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"ReactJS\">ReactJS</label>\r\n    </div>\r\n\r\n    <br>\r\n    <button [disabled]=\"formSignIn.invalid\">Submit</button>\r\n</form>\r\n\r\n<!--\r\n-In ra lỗi của ô input email: lỗi required=true: chưa nhập; lỗi email=true: chưa đúng kiểu email, chưa xác định, not valid\r\nỞ đây xuất ra màn hình để test thôi.\r\n\r\n-In ra các lỗi của password, dựa theo chuẩn minlength và pattern đã nhập vào ở input.\r\n\r\n-Nếu ko có lỗi gì thì trả về null\r\n\r\n-formSignIn: in ra tất cả input của formSignIn-->\r\n\r\n<p>{{ txtEmail.errors | json }}</p>\r\n<p>{{ txtPassword.errors | json }}</p>\r\n<p>{{ formSignIn.value | json }}</p> \r\n\r\n\r\n\r\n<!-- custom bên file: STYLES.CSS\r\n-F12 xem khung input email, khi chưa kích vào thì: thấy có các class=\"ng-untouched ng-pristine ng-invalid\", các class con: ng-untouched, ng-pristine, ng-invalid\r\nCòn khi đã kích vào thì các class lại chuyển trạng thái:       class=\"ng-touched ng-pristine ng-invalid\" (ng-invalid: khi chưa nhập, hoặc chưa nhập đúng format) \r\n\r\nvd: ở đây ta sẽ xét nếu như ĐÃ kích chuột vào khung input email rồi lại kích chuột ra ngoài thì đó là touched (class ng-touched), \r\nnhưng lại chưa thỏa lỗi email(định dạng email) và lỗi required (cả 2 lỗi này thể hiện qua class ng-invalid), thì khung đó sẽ hiện lên màu đỏ.\r\n\r\nLúc này ta cần cấu hình lại file styles.css (file css chính chung cho all) cho 2 class ng-touched (class này chỉ xuất hiện khi trạng thái khi đã kích vào r kích ra,\r\nngược lại sẽ hiện class ng-untouched), ng-invalid (trạng thái chưa đúng format email), để khi không thỏa 1 trong 2 cái đó thì sẽ hiện lên viền màu đỏ.\r\n\r\nbên file styles.css:\r\ninput.ng-invalid.ng-touched {\r\n    border: 2px solid red; \r\n}\r\n-->\r\n\r\n"

/***/ }),

/***/ "./src/app/folder-components/sign-in2/sign-in2.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/folder-components/sign-in2/sign-in2.component.ts ***!
  \******************************************************************/
/*! exports provided: SignIn2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignIn2Component", function() { return SignIn2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignIn2Component = /** @class */ (function () {
    //nếu dùng ngForm để lấy dữ liệu input từ form, thì sẽ ko cần 2 biến này
    // email = ''; //tạm thời rỗng, [(ngModel)] sẽ auto gắn giá trị cho nó.
    // password = '';
    function SignIn2Component() {
    }
    SignIn2Component.prototype.ngOnInit = function () {
    };
    // onSubmit(){
    //     console.log(this.email, this.password);
    // }
    //ở đây formSignIn chỉ là 1 tham số hàm bình thường thôi, muốn đặt tên gì cũng đc.
    //tham số ở đây để nhận tất cả input truyền từ ngForm(trong html) về, bằng cách gọi hàm này trong thẻ form trong html(qua đó mà xem).
    SignIn2Component.prototype.onSubmit = function (formSignIn) {
        console.log(formSignIn.value); //.value có giải thích bên phần cuối giải thích của html.
        //Test cho ngSubmit bên html. Dùng ngSubmit, thì sẽ phóng ngoại lệ ra console chứ ko phóng lên url.
        // throw new Error('Form is invalid');
    };
    SignIn2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in2',
            template: __webpack_require__(/*! ./sign-in2.component.html */ "./src/app/folder-components/sign-in2/sign-in2.component.html"),
            styles: [__webpack_require__(/*! ./sign-in2.component.css */ "./src/app/folder-components/sign-in2/sign-in2.component.css")]
        })
        /*Hầu hết ứng dụng thu thập thông tin người dùng qua các form. Angular hỗ trở xử lý form input rất tốt.
        Đã học cách xử lý tập tin qua input bằng two-way binding, event binding.
        
        Tuy nhiên đối với các form nhập liệu lớn hơn, thì cách thu thập thông tin qua từng input sẽ gặp khó khăn.
        =>giải pháp: gộp các input đó thành các form để có sử dụng tốt hơn.
        
        Bài toán này: ta tạo ra 2 input và gộp 2 input đó lại thành 1 form. (xem trong file html)
        -----------------------------------
        Bài 44: Sử dụng ngForm để thực hiện bài toán trên (Qua html xem giải thích)
        
        */
        ,
        __metadata("design:paramtypes", [])
    ], SignIn2Component);
    return SignIn2Component;
}());



/***/ }),

/***/ "./src/app/folder-components/sign-in3/sign-in3.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/folder-components/sign-in3/sign-in3.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/sign-in3/sign-in3.component.html":
/*!********************************************************************!*\
  !*** ./src/app/folder-components/sign-in3/sign-in3.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Bài 51: Gửi post request từ form angular - folder sign-in3</h3>\r\n\r\n<!-- Copy từ folder sign-in2: bên đây tách ra để viết riêng phần request cho dễ hiểu.\r\nCác giải thích chi tiết xem trong sign-in1 và 2 -->\r\n\r\n<form (ngSubmit)=\"onSubmit(formSignIn);\" #formSignIn=\"ngForm\">\r\n    <input placeholder=\"Email\" ngModel #txtEmail=\"ngModel\" name=\"email\" required email>\r\n\r\n    <p *ngIf=\"txtEmail.touched && txtEmail.errors?.required\">Email is required</p>\r\n    <p *ngIf=\"txtEmail.touched && txtEmail.errors?.email\">Email is not valid</p>\r\n    <br>\r\n\r\n    <input type=\"password\" placeholder=\"Password\" ngModel #txtPassword=\"ngModel\" name=\"password\" minlength=\"6\" pattern=\"[a-z]*\">\r\n    <br>\r\n\r\n    <div ngModelGroup=\"subjects\">\r\n      <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"NodeJS\">NodeJS</label>\r\n      <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"Angular\">Angular</label>\r\n      <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"ReactJS\">ReactJS</label>\r\n    </div>\r\n    <br>\r\n\r\n    <!-- Bài 51: Gửi request Post dl lên server.\r\n    vd: người dùng nhập vào họ tên, sau đó ta gửi request post họ tên đó lên server, còn post ntn thì bên backend sẽ lo.-->\r\n    <button [disabled]=\"formSignIn.invalid\">Submit</button>\r\n</form>\r\n<br>\r\n\r\n<!-- Dùng để test việc POST 1 đoạn text lên server.-->\r\n<button (click)=\"postToExpress();\">POST</button>\r\n\r\n<br><br>\r\n<p>{{ txtEmail.errors | json }}</p>\r\n<p>{{ txtPassword.errors | json }}</p>\r\n<p>{{ formSignIn.value | json }}</p> \r\n\r\n"

/***/ }),

/***/ "./src/app/folder-components/sign-in3/sign-in3.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/folder-components/sign-in3/sign-in3.component.ts ***!
  \******************************************************************/
/*! exports provided: SignIn3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignIn3Component", function() { return SignIn3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sign_in3_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in3.service */ "./src/app/folder-components/sign-in3/sign-in3.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*Nếu như tách service post thành 1 file riêng thì ở đây ko cần import những này nữa. Mà sẽ import file service đó.
-import ở trên, rồi gọi trong providers[]
-Hoặc nếu muốn tất cả đều use đc service này thì phải import trong app.module.ts và thêm vào providers[] của file đó.
  comp nào muốn sử dụng service đó thì chỉ cần import đường dẫn là đủ.
*/
// //import để có thể tương tác với http, để gửi request post lên http
// import { Http, Headers } from '@angular/http';
// // import 'rxjs/add/operator/toPromise';  //toPromise: trong angular6 đã tự động, ta ko cần import dòng này

var SignIn3Component = /** @class */ (function () {
    //Cơ chế dependences Injection sẽ Inject service vào constructor như 1 đối tượng, nhưng ko cần khởi tạo.
    function SignIn3Component(signIn3Service) {
        this.signIn3Service = signIn3Service;
    }
    /*Bài 51: request dạng POST: đưa các giá trị input lên 1 url nào đó. Đó là đưa dl lên POST api,
              còn việc lấy dl từ api về xử lý trong server ntn thì back-end xử lý.*/
    SignIn3Component.prototype.onSubmit = function (formSignIn) {
        /*Đẩy input từ comp qua service thông qua gọi hàm truyền tham số vào, rồi service đẩy post request
        lên server, server xử lý(backend) sau đó gửi response về */
        this.signIn3Service.sendPost(formSignIn.value)
            .then(function (result) { return console.log(result); })
            .catch(function (err) { return console.log(err); });
        // console.log(formSignIn.value);
        /*Gửi mọi giá trị input của form lên server. TƯƠNG TỰ PHẦN TEST TRONG HÀM postToExpress() BÊN DƯỚI.
        Comp thông qua lấy input từ form trong html thông qua tham số formSignIn trong hàm.
        Tại html #formSignIn đc gắn với "ngForm" trong html, để lấy mọi giá trị input của form trong html về. Sau đó nó gọi hàm onSubmit() nó đưa tham số vào onSubmit() và truyền
        qua comp. Sau đó tại hàm này comp lấy các input đó gởi nó lên server.
  
        Vì gửi cả object tất cả input của form lên server, nên bên server phải cài đặt là gửi object: qua xem bên index.js: res.send(req.body);
        */
        //  const url = 'http://localhost:3000/signin'; //3000 là do bên server ta quy định, signin cũng vậy
        //  const headers = new Headers({ 'Content-Type': 'application/json'}); //header là thuộc tính OPTION đc tạo ra giống như ta choose header khi sử dụng postman ở bài 50
        //  const body = JSON.stringify(formSignIn.value);//body là 1 chuỗi json. Ở đây sẽ đổi 1 javascript object thành json, rồi gửi lên object có thuộc tính name='Khoa Phạm'.
        //  //gọi phương thức để post lên
        //  this.http.post(url, body, { headers }) //post lên
        //  .toPromise()  //server sẽ trả về. ta chuyển đổi dl trả về từ server đó.
        //  .then(res => res.json()) //ở đây gửi nguyên object lên. nên .json chứ ko .text
        //  .then(resJSON => console.log(resJSON));
        /*Thay vì viết gộp chung request dạng post ở trong hàm onSubmit() thì ta tách nó ra thành 1 SERVICE riêng,
        copy hết qua bên file sign-in3.service.ts và chỉnh sửa lại thành return về, và ở đây sẽ gọi lấy dl trả về
        sau khi post request lên thành công.*/
    };
    //TEST THỬ VIỆC GỬI 1 ĐOẠN TEXT LÊN SERVER. bên html bấm btn POST sẽ gọi hàm này, muốn dùng hàm này thì
    //  bên index.js sẽ res.send(req.body.name); gửi lên name là 1 text string bình thường, chứ ko phải object nên có .name nữa.
    SignIn3Component.prototype.postToExpress = function () {
        // //vì ở server trong file index.js, ta handel post ở raw là signin, nên url ở đây là signin
        // const url = 'http://localhost:3000/signin'; //3000 là do bên server ta quy định, signin cũng vậy
        // const headers = new Headers({ 'Content-Type': 'application/json'}); //header là thuộc tính OPTION đc tạo ra giống như ta choose header khi sử dụng postman ở bài 50
        // const body = JSON.stringify({ name: 'Khoa Phạm' });//body là 1 chuỗi json. Ở đây sẽ đổi 1 javascript object thành json, rồi gửi lên object có thuộc tính name='Khoa Phạm'.
        // //gọi phương thức để post lên
        // this.http.post(url, body, { headers }) //post lên
        // .toPromise()  //server sẽ trả về. ta chuyển đổi dl trả về từ server đó.
        // .then(res => res.text()) //vì bên index.js trong server: gửi lên server bằng dòng res.send(req.body.name): name chỉ là 1 cái text string bt, nên chỉ cần res.text().
        //                         //còn nếu res.send(req.body) là cả đối tượng, nên ở đây res.json()
        // .then(resText => console.log(resText));
    };
    SignIn3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in3',
            template: __webpack_require__(/*! ./sign-in3.component.html */ "./src/app/folder-components/sign-in3/sign-in3.component.html"),
            styles: [__webpack_require__(/*! ./sign-in3.component.css */ "./src/app/folder-components/sign-in3/sign-in3.component.css")],
            //Ở trên đã import rồi thì đây gọi class SignIn3Service vào trong Component, để sử dụng nó. 
            //Nếu muốn all comp đều sd đc thì phải import và gọi trong app.module.ts...  
            providers: [_sign_in3_service__WEBPACK_IMPORTED_MODULE_1__["SignIn3Service"]]
        }),
        __metadata("design:paramtypes", [_sign_in3_service__WEBPACK_IMPORTED_MODULE_1__["SignIn3Service"]])
    ], SignIn3Component);
    return SignIn3Component;
}());



/***/ }),

/***/ "./src/app/folder-components/sign-in3/sign-in3.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/folder-components/sign-in3/sign-in3.service.ts ***!
  \****************************************************************/
/*! exports provided: SignIn3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignIn3Service", function() { return SignIn3Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* Xem giải thích và cấu hình service ntn trong foldr ip2, có file ip.service.ts

-Ở file ip.service.ts thì là get, nên ko import Headers.
Còn ở đây là post nên có import thêm Headers.

-Giống với get:
+trong comp: import Http; import toPromise (angular 6 thì ko cần)
+trong app.module.ts nhớ import HttpModule và gọi xuống imports: [] (đã import trước ở phần get r thì thôi)
+trong class của comp: khai báo đối tượng http để post dl lên. angular sẽ tự động new ngầm cho đối tượng http đó.

-Có các cái mới so với GET:
+có headers đc tọa ra từ class Headers, class này đc lấy từ thư viện @angular/http
+với phương thức post() ta truyền các loại: url, body là chuỗi json, và biến header đã tạo ở trên.
sau đó thì cũng toPromise và xử lý dữ liệu để post lên.

*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import 'rxjs/add/operator/toPromise'; //trong angular 6 thì ko cần dòng này cũng có thể toPromise với get http.
var SignIn3Service = /** @class */ (function () {
    function SignIn3Service(http) {
        this.http = http;
    } //kb biến http từ thư viện Http, angular sẽ tự động new ngầm cho nó thành đối tượng của Http. 
    //đưa request post lên server, sau đó nhận response trả về, nên sẽ có return.
    //Service sẽ nhận trả về, sau đó truyền qua comp bằng cách comp gọi service.
    SignIn3Service.prototype.sendPost = function (value) {
        var url = 'http://localhost:3000/signin'; //3000 là do bên server ta quy định, signin cũng vậy
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' }); //header là thuộc tính OPTION đc tạo ra giống như ta choose header khi sử dụng postman ở bài 50
        // const body = JSON.stringify(formSignIn.value);//body là 1 chuỗi json. Ở đây sẽ đổi 1 javascript object thành json, rồi gửi lên object có thuộc tính name='Khoa Phạm'.
        //thay vì formSignIn.value, thì ở đây nó nhận tham số value truyền vào là input từ comp khi comp gọi hàm này để post lên.
        var body = JSON.stringify(value);
        //gọi phương thức để post lên, và return về giá trị đc response về.
        return this.http.post(url, body, { headers: headers }) //post lên
            .toPromise() //server sẽ trả response về. ta chuyển đổi dl trả về từ server đó.
            .then(function (res) { return res.json(); }); //ở đây gửi nguyên object lên. nên .json chứ ko .text
        //Để qua bên comp nhận dl rồi mới log ra, ở đây chỉ nhiệm vụ lấy dl thôi.
        // .then(resJSON => console.log(resJSON));
    };
    SignIn3Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], SignIn3Service);
    return SignIn3Service;
}());



/***/ }),

/***/ "./src/app/folder-components/sign-up/sign-up.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/folder-components/sign-up/sign-up.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/sign-up/sign-up.component.html":
/*!******************************************************************!*\
  !*** ./src/app/folder-components/sign-up/sign-up.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>bài 53,54: Reactive form: https://angular.io/guide/reactive-forms </h3>\r\n<br>\r\n\r\n<!-- Tương tác với Reactive Forms đc tạo bên comp:\r\n\r\n-Sử dụng ngSubmit để gọi sự kiện khi bấm button Submit thuộc form này.\r\n-dùng [formGroup] để gắn với đối tượng formSignUp bên comp. Đối tượng formSignUp đc khai báo formSignUp: FormGroup và khởi tạo bên trong constructor.\r\n-dùng formControlName để gắn với các các tham số email,pasword đc khởi tạo bên trong đối tượng formSignUp bên comp.\r\n\r\n=>Như vậy dl nhập vào ở html, sẽ đc truyền qua obj formSignUp của comp (thông qua việc gắn vào [formGroup]); \r\nCác tham số bên trong object formSignUp của comp là email và password cũng đc truyền dl qua (thông qua việc gắn tên các tham số đó với formControlName) \r\n-->\r\n\r\n\r\n<!-- Bài 54: Nested form group\r\n-formGroup Ở Template-driven forms(xem trong file sign-in2.component.html): thì dùng ngModelGroup là formGroup đc dùng để nhóm các checkbox: ngModelGroup=\"subjects\".\r\n\r\n***formGroup ở Reactive form: \r\n-Thêm các tham số cho object formSignUp trong comp:\r\n+Để lấy đc giá trị các checkbox thì bên comp.ts phải tạo thêm các tham số kiểu FormControl cho object formSignUp.\r\n+Để lấy đc giá trị của Gourpcheckbox thì phải tạo tham số kiểu FormGroup, sau đó move các FormControl checkbox vào bên trong FormGroup Gourpcheckbox này.\r\n\r\n-Ở html:\r\n+Gắn formControlName=\"tên tham số checkbox vừa tạo bên comp\", để nó gửi giá trị checkbox về.\r\n+Gắn formGroupName=\"tên formGroup checkbox vừa tạo bên comp\", để nó gửi nguyên giá trị all checkbox về.\r\n\r\n-->\r\n<form (ngSubmit)=\"onSubmit();\" [formGroup]=\"formSignUp\">\r\n    <input placeholder=\"Email\" formControlName=\"email\">\r\n    <br>\r\n\r\n    <input type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n    <br> <br> \r\n\r\n    <div formGroupName=\"subject\">\r\n        <!-- Các checkbox này đã giải thích rồi: xem trong sign-in2.component.html.\r\n            -giá trị DEFAULT:\r\n            +Khác với [ngModel]=\"false\" là cách để gắn giá trị default trong template driven form trong sign-in3.comp.html.\r\n            +Còn Reactive form: sẽ gắn giá trị mặc định trong khởi tạo formGroup trong comp.  \r\n        -->\r\n        <label><input type=\"checkbox\" name=\"NodeJS\" formControlName=\"nodeJS\">NodeJS</label>\r\n        <label><input type=\"checkbox\" name=\"Angular\" formControlName=\"angular\">Angular</label>\r\n        <label><input type=\"checkbox\" name=\"ReactJS\" formControlName=\"reactJS\">ReactJS</label>\r\n    </div>\r\n    <br> <br> \r\n\r\n    <button>Submit</button>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/folder-components/sign-up/sign-up.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/folder-components/sign-up/sign-up.component.ts ***!
  \****************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpComponent = /** @class */ (function () {
    function SignUpComponent() {
        //khởi tạo formSignUp trong constructor hoặc onInit(), với các tham số bên trong là các object FormControl()
        this.formSignUp = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('tientm96@gmail.com'),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            //tạo các FormControl checkbox để nhận các giá trị checkbox gửi từ html về.
            //tạo FormGroup để nhận nguyên 1 object mang gộp các giá trị của checkbox gửi về.
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                nodeJS: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                angular: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
                reactJS: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
            }),
        });
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.onSubmit = function () {
        console.log(this.formSignUp.value);
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/folder-components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/folder-components/sign-up/sign-up.component.css")]
        })
        /*
        **Reactive Forms: https://angular.io/guide/reactive-forms
        -bên app.module.ts: import ReactiveFormsModule từ @angular/core, rồi gọi ra dưới phần import[].
        -trong comp: import FormGroup, FormControl
        -trong class chính của comp: xem trong đấy
        
        -Qua html xem cách gọi form ntn. Bên html sẽ truyền dl nhập vào qua cho object formSignUp và các tham số của formSignUp.
        Ở đây chỉ cần log ra formSignUp.value là đc.
        
        
        */
        ,
        __metadata("design:paramtypes", [])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/sign-up2/sign-up2.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/folder-components/sign-up2/sign-up2.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/sign-up2/sign-up2.component.html":
/*!********************************************************************!*\
  !*** ./src/app/folder-components/sign-up2/sign-up2.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>tiếp tục Reactive form. Bài 55: Form builder</h3>\r\n<br>\r\n\r\n<!--Mọi giải thích phần trước xem trong: sign-up.component.html-->\r\n\r\n<form (ngSubmit)=\"onSubmit();\" [formGroup]=\"formSignUp\">\r\n    <input placeholder=\"Email\" formControlName=\"email\">\r\n    <br>\r\n\r\n    <input type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n    <br> <br> \r\n\r\n    <div formGroupName=\"subject\">\r\n        <label><input type=\"checkbox\" name=\"NodeJS\" formControlName=\"nodeJS\">NodeJS</label>\r\n        <label><input type=\"checkbox\" name=\"Angular\" formControlName=\"angular\">Angular</label>\r\n        <label><input type=\"checkbox\" name=\"ReactJS\" formControlName=\"reactJS\">ReactJS</label>\r\n    </div>\r\n    <br> <br> \r\n\r\n    <button>Submit</button>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/folder-components/sign-up2/sign-up2.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/folder-components/sign-up2/sign-up2.component.ts ***!
  \******************************************************************/
/*! exports provided: SignUp2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp2Component", function() { return SignUp2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUp2Component = /** @class */ (function () {
    //Nếu dùng FormGroup làm formgroup, như ở sign-up.comp.ts
    // constructor() { 
    //   this.formSignUp = new FormGroup({
    //     email: new FormControl('tientm96@gmail.com'),
    //     password: new FormControl(),
    //     subject: new FormGroup({
    //       nodeJS: new FormControl(false), 
    //       angular: new FormControl(true),
    //       reactJS: new FormControl(false)
    //     }),
    //   });
    // }
    //Bài 55: dùng FormBuilder làm formgroup.
    function SignUp2Component(fb) {
        // this.formSignUp = fb.group({  //thay vì new FormGroup trong FormGroup
        //   email: 'tientm96@gmail.com', //thay vì new FormControl('tientm96@gmail.com') trong FormGroup
        //   password: '', //thay vì new FormControl() trong FormGroup
        this.fb = fb;
        //   subject: fb.group({
        //     nodeJS: false, //thay vì new FormControl(false) trong FormGroup
        //     angular: true,
        //     reactJS: false
        //   }),
        // });
    }
    /*Thường thì các khởi tạo Angular khuyến nghị ta nên viết trong ngOnInit(), chứ ko biết trong constructor
    Constructor chỉ để khởi tạo ngầm 1 biến trong () thôi.
    Muốn gọi biến khởi tạo trong comp thì dùng this.tênbien: this.fb
    */
    SignUp2Component.prototype.ngOnInit = function () {
        this.formSignUp = this.fb.group({
            email: 'tientm96@gmail.com',
            password: '',
            subject: this.fb.group({
                nodeJS: false,
                angular: true,
                reactJS: false
            }),
        });
    };
    SignUp2Component.prototype.onSubmit = function () {
        console.log(this.formSignUp.value);
    };
    SignUp2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up2',
            template: __webpack_require__(/*! ./sign-up2.component.html */ "./src/app/folder-components/sign-up2/sign-up2.component.html"),
            styles: [__webpack_require__(/*! ./sign-up2.component.css */ "./src/app/folder-components/sign-up2/sign-up2.component.css")]
        })
        /*Reactive Forms: https://angular.io/guide/reactive-forms ---- MỌI GIẢI THÍCH BAN ĐẦU XEM TRONG sign-up.component.ts
          TRONG SIGN-UP2 NÀY: copy từ sign-up qua, bắt đầu từ bài Bài 55: Form builder  để làm riêng cho tiện.
        */
        ,
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SignUp2Component);
    return SignUp2Component;
}());



/***/ }),

/***/ "./src/app/folder-components/sign-up3/sign-up3.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/folder-components/sign-up3/sign-up3.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/sign-up3/sign-up3.component.html":
/*!********************************************************************!*\
  !*** ./src/app/folder-components/sign-up3/sign-up3.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>tiếp tục Reactive form. Bài 56: Validate trong Reactive form</h3>\r\n<br>\r\n\r\n<!--Mọi giải thích phần trước xem trong: sign-up.component.html và sign-up2.component.html-->\r\n\r\n<form (ngSubmit)=\"onSubmit();\" [formGroup]=\"formSignUp\">\r\n    <input placeholder=\"Email\" formControlName=\"email\">\r\n    <br>\r\n\r\n    <!-- Các lỗi required và kq trả về touched: Xem trong sign-in2.component.html có giải thích. Các object controls, email, errors: đều do tìm thấy khi F12 -->\r\n    <!-- <p *ngIf=\"formSignUp.controls.email.invalid && formSignUp.controls.email.touched\">Email is required</p> -->\r\n    \r\n    <!-- dùng get('email') thay cho  controls.email, nếu là param nodeJS ở bên trong subject thì get('subject.nodeJS')-->\r\n    <p *ngIf=\"formSignUp.get('email').invalid && formSignUp.get('email').touched\">Email is required</p>\r\n    \r\n    \r\n\r\n    <input type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n    <br> <br> \r\n\r\n    <div formGroupName=\"subject\">\r\n        <label><input type=\"checkbox\" name=\"NodeJS\" formControlName=\"nodeJS\">NodeJS</label>\r\n        <label><input type=\"checkbox\" name=\"Angular\" formControlName=\"angular\">Angular</label>\r\n        <label><input type=\"checkbox\" name=\"ReactJS\" formControlName=\"reactJS\">ReactJS</label>\r\n    </div>\r\n    <br> <br> \r\n\r\n    <!-- Nếu xuất ra invalid=true thì sẽ ẩn btn đi. invalid phụ thuộc vào các validate bên formSignUp của comp-->\r\n    <button [disabled]=\"formSignUp.invalid\">Submit</button>\r\n</form>\r\n\r\n<!-- in lỗi ra. Các object controls, email, errors: đều do tìm thấy khi F12 -->\r\n<code>{{ formSignUp.controls.email.errors | json }}</code>"

/***/ }),

/***/ "./src/app/folder-components/sign-up3/sign-up3.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/folder-components/sign-up3/sign-up3.component.ts ***!
  \******************************************************************/
/*! exports provided: SignUp3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp3Component", function() { return SignUp3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUp3Component = /** @class */ (function () {
    function SignUp3Component(fb) {
        this.fb = fb;
    }
    SignUp3Component.prototype.ngOnInit = function () {
        this.formSignUp = this.fb.group({
            /*ở đây sử dụng validator required: nếu lỗi required=true thì trả về invalid=true và valid=false, lúc đó bên html sẽ bị ẩn btn submit */
            //có thể .email(lỗi định dạng email), maxlenght, minlength... các loại validate xem trong https://angular.io/guide/reactive-forms 
            // email: ['', Validators.required],  
            // email: ['', Validators.email],  
            // email: ['', gmailValidator],  //TEST VỚI VALIDATOR TỰ VIẾT BÊN DƯỚI
            //TH sử dụng nhiều validator thì để trong []
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, gmailValidator]],
            password: '',
            subject: this.fb.group({
                nodeJS: false,
                angular: true,
                reactJS: false
            }),
        });
    };
    SignUp3Component.prototype.onSubmit = function () {
        console.log(this.formSignUp.value);
    };
    SignUp3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up3',
            template: __webpack_require__(/*! ./sign-up3.component.html */ "./src/app/folder-components/sign-up3/sign-up3.component.html"),
            styles: [__webpack_require__(/*! ./sign-up3.component.css */ "./src/app/folder-components/sign-up3/sign-up3.component.css")]
        })
        /*Reactive Forms: https://angular.io/guide/reactive-forms ---- Bài 56: Validate trong Reactive form
        
        Xem lại các bài 45 và 48:
        Vào bài  sign-in.component.html và sign-in2.component.html để xem vd về các dạng validate
        
        Xem bài 48: sign-in2.component.html: thì ta sẽ thấy có giải thích về lỗi required và touched khi kích vào ko nhập/nhập ko đúng r kích ra,
        sẽ thấy đã cấu hình trong file styles.css nên sẽ dùng chung cho mọi ô nhập khác có sử dụng required.
        
        */
        /*Để validate trong reactive form thì phải:
        -import Validators trong '@angular/forms' (nhớ chọn Validators có s)
        */
        // Bài này đang ở dạng FormBuilder, ta thêm validator cho nó bằng cách thêm vào chỗ khai báo các params
        ,
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SignUp3Component);
    return SignUp3Component;
}());

//vào đây để xem các dạng validator có sẵn: https://angular.io/guide/reactive-forms 
//Tự viết 1 validator: vd: email phải có chuỗi @gmail.com
/*Bản chất validator là viết 1 function thôi.
-truyền vào tham số: đại diện cho formControl hoặc formGroup, đặt tên gì cũng đc nhưng nên đặt đúng với ý nghĩa của nó.
nếu viết validator cho formControl thì đặt tên tham số truyền vào là formControl, ngược lại cho formGroup thì đặt formGroup

*/
function gmailValidator(formControl) {
    if (formControl.value.includes('@gmail.com')) {
        return null; //validator trả về null khi ko có lỗi gì 
    }
    //ngược lại sẽ trả về có lỗi. Trả về object{ chức lỗi hiện ra trong này }
    //tạo ra biến gmail gán cho nó gtri true, rồi return về biến gmail đó.
    return { gmail: true };
}


/***/ }),

/***/ "./src/app/folder-components/struct/struct.component.css":
/*!***************************************************************!*\
  !*** ./src/app/folder-components/struct/struct.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/struct/struct.component.html":
/*!****************************************************************!*\
  !*** ./src/app/folder-components/struct/struct.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>phần này là Comp struct</p>\r\n\r\n<!-- sử dụng ngIf-->\r\n\r\n<!-- *ngIf=true thì nó hiện thẻ p, false thì nó ẩn -->\r\n<!-- <p *ngIf=true>struct works!</p> -->\r\n\r\n<!-- ngIf bằng cách gọi đến biến isShow trong comp -->\r\n<!-- <p *ngIf=\"isShow\">struct works!</p> -->\r\n\r\n<!-- Sử dụng if và else: sử dụng cấu trúc <ng-container/> và <ng-template/>.\r\nNếu isShow=true thì hiện ra thẻ này, lúc này elseBlock=false và ngược lại.-->\r\n<ng-container *ngIf=\"isShow; else elseBlock\">\r\n  <p>Nếu isShow=true thì thỏa ngIf, lúc này elseBlock=false</p>\r\n</ng-container>\r\n\r\n<!-- Nếu elseBlock=true thì hiện thẻ này ra. Phải để trong ng-template mới sử dụng else đc.\r\nng-template: chỉ hiển thị khi sử dụng để so sánh điều kiện #elseBlock, còn khi dùng làm việc khác nó sẽ ko hiển thị lên-->\r\n<ng-template #elseBlock>\r\n  <p>Nếu elseBlock=true thì hiện thẻ này, chứng tỏ ngIf=false</p>\r\n</ng-template>\r\n\r\n<!-- click vào thì isShow sẽ đổi trạng thái true-false, làm cho <p/> ở trên sẽ ẩn hiện theo từng trạng thái -->\r\n<button (click)=\"isShow =! isShow\">Toggle</button>\r\n<br>\r\n\r\n<!-- nếu  isShow = true thì hiện lên 1 comp con khác.-->\r\n<p *ngIf=\"isShow\">\r\n  <app-book></app-book>\r\n</p>\r\n\r\n\r\n\r\n<!-- =================================================================== -->\r\n<!-- Dùng ngFor giống với foreach, subject cũng như item trong foreach -->\r\n<ul>\r\n  <li *ngFor=\"let subject of arrSubjects\">\r\n    <p>{{ 'Thanh phan: ' + subject }}</p>\r\n  </li>\r\n</ul>\r\n\r\n\r\n<!-- Dùng ngFor nâng cao: https://angular.io/guide/structural-directives -->\r\n<!-- Bình thường chưa sd các biến cục bộ của ngFor-->\r\n<p>Chỉ ngFor, chưa sd các biến cục bộ</p>\r\n<table class=\"table table-bordered table-hover\">\r\n  <thead>\r\n    <tr>\r\n      <th>Stt</th>\r\n      <th>Tên</th>\r\n      <th>Giá</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let product of products\">\r\n      <td>{{ product.id }}</td>\r\n      <td>{{ product.name }}</td>\r\n      <td>{{ product.price }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n\r\n<!-- Sử dụng các biến cục bộ của ngFor: https://angular.io/guide/structural-directives\r\n  \"index: chỉ số hiện tại (0 đến n-1)\r\n\tfirst: trả về true nếu là phần tử đầu tiên\r\n\tlast: trả về true nếu là phần tử cuối cùng\r\n\teven: trả về true nếu là phần tử chẵn\r\n  odd: trả về true nếu phần tử lẽ\r\n  \r\n  trackBy: function_ofComp\"\r\n\r\n\r\n  vd:<div *ngFor=\"let hero of heroes; let i=index; let odd=odd; trackBy: trackById\" [class.odd]=\"odd\"> //[class.odd] là property binding, ko liên quan, bỏ cũng đc.\r\n  \r\n  vd: firts của hàng k = false thì hàng k đó ko phải phần tử đầu\r\n      odd của hàng k = true thì hàng k là phần tử lẽ, là ở hàng index = 1 3 5...\r\n\r\n================================   \r\n\r\n**RIÊNG: DÙNG TRACKBY: Trong trường hợp ta lấy dl từ server về, để cho những hàng đã binding lên rồi thì ko binding lại, chỉ binding những hàng chưa có, hoặc những hàng\r\nđược cập nhật thôi, như v sẽ làm cho hiệu suất tốt hơn.\r\n\r\n-tại trong ngFor trong html chỉ cần chèn:       trackBy: myTrackByFunction       như chèn các biến cục bộ thông thường. \r\n\r\n-trong đó myTrackByFunction là hàm được viết trong comp với 2 params cứng là index, item:\r\n\r\nHàm nàytrả về 1 thành phần phân biệt nào đó trong item (phải là thành phần phân biệt để dựa vào đó mà phân biệt với các item khác,\r\n  để biết item nào đã binding vào rồi thì sẽ ko binding nữa, vd như id,ma,...)\r\n\r\n  myTrackByFunction(index, item){\r\n    return item.id;\r\n  }\r\n\r\n=>Vậy chỉ cần thêm trong html và comp vài dòng như trên ta đã có thể dùng trackBy để tăng performance cho page mỗi lần binding với ngFor.\r\n\r\nMỗi lần bấm btn UpdateTable thì nó lại gọi hàm onLoadData() bên comp để cập nhật mảng dl (giả sử là mới lấy từ server về cập nhật lại), để binding lại sang html.\r\n\r\n\r\n**CHÚ Ý: \r\n-Để biết xem làm các phần tử có binding lại hay ko? Ta vào F12, kích đến vị trí dùng ngFor.\r\nKhi bấm btn UpdateTable mà các phần tử đã tồn tại ko nhấp nháy, có nghĩa là nó ko bị binding lại, lúc đấy chỉ có các phần tử vừa add vào mới nhấp nháy thôi.\r\nKhi bấm btn UpdateTable mà nếu tất cả phần tử bao gồm mới cũ đều nhấp nháy, có nghĩa là nó đã binding lại từ đầu, lúc này cần xem lại trackBy. \r\n\r\n-Ở đây phần tử cuối cùng dù đã tồn tại, nhưng mỗi khi btn UpdateTable thì nó lại nhấp nháy, vì nó cập nhật lại background-color, vì ban đầu nó ở dưới cùng màu beige,\r\nnhưng sau khi bấm btn UpdateTable thì nó ko phải phần tử dưới cùng nữa nên background-color sẽ bị thay đổi, nên sẽ nhấp nháy phần background-color thôi chứ ko nháy toàn bộ item đó.\r\n-->\r\n\r\n<br>\r\n<br>\r\n<p>ngFor có sử dụng các biến cục bộ</p>\r\n<table class=\"table table-bordered table-hover\">\r\n  <thead>\r\n    <tr>\r\n      <th>Stt</th>\r\n      <th>Tên</th>\r\n      <th>Giá</th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <tr *ngFor=\"let product of products; \r\n        let i=index;\r\n        let f=first; \r\n        let l=last;\r\n        let e=even;\r\n        let o=odd; \r\n\r\n        trackBy: myTrackByFunction\r\n        \" \r\n\r\n        [style.background-color]=\"f === true ? 'gray' : (l === true ? 'beige' : (e === true ? 'purple' : 'cyan') )\">\r\n      \r\n      <!--<td>{{ product.id }}</td> thay vì lấy id trong comp thì lấy index của mảng 0->n-1-->\r\n      <td>{{ i + 1 }}</td>\r\n      <td>{{ product.name }}</td>\r\n      <td>{{ product.price }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<button type=\"button\" class=\"btn btn-success\" (click)=\"onLoadData();\">UpdateTable</button>\r\n\r\n<br>\r\n<br>\r\n\r\n\r\n\r\n\r\n\r\n<p>---------ngSwich------------------------</p>\r\n\r\n<!-- Gắn ngSwitch bằng biến action trong comp \r\nNếu action=like thì hiện div LIKE, nếu action=love thì hiện div LOVE.\r\nNếu action='' thì hiện div DEFAULT. (bằng bất cứ gì khác những ngSwitchCase đã cho thì đều trả về default)-->\r\n<button (click)=\"useActionSwitch();\">Use Action</button> \r\n\r\n<div [ngSwitch]=\"action\"> \r\n  <div *ngSwitchCase=\"'like'\">LIKE</div>\r\n  <div *ngSwitchCase=\"'love'\">LOVE</div>\r\n  <div *ngSwitchDefault>DEFAULT</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/folder-components/struct/struct.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/folder-components/struct/struct.component.ts ***!
  \**************************************************************/
/*! exports provided: StructComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructComponent", function() { return StructComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Dùng lệnh ng g c struct để tạo component struct có đầy đủ 4 file.
var StructComponent = /** @class */ (function () {
    function StructComponent() {
        //tạo biến để sd ngIf
        this.isShow = true;
        //tạo mảng để sử dụng ngFor
        //public arrSubjects: string[] = ['Angular', 'Nodejs', 'Reactjs'];
        this.arrSubjects = ['Angular', 'Nodejs'];
        /*TRACKBY TRONG NGFOR:
        Ban đầu binding mảng products, lúc sau cập nhật binding mảng productsFromServers lên.
        Nhờ vào trackBy nên chỉ binding những phần tử mới, còn 3 phần tử đầu vì đã tồn tại (vì binding products lên trước) nên sẽ ko binding lại => Hiệu suất tốt hơn.
        */
        this.products = [
            {
                id: 1,
                name: 'Iphone 6 plus',
                price: 1000
                // image : 'https://cdn.fptshop.com.vn/Uploads/Originals/2016/1/4/635874987873313312_iphone-6-silver-5.jpg'
            },
            {
                id: 2,
                name: 'Galaxy s6',
                price: 2000
            }
        ];
        this.productsFromServers = [
            {
                id: 1,
                name: 'Iphone 6 plus',
                price: 1000
                // image : 'https://cdn.fptshop.com.vn/Uploads/Originals/2016/1/4/635874987873313312_iphone-6-silver-5.jpg'
            },
            {
                id: 2,
                name: 'Galaxy s6',
                price: 2000
            },
            {
                id: 3,
                name: 'Galaxy s7',
                price: 3000
            },
            {
                id: 4,
                name: 'note 7',
                price: 4000
            },
            {
                id: 5,
                name: 'oppo neo 7',
                price: 5000
            }
        ];
        //tạo biến action cho ngSwitch
        this.action = ''; //có string hay ko đều được
    }
    //tạo function để sd trackBy trong ngFor, qua html xem.
    StructComponent.prototype.myTrackByFunction = function (index, item) {
        return item.id;
    };
    StructComponent.prototype.onLoadData = function () {
        this.products = this.productsFromServers;
    };
    StructComponent.prototype.ngOnInit = function () {
    };
    //ES6 so sánh phải === nghĩa là bằng 1 cách nhất quán, bằng kể cả kdl.
    StructComponent.prototype.useActionSwitch = function () {
        return this.action = this.action === '' ? 'like' : (this.action === 'like' ? 'love' : '');
    };
    StructComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-struct',
            template: __webpack_require__(/*! ./struct.component.html */ "./src/app/folder-components/struct/struct.component.html"),
            styles: [__webpack_require__(/*! ./struct.component.css */ "./src/app/folder-components/struct/struct.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StructComponent);
    return StructComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/user-form/user-form.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/folder-components/user-form/user-form.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 20px;\r\n    background-color: blue;\r\n}\r\n\r\n.square {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 0px;\r\n    background-color: blue;\r\n}"

/***/ }),

/***/ "./src/app/folder-components/user-form/user-form.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/folder-components/user-form/user-form.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Cách 4.1: two-way data binding: [(ng-model)] = \"property\" : tương tác 2 chiều.-->\r\n\r\n<!--keyup: khi nhấn 1 phím nào đó, vừa nhấc tay lên thì nó sẽ thực hiện sự kiện showEvent đc gọi, truyền dl vào hàm đó để set thêm cho name,.\r\nLúc này sẽ truyền dữ liệu vào name thông qua hàm showEvent. Gọi thuộc tính name ở của component ra trong thẻ <h3>.\r\n\r\nplaceholder: là ô textbox để nhập.\r\n\r\nBiến $even: biến chứa thông tin những cái event mình vừa thực hiện, nó có rất nhiều thuộc tính.\r\nNếu chỉ xuất ra $event thì console.log($event) ra sẽ có rất nhiều thuộc tính, kích vào mục target sẽ có value là giá trị nối, nên sẽ gọi đến value. \r\n-->\r\n<input placeholder=\"Enter username\" (keyup)=\"showEvent($event)\">\r\n<h3>Your name is: {{ name }}</h3>\r\n\r\n\r\n<!-- Cách 4.2: cũng với two-way binding: dùng thuộc tính directive: https://angular.io/guide/architecture-components#data-binding\r\nTrong link có dòng: <input [(ngModel)]=\"hero.name\">, giống với cấu trúc [(ng-model)] = \"property\" của cách 4.1.\r\n\r\n-[(ngModel)]=\"name2\": giúp gắn thuộc tính name2 của .ts vào ngModel, giúp name2 nhận đc sự thay đổi từ ngModel.\r\nLúc này bên ts chỉ cần khai báo name2='' là đủ, ko cần phải tạo hàm. Việc gán các thay đổi cho name2 đã có \r\nngModel làm bên file html.\r\n++-->\r\n<!-- Sử dụng kèm theo Template reference variables: https://angular.io/guide/template-syntax \r\n\r\n-các Template reference variables: có thể tham chiếu đến các thể DOM element, hoặc tham chiếu tới component \r\nhoặc Directive vừa học ở bài 12.\r\n-các Template reference variables: bắt đầu bằng dấu #\r\n\r\nvd: <input #phone placeholder=\"phone number\">\r\n\r\n-Ở bài này #txtUsername tham chiếu đến input (cũng giống với ngModel), nhận các thay đổi từ Input.\r\nlúc gọi ra #txtUsername.value và theo định dạng json nên bọc ngoài sẽ có dấu \"\"\r\n-->\r\n<input placeholder=\"Enter username2\" [(ngModel)]=\"name2\" #txtUsername>\r\n<h3>Your name is: {{ name2 }}</h3>\r\n<code>{{ txtUsername.value | json }}</code>     \r\n\r\n<!--hoặc sd temp #txtUsername để lấy giá trị input và truyền như param vào 1 hàm nào đó cho comp.-->\r\n<br><br>\r\n<button (click)=\"onGetUser(txtUsername.value);\">Get User</button>\t\r\n<p>giá trị lấy từ temp #txtUsername là: {{ username }}</p>\r\n\r\n<!-- Style binding : dùng để binding các tính chất thuộc về style như color, size...-->\r\n<br>\r\n<input placeholder=\"Enter username3\" [(ngModel)]=\"name3\">\r\n\r\n<!--TH gán cứng màu, ko linh động được -->\r\n<!-- <h3 style=\"color: red\">Your name is: {{ name3 }}</h3>-->\r\n\r\n<!-- Trường hợp gọi thuộc tính color của style, chỉ định màu là \" 'red' \", nếu ko có dấu '' thì nó lại hiểu là biến red trong comp chứ ko phải red là chuỗi màu red đỏ. -->\r\n<!-- <h3 [style.color]=\"name3.length % 2 === 0 ? 'red' : 'black'\">Your name is: {{ name3 }}</h3> -->\r\n\r\n<!-- Trường hợp ko gán cứng, ta gọi đến biến style trong comp -->\r\n<!-- +Cách ko sử dụng Directive ngStyle -->\r\n<!-- <h3 [style.color]=\"isHighLight ? 'red' : 'black'\"   [style.fontSize]=\"isHighLight ? '40px' : '20px'\">Your name is: {{ name3 }}</h3> -->\r\n\r\n<!-- +Cách CÓ sử dụng Directive ngStyle : dùng để gọi các tính chất thuộc về style như color, size...\r\nSử dụng ngStyle: dùng để thêm hoặc xóa nhiều CSS style cùng 1 lúc, các css style như color, fontSize...-->\r\n<!-- <h3 [ngStyle]=\"{ color: 'blue', fontSize: '30px'}\">Your name is: {{ name3 }}</h3> -->\r\n<h3 [ngStyle]=\"name3.length % 2 === 0 ? evenStyle : oddStyle\">Your name is: {{ name3 }}</h3> <!--evenStyle và oddStyle là các biến trong comp, nó nằm trong dấu \"\" -->\r\n\r\n\r\n\r\n\r\n<!-- Tại file html cần phân biệt:\r\n    +Trong trường hợp gọi [class]: thì \"A\" là gọi tới biến A trong comp, \"'A'\" là chuỗi A của html sử dụng tính chất của chuỗi A đó.\r\n    +còn gọi class CSS thì phải 'classCSS'. \r\n-->\r\n\r\n<!-- ======================== -->\r\n<!-- Class binding : dùng để gọi các class bên css hoặc js-->\r\n\r\n<!-- TH gán cứng: \"square\" gọi đến class square trong file css, vì dấu \"\" -->\r\n<!-- <div class=\"square\"></div> -->\r\n\r\n<!-- TH gán linh động-->\r\n<div [class] = \"isHighLight ? 'circle' : 'square'\"></div> <!--isHighLight=true thì gọi class circle trong css, hiện hình tròn. biến isHighLight bên comp là true.-->\r\n<div [class.circle] = !isHighLight  [class.square] = isHighLight></div> <!-- Nếu isHighLight=true thì ở trên hiện tròn, ở dưới square=true nên hiện vuông\r\n                                                                            nếu isHighLight=false thì trên vuông, dưới sẽ circle=!false=true nên hiện tròn.-->\r\n\r\n<!-- Sử dụng ngClass: dùng để thêm hoặc xóa nhiều CSS class cùng 1 lúc-->\r\n\r\n<!-- gọi đến class circle trong css .\r\nCú pháp: \r\n[ngClass]=\"{ 'classCSS': bienBool }\" : nếu bienBool (thường thì gán trực tiếp là true/false hoặc lấy bên comp qua) trả về true thì cho classCSS này hiển thị(thêm class vào),\r\nngược lại sẽ ẩn classCSS đó đi (xóa đi).-->\r\n<!-- <div [ngClass]=\"{ 'circle': true }\"></div> -->\r\n\r\n<!-- gọi đến biến current trong comp.ts-->\r\n<div [ngClass]=\"current\"></div> "

/***/ }),

/***/ "./src/app/folder-components/user-form/user-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/folder-components/user-form/user-form.component.ts ***!
  \********************************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserFormComponent = /** @class */ (function () {
    function UserFormComponent() {
        this.name = ''; //khai báo biến name rỗng
        this.name2 = ''; //two-way binding, dùng cho cách 4 sử dụng ngModel.
        this.name3 = '';
        this.isHighLight = true;
        this.evenStyle = { color: 'red', fontSize: '40px' }; //chẵn (số lượng chữ nhập vào là chẵn)
        this.oddStyle = { color: 'black', fontSize: '20px' }; //lẽ
        this.current = { circle: !this.isHighLight, square: this.isHighLight };
        //hàm dùng cho template variable, nhận tham số truyền vào từ temp #txtUserName
        this.username = '';
    }
    UserFormComponent.prototype.ngOnInit = function () {
    };
    UserFormComponent.prototype.showEvent = function (event) {
        // Nếu chỉ xuất ra $event thì console.log($event) ra sẽ có rất nhiều thuộc tính, kích vào mục target sẽ có thuộc tính value là giá trị nối cuối cùng nhận đc, 
        //  nên sẽ gọi đến value để lấy value gán cho name. 
        // Khi đó sau mỗi lần nhập 1 ký tự thì name lại đc gán lại bởi 1 value dài hơn. 
        // console.log(event);
        this.name = event.target.value;
    };
    UserFormComponent.prototype.onGetUser = function (username) {
        //  console.log(username);
        this.username = username;
    };
    UserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/folder-components/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.css */ "./src/app/folder-components/user-form/user-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/user-list/user-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/folder-components/user-list/user-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/user-list/user-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/folder-components/user-list/user-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-success\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">user-list comp: nhận user array gửi về từ parent2 comp</h3>\n  </div>\n  <div class=\"panel-body\">\n\n    <p>name và phone gửi từ output của child2 qua parent2, rồi từ parent2 truyền qua input của user-list này.</p>\n    <p>name: {{ fullname }}</p>\n    <p>phone: {{ phone }}</p>\n\n    <table class=\"table table-bordered table-hover\">\n      <thead>\n        <tr>\n          <th>ID</th>\n          <th>Họ tên</th>\n          <th>SĐT</th>\n        </tr>\n      </thead>\n      <tbody>\n        <!-- thẻ tr là 1 hàng của bảng. Mỗi vòng for là 1 hàng -->\n        <tr *ngFor=\"let user of users\">\n          <td>{{ user.id }}</td>\n          <td>{{ user.name }}</td>\n          <td>{{ user.phone }}</td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/folder-components/user-list/user-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/folder-components/user-list/user-list.component.ts ***!
  \********************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserListComponent = /** @class */ (function () {
    function UserListComponent() {
        //biến input users nhận mảng users gửi qua từ parent2 component
        this.users = [];
    }
    UserListComponent.prototype.ngOnInit = function () {
        //hàm này chạy ngay sau constructor, muốn log dòng này thì ban đầu phải khởi tạo giá trị ở bên parent2
        // console.log(this.fullname, this.phone);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UserListComponent.prototype, "users", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserListComponent.prototype, "fullname", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UserListComponent.prototype, "phone", void 0);
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/folder-components/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/folder-components/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/weather/weather.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/folder-components/weather/weather.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder-components/weather/weather.component.html":
/*!******************************************************************!*\
  !*** ./src/app/folder-components/weather/weather.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- nếu = rỗng thì hiện yêu cầu nhập. Nếu nhập cityName rồi thì hiện ra tên city đó + nhiệt độ -->\r\n<!-- <h3>{{ cityName === '' ? 'Enter your city name' : (cityName + ' is now ' + temp) }}</h3> -->\r\n<h3>{{ getMessage() }}</h3>\r\n\r\n<!-- ngModel sẽ gắn với biến txtCityName trong comp. Nó lấy giá trị nhập vào trong ô này gắn vào txtCityName-->\r\n<input placeholder=\"Enter your city name\" [(ngModel)]=\"txtCityName\">\r\n\r\n<br>\r\n<!-- sự kiện click sẽ gọi đến hàm getWeather(); -->\r\n<button (click)=\"getWeather();\">Get weather</button>"

/***/ }),

/***/ "./src/app/folder-components/weather/weather.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/folder-components/weather/weather.component.ts ***!
  \****************************************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _folder_services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../folder-services/weather.service */ "./src/app/folder-services/weather.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import để sử dụng service trong weather.service.ts: Xem ip2.component.ts có giải thích rõ
//import ở đây vào gọi ra trong providers[]

var WeatherComponent = /** @class */ (function () {
    //khởi tạo ngầm object của service cần gọi
    //Cơ chế Dependence Injection sẽ Inject service vào constructor, mà ko cần phải khởi tạo đối tượng.
    function WeatherComponent(weatherService) {
        this.weatherService = weatherService;
        this.txtCityName = ''; // bên html dùng ngModel để gắn với biến này. Nhập vào là nó tự nhận dl.
        this.cityName = ''; // biến thành phố hiển thị ra = tên tp tìm kiếm
        this.temp = null; //nhiệt độ, lúc đầu chưa có nhiệt độ nên cho null
        this.isLoading = false; //thuộc tính hiển thị đang loading..., mới đầu chưa load gì cả nên false.
    }
    //test thử service get weather
    // ngOnInit() {
    //   this.weatherService.getTemp('Tokyo') //gọi hàm getTemp của service, truyền tham số vào.
    //   .then(temp => console.log(temp))
    //   .catch(err => console.log(err));
    // }
    WeatherComponent.prototype.ngOnInit = function () {
    };
    WeatherComponent.prototype.getWeather = function () {
        var _this = this;
        //khi vừa bắt đầu get thì cho hiện trạng thái loading... lên.
        this.isLoading = true;
        this.weatherService.getTemp(this.txtCityName) //gọi hàm getTemp của service, truyền tham số vào.
            .then(function (temp) {
            _this.cityName = _this.txtCityName; //gán lại tên thành phố hiển thị ra = tên tp tìm kiếm
            _this.temp = temp; //gán biến nhiệt độ = nhiệt độ tìm đc
            //khi lấy dữ liệu xong r, bỏ hiển thị trạng thái loading...; và gán lại ô nhập thành rỗng.
            _this.isLoading = false;
            _this.txtCityName = ''; //gán rỗng lại cho ô nhập thành phố vào
        })
            .catch(function (err) {
            alert('Cannot find your city!'); //hiển thị thông báo lỗi, nhấn ok
            _this.isLoading = false; //sau khi nhấn ok thì bỏ tráng thái đang loading...
            _this.cityName = ''; //gán lại = rỗng, để chỗ hiển thị thành phố lại hiện "Enter your city name"
            _this.txtCityName = ''; //gán rỗng lại cho ô nhập thành phố vào
        });
    };
    //getmessage() hàm show dữ liệu ra cho người dùng. Thay vì viết trong html dài dòng thì ta viết ở đây r gọi qua html.
    //nếu đang lấy dl thì hiển thị loading...
    WeatherComponent.prototype.getMessage = function () {
        if (this.isLoading) {
            return 'Loading...';
        }
        return this.cityName === '' ? 'Enter your city name' : (this.cityName + ' is now ' + this.temp);
    };
    WeatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weather',
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/folder-components/weather/weather.component.html"),
            styles: [__webpack_require__(/*! ./weather.component.css */ "./src/app/folder-components/weather/weather.component.css")],
            //gọi service vào comp
            //nếu import và gọi service trong comp này thì chỉ mỗi comp này đc sd service, comp khác muốn sd phải import service lại như v.
            //Nếu import và gọi service trong app.module.ts, thì service sẽ được dùng cho mọi comp. 
            providers: [_folder_services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]]
        }),
        __metadata("design:paramtypes", [_folder_services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/word/word.component.css":
/*!***********************************************************!*\
  !*** ./src/app/folder-components/word/word.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    color:cyan;\r\n    font-size: 30px;\r\n}\r\n\r\nh3 {\r\n    color: blue;\r\n    font-size: 20px;\r\n}\r\n\r\np {\r\n    color: teal;\r\n    font-size: 20px;\r\n}"

/***/ }),

/***/ "./src/app/folder-components/word/word.component.html":
/*!************************************************************!*\
  !*** ./src/app/folder-components/word/word.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{ en }}</h3>\r\n<p>{{ vn }}</p>\r\n\r\n<!-- Các cách gán dữ liệu từ ts sang html: Data Binding -->\r\n\r\n<!-- Cách 1 -->\r\n<!--<img src=\"{{ imageUrl }}\" alt=\"\"> -->\r\n\r\n<!-- Cách 2: [property] = \"value\"\r\nNếu ko có [] thì nó hiểu \"imageUrl: là 1 cái link hình ảnh\"\r\nCòn nếu có [] thì nó hiểu \"imageUrl\" là 1 biến trong component -->\r\n<img [src]=\"imageUrl\" alt=\"\">\r\n\r\n<!--Cách 2: Thẻ hidden trong html default=true, nghĩa là đang ẩn. \r\nỞ đây hidden=forgot=false nên sẽ Ko bị ẩn và sẽ hiện lên dòng của biến en-->\r\n<h2 [hidden]=\"forgot\">{{ en }}</h2> \r\n\r\n\r\n<!-- Cách 3: (event) = \"handler\": DOM tương tác ngược lại Component thông qua các event.\r\nButton này sẽ chuyển đổi trạng thái của biến forgot luân phiên true/false.\r\n\r\nKhi bấm button này nó sẽ gửi yêu cầu đổi giá trị của forgot xuống component hoặc cách khác là gọi đến hàm toggleForgot() của component,\r\ncomp đổi value of forgot thì dẫn đến Dòng dòng Hello ở dưới bị ẩn hiện theo-->\r\n<!-- <button (click)=\"forgot= !forgot \">Toggle forgot</button> -->\r\n<button (click)=\"toggleForgot()\">Toggle forgot</button>\r\n\r\n\r\n<!-- Cách 4: two-way data binding: [(ng-model)] = \"property\" : tương tác 2 chiều.\r\n    QUA html của USER FORM xem, phần này đc làm riêng. -->\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/folder-components/word/word.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/folder-components/word/word.component.ts ***!
  \**********************************************************/
/*! exports provided: WorldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldComponent", function() { return WorldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WorldComponent = /** @class */ (function () {
    function WorldComponent() {
        this.en = 'Hello'; //tạo biến, bên html gọi bằng cách {{en}}
        this.vn = 'Xin chào'; //type script tự hiểu kdl, có string hay ko đều đc.
        this.imageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'; //tạo biến imageUrl
        this.forgot = false; //tạo biến forgot
    }
    //tạo function để gọi khi có event yêu cầu
    WorldComponent.prototype.toggleForgot = function () {
        this.forgot = !this.forgot;
    };
    WorldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./word.component.html */ "./src/app/folder-components/word/word.component.html"),
            selector: 'app-world',
            styles: [__webpack_require__(/*! ./word.component.css */ "./src/app/folder-components/word/word.component.css")],
        })
    ], WorldComponent);
    return WorldComponent;
}());



/***/ }),

/***/ "./src/app/folder-components/words/words.component.css":
/*!*************************************************************!*\
  !*** ./src/app/folder-components/words/words.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".word {\r\n    background-color:paleturquoise;\r\n    padding: 5px;\r\n    margin: 5px;\r\n    width: 150px;\r\n}"

/***/ }),

/***/ "./src/app/folder-components/words/words.component.html":
/*!**************************************************************!*\
  !*** ./src/app/folder-components/words/words.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- *ngIf giúp ẩn hiện thẻ, Ở đây là nếu isShowForm=true thì mới hiện thẻ lên.-->\r\n<div *ngIf=\"isShowForm\">\r\n  <!--sử dụng [(ngModel)] để gắn dữ liệu cho các biến ở newEn,Vn trong comp, mỗi lần nhập vào nó tự gắn dl. -->\r\n  <input placeholder=\"English\" [(ngModel)]=\"newEn\" />\r\n  <br>\r\n  <input placeholder=\"VietNamese\" [(ngModel)]=\"newVn\" />\r\n  <br>\r\n  <!-- sự kiện click, khi click sẽ gọi đến hàm addWord() của comp để thêm phần tử.\r\n  Sau khi thêm thì ẩn form đi bằng cách set lại isShowForm=false -->\r\n  <button (click)=\"addWord(); isShowForm=false\">Thêm từ mới</button>\r\n</div>\r\n\r\n<!-- button show form ra, show ra rồi thì ẩn đi. Sự kiện click set lại isShowForm=true. Ban đầu bên com nó = false. -->\r\n<!-- *ngIf giúp ẩn hiện thẻ, Ở đây là nếu isShowForm=false thì mới hiện thẻ lên, =true nghĩa là hiện form rồi thì ẩn thẻ này xuống -->\r\n<button (click)=\"isShowForm=true\" *ngIf=\"!isShowForm\">Thêm từ mới</button>\r\n\r\n<br><br>\r\n\r\n<!-- Bài 22: Lọc mảng hiển thị. \r\nDùng thẻ select để xác định 1 danh sách có thể chọn giống combobox. Thẻ option xác định một tùy chọn trong danh sách drop-down.\r\n\r\nSử dụng [(ngModel)] gắn với biến filterStatus trong comp, value trong thẻ option có giá trị = filterStatus sẽ đc chọn ra trong khung danh sách.\r\nKhi chọn 1 option thì value của nó sẽ đc gắn vào ngModel và sẽ gắn vào filterStatus, nhờ vậy ta dùng filterStatus để ngIf lấy ra các giá trị tương ứng ở bên dưới. \r\nvd: xổ ra rồi chọn mục Xem tất cả thì filterStatus=ngModel=valueOption=XEM_TAT_CA\r\n\r\n-Những phần tử nào đc xuất hiện sẽ code trong phần *ngIf bên dưới. Nhắc lại thẻ chứa *ngIf chỉ hiển thị <=> *ngIf=true.\r\n-Duyệt mỗi thẻ div trong *ngFor, thẻ div đó có showed hay ko tùy thuộc vào *ngIf của nó có = true hay ko:\r\nNếu filterStatus==='XEM_TAT_CA' (nghĩa là chọn Xem tất cả): ko có điều kiện gì thêm cả, mọi thẻ trong div trong *ngFor đều đc hiển thị.\r\nNếu (filterStatus==='XEM_DA_NHO' && word.memorized): để đk ()=true thì filterStatus=XEM_DA_NHO và word.memorized=true. \r\n  Lúc này những thẻ div có word.memorized=false sẽ làm cho ()=false, nên những thẻ div đó sẽ ko đc hiển thị ra.\r\nNếu (filterStatus==='XEM_CHUA_NHO' && !word.memorized): để đk ()=true thì filterStatus=XEM_CHUA_NHO và word.memorized=false. \r\n  Lúc này những thẻ div có word.memorized=true sẽ làm cho ()=false, nên những thẻ div đó sẽ ko đc hiển thị ra.\r\n\r\n\r\n**Cách 2: Viết function cho việc show từ nào đó lên hay ko, function ở trong file ts.\r\n\r\n-->\r\n<select [(ngModel)]=\"filterStatus\">\r\n  <option value=\"XEM_TAT_CA\">Xem tất cả</option>\r\n  <option value=\"XEM_DA_NHO\">Xem từ đã nhớ</option>\r\n  <option value=\"XEM_CHUA_NHO\">Xem từ chưa nhớ</option>\r\n</select>\r\n\r\n<div *ngFor=\"let word of arrWords\" >\r\n  <!-- dùng class=word trong css để bọc mỗi phần tử lại-->  \r\n  <!-- <div class=\"word\" *ngIf=\"filterStatus==='XEM_TAT_CA' || (filterStatus==='XEM_DA_NHO' && word.memorized) || (filterStatus==='XEM_CHUA_NHO' && !word.memorized)\"> -->\r\n\r\n  <!-- Cách 2: gọi function xét điều kiện lọc từ comp, truyền vào memorized của từng word đc duyệt trong *ngFor,\r\n  function getShowStatus() sẽ return về true/false, nếu true thì div của phần tử này sẽ đc hiển thị -->\r\n  <div class=\"word\" *ngIf=\"getShowStatus(word.memorized);\">\r\n    <!-- Toán tử 3 ngôi, nếu thuộc tính memorized của word = true, thì có nghĩa đã học rồi, màu xanh -->\r\n    <h4 [ngStyle]=\"{color: word.memorized ? 'green' : 'red'}\">\r\n      {{ word.en }}\r\n    </h4>\r\n    <p>{{ word.vn }}</p>\r\n  \r\n    <!-- Gọi đến hàm removeWord trong comp -->\r\n    <button (click)=\"removeWord(word.id);\">xóa</button>\r\n\r\n    <!-- Thay đổi trạng thái đã thuộc / chưa thuộc:\r\n     Mỗi sự kiện click sẽ khiến memorized đổi thành true/false. \r\n    Nếu memorized=true nghĩa đã thuộc, vậy sẽ hiện lên button chưa thuộc để đổi trạng thái. Và ngược lại...-->\r\n    <button (click)=\"word.memorized = !word.memorized\">{{ word.memorized ? 'Chưa thuộc' : 'Đã thuộc' }}</button>  \r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/folder-components/words/words.component.ts":
/*!************************************************************!*\
  !*** ./src/app/folder-components/words/words.component.ts ***!
  \************************************************************/
/*! exports provided: WordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsComponent", function() { return WordsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WordsComponent = /** @class */ (function () {
    function WordsComponent() {
        //tạo ra các biến rỗng, để bên html sử dụng [(ngModel)] để gắn dữ liệu cho các biến này, mỗi lần nhập vào nó tự gắn dl.
        this.newEn = '';
        this.newVn = '';
        this.filterStatus = 'XEM_TAT_CA';
        this.isShowForm = false;
        //thêm mảng object để dùng ngFor
        //dữ liệu lấy từ: https://github.com/vanpho93/learn-angular/blob/master/snippet.txt
        this.arrWords = [
            { id: 1, en: "action", vn: "hành động", memorized: true },
            { id: 2, en: "actor", vn: "diễn viên", memorized: false },
            { id: 3, en: "activity", vn: "hoạt động", memorized: true },
            { id: 4, en: "active", vn: "chủ động", memorized: true },
            { id: 5, en: "bath", vn: "tắm", memorized: false },
            { id: 6, en: "bedroom", vn: "phòng ngủ", memorized: true }
        ];
    }
    WordsComponent.prototype.ngOnInit = function () { };
    //hàm thêm phần tử vào mảng.
    //nếu muốn thêm vào cuối thì .push, còn muốn thêm vào đầu thì .unshift
    WordsComponent.prototype.addWord = function () {
        this.arrWords.unshift({
            id: this.arrWords.length + 1,
            en: this.newEn,
            vn: this.newVn,
            memorized: false
        });
        //sau khi add vào thì xóa tráng lại các ô. Vì newEn đc gắn với [(ngModel)], nên dl 2 cái sẽ ăn theo với nhau. 
        //lúc này chỉ cần ta cho newEn, newVn về lại rỗng thì lập tức [(ngModel)] cũng thành rỗng và ô nhập vào sẽ bị rỗng theo.
        this.newEn = '';
        this.newVn = '';
        // Sau khi thêm thì ẩn form đi bằng cách set lại isShowForm=false. Cmt lại vì để ở đây cũng đc, để qua bên button của html cũng đc.
        //this.isShowForm=false; //qua button thêm của html để set lại giá trị isShowForm cũng đc.
    };
    //hàm xóa phần tử, nhận id từ html truyền vào.
    //Từ id, tìm index của phần tử đó, rồi xóa theo index.
    //Dùng hàm splice(startnumber, countnumber): TRong mảng xóa bắt đầu từ phần tử bao nhiêu và xóa đi bao nhiêu phần tử.
    // ở đây bắt đầu từ vị trí index, và xóa 1 phần tử.
    WordsComponent.prototype.removeWord = function (id) {
        var index = this.arrWords.findIndex(function (word) { return word.id === id; });
        this.arrWords.splice(index, 1);
    };
    /*Viết hàm lọc danh sách.
    */
    WordsComponent.prototype.getShowStatus = function (memorized) {
        var dkXemTatCa = this.filterStatus === 'XEM_TAT_CA'; //3 cái đều trả về true/false
        var dkXemDaNho = this.filterStatus === 'XEM_DA_NHO' && memorized; //memorized nghĩa là memorized===true 
        var dkXemChuaNho = this.filterStatus === 'XEM_CHUA_NHO' && !memorized;
        return dkXemTatCa || dkXemDaNho || dkXemChuaNho; //viết tắt của return dkXemTatCa nếu dkXemTatCa===true,...    
    };
    WordsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-words",
            template: __webpack_require__(/*! ./words.component.html */ "./src/app/folder-components/words/words.component.html"),
            styles: [__webpack_require__(/*! ./words.component.css */ "./src/app/folder-components/words/words.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WordsComponent);
    return WordsComponent;
}());



/***/ }),

/***/ "./src/app/folder-models/movie.ts":
/*!****************************************!*\
  !*** ./src/app/folder-models/movie.ts ***!
  \****************************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie(id, name, link, author) {
        this.id = id;
        this.name = name;
        this.link = link;
        this.author = author;
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/folder-models/rest-todo.class.ts":
/*!**************************************************!*\
  !*** ./src/app/folder-models/rest-todo.class.ts ***!
  \**************************************************/
/*! exports provided: RestTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestTodo", function() { return RestTodo; });
var RestTodo = /** @class */ (function () {
    //Vì id trong api sẽ tự động tăng, nên ta ko cần quan tâm.
    //Xem cách tạo api giả lập trên mockapi.io tại: https://www.youtube.com/watch?v=puaaPncTAoQ&list=PLJ5qtRQovuEOoKffoCBzTfvzMTTORnoyp
    //(trên mockapi.io đăng nhập với tientm96@gmail.com, thấy id đc tạo kiểu Object ID là kiểu tự động tăng, nên ở đây chỉ cần truyền vào 2 cái còn lại là đủ.)
    // constructor(id: number, title : string, completed : boolean){
    function RestTodo(title, completed) {
        this.title = title;
        this.completed = completed;
    }
    return RestTodo;
}());



/***/ }),

/***/ "./src/app/folder-pipes/capitalize.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/folder-pipes/capitalize.pipe.ts ***!
  \*************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*PIPE: sắp xếp array string (chuỗi): định dạng viết hoa các ký tự đầu của từ, KỂ CẢ ký tự có dấu như Đ, Ô, Â...
(pipe titlecase có sẵn: viết hoa ký tự đầu của chữ, nhưng nó KHÔNG định dạng đc các ký tự có dấu như Đ, Ô, Â...)
*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    /*Cắt từ: dùng hàm split() giúp cắt chuỗi dựa vào ký tự nào đó, ở đây cắt từ nên cắt dựa vào khoảng trắng ' '.
      cắt xong sẽ trả về mảng chứa các từ của chuỗi.
  
    */
    CapitalizePipe.prototype.transform = function (value, args) {
        var arrStr = value.split(' '); //hàm split() cắt chuỗi dựa vào ký tự nào đó, ở đây là space ' '
        var result = '';
        /*Để viết hoa chữ đầu của từ:
        -dùng hàm split() cắt từng từ ra, trả về 1 mảng chứa các từ
        -forEach duyệt mỗi từ:
        +str.charAt(0): ký tự đầu tiên của từ (upperCase nó lên)
        +str.substr(1): cắt các ký tự từ vị trí ký tự 1 đến hết từ đó.
        
        =>cộng dồn 2 cái str.charAt(0).toUpperCase() + str.substr(1): sẽ ra đc 1 từ hoàn chỉnh có viết hoa ký tự đầu.
    
        +index !== arrStr.length - 1: xử lý dấu cách, nếu ko phải từ cuối cùng thì chèn dấu cách ' ' vào.
        */
        arrStr.forEach(function (str, index) {
            // console.log(index);
            // console.log(arrStr.length);
            //kiểm tra kdl 2 thằng này đều là number, nên dùng được ===,!== (so sánh cùng kiểu dl). 
            // console.log(typeof index);
            // console.log(typeof arrStr.length);
            //Xem giải thích ở phần trên
            result += str.charAt(0).toUpperCase() + str.substr(1) + (index !== arrStr.length - 1 ? ' ' : '');
        });
        console.log(result);
        return result;
    };
    CapitalizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'capitalize'
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/folder-pipes/even-odd.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/folder-pipes/even-odd.pipe.ts ***!
  \***********************************************/
/*! exports provided: EvenOddPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvenOddPipe", function() { return EvenOddPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EvenOddPipe = /** @class */ (function () {
    function EvenOddPipe() {
    }
    EvenOddPipe.prototype.transform = function (arrNumber, evenValue) {
        // var result : number[]; //mảng tĩnh, ko thể dùng push đc, 
        var result = new Array(); //mảng động, dùng push đc.
        //vào đây để xem các hàm của array trong typescript: 
        //https://www.tutorialspoint.com/typescript/typescript_arrays.htm
        //hàm push() thêm phần tử về cuối mảng, trả về length mới.
        if (evenValue === 1) {
            arrNumber.forEach(function (item, index) {
                item % 2 === 0 ? result.push(item) : -1; //nếu true thì trả về length mới, false thì -1 hay số nào cũng đc, cho có ngôi là đc. 
            });
        }
        else {
            arrNumber.forEach(function (item, index) {
                item % 2 !== 0 ? result.push(item) : -1; //nếu true thì trả về length mới, false thì -1 hay số nào cũng đc, cho có ngôi là đc. 
            });
        }
        return result;
    };
    EvenOddPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'evenOdd'
        })
    ], EvenOddPipe);
    return EvenOddPipe;
}());



/***/ }),

/***/ "./src/app/folder-pipes/filter.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/folder-pipes/filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
//PIPE: lọc các phần tử trong mảng ra theo điều kiện
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (products, idFilter, nameFilter, statusFilter) {
        // console.log(idFilter, nameFilter, statusFilter);
        // return products;
        /*
        -dạng undifine cho cả string và nhiều kdl khác boolean:
        nếu là boolean:   status: boolean thì (status)=true và (!status)=false
    
        nếu là kdl khác boolean thì là difine:có dl và undifine:null
        status: string thì (status)=difine=!null và (!status)=undifine=null
        */
        if (!idFilter && !nameFilter && !statusFilter) {
            return products; //nếu chưa nhập vào gì hết thì ko cần lọc, trả về nguyên array products
        }
        else {
            //nếu string idfilter=define nghĩa là !=null, thì lọc mảng bằng hàm filter() có sẵn.
            //indexOf(id): trả về vị trí chuỗi id trong mảng/chuỗi 0->n-1, trả về vị -1 nếu ko tìm ra.
            //để dùng đc indexOf(idFilter) thì phải chuyển id của array element về kiểu string.
            //x là 1 phần tử trong mảng products, x.id: thì là id trong array cần phải toString(), 
            //còn indexOf(idFilter) là idFilter nhập vào để lọc, vd: id trong array là 1234 thì chỉ cần nhập vào idFilter=1 là nó đã hiện ra danh sách các id có '1' rồi.
            if (idFilter) {
                products = products.filter(function (x) {
                    //nếu != -1 thì return true; phần tử đó sẽ đc duyệt, lọc lên và đưa ra danh sách.
                    return x.id.toString().indexOf(idFilter) != -1;
                });
            }
            //lọc name xong r, thì vẫn có thể lọc status nữa, nên ko dùng else if mà chỉ dùng if 
            //Nếu string namefilter=define nghĩa là !=null, thì lọc mảng bằng hàm filter() có sẵn.
            //Đối với chuỗi thì cần đưa về toàn bộ chữ thường, hoặc toàn chữ hoa để cùng loại mới so sánh đc.
            //  id ở trên cũng nhập vào chuỗi, nhưng ko cần tại vì id là nhập vào chuỗi SỐ.
            //ở đây name của element array đã là string rồi, nên ko dùng toString(), chỉ cần đưa về thường hoặc hoa là đc.
            if (nameFilter) {
                products = products.filter(function (x) {
                    //nếu != -1 thì return true; phần tử đó sẽ đc duyệt, lọc lên và đưa ra danh sách.
                    return x.name.toLowerCase().indexOf(nameFilter.toLowerCase()) != -1;
                });
            }
            //Nếu string statusFilter=define nghĩa là !=null, thì lọc mảng bằng hàm filter() có sẵn.
            //statusFilter='true'/'false'/'all', nếu bằng 'true'/'false' thì nó lọc, 
            //  còn ='all' thì nó ko lọc mà sẽ lấy tất.
            //vì status trong array là boolean nên phải toString() để dùng đc indexOf()
            if (statusFilter) {
                products = products.filter(function (x) {
                    // console.log(x.status.toString().toLowerCase()); //trả về string 'true', 'false'
                    //nếu != -1 thì return true; phần tử x đó sẽ đc duyệt, lọc lên và đưa ra danh sách.
                    //nếu ==-1 thì return false; theo hàm filter() thì false sẽ ko đc duyệt và sẽ bị loại.
                    // return x.status.toString().toLowerCase().indexOf(statusFilter.toLowerCase()) != -1; 
                    //nếu statusFilter='all' thì return true: hàm filter() quy định true nghĩa là phần tử x đc duyệt và đưa vào danh sách.
                    //  ko cần phải xét thêm điều kiện gì nữa, nên nếu statusFilter='all' thì mọi phần tử 
                    //  trong products hiện tại sẽ được duyệt(products hiện tại là products đã lọc qua id,name).
                    //ngược lại thì sẽ lọc theo true/false của x.status của array products.
                    return statusFilter.toLowerCase() === 'all' ? true : x.status.toString().toLowerCase().indexOf(statusFilter.toLowerCase()) != -1;
                });
            }
            return products;
        }
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/folder-pipes/format-data.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/folder-pipes/format-data.pipe.ts ***!
  \**************************************************/
/*! exports provided: FormatDataPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatDataPipe", function() { return FormatDataPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
//PIPE: Lấy 1 đoạn văn bản + ...: nếu văn bản dài quá, mà muốn hiển thị lên thì ta chỉ lấy 1 đoạn thôirồi + thêm dấu ...
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//pipename formatData sẽ đc gọi trong html để gọi ra tính chất của pipe.
var FormatDataPipe = /** @class */ (function () {
    //pipe này dùng để cắt chuỗi, tương tự pipe slice có sẵn.
    function FormatDataPipe() {
    }
    //any nghĩa là kiểu dl bất kỳ nào đó, thường là dùng cho object
    //kiểu any trong () là kiểu value nhận vào, any bên ngoài là kiểu value trả ra. 
    FormatDataPipe.prototype.transform = function (value, args) {
        // console.log(typeof args); //để xem args là kiểu dl gì
        return value.substr(0, 10) + '...'; //cắt từ vị trí 0 đến 10-1
    };
    FormatDataPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'formatData'
        })
        //pipe này dùng để cắt chuỗi, tương tự pipe slice có sẵn.
    ], FormatDataPipe);
    return FormatDataPipe;
}());



/***/ }),

/***/ "./src/app/folder-pipes/round.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/folder-pipes/round.pipe.ts ***!
  \********************************************/
/*! exports provided: RoundPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundPipe = /** @class */ (function () {
    /***Tạo ra 1 pipe: -vd: tạo 1 pipe làm tròn lên.
    -Tạo 1 file round.pipe.ts trống: file này chứa pipe làm tròn cần tạo.
    -import Pipe và PipeTransform từ core.
    -đặt tên pipe, ở đây đặt roundNum, gọi trong html với tên pipe này là roundNum.
    -implement method transform và chỉnh sửa kdl đưa vào, kdl đưa ra của nó.
    (đưa vào 1.9, sau khi làm tròn đưa ra 2.0: nên đều là number)
    
    -Cấu hình file pipe này vào trong app.modules.ts: import đường dẫn + gọi trong hàm declarations,
    giống như cấu hình 1 component bình thường.
    
    
    -CHÚ Ý: nếu dùng lệnh để tạo 1 folder chứa các file name.pipe.ts riêng thì dùng như comp thôi:
    +tạo comp: ng g c compname
    +tạo pipe: ng g p my-new-pipe
    (xem hình pipe-các lệnh trong hình trong image note. Hoặc tại: https://www.npmjs.com/package/@angular/cli )
    
    */
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (value, isUpper, addTo) {
        // console.log(typeof addTo); //để xem addTo là kiểu dl gì
        // bên trong (value): đưa vào kiểu number;
        // bên ngoài ngoặc () có :number: trả ra kết quả sau khi pipe cũng kiểu number.
        // thêm tham số  isUpper để nhận tham số truyền vào từ bên ngoài.
        //  addTo cũng là 1 tham số nhận truyền vào từ html.
        // if(isUpper){
        //     return Math.ceil(value + addTo); //nếu isUpper=true thì làm tròn lên
        // }
        // return Math.floor(value + addTo); //nếu isUpper=false thì làm tròn xuống
        //Dùng toán tử 3 ngôi
        //addTo đơn giản chỉ là 1 tham số truyền vào từ html: vd addTo=10, value=1.5 thì sẽ làm tròn cho (11.5)
        return isUpper ? Math.ceil(value + addTo) : Math.floor(value + addTo);
        // return Math.round(value); //hàm làm tròn theo toán học thông thường.
    };
    RoundPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'roundNum' })
        /***Tạo ra 1 pipe: -vd: tạo 1 pipe làm tròn lên.
        -Tạo 1 file round.pipe.ts trống: file này chứa pipe làm tròn cần tạo.
        -import Pipe và PipeTransform từ core.
        -đặt tên pipe, ở đây đặt roundNum, gọi trong html với tên pipe này là roundNum.
        -implement method transform và chỉnh sửa kdl đưa vào, kdl đưa ra của nó.
        (đưa vào 1.9, sau khi làm tròn đưa ra 2.0: nên đều là number)
        
        -Cấu hình file pipe này vào trong app.modules.ts: import đường dẫn + gọi trong hàm declarations,
        giống như cấu hình 1 component bình thường.
        
        
        -CHÚ Ý: nếu dùng lệnh để tạo 1 folder chứa các file name.pipe.ts riêng thì dùng như comp thôi:
        +tạo comp: ng g c compname
        +tạo pipe: ng g p my-new-pipe
        (xem hình pipe-các lệnh trong hình trong image note. Hoặc tại: https://www.npmjs.com/package/@angular/cli )
        
        */
    ], RoundPipe);
    return RoundPipe;
}());



/***/ }),

/***/ "./src/app/folder-pipes/sort-number.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/folder-pipes/sort-number.pipe.ts ***!
  \**************************************************/
/*! exports provided: SortNumberPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortNumberPipe", function() { return SortNumberPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
//PIPE: sắp xếp array number
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortNumberPipe = /** @class */ (function () {
    function SortNumberPipe() {
    }
    SortNumberPipe.prototype.transform = function (arrNumber, sortValue) {
        // console.log(typeof args); //để xem args là kiểu dl gì
        /*CHÚ Ý:
        Ta sắp xếp trực tiếp trên mảng, nhưng giá trị trả về lại ko gắn vào mảng, mà phải tạo ra 1 biến
        var result để lưu giá trị sau khi sắp xếp.
    
        Sx xong trả về mảng mới thông qua kết quả var result: return [...result];
        Cú pháp [...result] là tạo 1 array[] mới, rồi copy result vào array mới đó.
        */
        /*dùn hàm sort() có sẵn để sx, cơ chế của hàm sort:
        nếu sắp xếp tăng dần thì: a > b trả về 1, a < b trả về -1, a = b trả về 0,
        nếu sắp xếp giảm dần thì: a > b trả về -1, a < b trả về 1, a = b trả về 0.
        Mình chỉ cần đưa đk vào như v, sort() nó tự sx.
       
        Ta dùng param sortValue để đưa giá trị 1/-1 vào để sx tăng dần/giảm dần theo ý muốn.
          nếu param sortValue=1 thì hàm sort() sẽ có cơ chế sx tăng dần, và ngược lại.
        */
        var result = arrNumber.sort(function (a, b) {
            return a > b ? sortValue : (a < b ? -sortValue : 0);
        });
        /*Cách 2: Ban đầu sx cứng là tăng dần, sau giảm dần thì chỉ cần đảo mảng lại.
        Dùng hàm  reverse() để đảo mảng.*/
        // var result = arrNumber.sort((a, b) => {
        //   return a > b ? 1 : (a < b ? -1 : 0);
        // });
        // if(sortValue === -1){
        //   result = result.reverse();
        // }
        //trả về 1 mảng mới, copy từ mảng result, xem giải thích trên phần CHÚ Ý ở trên.
        return result.slice();
    };
    SortNumberPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sortNumber'
        })
    ], SortNumberPipe);
    return SortNumberPipe;
}());



/***/ }),

/***/ "./src/app/folder-pipes/sort.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/folder-pipes/sort.pipe.ts ***!
  \*******************************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//NHỚ VÀO NOTE BÀI 73 ĐỂ XEM CHI TIẾT VỀ LODASH: https://lodash.com/docs/4.17.10#orderBy
//lodash là thư viện hỗ trợ các tiện ích cho pipe: Vào note bài 73 để xem chi tiết, ở đây ta vận dụng lodash vào sắp xếp.
/*Lodash: CÁCH 1
terminal trong prj: npm install lodash --save và gọi nó ra bằng lệnh import bên dưới.
-cách 1: là import tất cả các hàm của lodash, nên phải sd _.tên_hàm() để gọi hàm; và phải khai báo cho _
import 'lodash';
declare var _; //để sử dụng đc cấu trúc hàm _.tên_hàm() của lodash thì phải khai báo _ cho js
=>Xong r xuống dưới gọi tên hàm ra sd: _.tên_hàm() vd: _.orderBy()
*/
// import 'lodash';
// declare var _; 
/*Cách 2 của LODASH: terminal trong prj: npm install @types/lodash --save
-cách 1: là import tất cả các hàm của lodash, nên phải sd _.tên_hàm() để gọi hàm; và phải khai báo cho _
-cách 2: sd hàm nào import hàm đó  thôi, vậy nên có thể gọi trực tiếp tên_hàm() mà ko cần _.
nên ko cần khai báo declare var _;

chỉ cần: import { orderBy } from 'lodash';
=>xong rồi xuống dưới gọi tên hàm ra sd: tên hàm ko cần dấu _: tên_hàm() vd: orderBy()

CÁCH 2 DÙNG GIÚP LÀM NHẸ PRJ HƠN, TĂNG PERFORMANCE HƠN.
*/

var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (products, sortBy, sortValue) {
        /*Ban đầu mới render lên thì sortBy='name' và sortValue=1 đã là mặc định.
        Vì sortValue=1  nên sẽ theo cấu trúc: a>b trả 1, a<b trả -1, a===b trả 0: là cấu trúc sx tăng dần của hàm sort();
        =>vậy nên ban đầu khi mới vừa render lên thì đã sx tăng dần theo name.
     
        -Lần click đầu tiên Name/Price: Khi kích vào tiêu đề nào đó thì nó sẽ làm thay đổi sortValue=-sortValue=-1,
        lúc này sẽ theo cấu trúc: a>b trả -1, a<b trả 1, a===b trả 0: là cấu trúc sx giảm dần của hàm sort();
        =>vậy nên lần click lần đầu tiên bất cứ cái nào thì cũng sẽ chuyển sang sx giảm dần.
        */
        if (sortBy === 'name') {
            // nếu =name thì ta sx theo name.
            // products.sort((a, b) =>{
            //   return a.name > b.name ? sortValue : (a.name < b.name ? -sortValue : 0);
            // });
            //Sử dụng lodash để sx orderBy thay vì tự làm như trên: vào note bài 73 để xem giải thích.
            // Cách 1 của lodash:
            // products = _.orderBy(products, ['name'], [sortValue === 1 ? 'asc' : 'desc']);
            //Cách 2 của lodash: vì import trực tiếp nên ko cần gọi hàm bằng dấu _.
            products = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["orderBy"])(products, ['name'], [sortValue === 1 ? 'asc' : 'desc']);
            /*nếu sortValue===1 thì sx name theo tăng dần (asc), và nếu sortValue !==1 thì sx name theo giảm dần (desc).
            sortValue: là giá trị nhận vào 1/-1 nếu ta kích sx tăng hay giảm...*/
        }
        if (sortBy === 'price') {
            // nếu =price thì ta sx theo price.
            // products.sort((a, b) =>{
            //   return a.price > b.price ? sortValue : (a.price < b.price ? -sortValue : 0);
            // });
            //Sử dụng lodash để sx orderBy thay vì tự làm như trên: vào note bài 73 để xem giải thích.
            // Cách 1 của lodash:
            // products = _.orderBy(products, ['price'], [sortValue === 1 ? 'asc' : 'desc']);
            //Cách 2 của lodash: vì import trực tiếp nên ko cần gọi hàm bằng dấu _.
            products = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["orderBy"])(products, ['price'], [sortValue === 1 ? 'asc' : 'desc']);
            /*nếu sortValue===1 thì sx price theo tăng dần (asc), và nếu sortValue !==1 thì sx price theo giảm dần (desc)
            sortValue: là giá trị nhận vào 1/-1 nếu ta kích sx tăng hay giảm...*/
        }
        return products;
    };
    SortPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sort'
        })
    ], SortPipe);
    return SortPipe;
}());



/***/ }),

/***/ "./src/app/folder-router/app-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/folder-router/app-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _folder_components_contacts_contacts_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../folder-components/contacts/contacts.module */ "./src/app/folder-components/contacts/contacts.module.ts");
/* harmony import */ var _folder_components_router_home_router_home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../folder-components/router-home/router-home.module */ "./src/app/folder-components/router-home/router-home.module.ts");
/* harmony import */ var _folder_components_router_contact2_router_contact2_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../folder-components/router-contact2/router-contact2.module */ "./src/app/folder-components/router-contact2/router-contact2.module.ts");
/* harmony import */ var _folder_components_router_about_router_about_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../folder-components/router-about/router-about.module */ "./src/app/folder-components/router-about/router-about.module.ts");
/* harmony import */ var _folder_components_router_products_router_products_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../folder-components/router-products/router-products.module */ "./src/app/folder-components/router-products/router-products.module.ts");
/* harmony import */ var _folder_components_router_product_detail_router_product_detail_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../folder-components/router-product-detail/router-product-detail.module */ "./src/app/folder-components/router-product-detail/router-product-detail.module.ts");
/* harmony import */ var _folder_components_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../folder-components/contact-detail/contact-detail.component */ "./src/app/folder-components/contact-detail/contact-detail.component.ts");
/* harmony import */ var _folder_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../folder-components/page-not-found/page-not-found.component */ "./src/app/folder-components/page-not-found/page-not-found.component.ts");
/*ĐÂY LÀ MODULE: làm nhiệm vụ gộp tất cả module đơn lẻ lại, rồi add vào module chính là app.module.ts.

CHÚ Ý: module chính app.module.ts chỉ add 1 file root duy nhất, nên phải gộp hết tất cả module con vào trong 1 file app-routing.module.ts, rồi mới add vào app.module.ts.*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
-Tách những code để routing bên app.module.ts ra thành 1 module khác app-routing.module.ts.
(rồi sẽ gọi app-routing.module.ts vào app.module.ts: để router. Như v sẽ làm gọn app.module.ts hơn)

GIẢI THÍCH CHO app-routing.module.ts:
-----------------
**Tại routing module đc tách ra. Tạo ra file mới: app-routing.module.ts (ngang hàng với app.module.ts)
-import NgModule từ core
-import Routes, RouterModule từ router
-import 3 class của 3 component: Contacts,ContactDetail,PageNotFoundComponent (những comp nào có liên quan đến việc routing thì tách ra import trong này)

-Tạo ra routesConfig, copy từ app.module.ts qua, bên đó có giải thích rõ ràng rồi

-Tạo decurator function tên là: @NgModule({}) để chứa:
 +import[] những cái cần thiết cho router như trong app.module.ts
 +declarations[] để gọi các class (3 class ContactsComponent,ContactDetailComponent,PageNotFoundComponent) comp đã import vào (giống như bên app.module.ts cũng import xong thì gọi xuống declarations).

 +(sẽ báo lỗi vì @NgModule({}) cần phải tạo thêm export class tiếp theo sau đây, để nó liên kết)


 +expors (exports có s): [RouterModule] : Tại vì trong app.component.html có dùng router-outlet nên ở đây ta phải exports RouterModule ra.

-Tạo export class AppRoutingModule{}
----------------------------------------------------------------------------------------------------

GIẢI THÍCH CHO app.module.ts
----------
**Tại app.module.ts: XÓA HOẶC Cmt LẠI CÁC khai báo đã tách ra bên này. IMPORT FILE module TÁCH VÀO LẠI app.module.ts

-import module đã tách ra vào app.module.ts: import { AppRoutingModule } from './app-routing.module';
kéo xuống phần imports[] gọi AppRoutingModule vào.
 
-Vì đã import AppRoutingModule vào rồi, nên sẽ xóa những cái dư thừa đã viết lại bên AppRoutingModule.

+XÓA import { Routes, RouterModule } from '@angular/router';

+XÓA biến const routesConfig và các khai báo của nó.
kéo xuống phần imports[], xóa dòng gọi RouterModule.forRoot(routesConfig) trong imports[] đó.

+XÓA các import ContactsComponent, ContactDetailComponent, PageNotFoundComponent;
và xóa các lần gọi của các comp này trong declarations[].
(Vì đã chuyển qua app-routing.module.ts rồi, nên ở đây ko cần nữa)

*/


//Để các comp sử dụng module routing này: khi routing sẽ sử dụng đc ngIF, ngFor: thì ở module routing này phải import thư viện này. 
//Và gọi xuống phần imports[] trong @NgModule({}) bên dưới.

/*TÁCH RA MODULE CHILD CHO 1 COMP CONTACTS: VÌ ĐÃ TÁCH MODULE RIÊNG CHO COMP CONTACTS, NÊN SẼ CMT/XÓA NHỮNG THỨ ĐÃ TÁCH; VÀ IMPORT GỌI MODULE CHILD ĐÓ VÀO:

-import ContactsModule của contacts.module.ts vào đây; kéo xuống phần import trong @NgModule để thêm ContactsModule vào:
    +nếu là Angular4 thì phải thêm ở đầu imports: [ContactsModule, RouterModule.forRoot(routesConfig), CommonModule ]
    +nếu là Angular6 thì thêm ở đâu cũng đc, ở đây thêm ở cuối imports: [RouterModule.forRoot(routesConfig), CommonModule, ContactsModule ]

-XÓA/cmt: import { ContactsComponent } và lần gọi nó trong declarations[] bên dưới

    
-XÓA/cmt: { path: 'contacts', component: ContactsComponent }, vì đã move qua bên contacts.module.ts*/
// import { ContactsComponent } from './contacts/contacts.component';






//2 comp này chúng ta ko tách ra module riêng, mà để gộp chung trong 1 module này, nên gọi vào để xử lý path tại đây luôn.


var routesConfig = [
    /*-Kích vào đường dẫn contacts, thì sẽ làm việc trên component ContactsComponent, và chuyển màn hình đến ContactsComponent.

    -Đường dẫn path sẽ đc truyền vào từ routerLink="/detail/{{ contact.id }}" trong html, khi kích vào sẽ cho ra link /detail/1 /detail/2 /detail/3 ...
    Vậy khi link là /detail/1 thì path:'detail/:id' sẽ nhận đường dẫn này vì đúng với format của nó, rồi chuyển đến ContactDetailComponent.

    { path: 'detail/:id/:name/:phoneNumber', component: ContactDetailComponent } thông qua đúng format với routerLink bên html để lấy dl từ bên đó.
    

    -***CHÚ Ý: Ở ĐÂY SẼ LẤY id, name, phoneNumber từ contacts html để truyền qua ContactDetailComponent: XEM giải thích QUY TRÌNH TRUYỀN DL tại file contacts.component.html.
    */
    // { path: 'contacts', component: ContactsComponent },  //XÓA VÌ ĐÃ TÁCH RA MODULE CHILD RIÊNG RỒI: contacts.module.ts
    // { path: 'detail', component: ContactDetailComponent }, //BỎ DÒNG NÀY THÌ KHI KÍCH VÀO nút link Detail bên app.component.html nó sẽ trả về comp page-not-found.
    // xem chú ý ở trên. Chuyển màn hình qua comp ContactDetailComponent, đồng thời truyền kèm các dl id, name, phoneNumber qua comp đó.
    { path: 'detail/:id/:name/:phoneNumber', component: _folder_components_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_9__["ContactDetailComponent"] },
    //để chỉnh 1 trang làm home, nghĩa là khi vào http://localhost:4200 thì nó tự động chuyển đến /index: http://localhost:4200/index ;
    //  giống kiểu thiết lập trang mặc định trong .net MVC, ở đây thiết lập trang mặc định là index.
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    //Nếu + vào link 1 địa chỉ lỗi thì nó sẽ chạy đến trang của comp page-not-found (tự tạo comp này): vd: http://localhost:4200/sajsaksjla là 1 địa chỉ lỗi.
    //Ở đây ta thiết lập dẫn đến trang LỖI khi chạy địa chỉ lỗi tại đây.
    { path: '**', component: _folder_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"] } //dấu ** ý là ko vào đc tất cả comp nào rồi thì mới chạy đến comp PageNotFoundComponent
];
//Tạo @NgModule để gọi các module và comp đã import ở trên.  
//Đã viết tách Contact ra 1 module riêng, nên sẽ import ở trên và gọi vào import dưới đây là đủ rồi.
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            //ContactsModule: nếu là Angular 4 thì phải thêm ở đầu import[ContactsModule,HomeModule,,,]
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routesConfig),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _folder_components_contacts_contacts_module__WEBPACK_IMPORTED_MODULE_3__["ContactsModule"],
                _folder_components_router_home_router_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
                _folder_components_router_contact2_router_contact2_module__WEBPACK_IMPORTED_MODULE_5__["Contact2Module"],
                _folder_components_router_about_router_about_module__WEBPACK_IMPORTED_MODULE_6__["AboutModule"],
                _folder_components_router_products_router_products_module__WEBPACK_IMPORTED_MODULE_7__["ProductsModule"],
                _folder_components_router_product_detail_router_product_detail_module__WEBPACK_IMPORTED_MODULE_8__["ProductDetailModule"]
            ],
            declarations: [
                // ContactsComponent,
                //2 comp này chúng ta ko tách ra module riêng, mà để gộp chung trong 1 module này, nên gọi vào để xử lý path tại đây luôn.
                _folder_components_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_9__["ContactDetailComponent"],
                _folder_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"]
            ],
            // +expors (exports có s): [RouterModule] : Tại vì trong app.component.html có dùng <router-outlet/> nên ở đây ta phải exports RouterModule ra.
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/folder-services/guards/access.guard.ts":
/*!********************************************************!*\
  !*** ./src/app/folder-services/guards/access.guard.ts ***!
  \********************************************************/
/*! exports provided: AccessGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessGuard", function() { return AccessGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*teminal: "ng g guard access" (my-new-guard) để tạo nhanh file: access.guard.ts
+default file tạo ra là dạng canactive,  nên phải sửa lại tên và các import thành dạng candeactive và xóa những import ko cần.
+candeactive yêu cầu truyền vào comp cần sd service candeactive này.
*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AccessGuard = /** @class */ (function () {
    function AccessGuard() {
    }
    AccessGuard.prototype.canDeactivate = function () {
        //nếu biến toàn cục localStorage với key là 'key' mà difined thì: cho true, undifined thì false.
        // true: có thể thoát ra khỏi các path sd Guard này,
        // false: KO thể thoát ra khỏi các path sd Guard này.
        if (localStorage.getItem('key')) {
            //xóa trạng thái của nó, để mỗi lần f5 lại ko bị dính trạng thái cũ. Hoặc dùng tay xóa cokie cũng đc.
            //tương tự như logout bên app.component.ts
            // localStorage.removeItem('key');
            // localStorage.clear();
            //Đã removeItem trong hàm ngOnInit() của router-home.component.ts, mỗi lần gọi đến comp đó thì nó lại remove key 'key'.
            return true;
        }
        return false;
    };
    AccessGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AccessGuard);
    return AccessGuard;
}());



/***/ }),

/***/ "./src/app/folder-services/guards/auth.guard.ts":
/*!******************************************************!*\
  !*** ./src/app/folder-services/guards/auth.guard.ts ***!
  \******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        //nếu biến toàn cục localStorage với key là user mà difined thì true: các path sd Guard này sẽ đc phép truy cập. 
        if (localStorage.getItem('user')) {
            return true;
        }
        // else{
        //   this.router.navigate(['']);
        //   return false;
        // }
        //cũng như else thôi. localStorage undifined, thì chuyển về login để login lại.
        //dùng navigate để định dạng lại đường link.
        this.router.navigate(['login']);
        return false; //và trả về false để ko cho phép các path sd Guard này truy cập.
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/folder-services/ip2.service.ts":
/*!************************************************!*\
  !*** ./src/app/folder-services/ip2.service.ts ***!
  \************************************************/
/*! exports provided: Ip2Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ip2Service", function() { return Ip2Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import 'rxjs/add/operator/toPromise'; //trong angular 6 thì ko cần dòng này cũng có thể toPromise với get http.
var Ip2Service = /** @class */ (function () {
    function Ip2Service(http) {
        this.http = http;
    } //kb biến http từ thư viện Http, angular sẽ tự động new ngầm cho nó thành đối tượng của Http. 
    //Lấy service ra. Ở đây là trả về ip nên nhớ có return.
    Ip2Service.prototype.getIp = function () {
        return this.http.get('http://ip.jsontest.com/') //lấy dl từ server này về, trả dl về kiểu Observable
            .toPromise() //để chuyển dl sang dạng Promise. Để có toPromise() thì phải import ở trên cùng (Với Angular6 thì ko cần import nữa).
            .then(function (res) { return res.json(); }) //then sẽ nhận gtri trả về, chuyển promise sang kiểu json.
            .then(function (resJson) { return resJson.ip; }); //trả về ip của json, ip lấy từ service. (đúng với tên gọi getIp() của function này)
        //Ở đây then: nhận giá trị trả về, và catch phóng ngoại lệ.
    };
    Ip2Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
        /*Tạo file này chứa service:
        -import:  Injectable từ core, Http từ http.
        -Nếu là angular4 thì phải import 'rxjs/add/operator/toPromise': Để sử dụng toPromise(), còn angular đã tự động có ko cần import.
        
        -Vì đây là service nên gọi @Injectable() để nó thực thi service, giống component thì gọi @Component(){}
        
        -Xuống dưới phần soạn service: class IpService: Để làm việc với service.
        hàm getIp sẽ return về ip lấy từ server thông qua service.
        
        */
        ,
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], Ip2Service);
    return Ip2Service;
}());



/***/ }),

/***/ "./src/app/folder-services/logging.service.ts":
/*!****************************************************!*\
  !*** ./src/app/folder-services/logging.service.ts ***!
  \****************************************************/
/*! exports provided: LoggingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingService", function() { return LoggingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// bỏ dòng này đi, vì tạo bằng lệnh nên nó ra như v, viết lại bên dưới
// @Injectable({providedIn: 'root'})
var LoggingService = /** @class */ (function () {
    function LoggingService() {
    }
    LoggingService.prototype.logging = function () {
        console.log('Test service logging.service.ts');
    };
    LoggingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoggingService);
    return LoggingService;
}());



/***/ }),

/***/ "./src/app/folder-services/movie.service.ts":
/*!**************************************************!*\
  !*** ./src/app/folder-services/movie.service.ts ***!
  \**************************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _folder_models_movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../folder-models/movie */ "./src/app/folder-models/movie.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//class model  Movie

var MovieService = /** @class */ (function () {
    function MovieService() {
        //tạo mảng chứa object
        this.movies = [
            new _folder_models_movie__WEBPACK_IMPORTED_MODULE_1__["Movie"](1, 'Đêm định mệnh', 'https://www.youtube.com/watch?v=PIEbejHvDcI', 'Tuấn Hưng'),
            new _folder_models_movie__WEBPACK_IMPORTED_MODULE_1__["Movie"](2, 'Ngôi sao bay', 'https://www.youtube.com/watch?v=_jNZN-t2zE8', 'Đan Trường')
        ];
    }
    MovieService.prototype.getAllMovie = function () {
        return this.movies;
    };
    MovieService.prototype.addVideo = function (movie) {
        movie.id = this.getLastID(this.movies); //last id của mảng hiện tại
        this.movies.push(movie);
    };
    MovieService.prototype.getLastID = function (movies) {
        /*toán tử 3 ngôi:
        -nếu movies.length > 0 nghĩa là true thì trả về movies.sort()...: dùng sort() để sx mảng tăng dần theo id,
        rồi trả về id của pt cuối cùng + 1 để làm id cho phần tử tiếp theo chuẩn bị đc push vào này.
    
        +Cú pháp: sort()[index].property : hàm sort() sx xong trả về mảng đã sx là mảng A chằng hạn: nên cú pháp đó chính là A[index].id hay A[index].name là chính xác.
    
        -nếu movies.length = 0 nghĩa là false, chưa có pt nào, nên thêm sẽ là thêm vào pt đầu tiên nên cho id đầu tiên là 1.
        
        =>Tóm lại: sx tăng theo id để tìm ra id cuối cùng, rồi + 1 để thành id của phần tử cần thêm vào.
        */
        var lastID = movies.length > 0 ?
            movies.sort(function (a, b) {
                return a.id > b.id ? 1 : (a.id < b.id ? -1 : 0);
            })[movies.length - 1].id + 1 : 1;
        return lastID;
    };
    //Xóa phần tử theo id: double click vào vào list thì sẽ xóa
    MovieService.prototype.deleteVideo = function (id) {
        var index = this.movies.findIndex(function (e) { return e.id === id; });
        this.movies.splice(index, 1); //xóa từ phần thử thứ index, xóa 1 phần tử
    };
    //Update mảng theo id
    MovieService.prototype.updateVideo = function (movie) {
        var index = this.movies.findIndex(function (e) { return e.id === movie.id; });
        this.movies.splice(index, 1, movie);
        //SPLICE: tại vị trí index, xóa 1 phần tử, add phần tử movie vào lại vị trí index đó.
        //Xem rõ hơn về splice: vừa xóa vừa add: https://www.tutorialspoint.com/typescript/typescript_array_splice.htm
    };
    MovieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/folder-services/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/folder-services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = [
            {
                id: 1,
                name: 'Iphone 7',
                price: 1000,
                status: true
            },
            {
                id: 2,
                name: 'Iphone 10',
                price: 2000,
                status: false
            },
            {
                id: 3,
                name: 'Xiaomi',
                price: 3000,
                status: false
            },
            {
                id: 4,
                name: 'Note 7',
                price: 4000,
                status: true
            }
        ];
    }
    // getAllProducts(){
    //   return this.products;
    // }
    //tham số name?: dấu ? là tham số này có hoặc ko có cũng đc, truyền vào 1 hoặc 2, hoặc 0 tham số đều đc. 
    //Hàm này làm luôn nhiệm vụ của hàm getAllProducts cũ rồi
    ProductService.prototype.getAllProducts = function (name, price) {
        var result = this.products;
        //nếu có ts name, price thì lọc để cho ra mảng theo các tham số đó. Sử dụng filter để lọc, trước khi lọc cho về thường hết hoặc hoa hết. 
        //hàm A.indexOf(B) kiểm tra xem có chuỗi B trong chuỗi A hay ko, trả về vị trí, nếu ko có trả -1. 
        if (name) {
            result = this.products.filter(function (x) {
                return x.name.toLowerCase().indexOf(name.toLowerCase()) != -1;
            });
        }
        if (price) {
            result = this.products.filter(function (x) {
                return x.price === (+price); //ép về kiểu int rồi mới so sánh === đc, còn ko ép thì so sánh ==
            });
        }
        return result;
    };
    ProductService.prototype.getProductByID = function (id) {
        var result = null;
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                result = this.products[i];
                break;
            }
        }
        return result;
    };
    //Update mảng
    ProductService.prototype.updateProduct = function (product) {
        var index = this.products.findIndex(function (e) { return e.id === product.id; });
        this.products.splice(index, 1, product);
        //SPLICE: tại vị trí index, xóa 1 phần tử, add phần tử product vào lại vị trí index đó.
        //Xem rõ hơn về splice: vừa xóa vừa add: https://www.tutorialspoint.com/typescript/typescript_array_splice.htm
    };
    ProductService.prototype.deleteProduct = function (id) {
        var index = this.products.findIndex(function (e) { return e.id === id; });
        this.products.splice(index, 1); //xóa từ phần thử thứ index, xóa 1 phần tử
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/folder-services/rest-todo.service.ts":
/*!******************************************************!*\
  !*** ./src/app/folder-services/rest-todo.service.ts ***!
  \******************************************************/
/*! exports provided: RestTodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestTodoService", function() { return RestTodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//service dùng get, post, put, delete. Dùng HttpClient mới chứ ko dùng Http(phiên bản cũ)

var RestTodoService = /** @class */ (function () {
    function RestTodoService(httpClient) {
        this.httpClient = httpClient;
        //Xem cách tạo api giả lập trên mockapi.io tại: https://www.youtube.com/watch?v=puaaPncTAoQ&list=PLJ5qtRQovuEOoKffoCBzTfvzMTTORnoyp
        //(trên mockapi.io đăng nhập với tientm96@gmail.com)
        //api này chứa mảng object, mỗi obj gồm có: {id: number(tự động tăng, ko cần quan tâm), title: string, completed: boolean}.
        this.API = 'http://5b5ead8e8e9f160014b88d16.mockapi.io/products';
    }
    //get api trả về kiểu Observable của model RestTodo. Do đó model RestTodo phải đc viết với các thuộc tính === thuộc tính của object trả về.
    RestTodoService.prototype.getAllTodos = function () {
        return this.httpClient.get(this.API);
    };
    //tạo hàm thông báo lỗi
    RestTodoService.prototype.handleError = function (err) {
        //nếu thỏa đk (err.error instanceof Error): nếu lỗi nằm trong danh sách lỗi Error, thì đó là lỗi từ client.
        if (err.error instanceof Error) {
            console.log("Client-side error: " + err.error.message); //cú pháp ES6
        }
        else {
            console.log("Server-side error: " + err.status + " - " + err.error);
        }
    };
    //POST:
    //Viết phương thức http, gửi request post dl lên server để insert dữ liệu.
    //Xem lại service: sign-in3.service.ts, cấu trúc post là: post(url, body, header?)
    //đưa request post lên server, sau đó nhận response trả về, nên sẽ có return.
    //Service sẽ nhận trả về là 1 object RestTodo, sau đó truyền qua comp bằng cách comp gọi service này.
    //Sau khi POST lên server thì dl đc đưa vào api và lưu cứng luôn trong đó, vào mockapi.io để check dl.
    RestTodoService.prototype.addRestTodo = function (resttodo) {
        //gọi phương thức để post lên, và return về giá trị đc response về, là trả về object vừa post lên đó.
        return this.httpClient.post(this.API, resttodo); //this.API là url nhận dl post lên, resttodo là dl cần post lên.
    };
    //PUT: Update
    //Tương tự như post, put cũng trả về object sau khi update cho object đó.
    RestTodoService.prototype.updateRestTodo = function (resttodo) {
        return this.httpClient.put(this.API + "/" + resttodo.id, resttodo);
        //this.API/id là url nhận dl put lên, resttodo là dl cần put lên.
        //Chú ý: khi put để update thì url phải kèm theo 1 thuộc tính mang tính duy nhất của obj là id chẳng hạn
        //  để phân biệt object cần update, nên sẽ có /${resttodo.id} để lấy thêm id vào url. 
    };
    //DELETE
    //Tương tự như put,http delete cũng trả về object sau khi delete object đó trên server.
    RestTodoService.prototype.deleteRestTodo = function (id) {
        return this.httpClient.delete(this.API + "/" + id);
        //this.API/id là url nhận dl cần delete, xóa theo id(hay bất kỳ thuộc tính duy nhất nào tùy mình chọn,
        //ở đây chỉ có mỗi id là thuộc tính duy nhất).
    };
    RestTodoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestTodoService);
    return RestTodoService;
}());



/***/ }),

/***/ "./src/app/folder-services/weather.service.ts":
/*!****************************************************!*\
  !*** ./src/app/folder-services/weather.service.ts ***!
  \****************************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'rxjs/add/operator/toPromise'; //trong angular 6 thì ko cần dòng này cũng có thể toPromise với get http.
//service lấy thời tiết thông qua api: Xem kỹ về service trong folder: ip2, ip.service.ts
var WeatherService = /** @class */ (function () {
    //kb biến http từ thư viện Http, angular sẽ tự động new ngầm cho nó thành đối tượng của Http. 
    function WeatherService(http) {
        this.http = http;
    }
    //hàm lấy nhiệt độ
    WeatherService.prototype.getTemp = function (cityName) {
        //url lấy từ api trang https://openweathermap.org/ . Xem trong file NOTE.txt.
        //qua api này, có thể lấy đc thông tin thời tiết của thành phố thông qua tên thành phố truyền vào.
        var url = 'https://api.openweathermap.org/data/2.5/weather?appid=e490064ea5c52b53fb81809ab6a3059f&units=metric&q=' + cityName;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson.main.temp; }); //F12 theo url thì cấu trúc json chứa weather là main bọc bên ngoài temp 
    };
    WeatherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\MINHTIEN\ANGULAR\ANGULAR4\CODE\learn-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map