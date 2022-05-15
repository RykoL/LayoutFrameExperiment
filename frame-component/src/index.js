

class LayoutFrame extends HTMLElement {

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
        <style>
            :host {
                width: 700px;
                --border: 1px solid black;
                --border-color: black;
                --inner-padding: 1rem;
            }
            .container {
                display: grid;
                grid-template-rows: repeat(2, 1fr);
                grid-template-columns: 0.5fr 2fr;
                border: var(--border);
                padding: var(--inner-padding);
                gap: 1rem;
                font-family: arial;
            }
            .header {s
                grid-row: 1;
            }
            .left-side {
                grid-row: 2;
                grid-column: 1;
                border: var(--border);
                padding: var(--inner-padding);
            }
            .dynamic-content {
                grid-row: 2;
                grid-column: 2;
                border: var(--border);
                padding: var(--inner-padding);
            }
        </style>
        <section class="container">
            <header class="header">
                <slot name="header"></slot>
            </header>
            <aside class="left-side">
                <slot name="left-side"></slot>
            </aside>
            <main class="dynamic-content">
                <slot name="dynamic-content"></slot>
            </main>
        </section>
    `;
  }
}

window.customElements.define('layout-frame', LayoutFrame)
