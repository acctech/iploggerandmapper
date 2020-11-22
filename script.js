function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function log(output){
    let p = document.getElementById("output");
    p.innerText += "\n" + output;
    console.log(output);
}

function getIP(){
    return JSON.parse(httpGet("https://api.ipify.org/?format=json")).ip;
}

function logMyDownload(){
    let ip = getIP();
    log(ip);
    log(JSON.parse(httpGet("https://script.google.com/macros/s/AKfycbxMeewqkNbSxvWV-XkEpma5ATDTiA5_rd78xdGvMZwGa1NkNJnI/exec" + "?ip=" + ip)).body);

    // Let the user get the download here //
}

log("Script Loaded");

