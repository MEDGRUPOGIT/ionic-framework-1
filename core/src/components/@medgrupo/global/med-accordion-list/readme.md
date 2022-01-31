# hv-accordion



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                  | Type                                        | Default     |
| ------------- | -------------- | -------------------------------------------- | ------------------------------------------- | ----------- |
| `margin`      | `margin`       | Define a margin entre os itens do accordion. | `"lg" \| "md" \| "sm" \| "xs" \| undefined` | `undefined` |
| `noAnimation` | `no-animation` |                                              | `boolean`                                   | `false`     |
| `noBorder`    | `no-border`    | Define a variação da borda do componente.    | `boolean`                                   | `false`     |
| `singleOpen`  | `single-open`  | Define a variação da borda do componente.    | `boolean`                                   | `true`      |


## Slots

| Slot | Description                                               |
| ---- | --------------------------------------------------------- |
|      | Slot default destinado ao componente `med-accordion-item` |


## CSS Custom Properties

| Name              | Description                                  |
| ----------------- | -------------------------------------------- |
| `--background`    | Define a cor de background do componente.    |
| `--border`        | Define a borda entre os itens do componente. |
| `--border-radius` | Define o border-radius do componente.        |


## Dependencies

### Used by

 - [med-nav-accordion](../../core/med-nav-accordion)

### Graph
```mermaid
graph TD;
  med-nav-accordion --> med-accordion-list
  style med-accordion-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
