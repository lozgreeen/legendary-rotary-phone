var textbox;
var c;
var link = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22";
var link2 = "%20";
var link3 = "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textbox = createInput();
    textbox.changed(loadLocation);
    textbox.position(width/4, height/4)
    textbox.style('font-size', '40px');
    textbox.style('background', 'white');
    textbox.style('border', '0px');
    textbox.style('outline', '0');
    textbox.style('color', 'black');
}

function loadLocation() {
    var city = textbox.value();
    var loc = link.concat(city,link2,city,link3);
    loadJSON(loc, gotWeather);
}
 
function gotWeather(data) {
  var c = map (data.query.results.channel.item.condition.temp, 5, 302, -15, 150);
  var r = map (c, -5, 40, 0, 255);
  var gb = map (c, -5, 40, 255, 0);
  fill(r, gb, gb);
  ellipse(width/2, height/2, 70, 70);
}
 


function keyPressed(c) {
  if(keyCode == ENTER) {
      console.log(c);
      loadLocation();
    } 
}

function draw() {

}