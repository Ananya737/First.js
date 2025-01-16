//BOM-Browser Object Model

function three(){
    let ans= window.alert("Please rate our website after use");
    console.log(ans);
}

function one(){
    let ans= window.confirm("Are you sure you want to delete this");
    window.alert(ans);
}

function two(){
    let ans= window.prompt("Enter your name");
    
    window.alert(ans);
}

// function add(){
//     let ans = a+b ;
//     let show = window.prompt('Enter two digits to add');
//     window.alert(show);
//     window.alert(ans);
// }

function rate(){

}
//do prompt ka addition. 

function add(){
    let a= parseFloat(window.prompt("Enter a number"));
    let b= parseFloat(window.prompt("Enter another number"));
   let sum= a+b;
    
        window.alert(sum);
    

}
