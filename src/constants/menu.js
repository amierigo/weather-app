import LandingScreen from '../pages/LandingScreen';
import HomeScreen from '../pages/HomeScreen';
import WeatherScreen from '../pages/WeatherScreen';
import PageNotFound from '../pages/Placeholder/PageNotFound';

export const ROUTES = [
  {
    component: LandingScreen,
    exact: true,
    id: 'landing',
    path: '/',
  },
  {
    component: HomeScreen,
    exact: false,
    id: 'home',
    path: '/home',
  },
  {
    component: WeatherScreen,
    exact: false,
    id: 'weather',
    path: '/weather',
  },
  {
    component: PageNotFound,
    exact: false,
    id: 'notFound',
    path: '*',
  },
];
