import UrlParser from '../../routes/url-parser';
import UrbanKitchenSource from '../../data/resto-source';
import { createRestoDetailTemplate, createCustomerReviewTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const DetailResto = {
  async render() {
    return `
      <div class="resto-detail" tabindex="0"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await UrbanKitchenSource.detailRestoCatalogue(url.id);
    const restoContainer = document.querySelector('.resto-detail');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        pictureId: resto.pictureId,
        description: resto.description,
        city: resto.city,
        rating: resto.rating,
      },
    });

    const form = document.createElement('form');
    form.innerHTML = `
      <div class="resto-detail__customer-review">
        <p class="customer-review__info-label">Add your Review</span>
        <div class="form-group">
          <label for="customerName" class="form-group-label">Your Name</label>
          <input type="text" id="customerName" required>
        </div>
        <div class="form-group">
          <label for="customerReview" class="form-group-label">Your Review</label>
          <textarea id="customerReview" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </div>
    `;
    restoContainer.appendChild(form);

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const customerName = document.getElementById('customerName').value;
      const customerReview = document.getElementById('customerReview').value;
      const reviewData = {
        id: url.id,
        name: customerName,
        review: customerReview,
      };

      const response = await UrbanKitchenSource.addCustomerReview(reviewData);
      if (response.error) {
        console.error('Failed to submit customer review:', response.message);
      } else {
        const newReview = {
          name: customerName,
          review: customerReview,
          date: new Date().toLocaleDateString(),
        };
        resto.customerReviews.push(newReview);
        restoContainer.querySelector('.resto-detail__reviews').innerHTML += createCustomerReviewTemplate(newReview);

        form.reset();
      }
    });
  },
};

export default DetailResto;
