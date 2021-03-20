
var nome = document.querySelector("#exampleInputName");
var gender = document.querySelectorAll("#form-user-create [name=gender]:checked");
var birth = document.querySelector("ExemploInputBirth");
var country = document.querySelector("#ExemploInputCountry");
var email = document.querySelector("#ExemploInputEmail");
var password = document.querySelector("#ExemploInputPassword");
var photo = document.querySelector("#ExemploInputFile");
var admin = document.querySelector("#exampleInputAdmin");



 var fields = document.querySelectorAll("#form-user-create [name]");

 fields.forEach(function (field, index){

    if (field.name == "gender") {
        if(field.checked) console.log("Sim: ", field);
    } else {

        console.log("Não")
    }

 });
