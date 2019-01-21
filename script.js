var d = new Date();
var n = d.getDay();
var todaysQuote;

window.addEventListener('load', function(){

  todaysQuote = '"Bigger projects coming soon"'
  document.getElementById('quote').innerHTML = todaysQuote;
  console.log("success");
});
