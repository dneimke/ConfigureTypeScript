//import { SampleService } from '../Http/SampleService';
//import { SampleResponse } from '../Models/SampleModels';
///<reference path="../Http/HttpFetchService.ts" />
///<reference path="../Http/SampleService.ts" />
///<reference path="../Models/SampleModels.ts" />
var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.Init = function (hostElementId, buttonId) {
        var hostElement = document.getElementById(hostElementId);
        var button = document.getElementById(buttonId);
        button.addEventListener('click', function (e) {
            var httpService = new SampleService();
            httpService.Post('/Home/GetMessage', {})
                .then(function (model) {
                hostElement.innerText = model.title;
            });
        });
    };
    return HomePage;
}());
document.addEventListener('DOMContentLoaded', function () {
    var page = new HomePage();
    page.Init('outputLabel', 'runButton');
}, false);
