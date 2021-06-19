import { mailOptionsComponents } from "./components/mailOptions"; 
import { msjComponent } from "./components/msj";
import { headerComp } from "./components/header"; 



function goTo(path){
    history.pushState({},"",path);
    handleRoute(location.pathname);
}

function handleRoute(route){
    
    

    const optionEl = document.querySelector(".options__box");
    optionEl.innerHTML = "";
    const routes =
    [
        {
            path: /^\/inbox\/$/,
            handler: () => {mailOptionsComponents(optionEl, "Inbox")}
        },
        {
            path: /^\/sent\/$/,
            handler: () => {mailOptionsComponents(optionEl, "Sent")}
        },
        {
            path: /^\/inbox\/primero$/,
            handler: () => {msjComponent(optionEl, "Inbox", "Primer mensaje del inbox")}
        },
        {
            path: /^\/inbox\/segundo$/,
            handler: () => {msjComponent(optionEl, "Inbox", "Segundo mensaje del inbox")}
        },
        {
            path: /^\/sent\/primero$/,
            handler: () => {msjComponent(optionEl, "Sent", "Primer mensaje del sent")}
        },
        {
            path: /^\/sent\/segundo$/,
            handler: () => {msjComponent(optionEl, "Sent", "Segundo mensaje del sent")}
        },
    ];
    routes.find((item)=>{
        if (item.path.test(route)){
            item.handler();
        }
    });
}



function listener(){
    const boton1 = document.querySelector(".options__box__option1__button1");
    const boton2 = document.querySelector(".options__box__option2__button2");
    //Emails
    boton1.addEventListener("click", ()=>{

        goTo("./primero");
    });
    boton2.addEventListener("click", ()=>{
        goTo("./segundo");
    });
}


function main(){

    const header = document.querySelector(".header");
    headerComp(header);    
    goTo("/inbox/" );

    
    const optionEl = document.getElementById("options__box");
    const inboxEl = document.querySelector(".options__menu__comp__inbox");
    const sentEl = document.querySelector(".options__menu__comp__sent");
    

    inboxEl.addEventListener("click", () =>{
        optionEl.style.backgroundColor =  "#FFF59B";
        goTo("/inbox/" );
    });
    sentEl.addEventListener("click", () => {

        optionEl.style.backgroundColor =  "#FF9BB3";
        goTo("/sent/");
    });
}


main();


export {listener};