  
function main(){

    $('.nav-collapse').on('show', function () { 
      $(document.body).css({"padding-top":"190px"});});

    $('.nav-collapse').on('hide', function () {
      $(document.body).css({"padding-top":"60px"});});

    var toggle = 1;
    $("#font-button").click(function (){
      if(toggle) {
      	$("h5").css({"font-size":"18px"}); 
      	$("p").css({"font-size":"16px"}); 
      	$("label").css({"font-size":"18px"}); 
      	toggle=0;
      }

      else {
      	$("h5").css({"font-size":"100%"});  
      	$("p").css({"font-size":"14px"}); 
      	$("label").css({"font-size":"17px"});
       	toggle=1;
       }
      });
}

main();