import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import App from './App';
import { AppState } from '../state';
import { ReasonActions } from '../state/reasons';

jest.mock('react-redux');

describe('App', () => {
  let wrapper: ReactWrapper;
  let mockStore: AppState = {
    reasons: {
      pros: [],
      cons: []
    }
  };
  let mockDispatch = jest.fn();

  beforeEach(() => {
    (require('react-redux') as any).__setMockStore(mockStore);
    (require('react-redux') as any).__setMockDispatch(mockDispatch);

    mockDispatch.mockClear();
    mockStore = {
      reasons: {
        pros: [{ id: 1, text: "Existing pro"}],
        cons: [{ id: 1, text: "Existing con"}]
      }
    };
    
    wrapper = mount(<App />);
  });

  it('renders the header', () => {
    expect(wrapper.find('Header').length).toBe(1);
  });

  it('renders the reason columns', () => {
    expect(wrapper.find('ReasonColumn').length).toBe(2);
  });

  describe('renders pro column correctly', () => {
    let getProColumn: () => ReactWrapper;

    beforeEach(() => {
      getProColumn = () => wrapper.find('ReasonColumn').at(0);
    });

    it('passes correct props to pro column', () => {
      const expectedProps = {
        className: 'pros',
        title: 'Pros',
        reasons: mockStore.reasons.pros
      };
  
      expect(getProColumn().props()).toMatchObject(expectedProps);
    });

    it('dispatches action for new pro', () => {
      getProColumn().find('.ReasonForm__text').simulate('change', {target: {value: 'My new pro'}});
      getProColumn().find('.ReasonForm__submit').simulate('click');

      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(mockDispatch).toHaveBeenCalledWith(ReasonActions.addPro({id: 2, text: 'My new pro'}));
    });
  });

  describe('renders con column correctly', () => {
    let getConColumn: () => ReactWrapper;

    beforeEach(() => {
      wrapper = mount(<App />);
      getConColumn = () => wrapper.find('ReasonColumn').at(1);
    });

    it('passes correct props to con column', () => {
      const expectedProps = {
        className: 'cons',
        title: 'Cons',
        reasons: mockStore.reasons.cons
      };
  
      expect(getConColumn().props()).toMatchObject(expectedProps);
    });

    it('dispatches action for new con', () => {      
      getConColumn().find('.ReasonForm__text').simulate('change', {target: {value: 'My new con'}});
      getConColumn().find('.ReasonForm__submit').simulate('click');

      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(mockDispatch).toHaveBeenCalledWith(ReasonActions.addCon({id: 2, text: 'My new con'}));
    });
  });
});
