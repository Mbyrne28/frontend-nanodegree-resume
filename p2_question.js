var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!
    var result="";
    for(item in newHTML){
    	if (newHTML[item] != "<" && newHTML[item] != ">" ){
    		result += newHTML[item]
    	}
    }
    //newHTML = newHTML.replace("<","")
    //newHTML = newHTML.replace(">","")
    // Given solution...
    //newHTML = _html.replace(/</g, "&lt;");
    //newHTML = newHTML.replace(/>/g, "&gt;");

    newHTML = result
    // Don't delete this line!
    return newHTML;
};

// Did your code work? The line below will tell you!
debug(charEscape(html));