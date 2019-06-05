import { LitElement, html } from "@polymer/lit-element";
import { repeat } from 'lit-html/lib/repeat'
import "./todo-item"

class ListItems extends LitElement {

    static get properties() {
        return {
            todoList: Array
        }
    }

    constructor() {
        super()
        this.todoList = []
    }

    _render({ todoList }) {
        return html`
            <ul>
                ${repeat(this.todoList, (todo) => 
                    html`<todo-item todoItem=${todo}></todo-item>`)} 
            </ul>`
    }
}

customElements.define("list-items", ListItems)