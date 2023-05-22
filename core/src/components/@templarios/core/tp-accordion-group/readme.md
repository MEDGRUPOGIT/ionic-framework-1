# ion-accordion-group



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                   | Type                                      | Default     |
| ---------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ----------- |
| `animated` | `animated` | If `true`, all accordions inside of the accordion group will animate when expanding or collapsing.                                            | `boolean`                                 | `true`      |
| `disabled` | `disabled` | If `true`, the accordion group cannot be interacted with.                                                                                     | `boolean`                                 | `false`     |
| `expand`   | `expand`   | Describes the expansion behavior for each accordion. Possible values are `"compact"` and `"inset"`. Defaults to `"compact"`.                  | `"compact" \| "inset"`                    | `"compact"` |
| `mode`     | `mode`     | The mode determines which platform styles to use.                                                                                             | `"ios" \| "md"`                           | `undefined` |
| `multiple` | `multiple` | If `true`, the accordion group can have multiple accordion components expanded at the same time.                                              | `boolean \| undefined`                    | `undefined` |
| `readonly` | `readonly` | If `true`, the accordion group cannot be interacted with, but does not alter the opacity.                                                     | `boolean`                                 | `false`     |
| `value`    | `value`    | The value of the accordion group. This controls which accordions are expanded. This should be an array of strings only when `multiple="true"` | `null \| string \| string[] \| undefined` | `undefined` |


## Events

| Event       | Description                                                                                                                                                          | Type                                                  |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `ionChange` | Emitted when the value property has changed as a result of a user action such as a click. This event will not emit when programmatically setting the value property. | `CustomEvent<TpAccordionGroupChangeEventDetail<any>>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
