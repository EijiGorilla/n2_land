// Lot Status
export const lotStatusField = 'StatusLA';
export const statusLotLabel = [
  // 'Handed-Over',
  'Paid',
  'For Payment Processing',
  'For Legal Pass',
  'For Appraisal/Offer to Buy',
  'For Expro',
];

export const statusLotQuery = [
  {
    category: statusLotLabel[0],
    value: 1,
    color: '#00734d',
  },
  {
    category: statusLotLabel[1],
    value: 2,
    color: '#0070ff',
  },
  {
    category: statusLotLabel[2],
    value: 3,
    color: '#ffff00',
  },
  {
    category: statusLotLabel[3],
    value: 4,
    color: '#ffaa00',
  },
  {
    category: statusLotLabel[4],
    value: 5,
    color: '#ff0000',
  },
];

// Permit to Enter for lot
export const lotPteField = 'PTE';

// Endorsed Lot
export const statusLotEndorsedLabel = ['Not Endorsed', 'Endorsed', 'NA'];
export const statusLotEndorsedQuery = [
  {
    category: statusLotEndorsedLabel[0],
    value: 0,
    color: '#ff0000',
  },
  {
    category: statusLotEndorsedLabel[0],
    value: 1,
    color: '#006eff',
  },
  {
    category: statusLotEndorsedLabel[0],
    value: 2,
    color: '#d3d3d3',
  },
];

// Lot MOA
export const lotMoaField = 'MoA';
export const statusMoa = [
  'For Negotiation',
  'Expropriation',
  'Donation',
  'CA 141',
  'No Need to Acquire',
];

export const statusMoaQuery = [
  {
    category: statusMoa[0],
    value: 1,
  },
  {
    category: statusMoa[1],
    value: 2,
  },
  {
    category: statusMoa[2],
    value: 3,
  },
  {
    category: statusMoa[3],
    value: 4,
  },
  {
    category: statusMoa[4],
    value: 5,
  },
];

// Structure
export const structureStatusField = 'StatusStruc';
export const statusStructureLabel = [
  'Dismantling/Clearing',
  'Paid',
  'For Payment Processing',
  'For Legal Pass',
  'For Appraisal/Offer to Compensation',
  'LBP Account Opening',
];

export const statusStructureQuery = [
  {
    category: statusStructureLabel[0],
    value: 1,
    colorLayer: [0, 197, 255, 0.6],
    color: '#00C5FF',
  },
  {
    category: statusStructureLabel[1],
    value: 2,
    colorLayer: [112, 173, 71, 0.6],
    color: '#70AD47',
  },
  {
    category: statusStructureLabel[2],
    value: 3,
    colorLayer: [0, 112, 255, 0.6],
    color: '#0070FF',
  },
  {
    category: statusStructureLabel[3],
    value: 4,
    colorLayer: [255, 255, 0, 0.6],
    color: '#FFFF00',
  },
  {
    category: statusStructureLabel[4],
    value: 5,
    colorLayer: [255, 170, 0, 0.6],
    color: '#FFAA00',
  },
  {
    category: statusStructureLabel[5],
    value: 6,
    colorLayer: [255, 0, 0, 0.6],
    color: '#FF0000',
  },
];

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

export const statusMoaStructureQuery = [
  {
    category: statusMoaStructure[0],
    value: 1,
  },
  {
    category: statusMoaStructure[1],
    value: 2,
  },
  {
    category: statusMoaStructure[2],
    value: 3,
  },
  {
    category: statusMoaStructure[3],
    value: 4,
  },
  {
    category: statusMoaStructure[4],
    value: 5,
  },
];

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

export const statusNloSymbolRef = [
  'https://EijiGorilla.github.io/Symbols/3D_Web_Style/ISF/ISF_Relocated.svg',
  'https://EijiGorilla.github.io/Symbols/3D_Web_Style/ISF/ISF_Paid.svg',
  'https://EijiGorilla.github.io/Symbols/3D_Web_Style/ISF/ISF_PaymentProcess.svg',
  'https://EijiGorilla.github.io/Symbols/3D_Web_Style/ISF/ISF_LegalPass.svg',
  'https://EijiGorilla.github.io/Symbols/3D_Web_Style/ISF/ISF_OtC.svg',
  'https://EijiGorilla.github.io/Symbols/3D_Web_Style/ISF/ISF_LBP.svg',
];

export const statusNloQuery = [
  {
    category: statusNloLabel[0],
    value: 1,
    color: '#00C5FF',
  },
  {
    category: statusNloLabel[1],
    value: 2,
    color: '#70AD47',
  },
  {
    category: statusNloLabel[2],
    value: 3,
    color: '#0070FF',
  },
  {
    category: statusNloLabel[3],
    value: 4,
    color: '#FFFF00',
  },
  {
    category: statusNloLabel[4],
    value: 5,
    color: '#FFAA00',
  },
  {
    category: statusNloLabel[5],
    value: 6,
    color: '#FF0000',
  },
];

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
