import { useRef, useEffect, useState } from 'react';
import Select from 'react-select';
import {
  map,
  view,
  basemaps,
  layerList,
  measurement,
  searchExpand,
  locateBtn,
  zoom,
  compass,
} from './Scene';
import './index.css';
import './App.css';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-panel';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-label';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/components/calcite-tabs';
import '@esri/calcite-components/dist/components/calcite-tab';
import '@esri/calcite-components/dist/components/calcite-tab-nav';
import '@esri/calcite-components/dist/components/calcite-button';
import '@esri/calcite-components/dist/components/calcite-tab-title';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
  CalciteTab,
  CalciteTabs,
  CalciteTabNav,
  CalciteTabTitle,
  CalcitePanel,
  CalciteList,
  CalciteListItem,
  CalciteButton,
} from '@esri/calcite-components-react';
import { dateUpdate, getMuniciaplityBarangayPair, zoomToLayer } from './components/Query';
import ExpropriationList from './components/ExpropriationList';
import loadable from '@loadable/component';
import { lotLayer } from './layers';
import LotChart from './chart/LotChart';
// import PierBatchChart from './chart/PierBatchChart';

function App() {
  const [asOfDate, setAsOfDate] = useState<undefined | any | unknown>(null);

  //**** Set states */ test
  const mapDiv = useRef(null);
  const layerListDiv = useRef<HTMLDivElement | undefined | any>(null);

  // Measurement tools
  const [activeAnalysis, setActiveAnalysis] = useState<any | undefined>('');
  const measurementToolDiv = useRef<HTMLDivElement | undefined | any>(null);

  // For Calcite Design
  const calcitePanelBasemaps = useRef<HTMLDivElement | undefined | any>(null);
  const [activeWidget, setActiveWidget] = useState<undefined | any | unknown>(null);
  const [nextWidget, setNextWidget] = useState<undefined | any | unknown>(null);

  // For dropdown filter
  const [initMunicipalBarangay, setInitMunicipalBarangay] = useState([
    {
      municipality: '',
      barangay: [
        {
          name: '',
        },
      ],
    },
  ]);

  const [municipality, setMunicipality] = useState(null);
  const [barangay, setBarangay] = useState(null);
  const [barangayList, setBarangayList] = useState([]);
  const [municipalSelected, setMunicipalSelected] = useState({
    municipality: '',
    barangay: [
      {
        name: '',
      },
    ],
  });
  const [barangaySelected, setBarangaySelected] = useState({ name: '' });

  // loadable for code splitting
  const NloChart = loadable(() => import('./chart/NloChart'));
  const StructureChart = loadable(() => import('./chart/StructureChart'));
  const LotProgressChart = loadable(() => import('./chart/LotProgressChart'));
  const HandedOverAreaChart = loadable(() => import('./chart/HandedOverAreaChart'));

  //
  const [lotLayerLoaded, setLotLayerLoaded] = useState<any>();
  useEffect(() => {
    lotLayer.load().then(() => {
      setLotLayerLoaded(lotLayer.loadStatus);
    });
  });

  //**** Create dropdonw list */
  // Get a pair of municipality and barangay
  useEffect(() => {
    getMuniciaplityBarangayPair().then((response: any) => {
      setInitMunicipalBarangay(response);
    });

    dateUpdate().then((response: any) => {
      setAsOfDate(response);
    });
  }, []);

  // Add zoomToLayer in App component, not LotChart component
  useEffect(() => {
    zoomToLayer(lotLayer);
  }, [municipality, barangay]);

  // handle change event of the Municipality dropdown
  const handleMunicipalityChange = (obj: any) => {
    setMunicipalSelected(obj);
    setMunicipality(obj);
    setBarangayList(obj.barangay);
    setBarangay(null);
    setBarangaySelected({ name: '' });
  };

  // handle change event of the barangay dropdownff
  const handleBarangayChange = (obj: any) => {
    setBarangaySelected(obj);
    setBarangay(obj);
  };

  // End of dropdown list

  //https://stackoverflow.com/questions/70832641/react-onclick-event-working-on-twice-clicks-when-clicking-again
  // if you add activeWidget and nextWidget as dependencies for the following useEffect,
  // calcitePanel is forced to close when dropdownlist item is changed.
  // The solution is simply adding no dependencies.
  useEffect(() => {
    if (activeWidget) {
      const actionActiveWidget = document.querySelector(
        `[data-panel-id=${activeWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionActiveWidget.hidden = true;
    }

    if (nextWidget !== activeWidget) {
      const actionNextWidget = document.querySelector(
        `[data-panel-id=${nextWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionNextWidget.hidden = false;
    }
  });

  // Measurement Tool
  useEffect(() => {
    if (activeAnalysis === 'directLineMeasurementAnalysisButton') {
      measurement.activeTool = 'direct-line';
    } else if (activeAnalysis === 'areaMeasurementAnalysisButton') {
      measurement.activeTool = 'area';
    } else if (activeAnalysis === 'clearButton') {
      measurement.clear();
    }
  }, [activeAnalysis]);

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize
       */

      map.ground.navigationConstraint = {
        type: 'none',
      };

      // Measurement tool
      measurement.container = measurementToolDiv.current;
      const measureButton = document.getElementById('measurementToolMenu') as HTMLElement;
      view.ui.add(measureButton, 'top-right');

      view.ui.add(searchExpand, {
        position: 'top-right',
      });
      view.ui.add(locateBtn, { position: 'top-right' });
      view.ui.add(zoom, { position: 'bottom-right' });
      view.ui.add(compass, { position: 'top-right' });

      view.container = mapDiv.current;
      view.ui.components = [];
      view.ui.empty('top-left');
      basemaps.container = calcitePanelBasemaps.current;
      layerList.container = layerListDiv.current;
    }
  }, []);

  // Style CSS
  const customstyles = {
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isFocused ? '#999999' : isSelected ? '#2b2b2b' : '#2b2b2b',
        color: '#ffffff',
      };
    },

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: '#2b2b2b',
      borderColor: '#949494',
      color: '#ffffff',
      touchUi: false,
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: '#fff' }),
  };

  // https://developers.arcgis.com/calcite-design-system/resources/frameworks/
  // --calcite-ui-background: #353535 f
  // https://developers.arcgis.com/calcite-design-system/foundations/colors/
  // https://codesandbox.io/examples/package/@esri/calcite-components-react
  return (
    <div>
      <CalciteShell>
        <CalciteTabs style={{ width: '37%' }} slot="panel-end" layout="center" scale="m">
          <CalciteTabNav slot="title-group" id="thetabs">
            <CalciteTabTitle class="Land">Land</CalciteTabTitle>
            <CalciteTabTitle class="Structure">Structure</CalciteTabTitle>
            <CalciteTabTitle class="NLO">NLO</CalciteTabTitle>
            <CalciteTabTitle class="ExproList">ExproList</CalciteTabTitle>
          </CalciteTabNav>
          {/* CalciteTab: Lot */}
          <CalciteTab>
            {lotLayerLoaded === 'loaded' && (
              <LotChart
                municipal={municipalSelected.municipality}
                barangay={barangaySelected.name}
              />
            )}
          </CalciteTab>
          {/* CalciteTab: Structure */}
          <CalciteTab>
            <StructureChart
              municipal={municipalSelected.municipality}
              barangay={barangaySelected.name}
            />
          </CalciteTab>

          {/* CalciteTab: Non-Land Owner */}
          <CalciteTab>
            <NloChart municipal={municipalSelected.municipality} barangay={barangaySelected.name} />
          </CalciteTab>

          {/* CalciteTab: List of Lots under Expropriation */}
          <CalciteTab>
            <ExpropriationList
              municipal={municipalSelected.municipality}
              barangay={barangaySelected.name}
            />
          </CalciteTab>
        </CalciteTabs>
        <header
          slot="header"
          id="header-title"
          style={{
            display: 'flex',
            width: '100%',
            height: '70px',
            padding: '0 1rem',
            borderStyle: 'solid',
            borderWidth: 1,
          }}
        >
          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/DOTr_Logo_v2.png"
            alt="DOTr Logo"
            height={'55px'}
            width={'55px'}
            style={{ marginBottom: 'auto', marginTop: 'auto' }}
          />
          <b className="headerTitle">N2 LAND ACQUISITION</b>
          <div className="date">{!asOfDate ? '' : 'As of ' + asOfDate}</div>

          <div className="dropdownFilterLayout">
            <div
              style={{
                color: 'white',
                fontSize: '0.85rem',
                margin: 'auto',
                paddingRight: '0.5rem',
              }}
            >
              Municipality
            </div>
            <Select
              placeholder="Select Municipality"
              value={municipality}
              options={initMunicipalBarangay}
              onChange={handleMunicipalityChange}
              getOptionLabel={(x: any) => x.municipality}
              styles={customstyles}
            />
            <br />
            <div
              style={{
                color: 'white',
                fontSize: '0.85rem',
                margin: 'auto',
                paddingRight: '0.5rem',
              }}
            >
              Barangay
            </div>
            <Select
              placeholder="Select Barangay"
              value={barangay}
              options={barangayList}
              onChange={handleBarangayChange}
              getOptionLabel={(x: any) => x.name}
              styles={customstyles}
            />
          </div>

          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/GCR LOGO.png"
            alt="GCR Logo"
            height={'50px'}
            width={'75px'}
            style={{
              marginBottom: 'auto',
              marginTop: 'auto',
              marginLeft: '1rem',
              marginRight: '1.5rem',
            }}
          />
        </header>

        <CalciteShellPanel
          width-scale="1"
          slot="panel-start"
          position="start"
          id="left-shell-panel"
          displayMode="dock"
        >
          <CalciteActionBar slot="action-bar">
            <CalciteAction
              data-action-id="layers"
              icon="layers"
              text="layers"
              id="layers"
              //textEnabled={true}
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="basemaps"
              icon="basemap"
              text="basemaps"
              id="basemaps"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="charts"
              icon="graph-time-series"
              text="Progress Chart"
              id="charts"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            {/* <CalciteAction
              data-action-id="pierbatch-charts"
              icon="graph-bar-100-stacked"
              text="Accessible Pier Location"
              id="pierbatch-charts"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction> */}

            <CalciteAction
              data-action-id="handedover-charts"
              icon="graph-bar-side-by-side"
              text="Handed-Over Area"
              id="handedover-charts"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="information"
              icon="information"
              text="Information"
              id="information"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>
          </CalciteActionBar>

          <CalcitePanel
            heading="Layers"
            height-scale="l"
            width-scale="l"
            data-panel-id="layers"
            style={{ width: '18vw' }}
            hidden
          >
            <div id="layers-container" ref={layerListDiv}></div>
          </CalcitePanel>

          <CalcitePanel
            heading="Basemaps"
            height-scale="l"
            data-panel-id="basemaps"
            style={{ width: '18vw' }}
            hidden
          >
            <div id="basemap-container" ref={calcitePanelBasemaps}></div>
          </CalcitePanel>

          <CalcitePanel
            class="timeSeries-panel"
            height-scale="l"
            data-panel-id="charts"
            hidden
          ></CalcitePanel>

          {/* <CalcitePanel
            class="pierbatchaccess-panel"
            height-scale="l"
            data-panel-id="pierbatch-charts"
            hidden
          ></CalcitePanel> */}

          <CalcitePanel
            class="handedOverArea-panel"
            height-scale="l"
            data-panel-id="handedover-charts"
            hidden
          ></CalcitePanel>

          <CalcitePanel heading="Description" data-panel-id="information" hidden>
            {nextWidget === 'information' ? (
              <div className="informationDiv">
                <ul>
                  <div>
                    <b style={{ color: 'white', fontWeight: 'bold' }}>
                      --- How to Use Dropdown List ---
                    </b>
                  </div>
                  <li>
                    You can <b>filter the data</b> by City and Barangy using dropdown lists.
                  </li>
                  <li>
                    <b>Click a tab</b> below the dropdown lists to view progress on land, structure,
                    or NLO in charts.
                  </li>

                  <div>
                    <b style={{ color: 'white', fontWeight: 'bold' }}>--- How to Use Chart ---</b>
                  </div>
                  <li>
                    <b>Click series in pie charts</b> to view progress on the corresponding
                    lots/structures/NLO on the map.
                  </li>
                  <li>
                    <b>Lots under expropriation</b> are available in the 'Expro List' tab.
                  </li>
                  <li>
                    <b>Pie chart for lands</b> represent <b>private lands only</b>.
                  </li>
                  <li>
                    Values in the bracket of Land legend represent the total affected areas in
                    square meters corresponeding to milestone status.
                  </li>
                  <li>
                    <b>Permit-to-Enter</b> represents both public and private lands{' '}
                  </li>
                  <li>
                    <b>Progress Chart</b> indicates the number of handed-over lots for both public
                    and private lands{' '}
                  </li>
                  <li>
                    <b>Handed-Over</b> represents both public and privalte lands.
                  </li>
                </ul>
              </div>
            ) : (
              <div className="informationDiv" hidden></div>
            )}
          </CalcitePanel>
        </CalciteShellPanel>
        <div className="mapDiv" ref={mapDiv}></div>

        {/* Measurement Tools */}
        <div
          id="measurementToolMenu"
          className="esri-widget"
          style={{
            padding: '0.5em',
            maxWidth: '110px',
            width: '200px',
            height: '45px',
          }}
        >
          <CalciteButton
            id="directLineMeasurementAnalysisButton"
            icon-start="measure-line"
            title="Interact with direct line measurement"
            onClick={(event: any) => setActiveAnalysis(event.currentTarget.id)}
          ></CalciteButton>
          <CalciteButton
            id="areaMeasurementAnalysisButton"
            icon-start="measure-area"
            title="Interact with area measurement"
            onClick={(event: any) => setActiveAnalysis(event.currentTarget.id)}
          ></CalciteButton>
          <CalciteButton
            id="clearButton"
            icon-start="trash"
            title="Clear measurement"
            onClick={(event: any) => setActiveAnalysis(event.currentTarget.id)}
          ></CalciteButton>
        </div>

        {/* Lot progress chart is loaded ONLY when charts widget is clicked. */}
        {nextWidget === 'charts' && nextWidget !== activeWidget && lotLayerLoaded === 'loaded' && (
          <LotProgressChart
            municipal={municipalSelected.municipality}
            barangay={barangaySelected.name}
          />
        )}

        {nextWidget === 'handedover-charts' && nextWidget !== activeWidget && (
          <HandedOverAreaChart />
        )}

        {/* Progress on Accessible Pier Locations */}
        {/* {nextWidget === 'pierbatch-charts' && nextWidget !== activeWidget && (
          <PierBatchChart
            municipal={municipalSelected.municipality}
            barangay={barangaySelected.name}
          />
        )} */}
      </CalciteShell>
    </div>
  );
}

export default App;
