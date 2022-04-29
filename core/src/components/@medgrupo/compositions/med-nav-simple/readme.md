# med-nav-simple



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute  | Description                 | Type                  | Default     |
| --------- | ---------- | --------------------------- | --------------------- | ----------- |
| `dsColor` | `ds-color` | Define a cor do componente. | `string \| undefined` | `undefined` |


## Events

| Event   | Description | Type               |
| ------- | ----------- | ------------------ |
| `close` | TODO.       | `CustomEvent<any>` |


## Dependencies

### Used by

 - [med-nav](../med-nav)

### Depends on

- ion-icon
- [med-nav-item](../../core/med-nav-item)
- [ion-button](../../../button)

### Graph
```mermaid
graph TD;
  med-nav-simple --> ion-icon
  med-nav-simple --> med-nav-item
  med-nav-simple --> ion-button
  med-nav-item --> ion-icon
  med-nav-item --> med-type
  ion-button --> ion-ripple-effect
  med-nav --> med-nav-simple
  style med-nav-simple fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
