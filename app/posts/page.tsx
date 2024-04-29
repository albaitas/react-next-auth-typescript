import { IPost } from '../../types';

export const metadata = {
  title: 'Posts page'
};

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page() {
  const posts = await getData();

  return (
    <div className='container'>
      <p className='text-2xl font-medium p-1'>Posts</p>
      {posts.map((post: IPost) => (
        <div key={post.id} className='text-l font-medium'>
          <p>
            {post.id}. {post.title}
          </p>
        </div>
      ))}
    </div>
  );
}
