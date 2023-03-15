var count = 0;

class ButtonCount extends HTMLElement{
    constructor(){
        super();
        // Create a shadow root
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `<button>Times Clicked: <slot> ${count} </slot></button>`;
    }
}

customElements.define('button-count', ButtonCount);

let customButton = document.querySelector("button-count");
let shadowButton = customButton.shadowRoot;

customButton.addEventListener("click", () => {
    count+=1;
    console.log(count);
    shadowButton.innerHTML= `<button>Times Clicked:<slot> ${count}</slot></button>`;
});

