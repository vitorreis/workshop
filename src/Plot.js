/**
 * This component should render a plot with Plotly, taking these three props:
 *
 * - xData: the data to be rendered on the x-axis as an array
 * - yData: The data to be rendered on the y-axis as an array
 * - type:  The type of plot we want Plotly to render
 *
 * To see an example of how you should use Plotly look at the index.html file in the public/ folder.
 * (and feel free to delete the code in there)
 */
import React, { Component } from 'react';
import Plotly from 'plotly.js/dist/plotly.js';

class Plot extends Component {
  render() {
    return <div ref={(element) => { this.element = element; }}></div>;
  }

  componentDidMount() {
    this.createPlot(
      this.props.xData,
      this.props.yData,
      this.props.type
    );
  }

  componentDidUpdate(nextProps) {
    this.createPlot(
      this.props.xData,
      this.props.yData,
      this.props.type
    );
  }

    shouldComponentUpdate(nextProps) {
      // use JSON.stringfy or PureComponent -> shallowEqual(a, b) -> might be imperformant
      return !(
        this.props.xData === nextProps.xData &&
        this.props.yData === nextProps.yData
      );
    }

  createPlot = (x, y, type) => {
    Plotly.newPlot(this.element, [{
      x: x,
      y: y,
      type: type
    }], {
      margin: {
        t: 0, r: 0, l: 30
      },
      xaxis: {
        gridcolor: 'transparent'
      }
    }, {
      displayModeBar: false
    });
  }
}
export default Plot;
