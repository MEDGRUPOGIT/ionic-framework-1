# med-calendar



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute  | Description | Type                  | Default     |
| --------- | ---------- | ----------- | --------------------- | ----------- |
| `ano`     | `ano`      |             | `string \| undefined` | `undefined` |
| `dsColor` | `ds-color` |             | `string \| undefined` | `undefined` |
| `mes`     | `mes`      |             | `string \| undefined` | `undefined` |


## Events

| Event      | Description | Type               |
| ---------- | ----------- | ------------------ |
| `medClick` |             | `CustomEvent<any>` |
| `medSwipe` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [ion-button](../../../button)
- ion-icon
- [med-type](../med-type)

### Graph
```mermaid
graph TD;
  med-calendar --> ion-button
  med-calendar --> ion-icon
  med-calendar --> med-type
  ion-button --> ion-ripple-effect
  style med-calendar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
