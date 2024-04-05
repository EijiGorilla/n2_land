import { dateTable, lotLayer, nloLayer, structureLayer } from '../layers';
import StatisticDefinition from '@arcgis/core/rest/support/StatisticDefinition';
import * as am5 from '@amcharts/amcharts5';
import { view } from '../Scene';
import {
  statusLotLabel,
  statusLotQuery,
  statusMoa,
  statusMoaStructure,
  statusNloLabel,
  statusNloQuery,
  statusStructureLabel,
  statusStructureQuery,
} from '../StatusUniqueValues';

// Updat date
export async function dateUpdate() {
  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const query = dateTable.createQuery();
  query.where = "project = 'N2'" + ' AND ' + "category = 'Land Acquisition'";

  return dateTable.queryFeatures(query).then((response: any) => {
    const stats = response.features;
    const dates = stats.map((result: any) => {
      const date = new Date(result.attributes.date);
      const year = date.getFullYear();
      const month = monthList[date.getMonth()];
      const day = date.getDate();
      console.log(day);
      const final = year < 1990 ? '' : `${month} ${day}, ${year}`;
      return final;
    });
    return dates;
  });
}

// For Lot Pie Chart
export async function generateLotData() {
  // var total_handedover_lot = new StatisticDefinition({
  //   onStatisticField: 'CASE WHEN StatusLA = 0 THEN 1 ELSE 0 END',
  //   outStatisticFieldName: 'total_handedover_lot',
  //   statisticType: 'sum',
  // });

  var total_paid_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusLA = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_paid_lot',
    statisticType: 'sum',
  });

  var total_payp_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusLA = 2 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_payp_lot',
    statisticType: 'sum',
  });

  var total_legalpass_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusLA = 3 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_legalpass_lot',
    statisticType: 'sum',
  });

  var total_otb_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusLA = 4 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_otb_lot',
    statisticType: 'sum',
  });

  var total_expro_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusLA = 5 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_expro_lot',
    statisticType: 'sum',
  });

  var query = lotLayer.createQuery();
  query.outStatistics = [
    // total_handedover_lot,
    total_paid_lot,
    total_payp_lot,
    total_legalpass_lot,
    total_otb_lot,
    total_expro_lot,
  ];
  query.returnGeometry = true;

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    // const handedover = stats.total_handedover_lot;
    const paid = stats.total_paid_lot;
    const payp = stats.total_payp_lot;
    const legalpass = stats.total_legalpass_lot;
    const otb = stats.total_otb_lot;
    const expro = stats.total_expro_lot;

    const compile = [
      {
        category: statusLotLabel[1],
        value: paid,
        sliceSettings: {
          fill: am5.color(statusLotQuery[1].color),
        },
      },
      {
        category: statusLotLabel[2],
        value: payp,
        sliceSettings: {
          fill: am5.color(statusLotQuery[2].color),
        },
      },
      {
        category: statusLotLabel[3],
        value: legalpass,
        sliceSettings: {
          fill: am5.color(statusLotQuery[3].color),
        },
      },
      {
        category: statusLotLabel[4],
        value: otb,
        sliceSettings: {
          fill: am5.color(statusLotQuery[4].color),
        },
      },
      {
        category: statusLotLabel[5],
        value: expro,
        sliceSettings: {
          fill: am5.color(statusLotQuery[5].color),
        },
      },
    ];
    return compile;
  });
}

export async function generateLotNumber() {
  var total_lot_number = new StatisticDefinition({
    onStatisticField: 'LotID',
    outStatisticFieldName: 'total_lot_number',
    statisticType: 'count',
  });

  var total_lot_pie = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusLA >= 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_lot_pie',
    statisticType: 'sum',
  });

  var query = lotLayer.createQuery();
  query.outStatistics = [total_lot_number, total_lot_pie];
  query.returnGeometry = true;

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const totalLotNumber = stats.total_lot_number;
    const totalLotPie = stats.total_lot_pie;
    return [totalLotNumber, totalLotPie];
  });
}

// For Permit-to-Enter
export async function generatePermitEnter() {
  var total_pte_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN PTE = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_pte_lot',
    statisticType: 'sum',
  });

  var total_lot_N = new StatisticDefinition({
    onStatisticField: 'LotID',
    outStatisticFieldName: 'total_lot_N',
    statisticType: 'count',
  });

  var query = lotLayer.createQuery();
  //query.where = 'LotID IS NOT NULL';
  query.outStatistics = [total_pte_lot, total_lot_N];
  query.returnGeometry = true;

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const pte = stats.total_pte_lot;
    const totaln = stats.total_lot_N;
    const percent = ((pte / totaln) * 100).toFixed(0);
    return [percent, pte];
  });
}

