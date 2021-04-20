# AUTO GENERATED FILE - DO NOT EDIT

''PivotTable <- function(id=NULL, cols=NULL, data=NULL, label=NULL, rows=NULL, value=NULL) {
    
    props <- list(id=id, cols=cols, data=data, label=label, rows=rows, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PivotTable',
        namespace = 'pivot_table',
        propNames = c('id', 'cols', 'data', 'label', 'rows', 'value'),
        package = 'pivotTable'
        )

    structure(component, class = c('dash_component', 'list'))
}
