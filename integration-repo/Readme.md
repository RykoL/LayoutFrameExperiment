# Integration repo

## Motivation

The motation of this experiment is to figure out how we can provide a pure
layouting component in a microfrontend environment that is a dumb and
lightweight as can be. In order to make integration effort low, while still
maintaining developer friendless this project to stay buildless for the
layouting component.


## How to run

Unlike the frame, the integration repository needs a bundler to resolve the
internal build time dependency on the layout frame. Before you can run the
example you have to install the dependencies first, these for the sake of this
example are kept to the bare minimum.

``` shell
npm i
```

To run the application run 

``` shell
npm start 
```

and visit the application at localhost:1234.


## How does this work

The integration app is a simple vanilla html and javascript application and
there is no further framework involved. In essence the integration app is a
really dumb microfrontend orchestrator which takes a layout and microfrontend definitions. The setup is pretty much inspired from single-spa.

### Loading the layout frame.

The very first line of the `index.js` file depicts the loading of the layout
frame, which is a build time dependency. The bundler will detect this accordingly and will include the code of the frame in the bundle.

``` javascript
import("frame-component")
```


### Defining and rendering the layout

The layout is stored inside a `template` tag inside the `index.html` for simplicity. Templates have the benefit of not being evaluated or rendered by the browser and are therefore perfect for defining layout.

``` html
        <template>
            <layout-frame>
                 <div slot="header">
                     <h1>Some header component with Navigation</h1>
                     <ul>
                         <li><a href="#">First</a></li>
                         <li><a href="#second">Second</a></li>
                     </ul>
                 </div>
                 <p slot="left-side">This is some content on the left. I'll stay here statically</p>
                 <div id="dyn-content"></div>
            </layout-frame>
        </template>
```

Now when the bootstraping code loads, it will get the content of this template and attach it to the body of the document where it will be rendered by the browser.

``` javascript
const template = document.querySelector('template')
const content = template.content.cloneNode(true)

document.body.appendChild(content)
```

### Rendering dynamic content

It's not necessary to understand the dynamic content rendering for this use case. However in short:

The bootstrapping code listens on browser routing events and just renders a component based on the route information.