// For Lot MoA Chart
export async function generateLotMoaData() {
  var total_nego_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN MoA = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_nego_lot',
    statisticType: 'sum',
  });

  var total_expro_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN MoA = 2 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_expro_lot',
    statisticType: 'sum',
  });

  var total_donate_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN MoA = 3 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_donate_lot',
    statisticType: 'sum',
  });

  var total_ca141_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN MoA = 4 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_ca141_lot',
    statisticType: 'sum',
  });

  var total_noneed_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN MoA = 5 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_noneed_lot',
    statisticType: 'sum',
  });

  var query = lotLayer.createQuery();
  query.outStatistics = [
    total_nego_lot,
    total_expro_lot,
    total_donate_lot,
    total_ca141_lot,
    total_noneed_lot,
  ];
  query.returnGeometry = true;
  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const nego = stats.total_nego_lot;
    const expro = stats.total_expro_lot;
    const donate = stats.total_donate_lot;
    const ca141 = stats.total_ca141_lot;
    const noneed = stats.total_noneed_lot;

    const compile = [
      {
        category: statusMoa[0],
        value: nego,
      },
      {
        category: statusMoa[1],
        value: expro,
      },
      {
        category: statusMoa[2],
        value: donate,
      },
      {
        category: statusMoa[3],
        value: ca141,
      },
      {
        category: statusMoa[4],
        value: noneed,
      },
    ];
    return compile;
  });
}

// For monthly progress chart of lot
export async function generateLotProgress(municipality: any, barangay: any) {
  var total_count_lot = new StatisticDefinition({
    onStatisticField: 'HandedOverDate',
    outStatisticFieldName: 'total_count_lot',
    statisticType: 'count',
  });

  var query = lotLayer.createQuery();
  query.outStatistics = [total_count_lot];
  // eslint-disable-next-line no-useless-concat
  const municipal = municipality;
  const barang = barangay;
  const queryMunicipality = "Municipality = '" + municipal + "'";
  const queryBarangay = "Barangay = '" + barang + "'";
  const queryMunicipalBarangay = queryMunicipality + ' AND ' + queryBarangay;
  const queryHandedOverDate = 'HandedOverDate IS NOT NULL';

  if (municipal && barang) {
    query.where = queryHandedOverDate + ' AND ' + queryMunicipalBarangay;
  } else if (municipal && !barang) {
    query.where = queryHandedOverDate + ' AND ' + queryMunicipality;
  } else {
    query.where = queryHandedOverDate;
  }

  query.outFields = ['HandedOverDate'];
  query.orderByFields = ['HandedOverDate'];
  query.groupByFieldsForStatistics = ['HandedOverDate'];

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const data = stats.map((result: any, index: any) => {
      const attributes = result.attributes;
      const date = attributes.HandedOverDate;

      const total_handedover = attributes.total_count_lot;

      // compile in object array
      return Object.assign({
        date: date,
        value: total_handedover,
      });
    });

    return data;
  });
}

export async function generateHandedOverAreaData() {
  var total_affected_area = new StatisticDefinition({
    onStatisticField: 'AffectedArea',
    outStatisticFieldName: 'total_affected_area',
    statisticType: 'sum',
  });

  var total_handedover_area = new StatisticDefinition({
    onStatisticField: 'HandedOverArea',
    outStatisticFieldName: 'total_handedover_area',
    statisticType: 'sum',
  });

  var query = lotLayer.createQuery();
  query.where = 'CP IS NOT NULL';
  query.outStatistics = [total_affected_area, total_handedover_area];
  query.orderByFields = ['CP'];
  query.returnGeometry = true;
  query.groupByFieldsForStatistics = ['CP'];

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const data = stats.map((result: any, index: any) => {
      const attributes = result.attributes;
      const affected = attributes.total_affected_area;
      const handedOver = attributes.total_handedover_area;
      const cp = attributes.CP;

      const percent = ((handedOver / affected) * 100).toFixed(0);

      return Object.assign(
        {},
        {
          category: cp,
          value: percent,
        },
      );
    });

    return data;
  });
}

