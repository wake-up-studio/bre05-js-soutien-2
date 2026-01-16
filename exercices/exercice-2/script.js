let fruits = [["Pomme", "Poire"], ["Banane", "Ananas", "Kiwi"], ["Fraise", "Framboise"]];

for(let fruit of fruits){
    for(let subFruit of fruit){
        console.log("Fruit trouvé :" + subFruit);
    }
}