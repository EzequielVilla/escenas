

function inOutComponent(content,title){
    const componentEl = document.createElement("div");
        componentEl.innerHTML= `
        <div class="options__box__welcome">
            <h2 class="options__box__title">${title}</h2>
            <div class="options__box__option">
                <p class="options__box__option1__txt">Un email</p> 
                <button type="button" id="boton" class="options__box__option1__button1">ENTRAR</button>
            </div>
            <div class="options__box__option">
                <p class="options__box__option2__txt">Otro email</p> 
                <button type="button" class="options__box__option2__button2">ENTRAR</button>
            </div>
        </div>
        `
        content.appendChild(componentEl);
        listener();
}

function msjComponent (content,title,text){
    const componentEl = document.createElement("div");
    componentEl.innerHTML=`
        <div class="options__box__action">
                    <h2 class="options__box__action__title">${title}</h2>
                    <p class="options__box__action__txt">${text}</p>
        </div>
    `
    content.appendChild(componentEl);
    listener()
}









function goTo(path){
    history.pushState({},"",path);
    handleRoute(location.pathname);
}

function handleRoute(route){
    // contador();
    

    const optionEl = document.querySelector(".options__box");
    optionEl.innerHTML = "";
    const routes =
    [
        {
            path: /^\/inbox\/$/,
            handler: () => {inOutComponent(optionEl, "Inbox")}
        },
        {
            path: /^\/sent\/$/,
            handler: () => {inOutComponent(optionEl, "Sent")}
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

    
    //Comienzo
    goTo("/inbox/" );
    //
    // window.addEventListener("load", ()=> {
    //     handleRoute(location.pathname);
    // })
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