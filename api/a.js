/*
1:
jQuery.fn = jQery.prototype
*/

/*
jquery.fn.extend(object)
*/

//(function( $ ){
    

//})(jQuery)


/*
2:
jquery.extend(object)
jquery.extend(target,object1.[objectN])
*/
(function( $ ){

    $.fn.tooltip = function(options){
	console.log('1---------tooltips');
    }

    //==
    /*
    var tooltip = function(options){
	console.log('2---------tooltips');
    }

    $.fn.extend(tooltip);
    //$.prototype.extend(tooltip);

    //$.fn.extend(tooltip) == $.prototype.extend(tooltip) == $.fn.tooltip
    */

    $('.tip').tooltip()

    $.extend({
	init:function(){
	    console.log('init');
	}
    })

    $.init();

    var result1 = $.extend({},{name:'wd',age:22},{name:'xjx',age:17})
    console.log(result1);
    var result2 = $.extend({name:'wd',address:'los'},{name:'xjx',age:17})
    console.log(result1);

    var result3=$.extend( true, {}, 
        { name: "John", location: {city: "Boston",county:"USA"} }, 
        { last: "Resig", location: {state: "MA",county:"China"} } 
    );
    console.log(result3);
    var result4=$.extend( false, {}, 
        { name: "John", location: {city: "Boston",county:"USA"} }, 
        { last: "Resig", location: {state: "MA",county:"China"} } 
    );
    console.log(result4);
    
    var result5 = $.extend({name:'pl',age:12},{state:'china',address:'hz'});
    console.log(result5);

    var result6 = $.extend({name:'hyy',age:12},{});
    console.log(result6);

})(jQuery)


