$(document).ready(function(){
  bindEventListeners();
})

var bindEventListeners = function(){
  $('.new_item').submit(createPost)
}

var createPost = function(e){
  e.preventDefault();
  var method = $(this).attr('method')
  var path = $(this).attr('action')
  var input = $(this).serialize()

  console.log(input)

  $.ajax({
    url: path,
    method: method,
    data: input,
    dataType: "html"
  })

  .done(function(response){
    console.log(response)
  })

}
