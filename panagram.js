function func1(){
    document.getElementById('sol').innerHTML= 
    "function pangrams(s){\n"+
    "   //get alphabet to compare\n"+
    "    var alp = \"abcdefghijklmnopqrstuvwxyz\"; \n"+
    "    //remove the spaces and convert to lowercases \n"+
    "    var sent = s.toLowerCase().replace(\" \",\"\"); \n"+
        
    "    //go throught the alphabet \n"+
    "    for (var i = 0; i < alp.length; i++){ \n"+
    "    //chech each letter is in the sent or not \n"+
    "    //The indexOf() method returns -1 if the value is not found. \n"+
    "       if(sent.indexOf(alp[i]) === -1){ \n"+
    "          return \"not pangram\"; \n"+
    "       } \n"+
    "    } \n"+
    "    return \"pangram\"; \n"+
    "} \n"+
    
    "pangrams(\"We promptly judged antique ivory buckles for the next prize\"); \n"
}

const pangrams = s => {
    //get alphabet to compare
    var alp = "abcdefghijklmnopqrstuvwxyz";
    //remove the spaces and convert to lowercases
    var sent = s.toLowerCase().replace(" ","");
    
    //go throught the alphabet
    for (var i = 0; i < alp.length; i++){
    //chech each letter is in the sent or not
    //The indexOf() method returns -1 if the value is not found.
    if(sent.indexOf(alp[i]) === -1){
        return "not a pangram";
    }
    }
    return "is a pangram";
}


function directFunction1(){
    window.location.href = "Main.html";
}

function directFunction2(){
    window.location.href = "Main2.html";
}

function directFunction3(){
    window.location.href = "panagram.html";
}

function results() {
    var s = document.getElementById("s").value;
    let s1 = pangrams(s);
    alert(s1);
}
    