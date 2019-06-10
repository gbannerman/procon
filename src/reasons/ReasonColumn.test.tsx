import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import ReasonColumn from './ReasonColumn';

describe("ReasonColumn", () => {
  let wrapper: ReactWrapper;
  let formOnSubmit: jest.Mock;
  const reason1 = { id: 1, text: 'Reason 1'};
  const reason2 = { id: 2, text: 'Reason 2'};
  const reason3 = { id: 3, text: 'Reason 3'};

  beforeEach(() => {
    wrapper = mount(
      <ReasonColumn
        title="Cons"
        className="con"
        reasons={[reason1, reason2, reason3]}
        formOnSubmit={formOnSubmit}
        formButtonIcon={null}
      />
    );
  });

  it('renders the column with the specified class', () => {
    expect(wrapper.find('.column').length).toBe(1);
    expect(wrapper.find('.column').hasClass('con'));
  });

  it('renders column title', () => {
    expect(wrapper.find('.column__title').text()).toBe("Cons");
  });

  it('renders each reason', () => {
    const column = wrapper.find('.column');

    expect(column.find('p')).toHaveLength(3);

    expect(column.find('p').get(0).key).toBe('1');
    expect(column.find('p').findWhere(x => x.key() === '1').text()).toBe('Reason 1');
    expect(column.find('p').get(1).key).toBe('2');
    expect(column.find('p').findWhere(x => x.key() === '2').text()).toBe('Reason 2');
    expect(column.find('p').get(2).key).toBe('3');
    expect(column.find('p').findWhere(x => x.key() === '3').text()).toBe('Reason 3');
  });

  it('renders reason form', () => {
    const expectedProps = {
      className: 'con',
      onSubmit: formOnSubmit
    }

    expect(wrapper.find('ReasonForm')).toHaveLength(1);
    expect(wrapper.find('ReasonForm').props()).toMatchObject(expectedProps);
  });
});
