var textNodes = document.getElementsByClassName("ellipsis");
var finalSkuCode = '';
for (var r = 0; r < textNodes.length; r++) {

var nodeElement = textNodes[r];
nodeElement = nodeElement.childNodes[2].nodeValue

if (nodeElement.indexOf('a4-') > -1) {
nodeElement = nodeElement.split('-')[1];
}
console.log(nodeElement);

finalSkuCode += nodeElement+"\n";

}
copy(finalSkuCode);