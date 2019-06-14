import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Home, { HomeProps } from './Home';

jest.mock('react-redux');

describe('Home', () => {
  let wrapper: ReactWrapper;

  let mockOnDecisionValueChange = jest.fn();
  let mockAddPro = jest.fn();
  let mockAddCon = jest.fn();
  let mockOnHeaderSaveClick = jest.fn();

  let props: HomeProps = {
    decisionValue: 'Should this test pass?',
    onDecisionValueChange: mockOnDecisionValueChange,
    pros: [{ id: 1, text: 'Existing pro'}],
    cons: [{ id: 1, text: 'Existing con'}],
    addPro: mockAddPro,
    addCon: mockAddCon,
    onHeaderSaveClick: mockOnHeaderSaveClick
  };

  beforeEach(() => {
    wrapper = mount(<Home {...props} />);

    mockOnDecisionValueChange.mockClear();
    mockAddPro.mockClear();
    mockAddCon.mockClear();
    mockOnHeaderSaveClick.mockClear();
  });

  it('renders the header', () => {
    expect(wrapper.find('Header').length).toBe(1);
  });

  it('renders the reason columns', () => {
    expect(wrapper.find('ReasonColumn').length).toBe(2);
  });

  describe('renders header buttons correctly', () => {

    it('displays the save button', () => {
      expect(wrapper.find('Header').find('.Header__save-button').length).toBe(1);
    });

    it('clicking the save button calls save callback', () => {
      const saveButton = wrapper.find('Header').find('.Header__save-button');
      saveButton.simulate('click');

      expect(mockOnHeaderSaveClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('renders decision question correctly', () => {
    let getQuestionInput: () => ReactWrapper;

    beforeEach(() => {
      getQuestionInput = () => wrapper.find('.Home__content__decision').find('input');
    });

    it('sets value from props', () => {
      expect((getQuestionInput().getDOMNode() as HTMLInputElement).value).toBe(props.decisionValue);
    });

    it('calls change function when changed', () => {
      getQuestionInput().simulate('change', {target: {value: 'My new question?'}});
      expect(mockOnDecisionValueChange.mock.calls[0][0]).toMatchObject({target: {value: 'My new question?'}});
    });
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
        reasons: props.pros
      };
  
      expect(getProColumn().props()).toMatchObject(expectedProps);
    });

    it('dispatches action for new pro', () => {
      getProColumn().find('.ReasonForm__text').simulate('change', {target: {value: 'My new pro'}});
      getProColumn().find('.ReasonForm__submit').simulate('click');

      expect(mockAddPro).toHaveBeenCalledWith({id: 0, text: 'My new pro'});
    });
  });

  describe('renders con column correctly', () => {
    let getConColumn: () => ReactWrapper;

    beforeEach(() => {
      getConColumn = () => wrapper.find('ReasonColumn').at(1);
    });

    it('passes correct props to con column', () => {
      const expectedProps = {
        className: 'cons',
        title: 'Cons',
        reasons: props.cons
      };
  
      expect(getConColumn().props()).toMatchObject(expectedProps);
    });

    it('dispatches action for new con', () => {      
      getConColumn().find('.ReasonForm__text').simulate('change', {target: {value: 'My new con'}});
      getConColumn().find('.ReasonForm__submit').simulate('click');

      expect(mockAddCon).toHaveBeenCalledWith({id: 0, text: 'My new con'});
    });
  });
});
