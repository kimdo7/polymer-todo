import { LitElement, html } from '@polymer/lit-element'
import "./add-items"
import "./list-items"

class TodoApp extends LitElement {
    static get properties() {
        return {
            todoList: Array
        }
    }

    constructor() {
        super()
        let list = JSON.parse(localStorage.getItem("todo-list"))
        this.todoList = list === null ? [] : list
    }

    _firstRendered(){
        this.addEventListener("addItem", (e) => {
            this.todoList = e.detail.todoList
        })
    }

    _render({ todoList }) {
        return html`
        <p>hello todo app :)</p>
        <add-item></add-item>
        <list-items todoList=${todoList}></list-items>
        `
    }
}

customElements.define("todo-app", TodoApp)