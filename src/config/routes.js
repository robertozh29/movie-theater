// Pages
import Theaters from '../pages/Theaters';
import ComingSoon from '../pages/ComingSoon';
import About from '../pages/About';

const routes = [
    {
        path:"/theaters",
        exact: true,
        component: Theaters
    },
    {
        path:"/comingsoon",
        exact: true,
        component: ComingSoon
    },
    {
        path:"/About",
        exact: true,
        component: About
    }
];

export default routes;