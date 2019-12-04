var textNodes = document.getElementsByClassName("ellipsis");
var amazonTotes = document.getElementsByClassName("channel-amazon").length;
var ebayTotes = document.getElementsByClassName("channel-ebay").length;
var etsyTotes = document.getElementsByClassName("channel-etsy").length;
var multiBuyTote = totes - (amazonTotes + etsyTotes + ebayTotes)
var finalSkuCode = '';
var totes = textNodes.length
for (var r = 0; r < textNodes.length; r++) {

var nodeElement = textNodes[r];
nodeElement = nodeElement.childNodes[2].nodeValue

console.log(nodeElement);

finalSkuCode += nodeElement+"\n";
console.log(totes)

}
copy(finalSkuCode);
`Total posters ${totes} - Amazon ${amazonTotes} - Etsy ${etsyTotes} - Ebay ${ebayTotes} - Total multibuy orders ${multiBuyTote}`
