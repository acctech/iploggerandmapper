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

function logMyDownload(pdfURL){
    let ip = getIP();
    let responseBody = JSON.parse(httpGet("https://script.google.com/macros/s/AKfycbxMeewqkNbSxvWV-XkEpma5ATDTiA5_rd78xdGvMZwGa1NkNJnI/exec" + "?ip=" + ip)).body;

    // Let the user get the download here //
    window.open(pdfURL, "_blank");
}

function getGeoData(){
    let responseBody = JSON.parse(httpGet("https://script.google.com/macros/s/AKfycbxMeewqkNbSxvWV-XkEpma5ATDTiA5_rd78xdGvMZwGa1NkNJnI/exec" + "?geodata=1")).body;
}

function getGoogleJSONData(){
    //https://script.google.com/macros/s/AKfycbxMeewqkNbSxvWV-XkEpma5ATDTiA5_rd78xdGvMZwGa1NkNJnI/exec?geodata=1&googlemap=1
    let responseBody = JSON.parse(httpGet("https://script.google.com/macros/s/AKfycbxMeewqkNbSxvWV-XkEpma5ATDTiA5_rd78xdGvMZwGa1NkNJnI/exec" + "?geodata=1&googlemap=1"));
}

function getDownloadCounter(){
    //https://script.google.com/macros/s/AKfycbxMeewqkNbSxvWV-XkEpma5ATDTiA5_rd78xdGvMZwGa1NkNJnI/exec?counter=1
    let responseBody = JSON.parse(httpGet("https://script.google.com/macros/s/AKfycbxMeewqkNbSxvWV-XkEpma5ATDTiA5_rd78xdGvMZwGa1NkNJnI/exec" + "?geodata=1&counter=1"));
    return(Math.trunc(responseBody.counter));
}

