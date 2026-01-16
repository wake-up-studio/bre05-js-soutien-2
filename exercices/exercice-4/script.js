let numbers = [10, 25, 5, 40, 18, 3];

function GrandsNombres (numbers){
    for(let number of numbers){
        if(number >= 15){
            console.log(number);
        }
    }
}

GrandsNombres(numbers);