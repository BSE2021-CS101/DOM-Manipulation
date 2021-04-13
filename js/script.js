console.log('javascript');


$(document).ready(function(){

  $("#menu, #cart, #pay").hide();

  $("#homeNav").click(function(){
    $("#home").show();
    $("#menu, #cart, #pay").hide();
  });

  $("#menuNav").click(function(){
    $("#menu").show();
    $("#home, #cart, #pay").hide();
  });

  $("#cartNav").click(function(){
    $("#cart").show();
    $("#menu, #home, #pay").hide();
  });

  $("#payNav").click(function(){
    $("#pay").show();
    $("#menu, #cart, #home").hide();
  });


  $("#mainMenu").hide();

  $("#main").click(function(){
    $("#mainMenu").show();
    $("#startersMenu, #drinksMenu, #dessertMenu").hide();
  });




});

var sumPrice=0;
document.getElementById('cheeseBurger').addEventListener('click', function(){
  var itemName = "Cheese Burger";
  var price = 10;
  sumPrice += parseInt(price);

  document.getElementById('itemName').innerHTML += itemName + "<br>";
  document.getElementById('price').innerHTML += price + "<br>";

});

document.getElementById('beefBurger').addEventListener('click', function(){
  var itemName = "Beef Burger";
  var price = 15;
  sumPrice += parseInt(price);
  document.getElementById('itemName').innerHTML += itemName + "<br>";
  document.getElementById('price').innerHTML += price + "<br>";

});


document.getElementById('calculate').addEventListener('click', function(){
  document.getElementById('total').innerHTML = "";
  document.getElementById('total').innerHTML += "<br> Total = NZ $ " + sumPrice;
});
