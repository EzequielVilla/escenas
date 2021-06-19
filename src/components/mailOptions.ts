import { listener } from "../index"

export function mailOptionsComponents(content,title){
    
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