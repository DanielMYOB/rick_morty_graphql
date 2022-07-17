import { ApolloProvider } from "@apollo/client";
import client from "../libs/apollo";
import Head from "next/head";
import Script from "next/script";

function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
