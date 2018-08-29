window.onload = function () {

    // var http = new XMLHttpRequest();

    // http.onreadystatechange = function () {
    //     console.log(http);
    //     if (http.readyState == 4 && http.status == 200) {
    //         console.log(JSON.parse(http.response));
    //     }
    // };

    // http.open("GET", "data/tweets.json", false);
    // http.send();
    // console.log("Testdddddddd");

    //Same with Jquery

    $.get("data/tweets.json", function (d) {
        console.log(d);
    });

    console.log("It will be called before get method response");
};

/*

*/