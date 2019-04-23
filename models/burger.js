var orm = require("../config/orm.js");

var burger = {
    selectAll: function(results)    {
        orm.selectAll(function(res) {
            return res;
        });
    },

    insertOne: function(burger_name, result) {
        orm.insertOne(burger_name, function(res)    {
            return res;
        });
    },
    
    updateOne: function(burgerUpdate, result) {
        orm.updateOne(burgerUpdate, function(res) {
            return res;
        });
    }
};

module.exports = burger;
