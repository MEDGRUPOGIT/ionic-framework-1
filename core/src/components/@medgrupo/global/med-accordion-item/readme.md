# accordion-item



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                   | Type                             | Default     |
| ------------- | -------------- | ----------------------------------------------------------------------------- | -------------------------------- | ----------- |
| `background`  | `background`   | Define se o componente irá ter background quando aberto.                      | `boolean`                        | `false`     |
| `canCollapse` | `can-collapse` | Permite que a abertura do accordion seja bloqueada pelo front.                | `boolean`                        | `true`      |
| `dsColor`     | `ds-color`     | Define a cor do componente.                                                   | `string \| undefined`            | `undefined` |
| `icon`        | `icon`         | Define a posição do ícone de abertura do componente.                          | `"left" \| "right" \| undefined` | `undefined` |
| `isOpened`    | `is-opened`    | Permite que o front consiga definir quando o accordion vem aberto ou fechado. | `boolean`                        | `false`     |
| `noBorder`    | `no-border`    | Define a variação da borda do componente.                                     | `boolean`                        | `false`     |
| `slotsToggle` | `slots-toggle` | Permite que o front consiga definir quando o accordion vem aberto ou fechado. | `"end"[] \| "middle" \| "start"` | `[]`        |


## Events

| Event      | Description | Type               |
| ---------- | ----------- | ------------------ |
| `medClick` |             | `CustomEvent<any>` |
| `opened`   |             | `CustomEvent<any>` |
| `toggle`   | Internal    | `CustomEvent<any>` |


## Slots

| Slot         | Description                                                         |
| ------------ | ------------------------------------------------------------------- |
| `"auxiliar"` | Define o conteúdo auxiliar do componente.                           |
| `"button"`   | Se houver botões no componente eles devem ser inseridos nesse slot. |
| `"content"`  | Define o conteúdo do componente.                                    |
| `"header"`   | Define o conteúdo do header do componente.                          |
| `"progress"` | Slot destinado a progress-bar.                                      |


## Dependencies

### Used by

 - [med-nav-accordion](../../core/med-nav-accordion)

### Graph
```mermaid
graph TD;
  med-nav-accordion --> med-accordion-item
  style med-accordion-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
