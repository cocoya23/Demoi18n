$(function(){
    
    i18n.init(function(t){
        
        $(".menu").i18n();
        $(".menuLang").i18n();
        
        $("#titulo").append(t("app.welcome"));
        
    });
    
});