import { LitElement, html } from "@polymer/lit-element";

class AddItem extends LitElement {
    static get properties() {
        return {
            todoList: Array,
            todoItem: String
        }
    }

    constructor() {
        super()
        this.todoItem = ""
    }

    inputKeyPress(e) {
        if (e.keyCode == 13 && this.todoItem.length > 0) {
            this.onAddItem()
        } else {
            this.todoItem = e.target.value
        }
    }

    onAddItem() {
        if (this.todoItem.length == 0) {
            return
        }

        let storedTodoList = JSON.parse(localStorage.getItem("todo-list"))
        storedTodoList = storedTodoList === null ? [] : storedTodoList

        storedTodoList.push({
            id: new Date().valueOf(),
            item: this.todoItem,
            done: false
        })

        localStorage.setItem("todo-list", JSON.stringify(storedTodoList))
        this.dispatchEvent(new CustomEvent('addItem', {
            bubbles: true,
            composed: true,
            detail: {
                todoList: storedTodoList
            }
        }))
        this.todoItem = ''
    }

    _render(props) {
        return html`
        <div>
            <input value=${props.todoItem} on-keyup="${(e) => this.inputKeyPress(e)}">

            <button on-click="${() => this.onAddItem()}"> Add Item</button>
        </div>
        `
    }

}

customElements.define("add-item", AddItem)