// Structure
export async function generateStructureData() {
  var total_clear_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusStruc = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_clear_lot',
    statisticType: 'sum',
  });

  var total_paid_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusStruc = 2 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_paid_lot',
    statisticType: 'sum',
  });

  var total_payp_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusStruc = 3 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_payp_lot',
    statisticType: 'sum',
  });

  var total_legalpass_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusStruc = 4 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_legalpass_lot',
    statisticType: 'sum',
  });

  var total_otc_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusStruc = 5 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_otc_lot',
    statisticType: 'sum',
  });

  var total_lbp_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusStruc = 6 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_lbp_lot',
    statisticType: 'sum',
  });

  var query = structureLayer.createQuery();
  query.outStatistics = [
    total_clear_lot,
    total_paid_lot,
    total_payp_lot,
    total_legalpass_lot,
    total_otc_lot,
    total_lbp_lot,
  ];
  query.returnGeometry = true;
  query.outFields = ['*'];
  return structureLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;

    const clear = stats.total_clear_lot;
    const paid = stats.total_paid_lot;
    const payp = stats.total_payp_lot;
    const legalpass = stats.total_legalpass_lot;
    const otc = stats.total_otc_lot;
    const lbp = stats.total_lbp_lot;

    const compile = [
      {
        category: statusStructureLabel[0],
        value: clear,
        sliceSettings: {
          fill: am5.color(statusStructureQuery[0].color),
        },
      },
      {
        category: statusStructureLabel[1],
        value: paid,
        sliceSettings: {
          fill: am5.color(statusStructureQuery[1].color),
        },
      },
      {
        category: statusStructureLabel[2],
        value: payp,
        sliceSettings: {
          fill: am5.color(statusStructureQuery[2].color),
        },
      },
      {
        category: statusStructureLabel[3],
        value: legalpass,
        sliceSettings: {
          fill: am5.color(statusStructureQuery[3].color),
        },
      },
      {
        category: statusStructureLabel[4],
        value: otc,
        sliceSettings: {
          fill: am5.color(statusStructureQuery[4].color),
        },
      },
      {
        category: statusStructureLabel[5],
        value: lbp,
        sliceSettings: {
          fill: am5.color(statusStructureQuery[5].color),
        },
      },
    ];
    return compile;
  });
}

// For Permit-to-Enter
export async function generateStrucNumber() {
  var total_pte_structure = new StatisticDefinition({
    onStatisticField: 'CASE WHEN PTE = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_pte_structure',
    statisticType: 'sum',
  });

  var total_struc_N = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusStruc >=1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_struc_N',
    statisticType: 'sum',
  });

  var query = structureLayer.createQuery();

  query.outStatistics = [total_pte_structure, total_struc_N];
  return structureLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const pte = stats.total_pte_structure;
    const totaln = stats.total_struc_N;
    const percPTE = Number(((pte / totaln) * 100).toFixed(0));
    return [percPTE, pte, totaln];
  });
}

export async function generateStrucMoaData() {
  var total_nego_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN MoA = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_nego_lot',
    statisticType: 'sum',
  });

  var total_expro_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN MoA = 2 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_expro_lot',
    statisticType: 'sum',
  });

  var total_donate_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN MoA = 3 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_donate_lot',
    statisticType: 'sum',
  });

  var total_noneed_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN MoA = 4 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_noneed_lot',
    statisticType: 'sum',
  });

  var query = structureLayer.createQuery();
  query.outStatistics = [total_nego_lot, total_expro_lot, total_donate_lot, total_noneed_lot];
  query.returnGeometry = true;
  return structureLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const nego = stats.total_nego_lot;
    const expro = stats.total_expro_lot;
    const donate = stats.total_donate_lot;
    const noneed = stats.total_noneed_lot;

    const compile = [
      {
        category: statusMoaStructure[0],
        value: nego,
      },
      {
        category: statusMoaStructure[1],
        value: expro,
      },
      {
        category: statusMoaStructure[2],
        value: donate,
      },
      {
        category: statusMoaStructure[3],
        value: noneed,
      },
    ];
    return compile;
  });
}

// Non-Land Owner
export async function generateNloData() {
  var total_relocated_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusRC = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_relocated_lot',
    statisticType: 'sum',
  });

  var total_paid_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusRC = 2 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_paid_lot',
    statisticType: 'sum',
  });

  var total_payp_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusRC = 3 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_payp_lot',
    statisticType: 'sum',
  });

  var total_legalpass_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusRC = 4 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_legalpass_lot',
    statisticType: 'sum',
  });

  var total_otc_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusRC = 5 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_otc_lot',
    statisticType: 'sum',
  });

  var total_lbp_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusRC = 6 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_lbp_lot',
    statisticType: 'sum',
  });

  var query = nloLayer.createQuery();
  query.outStatistics = [
    total_relocated_lot,
    total_paid_lot,
    total_payp_lot,
    total_legalpass_lot,
    total_otc_lot,
    total_lbp_lot,
  ];
  query.returnGeometry = true;

  return nloLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;

    const clear = stats.total_relocated_lot;
    const paid = stats.total_paid_lot;
    const payp = stats.total_payp_lot;
    const legalpass = stats.total_legalpass_lot;
    const otc = stats.total_otc_lot;
    const lbp = stats.total_lbp_lot;

    const compile = [
      {
        category: statusNloLabel[0],
        value: clear,
        sliceSettings: {
          fill: am5.color(statusNloQuery[0].color),
        },
      },
      {
        category: statusNloLabel[1],
        value: paid,
        sliceSettings: {
          fill: am5.color(statusNloQuery[1].color),
        },
      },
      {
        category: statusNloLabel[2],
        value: payp,
        sliceSettings: {
          fill: am5.color(statusNloQuery[2].color),
        },
      },
      {
        category: statusNloLabel[3],
        value: legalpass,
        sliceSettings: {
          fill: am5.color(statusNloQuery[3].color),
        },
      },
      {
        category: statusNloLabel[4],
        value: otc,
        sliceSettings: {
          fill: am5.color(statusNloQuery[4].color),
        },
      },
      {
        category: statusNloLabel[5],
        value: lbp,
        sliceSettings: {
          fill: am5.color(statusNloQuery[5].color),
        },
      },
    ];
    return compile;
  });
}

