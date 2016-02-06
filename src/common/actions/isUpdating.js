const COMPLETE_UPDATE = 'COMPLETE_UPDATE';

const REQUEST_UPDATE = 'REQUEST_UPDATE';

const completeUpdate = () => ({ type: COMPLETE_UPDATE });

const requestUpdate = () => ({ type: REQUEST_UPDATE });

export { COMPLETE_UPDATE, REQUEST_UPDATE, completeUpdate, requestUpdate };
