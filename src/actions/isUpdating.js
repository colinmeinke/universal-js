export const COMPLETE_UPDATE = 'COMPLETE_UPDATE';

export const REQUEST_UPDATE = 'REQUEST_UPDATE';

export function completeUpdate () {
  return { type: COMPLETE_UPDATE };
};

export function requestUpdate () {
  return { type: REQUEST_UPDATE };
};
