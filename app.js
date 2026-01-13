const passwordbox=document.getElementById("password");
const bttn=document.getElementById("btn");

const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase='abcdefghijklmnopqrstuvwxyz';
const number='1234567890';
const symbole='!@#$%^&*()_+{}<,>.?/';

const allchar=uppercase+lowercase + number+ symbole;

bttn.addEventListener("click",function createpasseord(){
    let length=Number(prompt("Enter The Requied Length of Password"));
    if(length<4){
        alert("Password length must be at least 4");
        return;
    }
    let passsword="";

    // passsword+=uppercase[Math.floor(Math.random()*allchar.length)];
    // passsword+=lowercase[Math.floor(Math.random()*allchar.length)];
    // passsword+=number[Math.floor(Math.random()*allchar.length)];
    // passsword+=symbole[Math.floor(Math.random()*allchar.length)];
    while(length>passsword.length){
        passsword+=allchar[Math.floor(Math.random()*allchar.length)];
    }

    passwordbox.value=passsword;
});

const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", () => {
    if (passwordbox.value === "") {
        alert("No password to copy!");
        return;
    }

    // Select the text
    passwordbox.select();
    passwordbox.setSelectionRange(0, 99999); // mobile support

    // Copy to clipboard
    navigator.clipboard.writeText(passwordbox.value)
        .then(() => {
            alert("Password copied!");
        })
        .catch(() => {
            alert("Failed to copy");
        });
});