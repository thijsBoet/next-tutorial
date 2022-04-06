import { useRouter } from 'next/router';

const Post = ({ post }) => {
	const router = useRouter();
	if (router.isFallback) return <h1>Loading ...</h1>;

	return (
		<>
			<h2>
				{post.id}. {post.title}
			</h2>
			<p>{post.body}</p>
		</>
	);
};

export default Post;

export const getStaticPaths = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts = await response.json();

	const paths = posts.map(post => {
		return {
			params: {
				postId: `${post.id}`,
			},
		};
	});

	return {
		// paths: paths,
		paths: [
			{
				params: { postId: '1' },
			},
			{
				params: { postId: '2' },
			},
			{
				params: { postId: '3' },
			},
		],
		fallback: true,
	};
};

export const getStaticProps = async context => {
	const { params } = context;
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.postId}`
	);

	const data = await response.json();

	console.log(`generating page for /posts/${params.postId}`);
	return {
		props: {
			post: data,
		},
	};
};
