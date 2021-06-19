import { listener } from "../index"

export function msjComponent (content,title,text){
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