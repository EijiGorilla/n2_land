import { useEffect, useRef, useState, memo } from 'react';
import { structureLayer } from '../layers';
import { view } from '../Scene';
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import Query from '@arcgis/core/rest/support/Query';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive';
import { generateStrucNumber, generateStructureData, thousands_separators } from '../Query';
import '../index.css';
import '../App.css';
import { CalciteLabel } from '@esri/calcite-components-react';
import {
  barangayField,
  municipalityField,
  primaryLabelColor,
  statusStructureQuery,
  structureStatusField,
  valueLabelColor,
} from '../StatusUniqueValues';
import { useDropdownContext } from './DropdownContext';

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
const StructureChart = memo(() => {
  const { municipalSelected, barangaySelected } = useDropdownContext();

  const municipal = municipalSelected.municipality;
  const barangay = barangaySelected.name;

  // 1. Structure
  const pieSeriesRef = useRef<unknown | any | undefined>({});
  const legendRef = useRef<unknown | any | undefined>({});
  const chartRef = useRef<unknown | any | undefined>({});
  const [structureData, setStructureData] = useState([
    {
      category: String,
      value: Number,
      sliceSettings: {
        fill: am5.color('#00c5ff'),
      },
    },
  ]);

  const chartID = 'structure-chart';
  const [structureNumber, setStructureNumber] = useState([]);

  // 2.Mode of Acquisition
  const barSeriesRef = useRef<unknown | any | undefined>({});
  const yAxisRef = useRef<unknown | any | undefined>({});
  const chartRef_moa = useRef<unknown | any | undefined>({});
  const [structureMoaData, setStructureMoaData] = useState([
    {
      category: String,
      value: Number,
    },
  ]);
  const chartID_moa = 'structure-moa';

  // Query
  const queryMunicipality = `${municipalityField} = '` + municipal + "'";
  const queryBarangay = `${barangayField} = '` + barangay + "'";
  const queryMunicipalBarangay = queryMunicipality + ' AND ' + queryBarangay;

  if (municipal && !barangay) {
    structureLayer.definitionExpression = queryMunicipality;
  } else if (barangay) {
    structureLayer.definitionExpression = queryMunicipalBarangay;
  }

  useEffect(() => {
    generateStructureData(municipal, barangay).then((result: any) => {
      setStructureData(result);
    });

    // Structure Number
    generateStrucNumber().then((response: any) => {
      setStructureNumber(response);
    });

    // generateStrucMoaData(municipal, barangay).then((response: any) => {
    //   setStructureMoaData(response);
    // });
  }, [municipal, barangay]);

  useEffect(() => {
    // Dispose previously created root element

    maybeDisposeRoot(chartID);

    var root = am5.Root.new(chartID);
    root.container.children.clear();
    root._logo?.dispose();

    // Set themesf
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root), am5themes_Responsive.new(root)]);
    const responsive = am5themes_Responsive.new(root);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
      }),
    );
    chartRef.current = chart;

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var pieSeries = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: 'Series',
        categoryField: 'category',
        valueField: 'value',
        //legendLabelText: "[{fill}]{category}[/]",
        legendValueText: "{valuePercentTotal.formatNumber('#.')}% ({value})",
        radius: am5.percent(45), // outer radius
        innerRadius: am5.percent(28),
        scale: 1.5,
      }),
    );
    pieSeriesRef.current = pieSeries;
    chart.series.push(pieSeries);

    // values inside a donut
    let inner_label = pieSeries.children.push(
      am5.Label.new(root, {
        text: '[#ffffff]{valueSum}[/]\n[fontSize: 5px; #d3d3d3; verticalAlign: super]STRUCTURES[/]',
        fontSize: 25,
        centerX: am5.percent(50),
        centerY: am5.percent(40),
        populateText: true,
        oversizedBehavior: 'fit',
        textAlign: 'center',
      }),
    );

    pieSeries.onPrivate('width', (width: any) => {
      inner_label.set('maxWidth', width * 0.7);
    });

    // Set slice opacity and stroke color
    pieSeries.slices.template.setAll({
      toggleKey: 'none',
      fillOpacity: 0.9,
      stroke: am5.color('#ffffff'),
      strokeWidth: 0.5,
      strokeOpacity: 1,
      templateField: 'sliceSettings',
    });

    // Disabling labels and ticksll
    pieSeries.labels.template.setAll({
      visible: false,
      scale: 0,
    });
    pieSeries.ticks.template.setAll({
      visible: false,
      scale: 0,
    });

    // EventDispatcher is disposed at SpriteEventDispatcher...
    // It looks like this error results from clicking events
    pieSeries.slices.template.events.on('click', (ev) => {
      var Selected: any = ev.target.dataItem?.dataContext;
      var Category: string = Selected.category;
      const find = statusStructureQuery.find((emp: any) => emp.category === Category);
      const selectedStatus = find?.value;

      var highlightSelect: any;
      var query = structureLayer.createQuery();

      view.when(function () {
        view.whenLayerView(structureLayer).then((layerView): any => {
          //chartLayerView = layerView;

          structureLayer.queryFeatures(query).then(function (results) {
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

            structureLayer.queryExtent(queryExt).then(function (result) {
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
            where: structureStatusField + ' = ' + selectedStatus,
          });
        }); // End of view.whenLayerView
      }); // End of view.whenv
    });

    pieSeries.data.setAll(structureData);

    // Legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        // scale: 1,
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
    const valueLabelsWidth = 50;
    chart.onPrivate('width', function (width: any) {
      const boxWidth = 270; //props.style.width;
      // var availableSpace = Math.max(width - chart.height() - boxWidth, boxWidth);
      var availableSpace = (boxWidth - valueLabelsWidth) * 1.1;
      legend.labels.template.setAll({
        width: availableSpace,
        maxWidth: availableSpace,
      });
    });

    // responsive.addRule({
    //   name: 'Legend',
    //   relevant: function (width, height) {
    //     return width > chart.width();
    //   },
    //   settings: {
    //     centerX: am5.percent(50),
    //     x: am5.percent(50),
    //     scale: 2,
    //   },
    // });

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
      // width: valueLabelsWidth,
      fill: am5.color('#ffffff'),
      //fontSize: LEGEND_FONT_SIZE,
    });

    legend.itemContainers.template.setAll({
      // set space between legend items
      paddingTop: 3,
      paddingBottom: 1,
    });

    pieSeries.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [chartID, structureData]);

  useEffect(() => {
    pieSeriesRef.current?.data.setAll(structureData);
    legendRef.current?.data.setAll(pieSeriesRef.current.dataItems);
  });

  // Mode of Acquisition
  // useEffect(() => {
  //   // Dispose previously created root element
  //   maybeDisposeRoot(chartID_moa);

  //   var root = am5.Root.new(chartID_moa);
  //   root.container.children.clear();
  //   root._logo?.dispose();

  //   // Set themesf
  //   // https://www.amcharts.com/docs/v5/concepts/themes/
  //   root.setThemes([am5themes_Animated.new(root), am5themes_Responsive.new(root)]);

  //   // Create chart
  //   // https://www.amcharts.com/docs/v5/charts/xy-chart/
  //   var chart = root.container.children.push(
  //     am5xy.XYChart.new(root, {
  //       panX: false,
  //       panY: false,
  //       wheelX: 'none',
  //       wheelY: 'none',
  //     }),
  //   );
  //   chartRef_moa.current = chart;

  //   // Create axes
  //   // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  //   var yRenderer = am5xy.AxisRendererY.new(root, {
  //     minGridDistance: 5,
  //     strokeOpacity: 1,
  //     strokeWidth: 1,
  //     inversed: true,
  //     stroke: am5.color('#ffffff'),
  //   });
  //   yRenderer.grid.template.set('location', 1);

  //   var yAxis = chart.yAxes.push(
  //     am5xy.CategoryAxis.new(root, {
  //       maxDeviation: 0,
  //       categoryField: 'category',
  //       renderer: yRenderer,
  //     }),
  //   );

  //   // Remove grid lines
  //   yAxis.get('renderer').grid.template.set('forceHidden', true);

  //   var xAxis = chart.xAxes.push(
  //     am5xy.ValueAxis.new(root, {
  //       maxDeviation: 0,
  //       min: 0,
  //       strictMinMax: true,
  //       calculateTotals: true,
  //       renderer: am5xy.AxisRendererX.new(root, {
  //         visible: true,
  //         strokeOpacity: 1,
  //         strokeWidth: 1,
  //         stroke: am5.color('#ffffff'),
  //       }),
  //     }),
  //   );
  //   // Remove grid lines
  //   xAxis.get('renderer').grid.template.set('forceHidden', true);

  //   // Label properties for yAxis (category axis)
  //   yAxis.get('renderer').labels.template.setAll({
  //     //oversizedBehavior: "wrap",
  //     textAlign: 'center',
  //     fill: am5.color('#ffffff'),
  //     //maxWidth: 150,
  //     fontSize: 12,
  //   });

  //   xAxis.get('renderer').labels.template.setAll({
  //     fill: am5.color('#ffffff'),
  //     fontSize: 10,
  //   });

  //   // Create series
  //   // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  //   var series = chart.series.push(
  //     am5xy.ColumnSeries.new(root, {
  //       name: 'Series 1',
  //       xAxis: xAxis,
  //       yAxis: yAxis,
  //       valueXField: 'value',
  //       sequencedInterpolation: true,
  //       categoryYField: 'category',
  //     }),
  //   );
  //   barSeriesRef.current = series;
  //   chart.series.push(series);

  //   var columnTemplate = series.columns.template;

  //   columnTemplate.setAll({
  //     draggable: true,
  //     cursorOverStyle: 'pointer',
  //     tooltipText: '{value}',
  //     cornerRadiusBR: 10,
  //     cornerRadiusTR: 10,
  //     strokeOpacity: 0,
  //   });

  //   // Add Label bullet
  //   series.bullets.push(function () {
  //     return am5.Bullet.new(root, {
  //       locationY: 1,
  //       sprite: am5.Label.new(root, {
  //         text: '{value}',
  //         fill: root.interfaceColors.get('alternativeText'),
  //         centerY: 8,
  //         centerX: am5.p50,
  //         fontSize: 13,
  //         populateText: true,
  //       }),
  //     });
  //   });

  //   // Use different color by column
  //   /*
  //   columnTemplate.adapters.add('fill', (fill, target) => {
  //     return chart.get('colors').getIndex(series.columns.indexOf(target));
  //   });

  //   columnTemplate.adapters.add('stroke', (stroke, target) => {
  //     return chart.get('colors').getIndex(series.columns.indexOf(target));
  //   });
  //   */

  //   series.columns.template.events.on('click', function (ev) {
  //     var Selected: any = ev.target.dataItem?.dataContext;
  //     var Category: string = Selected.category;
  //     const find = statusMoaStructureQuery.find((emp: any) => emp.category === Category);
  //     const selectedStatus = find?.value;

  //     var highlightSelect: any;

  //     var query = structureLayer.createQuery();
  //     view.whenLayerView(structureLayer).then(function (layerView) {
  //       //CHART_ELEMENT.style.visibility = "visible";

  //       structureLayer.queryFeatures(query).then(function (results) {
  //         const RESULT_LENGTH = results.features;
  //         const ROW_N = RESULT_LENGTH.length;

  //         let objID = [];
  //         for (var i = 0; i < ROW_N; i++) {
  //           var obj = results.features[i].attributes.OBJECTID;
  //           objID.push(obj);
  //         }

  //         var queryExt = new Query({
  //           objectIds: objID,
  //         });

  //         structureLayer.queryExtent(queryExt).then(function (result) {
  //           if (result.extent) {
  //             view.goTo(result.extent);
  //           }
  //         });

  //         if (highlightSelect) {
  //           highlightSelect.remove();
  //         }
  //         highlightSelect = layerView.highlight(objID);

  //         view.on('click', function () {
  //           layerView.filter = new FeatureFilter({
  //             where: undefined,
  //           });
  //           highlightSelect.remove();
  //         });
  //       });
  //       layerView.filter = new FeatureFilter({
  //         where: structureMoaField + ' = ' + selectedStatus,
  //       });
  //     }); // End of whenLayerView
  //   });

  //   yAxisRef.current = yAxis;
  //   yAxis.data.setAll(structureMoaData);
  //   series.data.setAll(structureMoaData);

  //   // Make stuff animate on load
  //   // https://www.amcharts.com/docs/v5/concepts/animations/
  //   series.appear(1000);
  //   chart.appear(1000, 100);

  //   return () => {
  //     root.dispose();
  //   };
  // }, [chartID_moa, structureMoaData]);

  // useEffect(() => {
  //   barSeriesRef.current?.data.setAll(structureMoaData);
  //   yAxisRef.current?.data.setAll(structureMoaData);
  // });

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
        <dl style={{ alignItems: 'center' }}>
          <dt style={{ color: primaryLabelColor, fontSize: '1.1rem' }}>TOTAL STRUCTURES</dt>
          <dd
            style={{
              color: valueLabelColor,
              fontSize: '1.9rem',
              fontWeight: 'bold',
              fontFamily: 'calibri',
              lineHeight: '1.2',
              margin: 'auto',
            }}
          >
            {thousands_separators(structureNumber[2])}
          </dd>
        </dl>
        <img
          src="https://EijiGorilla.github.io/Symbols/House_Logo.svg"
          alt="Structure Logo"
          height={'17%'}
          width={'17%'}
          style={{ paddingTop: '5px', paddingLeft: '5px' }}
        />
      </div>
      {/* Structure Chart */}
      <div
        id={chartID}
        style={{
          height: '61vh',
          backgroundColor: 'rgb(0,0,0,0)',
          color: 'white',
          marginBottom: '7%',
        }}
      ></div>
      {/* Permit-to-Enter */}
      <CalciteLabel>PERMIT-TO-ENTER</CalciteLabel>
      <CalciteLabel layout="inline">
        {structureNumber[1] === 0 ? (
          <b className="permitToEnterNumber" style={{ color: valueLabelColor }}>
            {structureNumber[0]}% (0)
            <img
              src="https://EijiGorilla.github.io/Symbols/Permit-To-Enter.png"
              alt="Structure Logo"
              height={'15%'}
              width={'15%'}
              style={{ marginLeft: '280px', display: 'flex', marginTop: '-10%' }}
            />
          </b>
        ) : (
          <b className="permitToEnterNumber" style={{ color: valueLabelColor }}>
            {structureNumber[0]}% ({thousands_separators(structureNumber[1])})
            <img
              src="https://EijiGorilla.github.io/Symbols/Permit-To-Enter.png"
              alt="Structure Logo"
              height={'15%'}
              width={'15%'}
              style={{ marginLeft: '280px', display: 'flex', marginTop: '-10%' }}
            />
          </b>
        )}
      </CalciteLabel>

      {/* <CalciteLabel>MODE OF ACQUISITION</CalciteLabel>
      <div
        id={chartID_moa}
        style={{
          height: '21vh',
          backgroundColor: 'rgb(0,0,0,0)',
          color: 'white',
          marginTop: '-3%',
        }}
      ></div> */}
    </>
  );
}); // End of lotChartgs

export default StructureChart;
