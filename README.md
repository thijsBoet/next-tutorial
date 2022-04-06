# Next Tutorial by Codevolurtion 
[Youtube Link](https://www.youtube.com/watch?v=9P8mASSREYM&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=1)

## Routing
1. Page based routing mechanism - Pages are associated with a route based on their file
2. Nested routes are automatically according to the folder structure
3. Dynamic routes can be created by adding square brackets to a page name
4. Catch all routes by adding three dots in the square brackets [ ...params]
```javascript
import { useRouter } from 'next/router'
const router = useRouter()
const { params = [] } = router.query
params[0] params[1] params[2]
```
5. <Link> component to navigate
```javascript
import Link from 'next/link'
<Link href="/blog">
    <a>Blog</a>
</Link>
```
6. useRouter hook's router.push(`./URL/${param[0]}`) method to navigate programmatically
7. Create a custom 404 Page by creating a 404.js file in the root Pages folder

## Pre-rendering & Data Fetching
#### Types of pre-rendering
1. Static Generation
    - without Data
    - with data
    - Incremental Static Generation
    - dynamic parameters when fetching data
2. Server-side Rendering
    - data fetching

#### Data Fetching
1. Client-side data fetching
2. Combining pre-rendering with client-side data fetching