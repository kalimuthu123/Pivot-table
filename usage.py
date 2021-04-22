import pivot_table
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

# importing panda library
import pandas as pd


df = pd.read_csv("C:\dash_projects\Pivot-table\output.txt")

# df=df.to_json(orient = 'index')
# result = df[["call_type", "call_sub_type", "category"]]
# result = df.to_json(orient="records")
result = df.to_dict("records")
print("data", result)

app.layout = html.Div(
    [
        pivot_table.PivotTable(
            id="input",
            value=result,
            label="my-label",
            # rows=["Gender", "Province"],
            rows=["call_sub_type", "category"],
            cols=["call_type"],
        ),
        html.Div(id="output"),
    ]
)


"""@app.callback(Output("output", "children"), [Input("input", "value")])
def display_output(value):
    return "You have entered {}".format(value)"""


if __name__ == "__main__":
    app.run_server(debug=True)
