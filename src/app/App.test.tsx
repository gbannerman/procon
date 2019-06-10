import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import App from './App';

describe("App", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it('renders the header', () => {
    expect(wrapper.find('Header').length).toBe(1);
  });

  it('renders the reason columns', () => {
    expect(wrapper.find('ReasonColumn').length).toBe(2);
  });

  it('passes correct props to con column', () => {
    const conColumn = wrapper.find('ReasonColumn').at(1);
    const expectedProps = {
      className: 'cons',
      title: 'Cons'
    };

    expect(conColumn.props()).toMatchObject(expectedProps);
  });

  describe('renders pro column correctly', () => {
    let getProColumn: () => ReactWrapper;

    beforeEach(() => {
      getProColumn = () => wrapper.find('ReasonColumn').at(0);
    });

    it('passes correct props to pro column', () => {
      const expectedProps = {
        className: 'pros',
        title: 'Pros'
      };
  
      expect(getProColumn().props()).toMatchObject(expectedProps);
    });

    it('adds pros to the list of pros', () => {
      expect(getProColumn().prop('reasons')).toHaveLength(0);
      
      getProColumn().find('.ReasonForm__text').simulate('change', {target: {value: 'My new pro'}});
      getProColumn().find('.ReasonForm__submit').simulate('click');

      expect(getProColumn().prop('reasons')).toHaveLength(1);
      expect(getProColumn().prop('reasons')).toEqual([{id: 1, text: 'My new pro'}]);
    })
      
  });

  describe('renders con column correctly', () => {
    let getConColumn: () => ReactWrapper;

    beforeEach(() => {
      getConColumn = () => wrapper.find('ReasonColumn').at(1);
    });

    it('passes correct props to con column', () => {
      const expectedProps = {
        className: 'cons',
        title: 'Cons'
      };
  
      expect(getConColumn().props()).toMatchObject(expectedProps);
    });

    it('adds pros to the list of pros', () => {
      expect(getConColumn().prop('reasons')).toHaveLength(0);
      
      getConColumn().find('.ReasonForm__text').simulate('change', {target: {value: 'My new con'}});
      getConColumn().find('.ReasonForm__submit').simulate('click');

      expect(getConColumn().prop('reasons')).toHaveLength(1);
      expect(getConColumn().prop('reasons')).toEqual([{id: 1, text: 'My new con'}]);
    })
      
  });
});
