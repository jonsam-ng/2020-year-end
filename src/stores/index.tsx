import { createContext, useContext } from '../components/lock/node_modules/react';
// import stores
import baseStore from './baseStore';
import baseStoreDecorate from './baseStoreDecorate';
// import baseStoreFc from './baseStoreFc';

const rootStore = { baseStore, baseStoreDecorate }

const store = createContext(rootStore);
const useStore = () => useContext(store);
export default useStore;