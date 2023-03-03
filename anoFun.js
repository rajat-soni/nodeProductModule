// var addRecord = function(a,b){
// return a+b;
// }
function addComplex(add){
    console.log(add(200,300));
}
addComplex(function(a,b){ // anonyms function //
    return a+b
}
    );