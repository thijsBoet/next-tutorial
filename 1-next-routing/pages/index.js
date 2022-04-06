import Link from 'next/link'
import {useRouter} from 'next/router';

function Home() {
    const router = useRouter();
    const handleClick = () => {
        console.log('Clicked')
        router.push('/product')
    }

    return (
        <div>
            <h1>Home Page</h1>
            <p>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
            </p>
            <p>
                <Link href="/product">
                <a>Product</a>
            </Link>
            </p>
            <button onClick={handleClick}>
                Place Order
            </button>
        </div>
    )
}

export default Home