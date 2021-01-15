import { createContext, useContext } from 'react';
// import stores
import baseStore from './baseStore';
import baseStoreDecorate from './baseStoreDecorate';
// import baseStoreFc from './baseStoreFc';

const rootStore = { baseStore, baseStoreDecorate }

const store = createContext(rootStore);
const useStore = () => useContext(store);
export default useStore;