export async function generateNloNumber() {
  var total_lbp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusRC >= 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_lbp',
    statisticType: 'sum',
  });

  var query = nloLayer.createQuery();
  query.outStatistics = [total_lbp];
  return nloLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const totalnlo = stats.total_lbp;

    return totalnlo;
  });
}

// For dropdown list
export async function getMuniciaplityBarangayPair() {
  var query = lotLayer.createQuery();
  // eslint-disable-next-line no-useless-concat
  query.where = 'Barangay IS NOT NULL' + ' AND ' + 'Municipality IS NOT NULL';
  query.outFields = ['Municipality', 'Barangay'];
  query.groupByFieldsForStatistics = ['Municipality', 'Barangay'];

  return lotLayer.queryFeatures(query).then((response: any) => {
    const values = response.features.map((result: any, index: number) => {
      const municipal = result.attributes.Municipality;
      const barang = result.attributes.Barangay;

      return Object.assign({
        municipality: municipal,
        barangay: barang,
      });
    });

    const municipalSelect = values
      .map((item: any) => item.municipality)
      .filter((municipality: any, index: any, emp: any) => emp.indexOf(municipality) === index);

    const pair = values.filter(
      (val: any, index: any) =>
        values.findIndex(
          (item: any) => item.barangay === val.barangay && item.municipality === val.municipality,
        ) === index,
    );

    const finalArray = municipalSelect.map((municipal: string, index: number) => {
      let temp: Array<string> = [];

      // Find barangay(s) corresponding to each municipality
      const findBarangay = pair.filter((emp: any) => emp.municipality === municipal);

      // Create an array of barangays correpsonding to each municipality
      for (var j: number = 0; j < findBarangay.length; j++) {
        const barangays = findBarangay[j].barangay;
        const OBJ = Object.assign({
          name: barangays,
        });
        temp.push(OBJ);
      }

      // return the array of collected barangays to an array of municipality
      return Object.assign({
        municipality: municipal,
        barangay: temp.length === 0 ? [{ name: '' }] : temp,
      });
    });
    return finalArray;
  }); // end of qureyFeatures
}

export const dateFormat = (inputDate: any, format: any) => {
  //parse the input date
  const date = new Date(inputDate);

  //extract the parts of the date
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  //replace the month
  format = format.replace('MM', month.toString().padStart(2, '0'));

  //replace the year
  if (format.indexOf('yyyy') > -1) {
    format = format.replace('yyyy', year.toString());
  } else if (format.indexOf('yy') > -1) {
    format = format.replace('yy', year.toString().substr(2, 2));
  }

  //replace the day
  format = format.replace('dd', day.toString().padStart(2, '0'));

  return format;
};

// Thousand separators function
export function thousands_separators(num: any) {
  if (num) {
    var num_parts = num.toString().split('.');
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return num_parts.join('.');
  }
}

export function zoomToLayer(layer: any) {
  return layer.queryExtent().then((response: any) => {
    view
      .goTo(response.extent, {
        //response.extent
        speedFactor: 2,
      })
      .catch(function (error) {
        if (error.name !== 'AbortError') {
          console.error(error);
        }
      });
  });
}

export function highlightLot(layer: any) {
  let highlight: any;
  view.whenLayerView(layer).then((urgentLayerView) => {
    var query = layer.createQuery();
    layer.queryFeatures(query).then((results: any) => {
      const length = results.features.length;
      let objID = [];
      for (var i = 0; i < length; i++) {
        var obj = results.features[i].attributes.OBJECTID;
        objID.push(obj);
      }

      if (highlight) {
        highlight.remove();
      }
      highlight = urgentLayerView.highlight(objID);
    });
  });
}
