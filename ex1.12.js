function breakURL(url) {
  var parts = [];

    var urlObj = new URL(url);

  
  parts.push(urlObj.protocol); 
  parts.push(urlObj.hostname); 
  parts.push(urlObj.pathname); 
  
  return parts;
}


var url = 'https://www.javascriptweb.org/page/2/the-page-details-comes-here/';
var urlParts = breakURL(url);

console.log(urlParts);
