angular.module('catalogo')
.factory('constant' , constant)

constant.$inject = [];

function constant(){

    const endpoint = {};
    endpoint.HOST = "http://localhost:8080/catalogoifts/api/rest/";
    endpoint.PROVEEDORES = "proveedor/";
    endpoint.PRODUCTO = "producto/";
    endpoint.SUCURSAL = "sucursal/";
    endpoint.PROMOCION = "promocion/";
    endpoint.OFERTA = "oferta/"
    endpoint.CHARTS = 'charts/'

    
    let data = {
        endpoint : endpoint
    }

    return data
}