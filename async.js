window.onload = function () {

    var http = new XMLHttpRequest();

    http.onreadystatechange = function () {
        console.log(http);
        if (http.readyState == 4 && http.status == 200) {
            console.log(JSON.parse(http.response));
        }
    };

    http.open("GET", "data/tweets.json", true);
    http.send();
    console.log("Test......");
};

/*

*/