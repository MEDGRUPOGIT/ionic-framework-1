# med-message



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                      | Type                                                                   | Default                 |
| ----------- | ------------ | -------------------------------- | ---------------------------------------------------------------------- | ----------------------- |
| `concurso`  | `concurso`   | Define o nome do concurso.       | `string \| undefined`                                                  | `undefined`             |
| `dsName`    | `ds-name`    | Define a variação do componente. | `"comment" \| "medgrupo" \| "response" \| "user-message" \| undefined` | `undefined`             |
| `image`     | `image`      |                                  | `string`                                                               | `"avatar_medgrupo.png"` |
| `messageId` | `message-id` | Define o id da mensagem.         | `string \| undefined`                                                  | `undefined`             |
| `nome`      | `nome`       | Define o nome do aluno.          | `string \| undefined`                                                  | `undefined`             |
| `texto`     | `texto`      | Define o conteúdo de texto.      | `string \| undefined`                                                  | `undefined`             |


## Dependencies

### Depends on

- [med-tooltip](../med-tooltip)
- ion-icon

### Graph
```mermaid
graph TD;
  med-message --> med-tooltip
  med-message --> ion-icon
  med-tooltip --> ion-button
  ion-button --> ion-ripple-effect
  style med-message fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
