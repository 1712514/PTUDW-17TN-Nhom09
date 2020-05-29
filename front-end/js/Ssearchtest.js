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

            _filter(".active2",$(this).attr('id'));
        });

        if(i<$("#levels .filterBtn").length){
            $($("#levels .filterBtn").get(i)).click(function(){
                $(".active2").toggleClass("active2");
                $(this).toggleClass("active2");

                _filter(".active",$(this).attr('id'));
            });
        }
    }
});

//function use to filter infomation
function _filter(ClassName,Id_This){
    var ID =$(ClassName).attr('id');
    
    for(var j = 0; j < $(".testBtn").length; j++){
        
        var current = $($(".testBtn").get(j));
        current.show();
        if(Id_This != "all" || ID != "all"){
            var curID = current.attr('id');
            var temp1 =  curID.slice(0,2);//code of subject
            var temp2 = curID.slice(curID.length - 1 ,curID.length);//code of level
                if(ClassName == ".active"){
                    var temp = temp1;
                    temp1 = temp2;
                    temp2 = temp;
                }
                
                if((temp1 != Id_This && Id_This!="all") || (temp2 != ID && ID !="all")){
                    current.hide();
                }
        }
    }
}

//set data into button
