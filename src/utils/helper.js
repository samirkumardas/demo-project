import CONSTANTS from '../config/constants';

export const getSlotTypeName =  type => CONSTANTS.SLOT_TYPES[type.toString()];
export const getSlotTypes =  () => CONSTANTS.SLOT_TYPES;