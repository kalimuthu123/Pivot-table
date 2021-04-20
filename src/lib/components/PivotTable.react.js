import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'pivottable/dist/pivot.min.css';
import 'pivottable/dist/pivot.min.js';
import 'subtotal/dist/subtotal.min.js';
import 'subtotal/dist/subtotal.min.css';
import './PivotTable.css'
import * as d3 from 'd3';
import $ from 'jquery';
window.$ = $;

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class PivotTable extends Component {
	
	
	constructor(props) {
        super(props);
		this.state = {
			
		}
	}
	
	componentWillMount() {
     console.log("id",this.props.id)
	var tableid = this.props.id
	var tablerows = this.props.rows
	var tablecols = this.props.cols
	//var data = this.data
	var format ='.3s';
    var format2 =  d3.format(format);
	var aggre1 = $.pivotUtilities.aggregatorTemplates.sum;
    //var aggregats_para=aggre1(format2)(Items);
	
	
	
	$.getJSON("https://nagarajanchinnasamy.github.io/subtotal/examples/data/mps.json", function(data) {
		
    $(document.getElementById(tableid)).pivot(
        data,
         {                 
         onRefresh: function (config) {
            },
        dataClass: $.pivotUtilities.SubtotalPivotData,
        rows: tablerows,
        cols: tablecols ,
        renderer:$.pivotUtilities.subtotal_renderers["Table With Subtotal"],
           //rendererName: "Table With Subtotal",
           rendererName:"Heatmap",
           rendererOptions: {
                   rowSubtotalDisplay: {
                        collapseAt: 0
                    },
                    colSubtotalDisplay: {
                        collapseAt: 0
                    }
                }
          /*rendererOptions:subtotal_opt,
              hideTotals: true ,
               aggregator: aggregats_para, */
         }
      );
	  });
    }
  
    render() {
        const {id, label, setProps, value ,rows , cols , data } = this.props;

        return (
            <div id={id}>
            </div>
        );
    }
}

PivotTable.defaultProps = {};

PivotTable.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string.isRequired,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,
    
	/**
     * The row displayed in the input.
     */
	rows : PropTypes.any,
	
	/**
     * The cols displayed in the input.
     */
	cols : PropTypes.any,
	
	/**
     * The data displayed in the input.
     */
	data : PropTypes.any,
	
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
