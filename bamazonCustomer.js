
var mysql = require('mysql');
var inquirer = require('inquirer');

var Table = require('cli-table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "",

    database: "bamazon"

});

function displayTable() {
  //prints the table showing all available products
  var query = "SELECT * FROM products";
  connection.query(query, function (err, res) {
    if(err) throw err;
    //looping through my products table
    for (var i = 0; i < res.length; i++) {
      console.log("ID: " + res[i].id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "Quantity: " + res[i].stock_quantity);
      console.log('==================================================================================')
    }
    console.log(' ');   

    inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "What is the ID of the product you would like to buy?",
      validate: function(value){
        if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
          return true;
        } else{
          return false;
        }
      }
    },
    {
      type: "input",
      name: "quantity",
      message: "How much would you like to buy?",
      validate: function(value){
        if(isNaN(value)){
          return false;
        } else{
          return true;
        }
      }
    }
    ]).then(function(ans){
      var whatToBuy = (ans.id)-1;
      var howMuchToBuy = parseInt(ans.quantity);
      var grandTotal = parseFloat(((res[whatToBuy].price)*howMuchToBuy).toFixed(2));

      //check if quantity is sufficient
      if(res[whatToBuy].stock_quantity >= howMuchToBuy){
        //after purchase, updates quantity in Products
        connection.query("UPDATE Products SET ? WHERE ?", [
        {stock_quantity: (res[whatToBuy].stock_quantity - howMuchToBuy)},
        {id: ans.id}
        ], function(err, result){
            if(err) throw err;
            console.log("Great Purchase! Your total is $" + grandTotal.toFixed(2) + ". Your item(s) will be shipped to you in 2-3days.");
        });

      } else{
        console.log("Sorry, this product is out of stock :( ");
      }

      reprompt();
    })
})
}

//asks if they would like to purchase another item
function reprompt(){
  inquirer.prompt([{
    type: "confirm",
    name: "reply",
    message: "Would you like to buy another item?"
  }]).then(function(ans){
    if(ans.reply){
      displayTable();
    } else{
      console.log("Come back Soon!");
    }
  });
}

displayTable();

