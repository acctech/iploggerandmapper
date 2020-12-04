function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
    xmlHttp.onload = function() {
        callback(xmlHttp.responseText);
    }
    xmlHttp.send( null );
}

function getIP(callback){
    httpGetAsync("https://api.ipify.org/?format=json", function(response){
        let ip = JSON.parse(response).ip;
        callback(ip);
    });
}

function logMyDownload(pdfURL, counterFor, callback){
    try{
        getIP(function(ip){
            httpGetAsync("https://script.google.com/macros/s/AKfycbxMeewqkNbSxvWV-XkEpma5ATDTiA5_rd78xdGvMZwGa1NkNJnI/exec" + "?ip=" + ip + "&counterFor=" + counterFor, callback);
            console.log("Thank you for downloading.");
        });
    } catch (e) {}
    // Let the user get the download here //
    window.open(pdfURL, "_blank");
}

function getDownloadCounter(counterFor, callback){
    //https://script.google.com/macros/s/AKfycbxMeewqkNbSxvWV-XkEpma5ATDTiA5_rd78xdGvMZwGa1NkNJnI/exec?geodata=1&counter=1&counterFor=academia
    httpGetAsync("https://script.google.com/macros/s/AKfycbxMeewqkNbSxvWV-XkEpma5ATDTiA5_rd78xdGvMZwGa1NkNJnI/exec" + "?geodata=1&counter=1" + "&counterFor=" + counterFor, function(response){
        let responseBody = JSON.parse(response);
        let integerCounter = Math.trunc(responseBody.counter);
        callback(integerCounter);
    });
}

function getGoogleGeoData(locationDataFor, callback){
   httpGetAsync("https://script.google.com/macros/s/AKfycbxMeewqkNbSxvWV-XkEpma5ATDTiA5_rd78xdGvMZwGa1NkNJnI/exec" + "?geodata=1&googlemap=1&locationDataFor=" + locationDataFor, callback);
}

