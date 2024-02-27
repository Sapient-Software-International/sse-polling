import { render } from '@testing-library/react';

import SSEComponent from './sse-component';

describe('SSEComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SSEComponent />);
    expect(baseElement).toBeTruthy();
  });
});
