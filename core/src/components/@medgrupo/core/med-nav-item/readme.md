# med-nav-item



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description | Type                                                    | Default     |
| ----------------- | ------------------ | ----------- | ------------------------------------------------------- | ----------- |
| `active`          | `active`           | TODO.       | `boolean`                                               | `false`     |
| `disabled`        | `disabled`         | TODO.       | `boolean`                                               | `false`     |
| `dsColor`         | `ds-color`         | TODO.       | `string \| undefined`                                   | `undefined` |
| `icon`            | `icon`             | TODO.       | `string \| undefined`                                   | `undefined` |
| `iconOnly`        | `icon-only`        | TODO.       | `boolean`                                               | `false`     |
| `routerAnimation` | --                 | TODO.       | `((baseEl: any, opts?: any) => Animation) \| undefined` | `undefined` |
| `routerDirection` | `router-direction` | TODO.       | `"back" \| "forward" \| "root"`                         | `'forward'` |
| `text`            | `text`             | TODO.       | `string \| undefined`                                   | `undefined` |


## Events

| Event      | Description | Type                |
| ---------- | ----------- | ------------------- |
| `medBlur`  | TODO.       | `CustomEvent<void>` |
| `medClick` | TODO.       | `CustomEvent<void>` |
| `medFocus` | TODO.       | `CustomEvent<void>` |


## Dependencies

### Used by

 - [med-nav-accordion](../med-nav-accordion)
 - [med-nav-simple](../med-nav-simple)

### Depends on

- ion-icon
- [med-type](../med-type)

### Graph
```mermaid
graph TD;
  med-nav-item --> ion-icon
  med-nav-item --> med-type
  med-nav-accordion --> med-nav-item
  med-nav-simple --> med-nav-item
  style med-nav-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
