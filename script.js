var x=0;
var emp1= Array();
var emp2= Array();
function display(){
    
    
    var m=document.getElementById("mind").value;
    var n=document.getElementById("name").value;
    if(!m && !n){
        alert("Please fill both columns");
        return;
    }
    if(!n){
        alert("Please fill user name");
        return;
    }else if(!m){
        alert("Please fill user request");
        return;
    }
   
    
    emp1[x]=m.bold();
    emp2[x]=n.fontcolor("grey");
    x++;
    var e1="<br/>";
    for(var y=0;y<emp1.length;y++){
        e1+=emp1[y]+"<br/>"+emp2[y]+"<br/>"+"<br/>";
    }
    document.getElementById("result1").innerHTML=e1;
    
}

