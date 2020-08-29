var Thematics =[
    {title:"Lịch sử thế giới từ 1945 đến năm 2000",id:"SU1",ref:""},
    {title:"Lịch sử thế giới hiện đại (từ 1917 đến 1945)",id:"SU2",ref:""},
];

$(document).ready(function(){

    for(var t = 0;t<Thematics.length;t++){
        $("<button/>",{
            "type":"button",
            "class":"col-md-10 col-lg-2 col-xl-2 btn testBtn",
            "id":Thematics[t].id,
            "data-toggle":"modal",
            "data-target":"#myModal",
            text:Thematics[t].title,
            click: function(){
                $("#startTest").bind('click',function(){
                    location.replace("Sreview");
                });
            }
        }).appendTo("#testList");
    }

    $("#myInput").on("keyup",function(){
        var value = $(this).val().toLowerCase();
        $("#testList button").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    //change status active button in filter
    for(var i = 0;i<$("#subjects .filterBtn").length;i++){
        $($("#subjects .filterBtn").get(i)).click(function(){
            $(".active").toggleClass("active");
            $(this).toggleClass("active");

            for(var j = 0;j < $(".testBtn").length;j++){
                var current = $($(".testBtn").get(j));
                current.show();
                if($(this).attr('id')!="all"){
                    var subjectCode = current.attr('id').slice(0,2);
                    if(subjectCode != $(this).attr('id')){
                        current.hide();
                    }
                }
            }
        });
    }

    $(window).resize(function() {     
        if($(window).width() <= 1100){
            var temp = $(window).width()*0.85;
            $(".dropdown-content").css({'cssText': 'min-width: '+ temp.toString()+'px !important'});
        }
        else{
            $(".dropdown-content").css({'cssText': 'min-width: 1080px !important'});

        }
        });
});