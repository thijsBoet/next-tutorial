import Link from 'next/link';

const PostList = ({ posts }) => {
	return (
		<>
			<h1>Lists of Posts</h1>
			{posts.map(post => {
				return (
					<div key={post.id}>
						<Link href={`/posts/${post.id}`} passHref>
							<h2>
								{post.id}. {post.title}
							</h2>
						</Link>
						<hr />
					</div>
				);
			})}
		</>
	);
};

export const getStaticProps = async ctx => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await response.json();
	return {
		props: {
			posts: data,
		},
	};
};

export default PostList;
