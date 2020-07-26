angular.module('catalogo')
.service('ajax' , ajax)

ajax.$inject = ['$http'];

function ajax($http) {

    let data = {
        get    : get,
        post   : post,
        put    : put,
        remove : remove
    }

    return data;


    function get(url){
        return $http.get(url)
    }

    function post(url , data){
        return $http.post(url , data);
    }

    function put(url , id , data){
        return $http.put(url + id , data)
    }

    function remove(url , id){
        return $http.delete(url + id);
    }
}





