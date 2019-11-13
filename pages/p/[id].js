// import { useRouter } from 'next/router';
// import Layout from '../../components/MyLayout';

// export default function Post() {
//   const router = useRouter();

//   return (
//     <Layout>
//       <h1>{router.query.id}</h1>
//       <p>This is the blog post content.</p>
//     </Layout>
//   );
// }

// Having brackets ([]) in the page name makes it a dynamic route. Currently, you can not make part of a page name dynamic, only the full name. For example, /pages/p/[id].js is supported but /pages/p/post-[id].js is not currently.
// When creating the dynamic route we added id between the brackets ([]). This is the name of the query param received by the page, so for /p/hello-nextjs the query object will have { id: 'hello-nextjs'}, and we can access it with useRouter().


import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;

//CONTEXT
// The first argument of the function is the context object. It has a query object that we can use to fetch information.
// In our example, we picked the show ID from query and used it to fetch the show data from the TVMaze API.

// When we click on a link wrapped with the Next.js <Link> component, the page transition takes place in the browser, without making a request to the server.