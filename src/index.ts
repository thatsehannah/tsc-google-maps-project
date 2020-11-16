import { User } from './User/User';
import { Company } from './Company/Company';
import { CustomMap } from './CustomMap/CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
