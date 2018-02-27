var modularpattern = (function(){

    var sum = 0;

    return {
        add:function(){
            sum = sum + 1;
            return sum;
        },
        reset:function(){
            return sum = 0;
        }
    }
}());

var modularpattern1 = (function(){

    var sum = 0;

    return {
        add:function(){
            sum = sum + 1;
            return sum;
        },
        reset:function(){
            return sum = 0;
        }
    }
}());

var modularpattern2 = (function(){

    
})
    
var opts = $.extend(modularpattern, modularpattern1)

alert(opts.add());
alert(opts.add());
alert(opts.reset());
