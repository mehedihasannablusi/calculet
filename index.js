

function DeleteMe(){

    document.getElementById("Myresult").value = ''
    
}
function calculator(NewValue){

    document.getElementById("Myresult").value += NewValue ; 

    NewValue


}
function Answer(){
let a = document.getElementById("Myresult").value ;
let b = eval(a);
document.getElementById("Myresult").value = b 

}