import AddProduct from '../pages/add-product';
import DetailedList from '../pages/detailed-list';
import Home from '../pages/Home';

const indexRoutes = [
  { title: 'Home', path: '/', component: Home, isExact: true },
  { title: 'Add product', path: '/add', component: AddProduct, isExact: false },
  {
    title: 'Detailed list',
    path: '/detailed-list',
    component: DetailedList,
    isExact: false,
  },
];

export default indexRoutes;
