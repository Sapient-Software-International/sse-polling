import { render } from '@testing-library/react';

import PostItemComponent from './post-item-component';
import { IPost } from 'src/app/types';

describe('PostItemComponent', () => {
  const post: IPost = {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  };

  it('should render successfully', () => {
    const { baseElement } = render(<PostItemComponent post={post} />);
    expect(baseElement).toBeTruthy();
  });
});
