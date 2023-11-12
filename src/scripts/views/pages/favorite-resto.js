import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoCardTemplate } from '../templates/template-creator';

const FavoriteResto = {
  async render() {
    return `
      <div class="restaurant">
        <h1 class="restaurant-label">Favorite Restaurant</h1>
        <div class="resto-post">
        </div>
      </div>    
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('.resto-post');

    if (restos.length === 0) {
      restosContainer.innerHTML = `
        <div class="resto-item__not__found">
          There is no favorite restaurant
        </div>
      `;
    } else {
      restos.forEach((resto) => {
        restosContainer.innerHTML += createRestoCardTemplate(resto);
      });
    }
  },
};

export default FavoriteResto;
