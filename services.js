app.service('CommonService', function ($http, $q) {

//funcion para obtener todo------------------------------------------------------------------
this.getAll = function (url) {
    var defered = $q.defer();
    var promise = defered.promise;
    $http.get(url)
    .success(function(data) {
            defered.resolve(data);
        })
        .error(function(err) {
            defered.reject(err)
        });
    return promise;
}

    this.postNew = function (data, url) {
        var defered = $q.defer();
        var promise = defered.promise;
        var method = 'POST';
        var req = {
            method: method,
            url: url,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            data: data,
        }
        $http(req).success(function (data, status) {
            var _data = { "data": data, "status": status };
            defered.resolve(_data);
        }).error(function (error, status) {
            var _edta = { message: error, status: status };
            defered.reject(_edta);
        });
        return promise;
    }


    this.deleteNew = function (data, url) {
        var defered = $q.defer();
        var promise = defered.promise;
        var method = 'DELETE';
        var req = {
            method: method,
            url: url,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            data: data,
        }
        $http(req).success(function (data, status) {
            var _data = { "data": data, "status": status };
            defered.resolve(_data);
        }).error(function (error, status) {
            var _edta = { message: error, status: status };
              defered.reject(_edta);
        });
        return promise;
    }

    this.putNew = function (data, url) {
        var defered = $q.defer();
        var promise = defered.promise;
        var method = 'PUT';
        var req = {
            method: method,
            url: url,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            data: data,
        }
        $http(req).success(function (data, status) {
            var _data = { "data": data.data, "status": status };
            defered.resolve(_data);
        }).error(function (error, status) {
            var _edta = { message: error, status: status };
            defered.reject(_edta);
        });
        return promise;
    }
});
