$(function(){

    var res;                 // 값을 임시저장하기 위한 변수
    var money = [];     // 배열변수, 동일한 변수이름으로 인덱스를 적용하여
                                 // 여러개의 값을 저장하기 위한 목적

    for (var i=0;     i<6;       i++) {    // 인덱스 번호는 0, 1, 2, 3, 4, 5까지 적용

        money[i] = $("tr.goodsPrice").eq(i).find("span").text();
        money[i] = parseInt(money[i]);
        res = money[i].toLocaleString();
        $(".goodsPrice").eq(i).find("span").text(res);

    }

    // 모달 레이어 팝업 시작
    $("table.goodsInfo").click(function(){

        // 클릭한 이미지 가져오기
        var imgSrc = $(this).find("img").attr("src");
        $("div#layerBG").css({"display": "block"});        
        $("div#popImg").children("img").attr("src", imgSrc);
 
        // 클릭한 상품명 가져오기
        var popupGoodsName = $(this).find("tr.goodsName").children("td").html();
        popupGoodsName = popupGoodsName.replace("<br>", "");
        $("div#popGoodsName").html(popupGoodsName);

        // 클릭한 상품가격 가져오기
        var popupGoodsPrice = $(this).find("tr.goodsPrice").children("td").html();        
        $("div#popGoodsPrice").html(popupGoodsPrice);

    });

    $("div#closeBtn").click(function(){
        $("div#layerBG").css({"display": "none"});
    });

});