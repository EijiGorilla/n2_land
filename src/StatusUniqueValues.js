// Lot Status
export const statusLotLabel = [
  'Handed-Over',
  'Paid',
  'For Payment Processing',
  'For Legal Pass',
  'For Appraisal/Offer to Buy',
  'For Expro',
];

export const statusLotQuery = [
  {
    category: statusLotLabel[0],
    value: 0,
    color: '#00734d', //
  },
  {
    category: statusLotLabel[1],
    value: 1,
    color: '#00734d',
  },
  {
    category: statusLotLabel[2],
    value: 2,
    color: '#0070ff',
  },
  {
    category: statusLotLabel[3],
    value: 3,
    color: '#ffff00',
  },
  {
    category: statusLotLabel[4],
    value: 4,
    color: '#ffaa00',
  },
  {
    category: statusLotLabel[5],
    value: 5,
    color: '#ff0000',
  },
];

// Endorsed Lot
export const statusLotEndorsedLabel = ['Not Endorsed', 'Endorsed', 'NA'];
export const statusLotEndorsedColor = [
  [255, 0, 0], // Not Endorsed
  [0, 112, 255], // Endorsed
  [211, 211, 211, 0.7], // NA
];

// Structure
export const statusStructureLabel = [
  'Dismantling/Clearing',
  'Paid',
  'For Payment Processing',
  'For Legal Pass',
  'For Appraisal/Offer to Compensation',
  'LBP Account Opening',
];

export const statusStructureColor = [
  [0, 197, 255, 0.6],
  [112, 173, 71, 0.6],
  [0, 112, 255, 0.6],
  [255, 255, 0, 0.6],
  [255, 170, 0, 0.6],
  [255, 0, 0, 0.6],
];

// NLO
export const statusNlo = ['relocated', 'paid', 'payp', 'legalpass', 'otc', 'lbp'];
export const statusNloLabel = [
  'Relocated',
  'Paid',
  'For Payment Processing',
  'For Legal Pass',
  'For Appraisal/OtC/Reqs for Other Entitlements',
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
