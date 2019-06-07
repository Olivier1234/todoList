db.getCollection('Sakila_films').find({
    "Actors":{
        $elemMatch:{
            "First name":"ED",
            "Last name":"CHASE"
        }
    }
};


db.getCollection('Sakila_films').find({
    "Description":/Documentary/,
    "Category": "Horror"
});


db.getCollection('Sakila_films').find({
    Rating: "G"
}).count();




