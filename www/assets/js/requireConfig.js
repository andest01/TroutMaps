require.config({baseUrl:"app",paths:{angular:"../vendor/angular/angular","angular-route":"../vendor/angular-route/angular-route","angular-bindonce":"../vendor/angular-bindonce/bindonce",text:"../vendor/requirejs-text/text",d3:"../vendor/d3/d3.min"},shim:{angular:{exports:"angular"},"angular-route":{deps:["angular"]},"angular-bindonce":{deps:["angular"]}}});