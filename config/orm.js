var connection = require('./connection');

var orm = {

selectAll : function (cb){
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err,result){
        if (err){
            throw err;
        }
        cb(result)
    })
},

insertOne : function (vals, cb){
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ('"+vals+"',false)";
    console.log(queryString);
    connection.query(queryString, function(err, result){
        if (err) throw err;
        
        cb(result);
    })
    
},

updateOne : function (condition, state, cb){
    var queryString = "UPDATE burgers SET devoured = "+state+" WHERE " + condition
    console.log(queryString);
    connection.query(queryString, function(err, result){
        if (err) throw err;
        
        cb(result);
    })
},

}

module.exports = orm;