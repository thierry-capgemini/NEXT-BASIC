// import Link from 'next/link';// This is client-side navigation; the action takes place in the browser, without making a request to the server. You can verify this by opening your browser's network request inspector.
import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

// const PostLink = props => (
//   <li>
//     <Link href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>

    // <li>
    // <Link href="/p/[id]" as={`/p/${props.id}`}>
    //   <a>{props.id}</a>
    // </Link>
    // </li>
    // );
// In the <Link> element, the href prop is now the path of the page in the pages folder and as is the URL to show in URL bar of the browser.
// dynamic routing works pretty nicely with the browser history, all you have to do is to add the as prop to the link component.
    
const Index = props => (
  
    <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    </Layout>

);


Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(data);
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;


// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink id="Hello Next.js" />
//         <PostLink id="Learn Next.js is awesome" />
//         <PostLink id="Deploy apps with Zeit" />
//       </ul>
//     </Layout>
//   );
// }

//   Next.js is all about pages. We can create a page by exporting a React component, and putting that component inside the pages directory. Then it will have a fixed URL based on the file name.
//   the child of the next/link component is the anchor tag. It can also work with any other component or tag, the only requirement for components placed inside <Link /> is that they should accept an onClick prop.
// We don't need to put our components in a special directory; the directory can be named anything. The only special directories are /pages and /public.

//FETCH
// First of all we need to install isomorphic-unfetch. That's the library we are going to use to fetch data. It's a simple implementation of the browser fetch API, but works both in client and server environments.

