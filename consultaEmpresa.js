db.funcionarios.aggregate([{"$match":{"Empresa":"Google"}},
                            {"$group":{"_id":"$Empresa",
                                "total":{"$sum":1}}}
                        ])
                                
db.funcionarios.aggregate([{"$match":{"Empresa":"Google"}},
                            {"$count":"total"}
                        ])
                            
db.funcionarios.aggregate([{"$match":{"Empresa":"Google"}},
                            {"$project":{
                                "Nome":1,
                                "Cargo":1,
                                _id:0
                            }
                        }])
                        
db.funcionarios.aggregate([{"$match":{"Empresa":"Google"}},
                            {"$project":{
                                "Nome":1,
                                "Ocupação":"$Cargo",
                                _id:0
                            }
                        }])

