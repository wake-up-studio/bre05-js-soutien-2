let users = [
    {
        username: "DogDock",
        online: true,
    },
    {
        username: "DaTankBustaa",
        online: true,
    },
    {
        username: "Ghujuklo",
        online: false,
    },
];

for(let user of users){
    if(user.online === true){
        console.log(user.username + " est connecté");
    }
    else{
        console.log(user.username + " est déconnecté");
    }
}