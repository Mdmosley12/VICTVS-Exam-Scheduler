import Head from "next/head";
import { HomePage } from "../components/home/home-page";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage data={data} />
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await import("/data/TechTestJson.json");
  return {
    props: {
      data: data,
    },
  };
}
