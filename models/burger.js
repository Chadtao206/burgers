var orm = require ('../config/orm');

var burger = {
    all: function(cb){
        orm.selectAll(function(res){
            cb(res);
        })
    },

    create: function(vals, cb){
        orm.insertOne(vals, function(res){
            cb(res);
        })
    },

    update: function(condition, state, cb){
        orm.updateOne(condition, state, function(res){
            cb(res);
        })
    }
}

module.exports = burger;