import Head from "next/head";
import { HomePage } from "../src/components/home/home-page";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Events app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage data={data} />
    </div>
  );
}

//only run on the server side, never on the browser
//this function will run before above component
//this page will be created just in time after deployment
export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");
  console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}
