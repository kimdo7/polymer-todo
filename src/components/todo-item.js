import { LitElement, html } from "@polymer/lit-element";

class TodoItem extends LitElement{
    static get properties(){
        return {
            todoItem: Object
        }
    }

    constructor(){
        super()
        this.todoItem = {}
    }

    _render({todoItem}){
        return html`<li>${todoItem.item}</li>`
    }



}

customElements.define('todo-item', TodoItem)