// Base class for Http operations GET, PUT, POST, DELETE, PATCH!!
var HttpFetchService = /** @class */ (function () {
    function HttpFetchService() {
    }
    HttpFetchService.prototype.Post = function (url, payload) {
        var promise = new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'post',
                body: JSON.stringify(payload)
            }).then(function (response) {
                return response.json();
            })
                .then(function (result) {
                resolve(result);
            });
        });
        return promise;
    };
    return HttpFetchService;
}());
