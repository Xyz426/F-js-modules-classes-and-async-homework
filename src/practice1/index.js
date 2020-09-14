import {ADDRESS, PORT, PATH,REGION} from './constant'
import getURL from './utils'

const url = getURL(ADDRESS,PORT,PATH);
const region = REGION;

export {url,region};