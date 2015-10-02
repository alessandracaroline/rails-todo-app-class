$(document).ready(function(){
  console.log('hello');

  var source   = $("#todo-template").html();


  var todo_template = Handlebars.compile(source);
  var promise = $.getJSON('/api/v1/items') ;
  promise.done(function(items){
    var $div = $('#myTodos');
    $div.empty();
    for(var i = 0; i < items.length; i++){
       $div.append(todo_template({item: items[i]}));
    }
  });



});


