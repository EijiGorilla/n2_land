import { useEffect, useRef, useState } from 'react';
import { lotLayer } from '../layers';
import { view } from '../Scene';
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import Query from '@arcgis/core/rest/support/Query';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive';
import {
  generateAffectedAreaForPie,
  generateLotData,
  generateLotMoaData,
  generateLotNumber,
  generatePermitEnter,
  generateTotalAffectedArea,
  thousands_separators,
} from '../components/Query';
import '../App.css';
import { CalciteLabel } from '@esri/calcite-components-react';
import { lotMoaField, lotStatusField, statusLotQuery, statusMoaQuery } from '../StatusUniqueValues';

// Dispose function
function maybeDisposeRoot(divId: any) {
  am5.array.each(am5.registry.rootElements, function (root) {
    if (root.dom.id === divId) {
      root.dispose();
    }
  });
}

///*** Others */
/// Draw chart
const LotChart = ({ municipal, barangay }: any) => {
  // 1. Land Acquisition
  const pieSeriesRef = useRef<unknown | any | undefined>({});
  const legendRef = useRef<unknown | any | undefined>({});
  const chartRef = useRef<unknown | any | undefined>({});
  const [lotData, setLotData] = useState<unknown | any | undefined>([]);

  const chartID = 'pie-two';

  const [lotNumber, setLotNumber] = useState([]);
  const [pteNumber, setPteNumber] = useState([]);

  // Affected Area for Pie Chart
  const [affectAreaPie, setAffectAreaPie] = useState<unknown | any | undefined>([]);
  const [totalAffectedArea, setTotalAffectedArea] = useState<any>();

  // 2.Mode of Acquisition
  const barSeriesRef = useRef<unknown | any | undefined>({});
  const yAxisRef = useRef<unknown | any | undefined>({});
  const chartRef_moa = useRef<unknown | any | undefined>({});
  const [lotMoaData, setLotMoaData] = useState([]);
  const chartID_moa = 'land-moa';

  // Query
  const queryMunicipality = "Municipality = '" + municipal + "'";
  const queryBarangay = "Barangay = '" + barangay + "'";
  const queryMunicipalBarangay = queryMunicipality + ' AND ' + queryBarangay;

  if (municipal && !barangay) {
    lotLayer.definitionExpression = queryMunicipality;
  } else if (barangay) {
    lotLayer.definitionExpression = queryMunicipalBarangay;
  }

  useEffect(() => {
    generateLotData(municipal, barangay).then((result: any) => {
      setLotData(result);
    });

    // Lot number
    generateLotNumber().then((response: any) => {
      setLotNumber(response);
    });

    // total affected areas for pie chart
    generateAffectedAreaForPie(municipal, barangay).then((response: any) => {
      setAffectAreaPie(response);
    });

    // total affected area for
    generateTotalAffectedArea(municipal, barangay).then((response: any) => {
      setTotalAffectedArea(response);
    });

    generatePermitEnter().then((response: any) => {
      setPteNumber(response);
    });

    // Mode of Acquisition
    generateLotMoaData(municipal, barangay).then((response: any) => {
      setLotMoaData(response);
    });
  }, [municipal, barangay]);

  // useLayoutEffect runs synchronously. If this is used with React.lazy,
  // Every time calcite action is fired, the chart is fired, too.
  // To avoid, use useEffect instead of useLayoutEffect

  // 1. Pie Chart for Land Acquisition
  useEffect(() => {
    // Dispose previously created root element
    maybeDisposeRoot(chartID);

    var root = am5.Root.new(chartID);
    root.container.children.clear();
    root._logo?.dispose();

    // Set themesf
    root.setThemes([am5themes_Animated.new(root), am5themes_Responsive.new(root)]);

    // Create chart
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        // centerY: am5.percent(25), //-10
        // y: am5.percent(-25), // space between pie chart and total lots
        layout: root.verticalLayout,
      }),
    );
    chartRef.current = chart;

    // Create series

    var pieSeries = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: 'Series',
        categoryField: 'category',
        valueField: 'value',
        legendLabelText:
          '{category}[/] ([#C9CC3F; bold]{valuePercentTotal.formatNumber("#.")}%[/]) ',
        // legendValueText: "{valuePercentTotal.formatNumber('#.')}% ({value})",
        radius: am5.percent(45), // outer radius
        innerRadius: am5.percent(20),
        scale: 2,
      }),
    );
    pieSeriesRef.current = pieSeries;
    chart.series.push(pieSeries);

    // Set slice opacity and stroke color
    pieSeries.slices.template.setAll({
      fillOpacity: 0.9,
      stroke: am5.color('#ffffff'),
      strokeWidth: 0.5,
      strokeOpacity: 1,
      templateField: 'sliceSettings',
      tooltipText: '{category}: {valuePercentTotal.formatNumber("#.")}%',
    });

    // EventDispatcher is disposed at SpriteEventDispatcher...
    // It looks like this error results from clicking events
    pieSeries.slices.template.events.on('click', (ev) => {
      var Selected: any = ev.target.dataItem?.dataContext;
      var Category: string = Selected.category;
      const find = statusLotQuery.find((emp: any) => emp.category === Category);
      const statusSelected = find?.value;

      var highlightSelect: any;

      var query = lotLayer.createQuery();

      view.when(function () {
        view.whenLayerView(lotLayer).then((layerView): any => {
          //chartLayerView = layerView;

          lotLayer.queryFeatures(query).then(function (results) {
            const RESULT_LENGTH = results.features;
            const ROW_N = RESULT_LENGTH.length;

            let objID = [];
            for (var i = 0; i < ROW_N; i++) {
              var obj = results.features[i].attributes.OBJECTID;
              objID.push(obj);
            }

            var queryExt = new Query({
              objectIds: objID,
            });

            lotLayer.queryExtent(queryExt).then(function (result) {
              if (result.extent) {
                view.goTo(result.extent);
              }
            });

            if (highlightSelect) {
              highlightSelect.remove();
            }
            highlightSelect = layerView.highlight(objID);

            view.on('click', function () {
              layerView.filter = new FeatureFilter({
                where: undefined,
              });
              highlightSelect.remove();
            });
          }); // End of queryFeatures

          layerView.filter = new FeatureFilter({
            where: lotStatusField + ' = ' + statusSelected,
          });
        }); // End of view.whenLayerView
      }); // End of view.whenv
    });

    pieSeries.data.setAll(lotData);

    // Disabling labels and ticksll
    pieSeries.labels.template.setAll({
      // fill: am5.color('#ffffff'),
      // fontSize: '0.5rem',
      visible: false,
      scale: 0,
      // oversizedBehavior: 'wrap',
      // maxWidth: 65,
      // text: "{category}: [#C9CC3F; fontSize: 10px;]{valuePercentTotal.formatNumber('#.')}%[/]",
    });

    // pieSeries.labels.template.set('visible', true);
    pieSeries.ticks.template.setAll({
      // fillOpacity: 0.9,
      // stroke: am5.color('#ffffff'),
      // strokeWidth: 0.3,
      // strokeOpacity: 1,
      visible: false,
      scale: 0,
    });

    // Legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        scale: 1.03,
      }),
    );
    legendRef.current = legend;
    legend.data.setAll(pieSeries.dataItems);

    // Change the size of legend markers
    legend.markers.template.setAll({
      width: 18,
      height: 18,
    });

    // Change the marker shape
    legend.markerRectangles.template.setAll({
      cornerRadiusTL: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusBR: 10,
    });

    // Responsive legend
    // https://www.amcharts.com/docs/v5/tutorials/pie-chart-with-a-legend-with-dynamically-sized-labels/
    // This aligns Legend to Left
    chart.onPrivate('width', function (width: any) {
      const boxWidth = 270; //props.style.width;
      var availableSpace = Math.max(width - chart.height() - boxWidth, boxWidth);
      //var availableSpace = (boxWidth - valueLabelsWidth) * 0.7
      legend.labels.template.setAll({
        width: availableSpace,
        maxWidth: availableSpace,
      });
    });

    // To align legend items: valueLabels right, labels to left
    // 1. fix width of valueLabels
    // 2. dynamically change width of labels by screen size

    // Change legend labelling properties
    // To have responsive font size, do not set font size
    legend.labels.template.setAll({
      oversizedBehavior: 'truncate',
      fill: am5.color('#ffffff'),
      //textDecoration: "underline"
      //width: am5.percent(200)
      //fontWeight: "300"
    });

    legend.valueLabels.template.setAll({
      textAlign: 'right',
      //width: valueLabelsWidth,
      fill: am5.color('#ffffff'),
      //fontSize: LEGEND_FONT_SIZE,
    });

    legend.valueLabels.template.adapters.add('text', (text: any, target: any) => {
      const category = target.dataItem?.dataContext.category;
      // if (target.dataItem && target.dataItem.get('valuePercentTotal') < 5) {
      //   return category === 'Paid'
      //     ? // eslint-disable-next-line no-useless-concat
      //       "{valuePercentTotal.formatNumber('#.')}% ({value})" + ' (' + testValue + ' sqm)'
      //     : "{valuePercentTotal.formatNumber('#.')}% ({value})";
      // }
      // "[#C9CC3F; fontSize: 12px;][bold]{valuePercentTotal.formatNumber('#.')}% ({value})[/]"
      if (target.dataItem) {
        return category === 'Paid'
          ? '{value}[/]' +
              ' (' +
              thousands_separators(
                affectAreaPie?.find((emp: any) => emp.category === category)?.value,
              ) +
              ' m2' +
              ')'
          : category === 'For Payment Processing'
            ? '{value}[/]' +
              ' (' +
              thousands_separators(
                affectAreaPie?.find((emp: any) => emp.category === category)?.value,
              ) +
              ' m2' +
              ')'
            : category === 'For Legal Pass'
              ? '{value}[/]' +
                ' (' +
                thousands_separators(
                  affectAreaPie?.find((emp: any) => emp.category === category)?.value,
                ) +
                ' m2' +
                ')'
              : category === 'For Appraisal/Offer to Buy'
                ? '{value}[/]' +
                  ' (' +
                  thousands_separators(
                    affectAreaPie?.find((emp: any) => emp.category === category)?.value,
                  ) +
                  ' m2' +
                  ')'
                : category === 'For Expro'
                  ? '{value}[/]' +
                    ' (' +
                    thousands_separators(
                      affectAreaPie?.find((emp: any) => emp.category === category)?.value,
                    ) +
                    ' m2' +
                    ')'
                  : '{value}';
      }

      return text;
    });

    legend.itemContainers.template.setAll({
      // set space between legend items
      paddingTop: 5,
      paddingBottom: 1,
    });

    pieSeries.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [chartID, lotData, affectAreaPie]);

  useEffect(() => {
    pieSeriesRef.current?.data.setAll(lotData);
    legendRef.current?.data.setAll(pieSeriesRef.current.dataItems);
  });

  // Mode of Acquisition
  useEffect(() => {
    // Dispose previously created root element

    maybeDisposeRoot(chartID_moa);

    var root2 = am5.Root.new(chartID_moa);
    root2.container.children.clear();
    root2._logo?.dispose();

    // Set themesf
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root2.setThemes([am5themes_Animated.new(root2), am5themes_Responsive.new(root2)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root2.container.children.push(
      am5xy.XYChart.new(root2, {
        panX: false,
        panY: false,
        wheelX: 'none',
        wheelY: 'none',
      }),
    );
    chartRef_moa.current = chart;

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var yRenderer = am5xy.AxisRendererY.new(root2, {
      minGridDistance: 5,
      strokeOpacity: 1,
      strokeWidth: 1,
      inversed: true,
      stroke: am5.color('#ffffff'),
    });
    yRenderer.grid.template.set('location', 1);

    var yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root2, {
        maxDeviation: 0,
        categoryField: 'category',
        renderer: yRenderer,
      }),
    );

    // Remove grid lines
    yAxis.get('renderer').grid.template.set('forceHidden', true);

    var xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root2, {
        maxDeviation: 0,
        min: 0,
        strictMinMax: true,
        calculateTotals: true,
        renderer: am5xy.AxisRendererX.new(root2, {
          visible: true,
          strokeOpacity: 1,
          strokeWidth: 1,
          stroke: am5.color('#ffffff'),
        }),
      }),
    );
    // Remove grid lines
    xAxis.get('renderer').grid.template.set('forceHidden', true);

    // Label properties for yAxis (category axis)
    yAxis.get('renderer').labels.template.setAll({
      //oversizedBehavior: "wrap",
      textAlign: 'center',
      fill: am5.color('#ffffff'),
      //maxWidth: 150,
      fontSize: 12,
    });

    xAxis.get('renderer').labels.template.setAll({
      fill: am5.color('#ffffff'),
      fontSize: 10,
    });

    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(
      am5xy.ColumnSeries.new(root2, {
        name: 'Series 1',
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: 'value',
        sequencedInterpolation: true,
        categoryYField: 'category',
      }),
    );
    barSeriesRef.current = series;
    chart.series.push(series);

    var columnTemplate = series.columns.template;

    columnTemplate.setAll({
      draggable: true,
      cursorOverStyle: 'pointer',
      tooltipText: '{value}',
      cornerRadiusBR: 10,
      cornerRadiusTR: 10,
      strokeOpacity: 0,
    });

    // Add Label bullet
    series.bullets.push(function () {
      return am5.Bullet.new(root2, {
        locationY: 1,
        sprite: am5.Label.new(root2, {
          text: '{value}',
          fill: root2.interfaceColors.get('alternativeText'),
          centerY: 8,
          centerX: am5.p50,
          fontSize: 13,
          populateText: true,
        }),
      });
    });

    // Use different color by column
    /*
        columnTemplate.adapters.add('fill', (fill, target) => {
          return chart.get('colors').getIndex(series.columns.indexOf(target));
        });
    
        columnTemplate.adapters.add('stroke', (stroke, target) => {
          return chart.get('colors').getIndex(series.columns.indexOf(target));
        });
        */

    series.columns.template.events.on('click', function (ev) {
      var Selected: any = ev.target.dataItem?.dataContext;
      var Category: string = Selected.category;
      const find = statusMoaQuery.find((emp: any) => emp.category === Category);
      const selectedStatus = find?.value;

      var highlightSelect: any;

      var query = lotLayer.createQuery();
      view.whenLayerView(lotLayer).then(function (layerView) {
        //CHART_ELEMENT.style.visibility = "visible";

        lotLayer.queryFeatures(query).then(function (results) {
          const RESULT_LENGTH = results.features;
          const ROW_N = RESULT_LENGTH.length;

          let objID = [];
          for (var i = 0; i < ROW_N; i++) {
            var obj = results.features[i].attributes.OBJECTID;
            objID.push(obj);
          }

          var queryExt = new Query({
            objectIds: objID,
          });

          lotLayer.queryExtent(queryExt).then(function (result) {
            if (result.extent) {
              view.goTo(result.extent);
            }
          });

          if (highlightSelect) {
            highlightSelect.remove();
          }
          highlightSelect = layerView.highlight(objID);

          view.on('click', function () {
            layerView.filter = new FeatureFilter({
              where: undefined,
            });
            highlightSelect.remove();
          });
        });
        layerView.filter = new FeatureFilter({
          where: lotMoaField + ' = ' + selectedStatus,
        });
      }); // End of whenLayerView
    });

    // Chart title
    yAxisRef.current = yAxis;
    yAxis.data.setAll(lotMoaData);
    series.data.setAll(lotMoaData);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root2.dispose();
    };
  }, [chartID_moa, lotMoaData]);

  useEffect(() => {
    barSeriesRef.current?.data.setAll(lotMoaData);
    yAxisRef.current?.data.setAll(lotMoaData);
  });
  //JSX
  return (
    <>
      <div
        style={{
          display: 'flex',
          marginTop: '3px',
          marginLeft: '15px',
          marginRight: '15px',
          justifyContent: 'space-between',
        }}
      >
        <img
          src="https://EijiGorilla.github.io/Symbols/Land_logo.png"
          alt="Land Logo"
          height={'15%'}
          width={'15%'}
          style={{ paddingTop: '5px', paddingLeft: '5px' }}
        />
        <dl style={{ alignItems: 'center' }}>
          <dt style={{ color: '#D3D3D3', fontSize: '1.1rem' }}>Total Lots</dt>
          <dd
            style={{
              color: '#6ede00',
              fontSize: '1.9rem',
              fontWeight: 'bold',
              fontFamily: 'calibri',
              lineHeight: '1.2',
              margin: 'auto',
            }}
          >
            {thousands_separators(lotNumber[1])}
          </dd>
          <dd style={{ color: 'white', margin: 'auto' }}>({thousands_separators(lotNumber[0])})</dd>
        </dl>
        <dl style={{ alignItems: 'center' }}>
          <dt style={{ color: '#D3D3D3', fontSize: '1.1rem' }}>Total Affected Area</dt>
          <dd
            style={{
              color: '#6ede00',
              fontSize: '1.9rem',
              fontFamily: 'calibri',
              lineHeight: '1.2',
              margin: 'auto',
              fontWeight: 'bold',
            }}
          >
            {totalAffectedArea && thousands_separators(totalAffectedArea.toFixed(0))}
            <label style={{ fontWeight: 'normal', fontSize: '1.3rem' }}> m</label>
            <label style={{ verticalAlign: 'super', fontSize: '0.6rem' }}>2</label>
          </dd>
        </dl>
      </div>

      {/* Lot Chart */}
      <div
        id={chartID}
        style={{
          height: '41vh',
          backgroundColor: 'rgb(0,0,0,0)',
          color: 'white',
          marginBottom: '9%',
        }}
      ></div>

      {/* Permit-to-Enter */}
      <div
        style={{ color: '#D3D3D3', fontSize: '1.2rem', paddingLeft: '30px', marginBottom: '13px' }}
      >
        PERMIT-TO-ENTER
      </div>
      <CalciteLabel layout="inline">
        {pteNumber[0] === 'Infinity' ? (
          <b
            style={{
              color: '#6ede00',
              fontSize: '2rem',
              fontWeight: 'bold',
              paddingLeft: '15px',
              display: 'flex',
            }}
          >
            N/A
            <img
              src="https://EijiGorilla.github.io/Symbols/Permit-To-Enter.png"
              alt="Land Logo"
              height={'17%'}
              width={'17%'}
              style={{ marginLeft: 'auto', marginRight: '20px', marginTop: '-25px' }}
            />
          </b>
        ) : (
          <b
            style={{
              color: '#6ede00',
              fontSize: '2rem',
              fontWeight: 'bold',
              fontFamily: 'calibri',
              paddingLeft: '15px',
              display: 'flex',
            }}
          >
            {pteNumber[0]}% ({thousands_separators(pteNumber[1])})
            <img
              src="https://EijiGorilla.github.io/Symbols/Permit-To-Enter.png"
              alt="Land Logo"
              height={'17%'}
              width={'17%'}
              style={{
                marginLeft: 'auto',
                marginRight: '20px',
                marginTop: '-25px',
              }}
            />
          </b>
        )}
      </CalciteLabel>

      <div style={{ color: '#D3D3D3', fontSize: '1.2rem', marginLeft: '30px' }}>
        MODE OF ACQUISITION
      </div>
      <div
        id={chartID_moa}
        style={{
          height: '21vh',
          backgroundColor: 'rgb(0,0,0,0)',
          color: 'white',
          marginLeft: '30px',
        }}
      ></div>
    </>
  );
}; // End of lotChartgs

export default LotChart;
