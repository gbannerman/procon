import React, { SyntheticEvent } from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { AppState } from '../state';
import { ReasonActions } from '../state/reasons';
import { BinOperations, BinActions } from '../state/bin';
import { getMockRouterProps } from '../testUtils';
import HomeContainer from './HomeContainer';
import { Reason } from '../models/Reason';

jest.mock('react-redux');

describe('Home', () => {
  let wrapper: ReactWrapper;
  let mockStore: AppState = {
    bin: {
      question: 'Should this test pass?',
      id: ''
    },
    reasons: {
      pros: [{ id: 1, text: 'Existing pro'}],
      cons: [{ id: 1, text: 'Existing con'}]
    }
  };
  let mockDispatch = jest.fn();
  let mockRouterProps = getMockRouterProps({id: '5d00da74c8ef78426778f0f7'});

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (require('react-redux') as any).__setMockStore(mockStore);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (require('react-redux') as any).__setMockDispatch(mockDispatch);
    
    wrapper = mount(<HomeContainer {...mockRouterProps} />);

    mockDispatch.mockClear();
  });

  describe('checks for id of bin from router props', () => {

    let mockGetBinOperationCreator = jest.fn();
    let mockGetBinOperation = jest.fn();

    beforeEach(() => {
      mockGetBinOperationCreator.mockClear();
      mockGetBinOperation.mockClear();
      mockGetBinOperationCreator.mockReturnValue(mockGetBinOperation);
      BinOperations.loadBin = mockGetBinOperationCreator;
    });

    it('fetches if id set', () => {
      mockRouterProps = getMockRouterProps({id: '5d00da74c8ef78426778f0f7'})
      
      wrapper = mount(<HomeContainer {...mockRouterProps} />);
  
      expect(mockGetBinOperationCreator).toHaveBeenCalledTimes(1);
      expect(mockGetBinOperationCreator).toHaveBeenCalledWith('5d00da74c8ef78426778f0f7');
      expect(mockDispatch).toHaveBeenCalledWith(mockGetBinOperation);
    });

    it('does not fetch if no id', () => {
      mockRouterProps = getMockRouterProps({id: ''});
      
      wrapper = mount(<HomeContainer {...mockRouterProps} />);
  
      expect(mockGetBinOperationCreator).not.toHaveBeenCalled();
      expect(mockDispatch).not.toHaveBeenCalledWith(mockGetBinOperation);
    });
  });

  // TODO: Write tests for saving

  describe('passes correct props to Home component', () => {
    let getHomeComponent: () => ReactWrapper;

    beforeEach(() => {
      getHomeComponent = () => wrapper.find('Home');
    });

    it('passes decisionValue from the store', () => {
      const decisionValue = getHomeComponent().prop('decisionValue');

      expect(decisionValue).toBe(mockStore.bin.question);
    });

    it('dispatches action when onDecisionValueChange called', () => {
      const onDecisionValueChange = getHomeComponent().prop('onDecisionValueChange') as (e: SyntheticEvent) => void;
      const target = {value: 'My new question?'} as HTMLInputElement;
      onDecisionValueChange({ target: target } as unknown as SyntheticEvent);

      expect(mockDispatch).toBeCalledWith(BinActions.setQuestion('My new question?'));
    });

    it('passes pros from the store', () => {
      const pros = getHomeComponent().prop('pros');

      expect(pros).toBe(mockStore.reasons.pros);
    });

    it('passes cons from the store', () => {
      const cons = getHomeComponent().prop('cons');

      expect(cons).toBe(mockStore.reasons.cons);
    });

    it('dispatches action for new pro', () => {
      const addPro = getHomeComponent().prop('addPro') as (pro: Reason) => void;
      addPro({id: 2, text: 'My new pro'});

      expect(mockDispatch).toHaveBeenCalledWith(ReasonActions.addPro({id: 2, text: 'My new pro'}));
    });

    it('dispatches action for new con', () => {
      const addCon = getHomeComponent().prop('addCon') as (pro: Reason) => void;
      addCon({id: 2, text: 'My new con'});

      expect(mockDispatch).toHaveBeenCalledWith(ReasonActions.addCon({id: 2, text: 'My new con'}));
    });
  });
});
