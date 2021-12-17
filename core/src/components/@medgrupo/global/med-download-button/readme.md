# med-download-button



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                   | Type                  | Default     |
| ------------- | ------------- | --------------------------------------------- | --------------------- | ----------- |
| `downloaded`  | `downloaded`  | TODO.                                         | `boolean`             | `false`     |
| `downloading` | `downloading` | TODO.                                         | `boolean`             | `false`     |
| `dsColor`     | `ds-color`    | Define a cor do componente.                   | `string \| undefined` | `undefined` |
| `initial`     | `initial`     | TODO.                                         | `boolean`             | `true`      |
| `value`       | `value`       | Define o valor da progress bar do componente. | `number`              | `0`         |


## Events

| Event           | Description | Type               |
| --------------- | ----------- | ------------------ |
| `medCancelar`   | TODO.       | `CustomEvent<any>` |
| `medDownloaded` | TODO.       | `CustomEvent<any>` |


## Dependencies

### Used by

 - [med-semana](../../compositions/med-semana)

### Graph
```mermaid
graph TD;
  med-semana --> med-download-button
  style med-download-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
