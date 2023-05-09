let f=0;

function buttonClick(val){
    if (f==1){
        clearDisplay()
    }
    document.getElementById("screen").value+=val
}
function clearDisplay(){
    document.getElementById("screen").value=''
    f=0
}
function equalClick(){
    var text = document.getElementById("screen").value
    var result= eval(text)
    document.getElementById("screen").value=result
    f=1
   
}