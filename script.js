const maindiv=document.createElement("div")
// maindiv.setAttribute("class", "align-center" , "h1" ,"color-white")
maindiv.setAttribute("id", "calcBox")
let selectedDiv=document.getElementById("calcBox")
console.log("selectedDiv");
let displayBar = document.getElementById("displayBar");
document.body.innerHTML+=`
<table cellpadding="0" cellspacing="0";>
    <tr>
        <td id="displayBar" colspan="4">0</td>
    </tr>
    <tr>
        <td colspan="4"><button onclick="getValue(this)" class="button" id="AC">AC</button></td>
    </tr>
    <tr>
        <td><button onclick="getValue(this)" class="button">+</button></td>
        <td><button onclick="getValue(this)" class="button">-</button></td>
        <td><button onclick="getValue(this)" class="button">*</button></td>
        <td><button onclick="getValue(this)" class="button">/</button></td>
    </tr>
    <tr>
        <td><button onclick="getValue(this)" class="button">9</button></td>
        <td><button onclick="getValue(this)" class="button">8</button></td>
        <td><button onclick="getValue(this)" class="button">7</button></td>
        <td><button onclick="getValue(this)" id="disabled" class="button"><span class="hide">H</span></button></td>
    </tr>
    <tr>
        <td><button onclick="getValue(this)" class="button">6</button></td>
        <td><button onclick="getValue(this)" class="button">5</button></td>
        <td><button onclick="getValue(this)" class="button">4</button></td>
        <td><button onclick="getValue(this)" id="disabled" class="button"><span class="hide">H</span></button></td>
    </tr>
    <tr>
        <td><button onclick="getValue(this)" class="button">3</button></td>
        <td><button onclick="getValue(this)" class="button">2</button></td>
        <td><button onclick="getValue(this)" class="button">1</button></td>
        <td><button onclick="getValue(this)" id="disabled" class="button"><span class="hide">H</span></button></td>
    </tr>
    <tr>
        <td><button onclick="getValue(this)" class="button">C</button></td>
        <td><button onclick="getValue(this)" class="button">0</button></td>
        <td><button onclick="getValue(this)" class="button">.</button></td>
        <td><button onclick="getValue(this)" id="disabled" class="button"><span class="hide">H</span></button></td>
    </tr>
    <tr>
        <td colspan="4"><button onclick="getValue(this)" class="button" id="eval">=</button></td>
    </tr>
</table>
`
function getValue(obj) 
{
    let inputNum = obj.innerHTML;

    if (inputNum == "=") 
    {
        displayBar.innerHTML = eval(displayBar.innerHTML);
    } 
    else if (inputNum == "C") 
    {
        displayBar.innerHTML = "0";
    }
    else if (inputNum == "AC")
    {
        displayBar.innerHTML = "0";
    }
    else 
    {
        if (displayBar.innerHTML == "0") 
        {
            displayBar.innerHTML = inputNum;
        } 
        else 
        {
            displayBar.innerHTML += inputNum;
        }
    }
}
