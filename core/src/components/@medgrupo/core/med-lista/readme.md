# med-lista



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute  | Description                                                         | Type                                       | Default     |
| --------- | ---------- | ------------------------------------------------------------------- | ------------------------------------------ | ----------- |
| `dsColor` | `ds-color` |                                                                     | `string \| undefined`                      | `undefined` |
| `inset`   | `inset`    | If `true`, the list will have margin around it and rounded corners. | `boolean`                                  | `false`     |
| `lines`   | `lines`    | How the bottom border should be displayed on all items.             | `"full" \| "inset" \| "none" \| undefined` | `undefined` |
| `mode`    | `mode`     | The mode determines which platform styles to use.                   | `"ios" \| "md"`                            | `undefined` |
| `padding` | `padding`  |                                                                     | `boolean`                                  | `false`     |


## Methods

### `closeSlidingItems() => Promise<boolean>`

If `ion-item-sliding` are used inside the list, this method closes
any open sliding item.

Returns `true` if an actual `ion-item-sliding` is closed.

#### Returns

Type: `Promise<boolean>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
