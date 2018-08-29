window.onload=function(){

    var fruits=["banana","pears","apple"]

    function callback(val){
        console.log(val);
    };
    fruits.forEach(callback);
};