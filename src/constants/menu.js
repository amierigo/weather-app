import HomeScreen from '../pages/HomeScreen';
import PageNotFound from '../pages/Placeholder/PageNotFound';

export const ROUTES = [
  {
    component: HomeScreen,
    exact: false,
    id: 'home',
    path: '/',
  },
  {
    component: PageNotFound,
    exact: false,
    id: 'notFound',
    path: '*',
  },
];
