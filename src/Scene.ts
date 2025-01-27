import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import Compass from '@arcgis/core/widgets/Compass';
import LayerList from '@arcgis/core/widgets/LayerList';
import Search from '@arcgis/core/widgets/Search';
import Expand from '@arcgis/core/widgets/Expand';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import Locate from '@arcgis/core/widgets/Locate.js';
import Measurement from '@arcgis/core/widgets/Measurement';
import {
  lotLayer,
  nloLayer,
  structureLayer,
  endorsedLotLayer,
  occupancyLayer,
  pnrLayer,
  chainageLayer,
  pierAccessLayer,
  stationBoxLayer,
  stationLayer,
  pierHeadColumnLayer,
  prowLayer,
  strucOwnershipLayer,
  handedOverLotLayer,
  ngcp_working_area,
  ngcp_tagged_structureLayer,
  // superUrgentLotLayer,
  // handedOverLotLayer,
} from './layers';
import { highlightLot, zoomToLayer } from './components/Query';
import Zoom from '@arcgis/core/widgets/Zoom';
import { lotIdField, structureIdField } from './StatusUniqueValues';

export const map = new Map({
  basemap: 'dark-gray-vector', // "streets-night-vector", basemap
  ground: 'world-elevation',
});

// Group layers //
const alignmentGroupLayer = new GroupLayer({
  title: 'Alignment',
  visible: true,
  visibilityMode: 'independent',
  layers: [stationBoxLayer, chainageLayer, pierHeadColumnLayer],
}); //map.add(alignmentGroupLayer, 0);

const nloLoOccupancyGroupLayer = new GroupLayer({
  title: 'NLO/LO Occupancy',
  visible: true,
  visibilityMode: 'independent',
  layers: [occupancyLayer, strucOwnershipLayer, nloLayer],
});

const lotGroupLayer = new GroupLayer({
  title: 'Land',
  visible: true,
  visibilityMode: 'independent',
  // layers: [endorsedLotLayer, lotLayer, handedOverLotLayer, superUrgentLotLayer, pnrLayer],
  layers: [endorsedLotLayer, lotLayer, pnrLayer],
});

const ngcp2_groupLayer = new GroupLayer({
  title: 'NGCP Site 2',
  visible: false,
  visibilityMode: 'independent',
  layers: [ngcp_tagged_structureLayer, ngcp_working_area],
});

// Change the layer order by using index numbers in map.add
map.add(pierAccessLayer);
map.add(lotGroupLayer);
map.add(ngcp2_groupLayer);
map.add(structureLayer);
map.add(nloLoOccupancyGroupLayer);
map.add(alignmentGroupLayer);
map.add(prowLayer);
map.add(stationLayer);
map.add(handedOverLotLayer);

export const view = new SceneView({
  container: undefined,
  map,
  center: [120.5793, 15.18],
  zoom: 13,
  viewingMode: 'local',
});

export const basemaps = new BasemapGallery({
  view,
  container: undefined,
});

async function defineActions(event: any) {
  const { item } = event;

  // await item.layer.when();

  if (item.title === 'NGCP Pole Relocation Working Area') {
    item.open = true;
    item.actionsSections = [
      [
        {
          title: 'Zoom to Area',
          className: 'esri-icon-zoom-to-object',
          id: 'full-extent',
        },
      ],
    ];
  }

  if (item.title === 'NGCP Pole Relocation Tagged Structures') {
    item.open = true;
    item.actionsSections = [
      [
        {
          title: 'Zoom to Tagged Structure',
          className: 'esri-icon-zoom-to-object',
          id: 'full-extent',
        },
      ],
    ];

    highlightLot(ngcp_tagged_structureLayer);
  }

  if (item.layer.type !== 'group') {
    item.panel = {
      content: 'legend',
      open: true,
    };
  }

  item.title === 'Chainage' ||
  item.title === 'Pier Head/Column' ||
  item.title === 'NLO/LO Ownership (Structure)' ||
  // item.title === 'Super Urgent Lot' ||
  item.title === 'Land Acquisition (Endorsed Status)' ||
  // item.title === 'Handed-Over (public + private)' ||
  item.title === 'Structure' ||
  item.title === 'NGCP Pole Relocation Working Area' ||
  item.title === 'NGCP Pole Relocation Tagged Structures' ||
  item.title === 'NLO (Non-Land Owner)' ||
  item.title === 'Occupancy (Structure)'
    ? (item.visible = false)
    : (item.visible = true);
}

