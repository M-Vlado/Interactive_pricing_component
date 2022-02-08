(function($) {

var slider = $(".slider"),
    viewsVal = $(".views"),
    price = $(".price-value"),
    discount = $(".inp"),
    disOn = false;

    discount.on("change", function(event){
        if(disOn == false){
            disOn = true;
        }else {
            disOn = false;
        }
        countPrice();

    })

slider.on("input", function(){
    countPrice();
    var x = (slider.val()/10000)-1,
    color = "linear-gradient(90deg, hsl(174, 77%, 80%)" + x + "%, hsl(224, 65%, 95%)" + x +"%)";
    slider.css("background", color);


})



function countPrice (){
    if(slider.val() < 50000){
        viewsVal.text("10K Pageviews");
        if(disOn == false){
            price.text("$8.00"); 
        }else {
            price.text("$6.00");
        }
    }else if(slider.val() < 100000){
        viewsVal.text("50K Pageviews");
        if(disOn == false){
            price.text("$12.00"); 
        }else {
            price.text("$9.00");
        }
        
    }else if(slider.val() < 500000){
        viewsVal.text("100K Pageviews");
        if(disOn == false){
            price.text("$16.00");
        }else {
            price.text("$12.00");
        }
        
    }else if(slider.val() < 1000000){
        viewsVal.text("500K Pageviews");
        if(disOn == false){
            price.text("$24.00"); 
        }else {
            price.text("$18.00");
        }
        
    }else if(slider.val() == 1000000) {
        viewsVal.text("1M Pageviews");
        if(disOn == false){
            price.text("$36.00");
        }else {
            price.text("$27.00");
        }
        
    }

}

})(jQuery);


