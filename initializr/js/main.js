function connectPrompt()
{
  $.post('http://142.150.169.179/rating_form.php', "", function(data){}).fail(function () {
                                                                                            alert("A connection error prevents you from accesssing Age-CAP. Please connect to the Internet.");
                                                                                            connectPrompt();
                                                                                          });
}

function makeBig()
{
        $("h5").css({"font-size":"18px"}); 
        $("p").css({"font-size":"16px"}); 
        $("label").css({"font-size":"18px"}); 
}

function makeSmall()
{
        $("h5").css({"font-size":"100%"});  
        $("p").css({"font-size":"14px"}); 
        $("label").css({"font-size":"17px"});
}

function main(){

    connectPrompt();

    $('.nav-collapse').on('show', function () { 
      $(document.body).css({"padding-top":"190px"});});

    $('.nav-collapse').on('hide', function () {
      $(document.body).css({"padding-top":"60px"});});

    var toggle = Number(localStorage.getItem("toggle"));

    if (!toggle && !(toggle === 0)){
      toggle = 1;
    }

    if(!toggle)
    {
      makeBig();
    }

    $("#font-button").click(function ()
    {
      if(toggle) {
        makeBig();
      	toggle=0;
        localStorage.setItem("toggle", 0);
      }

      else {
        makeSmall();
       	toggle=1;
        localStorage.setItem("toggle", 1);
       }

    });
}

main();