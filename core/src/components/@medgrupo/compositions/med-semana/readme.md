# med-semana



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute  | Description                    | Type                   | Default     |
| --------- | ---------- | ------------------------------ | ---------------------- | ----------- |
| `active`  | `active`   | Define o estado do componente. | `boolean`              | `false`     |
| `dsColor` | `ds-color` | Define a cor do componente.    | `string \| undefined`  | `undefined` |
| `skin`    | `skin`     | Define a skin do componente.   | `"lista" \| undefined` | `undefined` |


## Dependencies

### Depends on

- [med-type](../../core/med-type)
- [med-piechart](../../core/med-piechart)
- [med-download-button](../../global/med-download-button)

### Graph
```mermaid
graph TD;
  med-semana --> med-type
  med-semana --> med-piechart
  med-semana --> med-download-button
  med-piechart --> med-type
  style med-semana fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
