import API_ENDPOINT from '../globals/api-endpoint';

class UrbanKitchenSource {
  static async homeRestoCatalogue() {
    const response = await fetch(API_ENDPOINT.HOME_PAGE);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestoCatalogue(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTO(id));
    const responseJson = await response.json();
    console.log(responseJson.restaurant);
    return responseJson.restaurant;
  }

  static async addCustomerReview(reviewData) {
    const response = await fetch(API_ENDPOINT.REVIEW_CUSTOMER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default UrbanKitchenSource;
