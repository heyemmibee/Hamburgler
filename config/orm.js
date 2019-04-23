var connection = require("../config/connection.js");

var orm = {
    selectAll: function(cb) {
      connection.query("SELECT * FROM burgers", function(err, res) {
        if (err) throw err;
        return res;
      });
    },

    insertOne: function(burger_name, result) {
      conncetion.query("INSERT INTO burgers SET ?", {
          burger_name: burger_name,
          devoured: false,
      },
      function(err, results) {
          if (err) throw err;
          return results;
      });
    },

    updateOne: function(burgerUpdate, result) {
        conncetion.query("UPDATE burgers SET ? WHERE ?", [{devoured: true}, {id: burgerUpdate}],
        function(err,res) {
            if (err) throw err;
            return result;
        });
      }
    };

    module.exports = orm;