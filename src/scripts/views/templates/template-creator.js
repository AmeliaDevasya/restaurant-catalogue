import CONFIG from '../../globals/config';

const createRestoCardTemplate = (resto) => `
    <article class="resto-post-item">
        <img data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" class="lazyload">
        <div class="resto-post-item-content">
            <h2><a href="/#/detail-resto/${resto.id}">${resto.name}</a></h2>
            <div class="maps-wrapper">
                <p>📍<span>${resto.city}</span></p>
            </div>
            <div class="rate-wrapper">
                <p>⭐️<span>${resto.rating}</span></p>
            </div>
            <p>${resto.description}</p>
        </div>
    </article>
`;

const createCustomerReviewTemplate = (review) => `
  <li>
    <p class="resto-detail__reviewer">${review.name}</p>
    <p class="resto-detail__review">${review.review}</p>
    <p class="resto-detail__review-date">${review.date}</p>
  </li>
`;

const createRestoDetailTemplate = (resto) => `
    <h2 class="resto-detail__name">${resto.name}</h2>
    <img class="resto-detail__image" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}">
    <div class="resto-detail__info-row">
        <p class="resto-detail__info-label">Alamat</p>
        <p class="resto-detail__info-value">${resto.address}</p>
    </div>
    <div class="resto-detail__info-row">
        <p class="resto-detail__info-label">Kota</p>
        <p class="resto-detail__info-value">${resto.city}</p>
    </div>
    <div class="resto-detail__info-row">
        <p class="resto-detail__info-label">Deskripsi</p>
        <p class="resto-detail__info-value">${resto.description}</p>         
    </div>
    <div class="resto-detail__info-row">
        <p class="resto-detail__info-label">Menu Makanan</p>
        <ul class="resto-detail__menu-value">
            ${resto.menus.foods.map((food) => `
                <li>${food.name}</li>
            `).join('')}
        </ul>
    </div>
    <div class="resto-detail__info-row">
        <p class="resto-detail__info-label">Menu Minuman</p>
        <ul class="resto-detail__menu-value">
            ${resto.menus.drinks.map((drink) => `
                <li>${drink.name}</li>
            `).join('')}
        </ul>
    </div>
    <div class="resto-detail__info-row">
        <span class="resto-detail__info-label">Customer Reviews</span>
        <ul class="resto-detail__reviews">
            ${resto.customerReviews.map((review) => createCustomerReviewTemplate(review)).join('')}
        </ul>
    </div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoCardTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
  createCustomerReviewTemplate,
};
