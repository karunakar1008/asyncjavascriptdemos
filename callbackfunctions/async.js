window.onload=function(){

    var fruits=["banana","pears","apple"]

    function cb(val){
        console.log(val);
    };
   $.get("data/tweets.json",cb);

   this.console.log("this print before");

};