var tests =[
    {title:"Đề thi thử THPT quốc gia 2020 môn Tiếng anh", id:"TA123V",ref:""},
    {title:"Đề thi thử THPT quốc gia 2020 môn Toán", id:"TO115D",ref:""},
    {title:"Đề thi thử THPT quốc gia 2020 môn Hóa học",id:"HO343K",ref:""},
    {title:"Đề thi thử THPT quốc gia 2020 môn Vật lý",id:"LI234D",ref:""},
    {title:"Đề thi thử THPT quốc gia 2020 môn Sinh học",id:"SI643V",ref:""},
    {title:"Đề thi thử THPT quốc gia 2020 môn Địa lý",id:"DI296D",ref:""},
    {title:"Đề thi thử THPT quốc gia 2020 môn Lịch sử",id:"SU342V",ref:""},
    {title:"Đề thi thử THPT quốc gia 2020 môn GDCD",id:"GD2364K",ref:""},
    {title:"Đề thi thử THPT quốc gia tỉnh Bình Phước môn Toán",id:"TO5434D",ref:""},
    {title:"Đề thi thử THPT quốc gia tỉnh Bình Phước môn Sinh học",id:"SI432V",ref:""},
    {title:"Đề thi thử THPT quốc gia tỉnh Đăk Lăk Sinh học",id:"SI346K",ref:""},
    {title:"Đề thi thử THPT quốc gia tỉnh Bình Phước môn Vật lý",id:"SI341D",ref:""},
    {title:"Đề thi thử THPT quốc gia tỉnh Bình Phước môn Địa lý",id:"DI231K",ref:""},
    {title:"Đề thi thử thpt quốc gia tỉnh Bình Phước môn Tiếng anh",id:"TA5343V",ref:""},
    {title:"Đề thi thử thpt quốc gia tỉnh Bình Phước môn GDCD",id:"GD322D",ref:""},
    {title:"Đề thi thử thpt quốc gia tỉnh Đăk Lăk môn Vật lý",id:"LI988K",ref:""},
    {title:"Đề thi thử thpt quốc gia tỉnh Đăk Lăk môn Tiếng anh",id:"TA959V",ref:""},
    {title:"Đề thi thử thpt quốc gia tỉnh Đăk Lăk môn Địa lý",id:"LI3434D",ref:""},
    {title:"Đề thi thử thpt quốc gia tỉnh Lâm Đồng môn GDCD",id:"GD953K",ref:""},
    {title:"Đề thi thử thpt quốc gia tỉnh Bến Tre môn Tiếng anh",id:"TA484D",ref:""},
    {title:"Đề thi thử thpt quốc gia tỉnh Lâm Đồng môn Tiếng anh",id:"TA3432K",ref:""},
    {title:"Đề thi thử thpt quốc gia tỉnh Lâm Đồng môn Vật lý",id:"LI591D",ref:""},
    {title:"Đề thi thử thpt quốc gia tỉnh Lâm Đồng môn Địa lý",id:"DI539K",ref:""},
    {title:"Đề thi thử thpt quốc gia tỉnh Bến Tre môn Sinh học",id:"SI3234V",ref:""},
    {title:"Đề thi thử thpt quốc gia tỉnh Bến Tre môn  Vật lý",id:"LI34521D",ref:""},
    {title:"Đề thi thử thpt quốc gia tỉnh Bến Tre môn Sinh học",id:"SI342754K",ref:""},
    {title:"Đề thi thử thpt quốc gia tỉnh Bến Tre môn Toán",id:"TO24341D",ref:""}    
];



$(document).ready(function(){
    //set data into button
    for(var t = 0;t<tests.length;t++){
        $("<button/>",{
            "type":"button",
            "class":"col-2 btn testBtn",
            "id":tests[t].id,
            "data-toggle":"modal",
            "data-target":"#myModal",
            text:tests[t].title,
            click: function(){
                $("#startTest").bind('click',function(){
                    location.replace("../html/Stest.html");
                });
            }
        }).appendTo("#testList");
    }

    //searching...
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

