// Lot Status
export const lotStatusField = 'StatusLA';
export const statusLotLabel = [
  'Paid',
  'For Payment Processing',
  'For Legal Pass',
  'For Offer to Buy',
  'For Notice of Taking',
  'With PTE',
  'For Expropriation',
];

// export const statusLotColor = ['#00734d', '#0070ff', '#ffff00', '#ffaa00', '#ff0000'];
export const statusLotColor = [
  '#00734d',
  '#0070ff',
  '#ffff00',
  '#ffaa00',
  '#FF5733',
  '#70AD47',
  '#FF0000',
];

export const statusLotQuery = statusLotLabel.map((status, index) => {
  return Object.assign({
    category: status,
    value: index + 1,
    color: statusLotColor[index],
  });
});

// Permit to Enter for lot
export const lotPteField = 'PTE';

// Endorsed Lot
export const statusLotEndorsedLabel = ['Not Endorsed', 'Endorsed', 'NA'];
export const statusLotEndorsedColor = ['#ff0000', '#006eff', '#d3d3d3'];
export const statusLotEndorsedQuery = statusLotEndorsedLabel.map((status, index) => {
  return Object.assign({
    category: status,
    value: index,
    color: statusLotEndorsedColor[index],
  });
});

// Lot MOA
export const lotMoaField = 'MoA';
export const statusMoa = [
  'For Negotiation',
  'Expropriation',
  'Donation',
  'CA 141',
  'No Need to Acquire',
];
export const statusMoaQuery = statusMoa.map((status, index) => {
  return Object.assign({
    category: status,
    value: index + 1,
  });
});

// Structure
export const structureStatusField = 'StatusStruc';
export const statusStructureLabel = [
  'Demolished',
  'Paid',
  'For Payment Processing',
  'For Legal Pass',
  'For Offer to Compensate',
  'For Notice of Taking',
  'No Need to Acquire',
];

export const statusStructureColorHex = [
  '#00C5FF',
  '#70AD47',
  '#0070FF',
  '#FFFF00',
  '#FFAA00',
  '#FF5733', //'#FF0000',
  '#B2BEB5',
];
export const statusStructureColorRgb = [
  [0, 197, 255, 0.6],
  [112, 173, 71, 0.6],
  [0, 112, 255, 0.6],
  [255, 255, 0, 0.6],
  [255, 170, 0, 0.6],
  [255, 87, 51, 0.6], //[255, 0, 0, 0.6],
  [178, 190, 181, 0.6],
];

export const statusStructureQuery = statusStructureLabel.map((status, index) => {
  return Object.assign({
    category: status,
    value: index + 1,
    colorLayer: statusStructureColorRgb[index],
    color: statusStructureColorHex[index],
  });
});

// Permit to Enter for structure
export const structurePteField = 'PTE';

// Structure MOA
export const structureMoaField = 'MoA';
export const statusMoaStructure = [
  'For Negotiation',
  'Expropriation',
  'Donation',
  'No Need to Acquire',
];

export const statusMoaStructureQuery = statusMoaStructure.map((status, index) => {
  return Object.assign({
    category: status,
    value: index + 1,
  });
});

// NLO
export const nloStatusField = 'StatusRC';
export const statusNloLabel = [
  'Relocated',
  'Paid',
  'For Payment Processing',
  'For Legal Pass',
  'For Appraisal/OtC/Requirements for Other Entitlements',
  'LBP Account Opening',
];
export const statusNloColor = ['#00C5FF', '#70AD47', '#0070FF', '#FFFF00', '#FFAA00', '#FF0000'];

export const statusNloSymbolRef = [
  'https://EijiGorilla.github.io/Symbols/3D_Web_Style/ISF/ISF_Relocated.svg',
  'https://EijiGorilla.github.io/Symbols/3D_Web_Style/ISF/ISF_Paid.svg',
  'https://EijiGorilla.github.io/Symbols/3D_Web_Style/ISF/ISF_PaymentProcess.svg',
  'https://EijiGorilla.github.io/Symbols/3D_Web_Style/ISF/ISF_LegalPass.svg',
  'https://EijiGorilla.github.io/Symbols/3D_Web_Style/ISF/ISF_OtC.svg',
  'https://EijiGorilla.github.io/Symbols/3D_Web_Style/ISF/ISF_LBP.svg',
];

export const statusNloQuery = statusNloLabel.map((status, index) => {
  return Object.assign({
    category: status,
    value: index + 1,
    color: statusNloColor[index],
  });
});

// Structure Ownership
export const statusStructureOwnershipLabel = ['LO (Land Owner)', 'NLO (Non-Land Owner)'];
export const statusStructureOwnershipColor = [
  [128, 128, 128, 1],
  [128, 128, 128, 1],
];

// Structure Occupancy
export const statusStructureOccupancyLabel = ['Occupied', 'Relocated'];
export const statusStructureOccupancyRef = [
  'https://EijiGorilla.github.io/Symbols/Demolished.png',
  'https://EijiGorilla.github.io/Symbols/DemolishComplete_v2.png',
];

// Pier Access layer
export const pierAccessValue = ['empty', 'accessible', 'others'];
export const pierAccessValueLabel = ['Dates are missing', 'Accessible', 'Others'];
export const pierAccessValueDateColor = [
  [255, 0, 0, 0.9], // Missing
  [0, 255, 0, 0.9], // Accessible
  [255, 255, 255, 0.9], // Dates are missing
];

// Handed Over Date and Handed Over Area
export const lotHandedOverDateField = 'HandedOverDate';
export const lotHandedOverAreaField = 'HandedOverArea';
