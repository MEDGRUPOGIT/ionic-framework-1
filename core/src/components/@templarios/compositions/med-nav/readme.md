# med-nav



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute  | Description | Type                  | Default     |
| --------- | ---------- | ----------- | --------------------- | ----------- |
| `active`  | `active`   | todo        | `boolean`             | `false`     |
| `dsColor` | `ds-color` | todo        | `string \| undefined` | `undefined` |


## Dependencies

### Depends on

- ion-icon
- [med-type](../../core/med-type)
- [ion-button](../../../button)
- [med-nav-simple](../med-nav-simple)

### Graph
```mermaid
graph TD;
  med-nav --> ion-icon
  med-nav --> med-type
  med-nav --> ion-button
  med-nav --> med-nav-simple
  ion-button --> ion-ripple-effect
  med-nav-simple --> ion-icon
  med-nav-simple --> med-nav-item
  med-nav-simple --> ion-button
  med-nav-item --> ion-icon
  med-nav-item --> med-type
  style med-nav fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
