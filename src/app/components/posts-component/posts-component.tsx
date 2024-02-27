import styles from './posts-component.module.css';
import PostItemComponent from '../post-item-component/post-item-component';
import { IPost } from 'src/app/types';

/* eslint-disable-next-line */
export interface PostsComponentProps {
  posts: IPost[];
}

export function PostsComponent({ posts }: PostsComponentProps) {
  return (
    <div className={styles['posts-component']}>
      <h1 className={styles['posts-header']}>All posts ({posts.length})</h1>
      <div className={styles['posts-container']}>
        {posts.map((post) => (
          <PostItemComponent post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default PostsComponent;
