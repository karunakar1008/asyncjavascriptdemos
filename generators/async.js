window.onload = function () {
    function* gen() {
        var x = yield 10; //yield pause the value for some time
        console.log(x);
    }

    var myGen = gen();
    console.log (myGen.next());
    console.log (myGen.next(30));
}