import { useRef, useState, useEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive';
import {
  dateFormat,
  generateLotProgress,
  timeSeriesHandedOverChartData,
} from '../components/Query';
import { lotLayer } from '../layers';
import { view } from '../Scene';
import Query from '@arcgis/core/rest/support/Query';
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import { barangayField, lotHandedOverDateField, municipalityField } from '../StatusUniqueValues';

// Dispose function
function maybeDisposeRoot(divId: any) {
  am5.array.each(am5.registry.rootElements, function (root) {
    if (root.dom.id === divId) {
      root.dispose();
    }
  });
}
const LotProgressChart = ({ municipal, barangay, nextwidget }: any) => {
  const legendRef = useRef<unknown | any | undefined>({});
  const xAxisRef = useRef<unknown | any | undefined>({});
  const yAxisRef = useRef<unknown | any | undefined>({});
  const chartRef = useRef<unknown | any | undefined>({});
  const [lotProgressData, setLotProgressData] = useState([]);

  const chartID = 'lot-progress';
  useEffect(() => {
    // generateLotProgress(municipal, barangay).then((result: any) => {
    //   setLotProgressData(result);
    // });
    timeSeriesHandedOverChartData(municipal, barangay).then((result: any) => {
      setLotProgressData(result);
    });
  }, [municipal, barangay]);

  useEffect(() => {
    maybeDisposeRoot(chartID);
    var root = am5.Root.new(chartID);
    root.container.children.clear();
    root._logo?.dispose();

    // Set themesf
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root), am5themes_Responsive.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: 'panX',
        wheelY: 'zoomX',
        paddingBottom: 35,
        layout: root.verticalLayout,
      }),
    );
    chartRef.current = chart;

    // Chart title
    chart.children.unshift(
      am5.Label.new(root, {
        text: 'Monthly Progress & Target Schedule of Handed Over Lots',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        fill: am5.color('#ffffff'),
        x: am5.percent(50),
        centerX: am5.percent(50),
        paddingTop: 0,
        paddingBottom: 0,
      }),
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set(
      'cursor',
      am5xy.XYCursor.new(root, {
        behavior: 'zoomX',
      }),
    );
    cursor.lineY.set('visible', false);

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, {
      //minGridDistance: 60,
      strokeOpacity: 1,
      strokeWidth: 1,
      stroke: am5.color('#ffffff'),
    });
    var xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        // When you group data for series
        // Note you need to baseInterval timeUnit is 'day'
        // and groupIntervals timeUnit is 'month'
        maxDeviation: 0,
        groupData: true,
        baseInterval: {
          timeUnit: 'day',
          count: 1,
        },
        // count:
        groupIntervals: [{ timeUnit: 'month', count: 1 }],
        // categoryField: 'date',
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      }),
    );

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        calculateTotals: true,
        min: 0,
        renderer: am5xy.AxisRendererY.new(root, {
          minGridDistance: 60,
          strokeOpacity: 1,
          strokeWidth: 1,
          stroke: am5.color('#ffffff'),
        }),
      }),
    );

    xAxis.get('renderer').labels.template.setAll({
      //oversizedBehavior: "wrap",
      textAlign: 'center',
      fill: am5.color('#ffffff'),
      //maxWidth: 150,
      fontSize: 12,
    });

    yAxis.get('renderer').labels.template.setAll({
      //oversizedBehavior: "wrap",//
      textAlign: 'center',
      fill: am5.color('#ffffff'),
      //maxWidth: 150,
      fontSize: 12,
    });
    xAxisRef.current = xAxis;
    yAxisRef.current = yAxis;

    // Add yaxix title
    yAxis.children.unshift(
      am5.Label.new(root, {
        rotation: -90,
        // text: 'No. of casted components',
        y: am5.p50,
        centerX: am5.p50,
        fill: am5.color('#ffffff'),
        fontSize: 11,
      }),
    );

    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        centerY: am5.percent(50),
        x: am5.p50,
        y: am5.percent(108),
      }),
    );
    legendRef.current = legend;

    legend.labels.template.setAll({
      oversizedBehavior: 'truncate',
      fill: am5.color('#ffffff'),
      fontSize: 17,
      scale: 0.7,
      //textDecoration: "underline"
      //width: am5.percent(200)
      //fontWeight: "300"
    });

    // check this;
    // newDataItem = new DataItem(series, dataContext, series._makeDataItem(dataContext));
    // dataItem is of dataItems
    // dataContext: dataItem.dataContext

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name: any, fieldName: any, color: any) {
      var series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: name,
          stacked: true,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: fieldName,
          valueXField: 'date',
          fill: color,
          stroke: color,
          // valueYGrouped: 'sum',
        }),
      );

      series.columns.template.setAll({
        tooltipText: '{name}, {categoryX}: {valueY}',
        tooltipY: am5.percent(10),
      });
      series.data.setAll(lotProgressData);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: am5.Label.new(root, {
            text: '{valueY}',
            fill: root.interfaceColors.get('alternativeText'),
            centerY: am5.p50,
            centerX: am5.p50,
            populateText: true,
          }),
        });
      });

      legend.data.push(series);
    }

    makeSeries('Actual (Handed over)', 'actual', am5.color('#0096FF'));
    makeSeries('Target (To be handed over)', 'target', am5.color('#FF5733'));

    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [chartID, lotProgressData]);

  return (
    <>
      {nextwidget === 'charts' ? (
        <div
          id={chartID}
          style={{
            height: '40vh',
            width: '70%',
            backgroundColor: '#2b2b2b',
            color: 'white',
            position: 'fixed',
            zIndex: 10,
            bottom: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        ></div>
      ) : (
        <div id={chartID} hidden></div>
      )}
    </>
  );
};

export default LotProgressChart;
