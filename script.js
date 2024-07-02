const btn=document.getElementById("btn")
const area=document.getElementById("area")
const output=document.getElementById("output")

const helpregex=/please help|assist me/i;
const dollarregex=/[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;
const moneyregex=/(?:^\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
const stockalert=/(?:^\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
const friendregex=/(?:^\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;


const allregex=[helpregex,dollarregex,stockalert,moneyregex,friendregex]
const checkspam=(usermsg)=>allregex.some(regex=>regex.test(usermsg))
btn.addEventListener("click",()=>{
    if(area.value===""){
        alert("Pease Enter a Some Text")
        return;
    }
output.textContent=checkspam(area.value)
?"Oh no! This looks like a spam message."
:"This message does not seem to contain any spam."
area.value=""
})