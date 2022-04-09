import logo from "./logo.js";
let logo_div = document.getElementById("logo_div");
logo_div.innerHTML = logo();

let saveBtn = document.getElementById("btnSave");
let oldBtn = document.getElementById("btnOld");
let newBtn = document.getElementById("newBtn");


newBtn.addEventListener("click", () => {
    let side_div = document.getElementById("side_div");

    side_div.style.visibility = "hidden";

    let input = document.getElementById("input");

    input.style.visibility = "visible";
})

saveBtn.addEventListener("click", () => {

    let input = document.getElementById("input").value;
    let side_div = document.getElementById("side_div");
    let div1 = document.createElement('div');

    if(input.length > 0){
        div1.setAttribute("id", "div1");
        div1.innerHTML = input;
        
        side_div.append(div1);

        let alertDiv = document.getElementById("alert_div");

        alertDiv.style.visibility = "visible";
        alertDiv.style.width = "180px";
        alertDiv.innerHTML = "Your Note is Saved...";

        setTimeout(() => {
            alertDiv.style.visibility = "hidden";
            alertDiv.style.width = "auto";
            alertDiv.innerHTML = null;
        }, 2000)
        

        let del_f = false;

        div1.addEventListener("click", ()=> {
            div1.style.border = "0.5px solid red";

            del_f = true;
            let btn_del = document.getElementById("btn_del");


            btn_del.addEventListener("click", ()=> {
                if(del_f === true){
                    div1.remove();

                    let alertDiv = document.getElementById("alert_div");
    
                    alertDiv.style.visibility = "visible";
                    alertDiv.style.width = "180px";
                    alertDiv.innerHTML = "Your Note is Removed...";
            
                    setTimeout(() => {
                        alertDiv.style.visibility = "hidden";
                        alertDiv.style.width = "auto";
                        alertDiv.innerHTML = null;
                    }, 2000)
                }
                

            })

        })

        div1.addEventListener("dblclick", ()=> {
            del_f = false;
            div1.style.border = "none";
        })
    }
    

    
    
})


oldBtn.addEventListener("click", ()=> {
        
    let side_div = document.getElementById("side_div");
    let input = document.getElementById("input");

    input.style.visibility = "hidden";
    side_div.style.visibility = "visible";
    console.log(12)
})