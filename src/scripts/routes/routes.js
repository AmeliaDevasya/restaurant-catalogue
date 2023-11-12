import HomePage from '../views/pages/home-page';
import DetailResto from '../views/pages/detail-resto';
import FavoriteResto from '../views/pages/favorite-resto';

const routes = {
  '/': HomePage,
  '/home-page': HomePage,
  '/favorite-resto': FavoriteResto,
  '/detail-resto/:id': DetailResto,
};

export default routes;
