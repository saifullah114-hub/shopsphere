import axios from 'axios';
import applyConverters from 'axios-case-converter';

const options = {
  preservedKeys: [
    'APPROVED',
    'CREATED',
    'PAYMENT_BYPASSED',
    'PAYMENT_COLLECTED',
    'REJECTED',
    'ORDER_FULFILLED',
    'COMPLETED',
    'IN_PROGRESS',
    '_destroy',
    'duration_unit',
    'validity_unit',
    'renewal_ids',
    'asset_ids',
    '_type'
  ]
};

const axiosClient = applyConverters(axios.create(), options);

export default axiosClient;
