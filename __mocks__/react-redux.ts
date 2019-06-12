const reactRedux = jest.genMockFromModule('react-redux') as any;

let mockStore = {};
export const __setMockStore = (store) => {
  mockStore = store;
}

let mockDispatch = null;
export const __setMockDispatch = (fn) => {
  mockDispatch = fn;
}

// A custom version of `readdirSync` that reads from the special mocked out
// file list set via __setMockFiles
export const useSelector = (selector: (state: any) => any) => selector(mockStore);
export const useDispatch = () => mockDispatch;

reactRedux.__setMockStore = __setMockStore;
reactRedux.__setMockDispatch = __setMockDispatch;
reactRedux.useSelector = useSelector;
reactRedux.useDispatch = useDispatch;

module.exports = reactRedux;