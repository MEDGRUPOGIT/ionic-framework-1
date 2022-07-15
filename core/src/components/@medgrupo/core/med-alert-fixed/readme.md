# med-alert-fixed



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                      | Type                                    | Default                                                    |
| ---------------- | ----------------- | -------------------------------- | --------------------------------------- | ---------------------------------------------------------- |
| `dsColor`        | `ds-color`        | Define a cor do componente.      | `string \| undefined`                   | `undefined`                                                |
| `dsName`         | `ds-name`         | Define a variação do componente. | `"atualizar" \| "offline" \| undefined` | `undefined`                                                |
| `labelAtualizar` | `label-atualizar` | Define o texto no estado active. | `string`                                | `'Versão desatualizada'`                                   |
| `labelOffline`   | `label-offline`   | Define o texto no estado active. | `string`                                | `'Você está offline. Conecte-se para acessar o conteúdo.'` |


## Dependencies

### Depends on

- ion-icon
- [med-type](../../../@templarios/core/med-type)

### Graph
```mermaid
graph TD;
  med-alert-fixed --> ion-icon
  med-alert-fixed --> med-type
  style med-alert-fixed fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
