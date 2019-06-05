import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `polymer-todo`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PolymerTodo extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'polymer-todo',
      },
    };
  }
}

window.customElements.define('polymer-todo', PolymerTodo);
