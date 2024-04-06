let user= 0;
let comput=0;

const choses=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");


const u=document.querySelector("#user1");

const c=document.querySelector("#comp1");


// to declare draw
const draw= ()=>{
console.log("Game was Draw");
msg.innerText = "The game was Draw";
msg.style.backgroundColor = "#081b31";
}



// genarated by comuter
const gencomputer=()=>{

    let Option=["rock","paper","scissors"];
    let ind= Math.floor(Math.random()*3);
   return  Option[ind];
}


// to show the winner 
const showwin=(win,a,computerchoice)=>{
  if(win){
    user++;
    u.innerText= user;
    msg.innerText = `You Win! ${a} beat ${computerchoice}`;
    msg.style.backgroundColor="green";
    console.log("You Win");
}
else{
    comput++;
    c.innerText= comput;
    msg.innerText = `You lose! ${computerchoice} beat ${a}`;
    msg.style.backgroundColor="red";
    console.log("Computer Win");
}
};



// genarated by user
const genuser = (a)=>{
    console.log("genareted by user", a);
const computerchoice= gencomputer();
console.log("genareted by computer",computerchoice);
if (a===computerchoice){
    draw();
}
else{
    let win =  true;
     if(a  === "rock"){

        win= computerchoice === "paper"?false:true; 
     }
     else if (a === "paper"){
        win= computerchoice=== "scissors" ? false:true;
     }
     else {
        win = computerchoice==="rock"?false:true;
     }

     showwin(win,a,computerchoice);
}


}


// to get user choice we use Event and Attribute
choses.forEach((choice)=>{
choice.addEventListener("click", ()=>{
    const a=choice.getAttribute("Id");
  
 genuser(a);
})
   
}) 