# med-banner



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute   | Description                                   | Type     | Default     |
| ----------------------- | ----------- | --------------------------------------------- | -------- | ----------- |
| `btnLeft` _(required)_  | `btn-left`  | Define o texto do botão esquerdo, se existir. | `string` | `undefined` |
| `btnRight` _(required)_ | `btn-right` | Define o texto do botão direito.              | `string` | `undefined` |
| `header` _(required)_   | `header`    | Define o título do banner.                    | `string` | `undefined` |


## Events

| Event           | Description                                        | Type                |
| --------------- | -------------------------------------------------- | ------------------- |
| `btnLeftClick`  | Define o texto texto do botão direito, se existir. | `CustomEvent<void>` |
| `btnRightClick` | Emitido quando é feito um click no botão direito.  | `CustomEvent<void>` |


## Slots

| Slot        | Description                                                 |
| ----------- | ----------------------------------------------------------- |
| `"content"` | Define o conetudo de texto do banner.                       |
| `"imagem"`  | Posiciona um elemento imagem ou icone a esquerda do banner. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
