import UrbanKitchenSource from '../../data/resto-source';
import { createRestoCardTemplate } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
      <div class="restaurant">
        <h1 class="restaurant-label">Explore Restaurant</h1>
        <div class="resto-post">
        </div>
      </div>    
    `;
  },

  async afterRender() {
    const restos = await UrbanKitchenSource.homeRestoCatalogue();
    const restosContainer = document.querySelector('.resto-post');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoCardTemplate(resto);
    });
  },
};

export default HomePage;
