# Layout frame experiment

## Motivation

The motation of this experiment is to figure out how we can provide a pure
layouting component in a microfrontend environment that is a dumb and
lightweight as can be. In order to make integration effort low, while still
maintaining developer friendless this project to stay buildless for the
layouting component.


## How to run

Just open `src/index.html` to open a test displayment of the component to easily
develop in the browser.

## Building

As this project is intended to run buildless the only build step necessary is to
package it into an npm package to be consumed by another application. In a real
world scenario we would push this package to some kind of artifact store.

