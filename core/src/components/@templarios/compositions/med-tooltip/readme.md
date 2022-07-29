# med-context-menu



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type                                                  | Default     |
| ----------- | ----------- | ----------- | ----------------------------------------------------- | ----------- |
| `btnLeft`   | `btn-left`  | todo        | `string \| undefined`                                 | `undefined` |
| `btnRight`  | `btn-right` | todo        | `string \| undefined`                                 | `undefined` |
| `collapsed` | `collapsed` | todo        | `boolean`                                             | `true`      |
| `content`   | `content`   | todo        | `string \| undefined`                                 | `undefined` |
| `dsColor`   | `ds-color`  | todo        | `string \| undefined`                                 | `undefined` |
| `placement` | `placement` | todo        | `"bottom" \| "left" \| "right" \| "top" \| undefined` | `undefined` |
| `position`  | `position`  | todo        | `"center" \| "end" \| "start" \| undefined`           | `undefined` |
| `titulo`    | `titulo`    | todo        | `string \| undefined`                                 | `undefined` |


## Events

| Event           | Description | Type                |
| --------------- | ----------- | ------------------- |
| `btnLeftClick`  | todo        | `CustomEvent<void>` |
| `btnRightClick` | todo        | `CustomEvent<void>` |


## Methods

### `toggle(event?: any) => Promise<void>`

todo

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [med-type](../../core/med-type)
- [ion-button](../../../button)
- ion-icon

### Graph
```mermaid
graph TD;
  med-tooltip --> med-type
  med-tooltip --> ion-button
  med-tooltip --> ion-icon
  ion-button --> ion-ripple-effect
  style med-tooltip fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
