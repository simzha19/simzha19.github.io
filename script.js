var d = new Date();
var n = d.getDay();
var todaysQuote;

window.addEventListener('load', function(){

  if(n == 0){
    todaysQuote = "Work hard in silence, and let your success be your noise ~ Frank Ocean";
  }
  if(n == 1){
    todaysQuote = "I was gifted with a talent that was god-given, But I was so hard-headed I would not listen. Sometimes I sit and I reflect about that cold prison ~ Gucci Mane";
  }
  if(n == 2){
    todaysQuote = "You weren't perfect but you made life worth it. Stick around, some real feelings might surface ~ Kanye West";
  }
  if(n == 3){
    todaysQuote = "On freeway, but no, ain't nothin' free ~ Travis Scott";
  }
  if(n == 4){
    todaysQuote = "Neglected for now, but yo, it gots to be accepted, That what? That life is hectic ~ Inspectah Deck";
  }
  if(n == 5){
    todaysQuote = "Hit Canal Street, vintage gold medallion, Smokin' blunts in front of public housin' ~ A$AP Rocky";
  }
  if(n == 6){
    todaysQuote = "The start of nothing, I could hate you now. It's quite alright to hate me now ~ Frank Ocean";
  }
  document.getElementById('quote').innerHTML = todaysQuote;
  console.log("success");
});
