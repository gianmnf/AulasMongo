db.combats.find()

db.pokemons.find({HP: {$gte:40}},
                  {Name: 1,
                   HP: 1,
                   _id:0}).sort({Name:1}).skip(100).limit(100)
                   
var items = db.pokemons.find({HP: {$gte:40}},
                  {Name: 1,
                   HP: 1,
                   _id:0}).sort({Name:1}).skip(100).limit(100)
                   
items