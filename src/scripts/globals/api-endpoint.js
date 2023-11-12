import CONFIG from './config';

const API_ENDPOINT = {
  HOME_PAGE: `${CONFIG.BASE_URL}list`,
  DETAIL_RESTO: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  REVIEW_CUSTOMER: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
