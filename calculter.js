const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChat = ["+","-","/","*",,"%","="];
let ans = "";

// console.log(display,buttons);
const cal = (btnValue) =>  {
    if(btnValue === "=" && ans != "")
    {
        ans = eval(ans.replace("%",'/100'));
    }
    else if(btnValue === "AC")
    {
        ans = "";
    }
    else if(btnValue === "C")
    {
        ans = ans.toString().slice(0,-1);
    }
    else
    {
        if(ans === "" && specialChat.includes(btnValue)) return;
        ans += btnValue;
    }

    display.value = ans;
}

buttons.forEach((button) => {
    button.addEventListener("click",event => cal(event.target.dataset.val));
});