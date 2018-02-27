//One Global object exposed. 
var SearchEngine = (function ( ) { 
    //Private Method.
    var luckyAlgo = function ( ){
        //create one random number.
        return Math.floor(Math.random()*11);
    }
    //Returning the object
    return {
        //Public method.
        getYourLuckyNumber : function ( ){
            //Has access to its private method because of closure.
            return luckyAlgo();        
        }
    } 
} ) ( );//Self executing method.

//Augmenting the module with submodule
SearchEngine.subSearch = (function ( ) {
   //Private variable.
   var defaultColor = "Orange";
    //private method.
    var myColorAlgo = function (num) {
        switch(num){
            case 1:
            defaultColor ="Green";break;
            case 2:
            defaultColor ="Black";break;
            case 3:
            defaultColor ="Yellow";break;
            case 4:
            defaultColor ="White";break;
            case 9:
            defaultColor ="Red";break;
        }
    }
    return {
    //public method
        getYourLuckyColor : function(){
            //access to private variable because of closure.
            myColorAlgo(SearchEngine.getYourLuckyNumber());
            return defaultColor;
        }
    }
})();