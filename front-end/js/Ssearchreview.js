$(document).ready(function(){
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
});