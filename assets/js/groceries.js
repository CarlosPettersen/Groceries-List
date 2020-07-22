// Check off specific products by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on X to delete product
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Add new product to the list
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
      var productText = $(this).val();
      $(this).val("");
      $("ul").append("<li><span><i class ='fa fa-trash'></i></span> " + productText + "</>")
  }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});