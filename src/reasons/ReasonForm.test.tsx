import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import ReasonForm from './ReasonForm';

describe('ReasonForm', () => {
  let wrapper: ReactWrapper;
  let onSubmit: jest.Mock;

  beforeEach(() => {
    onSubmit = jest.fn();

    wrapper = mount(
      <ReasonForm
        className="con"
        onSubmit={onSubmit}
        submitButtonIcon={null}
      />
    );
  });

  it('renders the form with the specified class', () => {
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('form').hasClass('con'));
  });

  it('calls on submit function if reason text is not empty', () => {
    wrapper.find('.ReasonForm__text').simulate('change', {target: {value: 'Some reason'}});
    wrapper.find('.ReasonForm__submit').simulate('click');

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ id: 0, text: 'Some reason'});
  });

  it('does not call submit function if reason text is empty', () => {
    wrapper.find('.ReasonForm__submit').simulate('click');

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('resets text field after successful submit', () => {
    const input = wrapper.find('.ReasonForm__text');
    input.simulate('change', {target: {value: 'Some reason'}});
    
    expect((input.getDOMNode() as HTMLInputElement).value).toBe('Some reason');
    wrapper.find('.ReasonForm__submit').simulate('click');
    expect((input.getDOMNode() as HTMLInputElement).value).toBe('');
  });
});