// highlight super urgent
export const layerList = new LayerList({
  view: view,
  selectionMode: 'multiple',
  visibilityAppearance: 'checkbox',
  container: undefined,
  listItemCreatedFunction: defineActions,
  // listItemCreatedFunction: (event) => {
  //   const item = event.item;
  //   if (item.layer.type !== 'group') {
  //     item.panel = {
  //       content: 'legend',
  //       open: true,
  //     };
  //   }

  // if (item.title === 'Super Urgent Lot') {
  //   // highlightLot(superUrgentLotLayer);
  // } else if (item.title === 'Handed-Over (public + private)') {
  //   highlightLot(handedOverLotLayer);
  // }

  // item.title === 'Chainage' ||
  // item.title === 'Pier Head/Column' ||
  // item.title === 'NLO/LO Ownership (Structure)' ||
  // // item.title === 'Super Urgent Lot' ||
  // item.title === 'Land Acquisition (Endorsed Status)' ||
  // // item.title === 'Handed-Over (public + private)' ||
  // item.title === 'Structure' ||
  // item.title === 'NGCP Pole Relocation Working Area' ||
  // item.title === 'NGCP Pole Relocation Tagged Structures' ||
  // item.title === 'NLO (Non-Land Owner)' ||
  // item.title === 'Occupancy (Structure)'
  //   ? (item.visible = false)
  //   : (item.visible = true);
  // },
});

layerList.on('trigger-action', (event) => {
  // capture the action id
  const id = event.action.id;

  if (id === 'full-extent') {
    zoomToLayer(ngcp_working_area);
  }
});

const sources = [
  {
    layer: lotLayer,
    searchFields: [lotIdField],
    displayField: lotIdField,
    exactMatch: false,
    outFields: [lotIdField],
    name: 'Lot ID',
    placeholder: 'example: 10083',
  },
  {
    layer: structureLayer,
    searchFields: [structureIdField],
    displayField: structureIdField,
    exactMatch: false,
    outFields: [structureIdField],
    name: 'Structure ID',
    placeholder: 'example: MCRP-01-02-ML022',
  },
  {
    layer: chainageLayer,
    searchFields: ['KmSpot'],
    displayField: 'KmSpot',
    exactMatch: false,
    outFields: ['*'],
    name: 'Main KM',
    placeholder: 'example: 80+400',
  },
  {
    layer: pierAccessLayer,
    searchFields: ['PIER'],
    displayField: 'PIER',
    exactMatch: false,
    outFields: ['PIER'],
    name: 'Pier No',
    zoomScale: 1000,
    placeholder: 'example: P-288',
  },
];

const searchWidget = new Search({
  view: view,
  locationEnabled: false,
  allPlaceholder: 'LotID, StructureID, Chainage',
  includeDefaultSources: false,
  container: undefined,
  sources: sources,
});

// Measurement Tool
export const measurement = new Measurement({
  view: view,
  activeTool: undefined,
  container: undefined,
});

export const searchExpand = new Expand({
  view: view,
  content: searchWidget,
  expandIcon: 'chevrons-right',
  group: 'top-right',
});
// view.ui.add(searchExpand, {
//   position: 'top-right',
// });

export const locateBtn = new Locate({
  view,
  // container: undefined,
});
// view.ui.add(locateBtn, { position: 'top-right' });

export const zoom = new Zoom({
  view,
});
// view.ui.add(zoom, { position: 'bottom-right' });

// Compass
export const compass = new Compass({
  view: view,
});
