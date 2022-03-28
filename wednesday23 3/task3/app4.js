
$(function(){
    $("#select-pic").on("change",function(e){
       var url = $(this).find(':selected').data('pic-url');
       
       if(url) {
          $("#picture").attr('src',url);
       }
       else {
          $("#picture").attr("src", "");
       }
    })
    
  });