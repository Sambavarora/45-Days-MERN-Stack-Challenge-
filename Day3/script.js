function gradeshower(){
var grade=document.getElementById("grade").value;
var output=document.getElementById("output");
function gradecaclulator(score){
    if(score>=90){
        return "A";        
    }
    else if(score>=80 && score<=80){
        return "B";        
    }
    else if(score>=70 && score<=79){
        return "C";        
    }
    else if(score>=60 && score<=69){
        return "D";        
    }
    else{
        return "F";        
    }
}
output.innerHTML="Your Grade is "+ gradecaclulator(grade);
return false;
}