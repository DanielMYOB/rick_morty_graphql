import { gql } from "@apollo/client";
import client from "../libs/apollo";
import Card from "../components/Card";
import GET_ALL_CHARACTERS from "../queries/getAllCharacters";

export default function Home({ characters }) {
  return (
    <>
      <header>
        <h1 className="text-center m-5">Rick and Morty With Apollo GraphQL</h1>
      </header>
      <div className="row row-cols-auto justify-content-md-center">
        {characters?.results.map((character) => (
          <div key={character.id} className="col g-4">
            <Card character={character} key={character.id} />
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_ALL_CHARACTERS,
    variables: { page: Math.floor(Math.random() * (20 + 1)) },
  });

  return {
    props: {
      characters: data?.characters,
    },
  };
}
