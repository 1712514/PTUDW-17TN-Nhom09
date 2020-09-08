
var questions = fetch('https://uniez.herokuapp.com/api/exam/su1').then(response => response.json()).then(data => questions = data);
setTimeout(() => { 

var endTime = new Date().getTime() + 5400000;//90'
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
    
    if(now > endTime){
      $("#myModal").modal('show');
      $("#cancel").remove();
      $("#theEnd").text("Xem kết quả");
      $("#notification").text("Rất tiếc! Thời gian làm bài của bạn đã hết.");
      $("#theEnd").bind('click',function(){
        showResult();
      });
      clearInterval(x);
    }
    else{
      // Find the distance between now and the count down date
    var distance = endTime - now;
      
    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#hours").html(hours);
			$("#minutes").html(minutes);
			$("#seconds").html(seconds);	
    }
      
  }, 1000);

//checking users leave webpage
/*window.addEventListener("beforeunload", function(event) {
    event.returnValue = "Bài thi chưa hoàn thành! Bạn vẫn muốn rời đi chứ?";
  });*/

//Load data into web page
$(document).ready(function(){
  $("#res01").hide();
  
    for(var i = 0;i<questions.length;i++){
      
      localStorage.setItem("cau"+i.toString(),null);
      
      if(i == 0){
        $("<a/>",{"class":"nav-link active Bques col-md-2 col-lg-2 col-xl-2","id":"sec0","href":"#section" + i.toString(),text:questions[i].order}).appendTo("#tb_question");
      }
      else{
        $("<a/>",{"class":"nav-link Bques col-md-2 col-lg-2 col-xl-2","id":"sec"+i.toString(),"href":"#section" + i.toString(),text:questions[i].order}).appendTo("#tb_question");
      }
      
      $("<div/>",{
        "class":"frame",
        "id":"section" + i.toString(),
      }).appendTo("#questionSection");
      if(i !=0){
        $("<div/>",{"class":"emptySpace"}).appendTo("#section"+i.toString());
      }
      
      $("<div/>",{"class":"row background-T","id":"s01_" + i.toString()}).appendTo("#section"+i.toString());
      
      $("<div/>",{"class":"col-md-11 col-lg-11 col-xl-11 question","id":"s02_"+i.toString()}).appendTo("#s01_"+i.toString());
      
      $("<p/>",{text:questions[i].order +": "+ questions[i].question}).appendTo("#s02_"+i.toString());
      
      $("<form/>",{"id":"form_"+i.toString()}).appendTo("#s02_"+i.toString());
      
      for(var c = 65 ;c<=68;c++){
        $("<div/>",{"class":"form-check","id":"form_check_"+ i.toString()+c.toString()}).appendTo("#form_"+i.toString());
        
        $("<label/>",{"class":"form-check-label","id":"form_check_label_"+i.toString()+c.toString()}).appendTo("#form_check_"+i.toString()+c.toString());
        
        $("<input/>",{"class":"form-check-input","id":"form-check-input_"+c.toString()+i.toString(),"type":"radio","name":"optradio","value":String.fromCharCode(c)}).appendTo("#form_check_label_"+i.toString()+c.toString());
        switch(c) {
          case 65:
            $("<p/>",{"id":c.toString()+i.toString(),text:questions[i].A}).appendTo("#form_check_label_"+i.toString()+c.toString());
            break;
            case 66:
              $("<p/>",{"id":c.toString()+i.toString(),text:questions[i].B}).appendTo("#form_check_label_"+i.toString()+c.toString());
              break;
              case 67:
                $("<p/>",{"id":c.toString()+i.toString(),text:questions[i].C}).appendTo("#form_check_label_"+i.toString()+c.toString());
                break;
                case 68:
                  $("<p/>",{"id":c.toString()+i.toString(),text:questions[i].D}).appendTo("#form_check_label_"+i.toString()+c.toString());
                  break;
                }
              }
              if(i == questions.length-1){
                $("<div/>",{"class":"emptySpace", "id" :"endSection"}).appendTo("#section"+i.toString());
              }
            }
            
            
            var radio = document.getElementsByClassName("form-check-input");
            for(var j = 0;j<radio.length;j++){
              radio[j].addEventListener("change", function () {
                var id = this.getAttribute("id");
                if($("#" + id).is(":checked")){
                  
                  $("#sec"+id.slice(19,id.length)).css("background-color", "#6eab32");
                  localStorage.setItem("cau" + id.slice(19,id.length),id.slice(17,19));
                }
              });
            }
            
            $("#Submit").click(function(){
              $("#theEnd").bind('click',function(){
                showResult();
              });
            });
            if($(window).width() < 1730){
              respon_timeTable();
            }
            
            $(window).resize(function(){respon_timeTable();});
});

