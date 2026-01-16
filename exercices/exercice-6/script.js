function Major(age){
    if(age>=18){
        return true;
    }
    else{
        return false;
    }
}

function formaterMessage(age){
    if(Major(age) === true){
        console.log("Accès autorisé");
    }
    else{
        console.log("Accès refusé");
    }
}

formaterMessage(42);