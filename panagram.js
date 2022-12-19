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
    "    if(sent.indexOf(alp[i]) === -1){ \n"+
    "        return \"not pangram\"; \n"+
    "    } \n"+
    "    } \n"+
    "    return \"pangram\"; \n"+
    "} \n"+
    
    "pangrams(\"We promptly judged antique ivory buckles for the next prize\"); \n"
}
    