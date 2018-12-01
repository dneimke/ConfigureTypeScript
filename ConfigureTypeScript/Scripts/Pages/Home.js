"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SampleService_1 = require("../Http/SampleService");
var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.Init = function (hostElementId, buttonId) {
        var hostElement = document.getElementById(hostElementId);
        var button = document.getElementById(buttonId);
        button.addEventListener('click', function (e) {
            var httpService = new SampleService_1.SampleService();
            httpService.Post('/Home/GetMessage', {})
                .then(function (model) {
                hostElement.innerText = model.title;
            });
        });
    };
    return HomePage;
}());
exports.HomePage = HomePage;
document.addEventListener('DOMContentLoaded', function () {
    var page = new HomePage();
    page.Init('outputLabel', 'runButton');
}, false);
