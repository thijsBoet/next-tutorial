import Link from 'next/link';

const Home = () => {
	return (
		<>
			<h1>Next JS pre-rendering</h1>
			<div>
				<Link href='./users'>
					<a>Users</a>
				</Link>
			</div>
			<div>
				<Link href='./posts'>
					<a>Posts</a>
				</Link>
			</div>
		</>
	);
};

export default Home;
