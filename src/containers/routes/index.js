import publicRoutes from './modules/authentication';
import dashboardRoutes from './modules/dashboard';
import { Access_Token } from '../../constant/app.constant';

const publicRouteList = !Access_Token ? [...publicRoutes] : [];
const privateRouteList = Access_Token ? [...dashboardRoutes] : [];

export const indexRoutes = [...privateRouteList,  ...publicRouteList];