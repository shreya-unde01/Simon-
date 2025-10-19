let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function()
{
  if(started==false)
    {
    started=true;
    levelUp();
    }
});
function gameFlash(btn)
{
  btn.classList.add("flash");
  setTimeout(function()
  {
  btn.classList.remove("flash");
  },250)
}

function userFlash(btn)
{
  btn.classList.add("userflash");
  setTimeout(function()
  {
  btn.classList.remove("userflash");
  },250)
}


function levelUp()
{ userseq=[];
  level++;
  h2.innerText=`Level ${level}`;
    
  let randIdx=Math.floor(Math.random()*4); 
  let randcolor=btns[randIdx];
  let randbtn=document.querySelector(`.${randcolor}`)
  gameseq.push(randcolor);
  console.log("game is started");

  gameFlash(randbtn);
}
function checkAns(idx)
{
    
    if(userseq[idx]===gameseq[idx])
    {
       if(userseq.length==gameseq.length)
       {
        setTimeout(levelUp,1000);
       }
    }
    else{
        h2.innerHTML=`Game over!<b>${level}</b> <br> Press any key to start`;
        reset();
    }
}





function btnpress()
{
  let btn=this;
  userFlash(btn);
  let userColor =btn.getAttribute("id");
  userseq.push(userColor);

  checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(let btn of allBtns)
{
    btn.addEventListener("click",btnpress);
}

function reset()
{
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}