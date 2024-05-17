import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
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
  superUrgentLotLayer,
  handedOverLotLayer,
} from './layers';
import { highlightLot } from './components/Query';
import Zoom from '@arcgis/core/widgets/Zoom';

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
  layers: [endorsedLotLayer, lotLayer, handedOverLotLayer, superUrgentLotLayer, pnrLayer],
});

// Change the layer order by using index numbers in map.add
map.add(pierAccessLayer);
map.add(lotGroupLayer);
map.add(structureLayer);
map.add(nloLoOccupancyGroupLayer);
map.add(alignmentGroupLayer);
map.add(prowLayer);
map.add(stationLayer);

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

// highlight super urgent
export const layerList = new LayerList({
  view: view,
  selectionMode: 'multiple',
  visibilityAppearance: 'checkbox',
  container: undefined,
  listItemCreatedFunction: (event) => {
    const item = event.item;
    if (item.layer.type !== 'group') {
      item.panel = {
        content: 'legend',
        open: true,
      };
    }

    if (item.title === 'Super Urgent Lot') {
      highlightLot(superUrgentLotLayer);
    } else if (item.title === 'Handed-Over (public + private)') {
      highlightLot(handedOverLotLayer);
    }

    item.title === 'Chainage' ||
    item.title === 'Pier Head/Column' ||
    item.title === 'NLO/LO Ownership (Structure)' ||
    item.title === 'Super Urgent Lot' ||
    item.title === 'Land Acquisition (Endorsed Status)' ||
    item.title === 'Handed-Over (public + private)' ||
    item.title === 'Structure' ||
    item.title === 'NLO (Non-Land Owner)' ||
    item.title === 'Occupancy (Structure)'
      ? (item.visible = false)
      : (item.visible = true);
  },
});

const sources = [
  {
    layer: lotLayer,
    searchFields: ['LotID'],
    displayField: 'LotID',
    exactMatch: false,
    outFields: ['LotID'],
    name: 'Lot ID',
    placeholder: 'example: 10083',
  },
  {
    layer: structureLayer,
    searchFields: ['StrucID'],
    displayField: 'StrucID',
    exactMatch: false,
    outFields: ['StrucID'],
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
  expandIconClass: 'esri-icon-search',
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
