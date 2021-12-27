# med-calendar



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                 | Type                  | Default     |
| ------------ | ------------ | --------------------------- | --------------------- | ----------- |
| `calendario` | `calendario` |                             | `string \| undefined` | `undefined` |
| `dsColor`    | `ds-color`   | Define a cor do componente. | `string \| undefined` | `undefined` |


## Events

| Event            | Description | Type               |
| ---------------- | ----------- | ------------------ |
| `medChoiceClick` |             | `CustomEvent<any>` |
| `medMonthClick`  |             | `CustomEvent<any>` |


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
