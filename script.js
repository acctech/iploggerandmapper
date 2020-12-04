function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function getIP(){
    return JSON.parse(httpGet("https://api.ipify.org/?format=json")).ip;
}

function logMyDownload(pdfURL, counterFor){
    let ip = getIP();
    let responseBody = JSON.parse(httpGet("https://script.google.com/macros/s/AKfycbxMeewqkNbSxvWV-XkEpma5ATDTiA5_rd78xdGvMZwGa1NkNJnI/exec" + "?ip=" + ip + "&counterFor=" + counterFor)).body;
    // Let the user get the download here //
    window.open(pdfURL, "_blank");
}

function getDownloadCounter(counterFor){
    //https://script.google.com/macros/s/AKfycbxMeewqkNbSxvWV-XkEpma5ATDTiA5_rd78xdGvMZwGa1NkNJnI/exec?geodata=1&counter=1&counterFor=academia
    let responseBody = JSON.parse(httpGet("https://script.google.com/macros/s/AKfycbxMeewqkNbSxvWV-XkEpma5ATDTiA5_rd78xdGvMZwGa1NkNJnI/exec" + "?geodata=1&counter=1" + "&counterFor=" + counterFor));
    return(Math.trunc(responseBody.counter));
}

function getGoogleGeoData(locationDataFor){
   return JSON.parse(httpGet("https://script.google.com/macros/s/AKfycbxMeewqkNbSxvWV-XkEpma5ATDTiA5_rd78xdGvMZwGa1NkNJnI/exec" + "?geodata=1&googlemap=1&locationDataFor=" + locationDataFor));
}

