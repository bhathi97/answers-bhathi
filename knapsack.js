function function1() {
    document.getElementById('sol').innerHTML=
    "//knapsack algorithm customized here \n" +
    "function getTotalPrice(items, curWeight, curSize, curIndex) { \n"+
    "//if no items \n"+
    "   if (curIndex == 0 || curWeight == 0 || curSize==0) \n"+
    "       return 0; \n"+
    "//there are items \n"+
    "   else\n"+
    "   //becoz curlindex = lenght \n"+
    "       if (items[curIndex - 1].weight > curWeight  || items[curIndex - 1].size > curSize) \n"+
    "           return getTotalPrice(items, curWeight, curSize, curIndex-1); \n"+    
    "       else \n"+
    "           return max(items[curIndex - 1].price + getTotalPrice(items,curWeight -items[curIndex - 1].weight,curSize-items[curIndex - 1].size, curIndex - 1),getTotalPrice(items, curWeight, curSize, curIndex-1)); \n" +
    "}"+
    " \n"+
    "function max(a, b){ \n"+
    "    return (a > b) ? a : b; \n"+
    "}"+
      
    " \n"+
    "const itemList = [\n"+
    "{ weight: 10, price: 20, size: 30 },\n"+
    "{ weight: 15, price: 25, size: 35 },\n"+
    "{ weight: 20, price: 30, size: 40 },\n"+
    "{ weight: 25, price: 35, size: 40 }\n"+
    "];\n"+
    "\n"+
    "let x= getTotalPrice(itemList, 50, 50, itemList.length);\n"+
    "console.log(x);\n"+
    "getTotalPrice(itemList, 50, 50, itemList.length);"
    ;
}

function results() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    getTotalPrice(itemList, num1, num2, itemList.length);
}

//knapsack algorithm customized here
function getTotalPrice(items, curWeight, curSize, curIndex) {

    //var curWeight = document.getElementById("num1").value;
    //var curSize = document.getElementById("num2").value;

    if (curIndex == 0 || curWeight == 0 || curSize==0)
      return 0;
    //there are items
    else
      //becoz curlindex = lenght
      if (items[curIndex - 1].weight > curWeight  || items[curIndex - 1].size > curSize) 
        return getTotalPrice(items, curWeight, curSize, curIndex-1);    
      else
        return max(items[curIndex - 1].price +
            getTotalPrice(items,curWeight -items[curIndex - 1].weight,curSize-items[curIndex - 1].size, curIndex - 1),
            getTotalPrice(items, curWeight, curSize, curIndex-1));
   
}
  
//return maximum prize
function max(a, b){
    return (a > b) ? a : b;
}
  
const itemList = [
    { weight: 10, price: 20, size: 30 },
    { weight: 15, price: 25, size: 35 },
    { weight: 20, price: 30, size: 40 },
    { weight: 25, price: 35, size: 40 }
];
  
let x= getTotalPrice(itemList,document.getElementById("num1").value, document.getElementById("num2").value, itemList.length);
console.log(x);
alert(x);

getTotalPrice(itemList, 50, 50, itemList.length);

        
function directFunction1(){
    window.location.href = "knapsakSol.html";
}

