let CHF_EUR;

let CHF_USD;

let EUR_CHF;

let USD_CHF;

function loadJSON(path, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(JSON.parse(xhr.responseText));
      }
      else {
        error(xhr);
      }
    }
  };
  xhr.open('GET', path, true);
  xhr.send();
}

loadJSON("http://www.floatrates.com/daily/chf.json", currencyRate,'jsonp');

function currencyRate(Data)
{
  CHF_EUR = parseFloat(Data["eur"].rate);
  CHF_USD = parseFloat(Data["usd"].rate);
  EUR_CHF = parseFloat(Data["eur"].inverseRate);
  USD_CHF = parseFloat(Data["usd"].inverseRate);
}

let locAm=document.getElementById("localAmount");

let forAm=document.getElementById("foreignAmount");

function convert(betrag, kurs) {
    return betrag * kurs;
}

function localToForeign() {
    var CHF = locAm.value;
    if (document.getElementById("foreignExchange").value =="eur") {
        var EUR = convert(CHF,CHF_EUR);
        forAm.value = EUR.toFixed(2);
      }
    else if (document.getElementById("foreignExchange").value =="usd") {
        var USD = convert(CHF,CHF_USD);
        forAm.value = USD.toFixed(2);
    }
    playAudio();
}

function foreignToLocal() {
    if (document.getElementById("foreignExchange").value =="eur") {
        var EUR = forAm.value;
        var CHF = convert(EUR,EUR_CHF);
        locAm.value = CHF.toFixed(2);
    }
    else if (document.getElementById("foreignExchange").value =="usd") {
        var USD = forAm.value;
        var CHF = convert(USD,USD_CHF);
        locAm.value = CHF.toFixed(2);
    }
    playAudio();
}

var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}
