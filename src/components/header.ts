
export function headerComp (content){
    const componentEl = document.createElement("div");
    componentEl.innerHTML=`
        <div class="header__comp">
            <div class="header__comp__logo">Logo</div>
            <input type="text" class="header__comp__buscador"></input>
            <input type="submit" class="header__comp__buscar" value="Buscar"></input>
        </div>
    `
    content.appendChild(componentEl);
}