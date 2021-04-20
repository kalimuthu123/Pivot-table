# AUTO GENERATED FILE - DO NOT EDIT

export ''_pivottable

"""
    ''_pivottable(;kwargs...)

A PivotTable component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `cols` (Bool | Real | String | Dict | Array; optional): The cols displayed in the input.
- `data` (Bool | Real | String | Dict | Array; optional): The data displayed in the input.
- `label` (String; required): A label that will be printed when this component is rendered.
- `rows` (Bool | Real | String | Dict | Array; optional): The row displayed in the input.
- `value` (String; optional): The value displayed in the input.
"""
function ''_pivottable(; kwargs...)
        available_props = Symbol[:id, :cols, :data, :label, :rows, :value]
        wild_props = Symbol[]
        return Component("''_pivottable", "PivotTable", "pivot_table", available_props, wild_props; kwargs...)
end

