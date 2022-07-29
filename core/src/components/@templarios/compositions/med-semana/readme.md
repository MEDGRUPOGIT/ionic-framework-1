# med-semana



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute       | Description | Type                   | Default     |
| ---------------------- | --------------- | ----------- | ---------------------- | ----------- |
| `active`               | `active`        | todo        | `boolean`              | `false`     |
| `content` _(required)_ | --              | todo        | `MedSemanaInterface`   | `undefined` |
| `disabled`             | `disabled`      | todo        | `boolean`              | `false`     |
| `dsColor`              | `ds-color`      | todo        | `string \| undefined`  | `undefined` |
| `dsSize`               | `ds-size`       | todo        | `"sm" \| undefined`    | `undefined` |
| `hideDownload`         | `hide-download` | todo        | `boolean`              | `false`     |
| `skin`                 | `skin`          | todo        | `"lista" \| undefined` | `undefined` |


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
