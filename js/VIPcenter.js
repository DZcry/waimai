
//	background-image: url(../img/bgs.png);
//  background-position-y: -94px;
//  color: white;
//var alist=$("#main-main .main-menu>ul>li>a");
var menutemp=null;
var redcolor="#6a3301";
//帐号信息
var $userInfo=$("#main-main").find(".main-content .user-info");
var $panelCard=$("#main-main").find(".main-content .panel-card");
//绑定卡
var $bandCard=$("#main-main").find(".main-content .bind-card-size");

$("#main-main").find(".main-menu>ul>li>a").click(function(){
//	alist.css({"background-image": "-94px","background-position-y": "-64px","color": "#6a3301","text-decoration": "none"});
    if(menutemp!=null){
        menutemp.css({"background-image": "../../img/bgs.png","background-position-y": "-64px","color": redcolor,"text-decoration": "none"});

        menutemp=null;
    }
    menutemp=$(this).css({"background-image": "../../img/bgs.png","background-position-y": "-94px","color": "white","text-decoration": "none"});

    if ($(this).attr("name")==="account"){
        $userInfo.css({"display":"block"});
        $panelCard.css({"display":"block"});
        $bandCard.css({"display":"none"});
    }
    if ($(this).attr("name")==="bandcard"){
        $userInfo.css({"display":"none"});
        $panelCard.css({"display":"none"});
        $bandCard.css({"display":"block"});
    }


});
$("#main-main").find(".main-menu>ul>li:eq(0)>a").trigger("click");