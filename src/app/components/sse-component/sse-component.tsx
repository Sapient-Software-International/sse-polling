import React, { useEffect, useState } from 'react';
import PostsComponent from '../posts-component/posts-component';
import { IPost } from 'src/app/types';

const SSEComponent = () => {
  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:3001/events');

    eventSource.addEventListener('open', () => {
      console.log('SSE Connection Opened!');
    });

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessage(data.message);
      setPosts((prevPosts) => [...prevPosts, data.data]);
    };

    eventSource.onerror = (error) => {
      console.error('SSE Error:', error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1>Server-Sent Events in React</h1>
      <p>
        Message from server:{' '}
        {message.length === 0 || posts.length === 0 ? 'loading...' : message}
      </p>
      {posts.length > 0 && <PostsComponent posts={posts} />}
    </div>
  );
};

export default SSEComponent;
