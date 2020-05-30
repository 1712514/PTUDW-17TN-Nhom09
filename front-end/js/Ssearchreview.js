var Thematics =[
    {title:"Hình học không gian", id:"TO123",ref:""},
    {title:"Đại số giải tích", id:"TO115",ref:""},
    {title:"Số phức",id:"TO343",ref:""},
    {title:"Phương trình đường thẳng",id:"TO234",ref:""},
    {title:"Hệ phương trình 2 ẩn",id:"TO643",ref:""},
    {title:"CACBOHIDRAT",id:"HO296",ref:""},
    {title:"ESTE-LIPIT",id:"HO342",ref:""},
    {title:"POLIME và vật liệu POLIME",id:"HO236",ref:""},
    {title:"Đại cương về kim loại",id:"HO543",ref:""},
    {title:"Nhiệt động lực học",id:"LI432",ref:""},
    {title:"Dao động điều hòa",id:"LI346",ref:""},
    {title:"Con lắc lò xo",id:"LI341",ref:""},
    {title:"Sóng cơ học",id:"LI231",ref:""},
    {title:"Dòng điện xoay chiều",id:"LI534",ref:""},
    {title:"Dao động và sóng điện từ",id:"LI32",ref:""},
    {title:"Các thì trong tiếng anh",id:"TA434",ref:""},
    {title:"Từ vựng",id:"TA959",ref:""},
    {title:"Viết lại câu",id:"TA743",ref:""},
    {title:"Đảo ngữ",id:"TA953",ref:""},
    {title:"Địa lý khu vực và quốc gia",id:"DI484",ref:""},
    {title:"Địa lý kinh tế Việt Nam",id:"DI387",ref:""},
    {title:"Sự phân hóa lãnh thổ",id:"DI591",ref:""},
    {title:"Lịch sử thế giới từ 1945 đến năm 2000",id:"SU539",ref:""},
    {title:"Lịch sử thế giới hiện đại (từ 1917 đến 1945)",id:"SU437",ref:""},
    {title:"DI TRUYỀN HỌC",id:"SI345",ref:""},
    {title:"SINH THÁI HỌC",id:"SI953",ref:""},
    {title:"TIẾN HOÁ",id:"SI509",ref:""},
    {title:"Công dân với đạo đức",id:"GD345",ref:""},
    {title:"Công dân với các vấn đề chính trị xã hội",id:"GD953",ref:""},
    {title:"Công dân với việc hình thành thế giới quan, phương pháp luận khoa học",id:"GD509",ref:""},
];

$(document).ready(function(){

    for(var t = 0;t<Thematics.length;t++){
        $("<button/>",{
            "type":"button",
            "class":"col-2 btn testBtn",
            "id":Thematics[t].id,
            "data-toggle":"modal",
            "data-target":"#myModal",
            text:Thematics[t].title,
            click: function(){
                $("#startTest").bind('click',function(){
                    location.replace("../html/Sreview.html");
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
});