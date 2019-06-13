import { RouteComponentProps } from 'react-router';
import { UnregisterCallback } from 'history'

//This is to mock out the dependencies for react router
export function getMockRouterProps<P>(data: P) {

  const location = {
    hash: '',
    key: '',
    pathname: '',
    search: '',
    state: {}
  };

  const props: RouteComponentProps<P> = {
    match: {
      isExact: true,
      params: data,
      path: '',
      url: ''
    },
    location: location,
    history: {
      length:2,
      action:'POP',
      location: location,
      push: () => {},
      replace: () => {},
      go: () => {},
      goBack: () => {},
      goForward: () => {},
      block: () => {
        return null as unknown as UnregisterCallback;
      },
      createHref: () => {
        return '';
      },
      listen: () => {
        return null as unknown as UnregisterCallback;
      }
    }
  };

  return props;
}