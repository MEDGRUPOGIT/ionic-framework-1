# med-semana



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute  | Description                                 | Type                   | Default     |
| ---------------------- | ---------- | ------------------------------------------- | ---------------------- | ----------- |
| `active`               | `active`   | Define o estado active do componente.       | `boolean`              | `false`     |
| `content` _(required)_ | --         | Define o conteudo da semana.                | `MedSemanaInterface`   | `undefined` |
| `dsColor`              | `ds-color` | Define a cor do componente.                 | `string \| undefined`  | `undefined` |
| `dsSize`               | `ds-size`  | Define a variação de tamanho do componente. | `"sm" \| undefined`    | `undefined` |
| `skin`                 | `skin`     | Define a skin do componente.                | `"lista" \| undefined` | `undefined` |


## Dependencies

### Depends on

- [med-type](../../core/med-type)
- [med-piechart](../med-piechart)
- [med-download-button](../../core/med-download-button)

### Graph
```mermaid
graph TD;
  med-semana --> med-type
  med-semana --> med-piechart
  med-semana --> med-download-button
  med-piechart --> med-type
  med-piechart --> med-download-button
  style med-semana fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