//show result of the test after submit or run out of time
function showResult(){
  console.log("test");
  $("#timer").remove();
  $("#Submit").remove();
  $("#endSection").remove();
  var numberOfCorrect = questions.length;;
  $("input:radio[name=optradio]").attr("disabled",true);
  for(var i = 0;i<questions.length;i++){
    if(questions[i].answer != String.fromCharCode(parseInt(localStorage.getItem("cau" + i.toString())))){
      $("#sec" + i.toString()).css("background-color", "#a02424");
      numberOfCorrect--;
      if(localStorage.getItem("cau" + i.toString()) != null){
        $("#" + localStorage.getItem("cau" + i.toString()) + i.toString()).css("color","red");
      }
      $("#" + questions[i].answer.charCodeAt(0).toString() + i.toString()).css("color","#CCFF00");
    }
    else{
      $("#" + localStorage.getItem("cau" + i.toString()) + i.toString()).css("color","#CCFF00");
    }

    $("<div/>",{"class":"hint-T","id":"hint_" + i.toString()}).appendTo("#section"+i.toString());
    $("<div/>",{"class":"flip-card","id":"hintCard_" + i.toString()}).appendTo("#hint_"+i.toString());
    $("<div/>",{"class":"card-front-T","id":"front_"+i.toString(),text:"Nhấn để xem gợi ý bài giải"}).appendTo("#hintCard_" + i.toString());
    $("<div/>",{"class":"card-back-T","id":"back_"+i.toString()}).appendTo("#hintCard_" + i.toString());
    $("<p/>",{text: questions[i].Sol}).appendTo("#back_" + i.toString());

    $("#hintCard_"+i.toString()).click(function(){
      $(this).toggleClass("is-flipped");
    });

    //$("#section"+i.toString()).css("height","800px");

    if(i == questions.length-1){
      $("<div/>",{"class":"emptySpace"}).appendTo("#section"+i.toString());
    }
  }

  var point = numberOfCorrect*(10/questions.length);

  $("#point").text(point.toString());
  $("#numberOfCorrect").text("Số câu đúng: " + numberOfCorrect.toString() + " / " + questions.length.toString());
}


function respon_timeTable() {    

  var widthSreen = $(window).width();
  
  var temp1 = $("#myScrollspy");
  if(widthSreen < 1250 ){
    $("#res01").show();
    $("#myScrollspy").remove()
    temp1.appendTo("#res01");
    $("#myScrollspy").addClass("modal");
      $("#tb_question").hide();
    
    $("#showInfo").click(function(){
     
      if($( "#myScrollspy").is( ":hidden" )){
        
        $("#myScrollspy").modal('show');
        $("#hours").css({'font-size':'80px'});
        $("#minutes").css({'font-size':'70px'});

        $("#Submit").click(function(){
          $("#theEnd").bind('click',function(){
            showResult();
            $(".card").css({'margin-left':'50px','margin-top':'100px'});
          });
        });
      }
      else{
        $("#myScrollspy").modal('hide');
      }

    });
  }
  else if(widthSreen >= 1250 ){
    

    $("#res01").hide();
    temp1.removeClass("modal");
    temp1.show()
    $("#tb_question").show();
    $("#Bbox").prepend(temp1);
  }
}
}, 4000);