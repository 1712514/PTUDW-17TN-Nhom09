var news = [
    { title: "Thông báo hủy các lớp học phần Cơ sở lập trình MTH00005", link: "https://www.hcmus.edu.vn/component/content/article/186-phong-dao-tao/thong-bao-he-chinh-quy/dang-ky-hoc-phan/3026-thong-bao-huy-cac-lop-hoc-phan-co-so-lap-trinh-mth00005?Itemid=437" },
    { title: "Kế hoạch giảng dạy - học tập từ HK2/2019-2020 - CT Liên thông đại học", link: "https://www.hcmus.edu.vn/component/content/article/192-phong-dao-tao/thong-bao-lien-thong-dai-hoc/thoi-khoa-bieu_lt/3018-ke-hoach-giang-day-hoc-tap-tu-hk2-2019-2020-ct-lien-thong-dai-hoc?Itemid=437" },
    { title: "Thông báo kế hoạch thực tập Sinh học đại cương 2", link: "https://www.hcmus.edu.vn/component/content/article/191-phong-dao-tao/thong-bao-he-chinh-quy/thong-bao-khac/3027-thong-bao-ke-hoach-thuc-tap-sinh-hoc-dai-cuong-2?Itemid=437" },
    { title: "Thông báo hủy các lớp học phần Cơ sở lập trình MTH00005", link: "https://www.hcmus.edu.vn/component/content/article/186-phong-dao-tao/thong-bao-he-chinh-quy/dang-ky-hoc-phan/3026-thong-bao-huy-cac-lop-hoc-phan-co-so-lap-trinh-mth00005?Itemid=437" },
    { title: "Kế hoạch giảng dạy - học tập từ HK2/2019-2020 - CT Liên thông đại học", link: "https://www.hcmus.edu.vn/component/content/article/192-phong-dao-tao/thong-bao-lien-thong-dai-hoc/thoi-khoa-bieu_lt/3018-ke-hoach-giang-day-hoc-tap-tu-hk2-2019-2020-ct-lien-thong-dai-hoc?Itemid=437" },
    { title: "Thông báo kế hoạch thực tập Sinh học đại cương 2", link: "https://www.hcmus.edu.vn/component/content/article/191-phong-dao-tao/thong-bao-he-chinh-quy/thong-bao-khac/3027-thong-bao-ke-hoach-thuc-tap-sinh-hoc-dai-cuong-2?Itemid=437" },
    { title: "Thông báo hủy các lớp học phần Cơ sở lập trình MTH00005", link: "https://www.hcmus.edu.vn/component/content/article/186-phong-dao-tao/thong-bao-he-chinh-quy/dang-ky-hoc-phan/3026-thong-bao-huy-cac-lop-hoc-phan-co-so-lap-trinh-mth00005?Itemid=437" },
    { title: "Kế hoạch giảng dạy - học tập từ HK2/2019-2020 - CT Liên thông đại học", link: "https://www.hcmus.edu.vn/component/content/article/192-phong-dao-tao/thong-bao-lien-thong-dai-hoc/thoi-khoa-bieu_lt/3018-ke-hoach-giang-day-hoc-tap-tu-hk2-2019-2020-ct-lien-thong-dai-hoc?Itemid=437" },
    { title: "Thông báo kế hoạch thực tập Sinh học đại cương 2", link: "https://www.hcmus.edu.vn/component/content/article/191-phong-dao-tao/thong-bao-he-chinh-quy/thong-bao-khac/3027-thong-bao-ke-hoach-thuc-tap-sinh-hoc-dai-cuong-2?Itemid=437" },
];

function show_news() {
    for (var i=0; i<news.length; i++) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.setAttribute("href", news[i].link);
        a.setAttribute("class", "news-line");
        a.setAttribute("target", "_blank");
        a.appendChild(document.createTextNode(news[i].title));
        var ul = document.getElementById("news-board");
        li.appendChild(a);
        ul.appendChild(li);
    }
}

show_news();