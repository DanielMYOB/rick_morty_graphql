/** @type {import('next').NextConfig} */
const env = {
  GRAPHQL_SERVER: "https://rickandmortyapi.com/graphql",
};

const nextConfig = {
  reactStrictMode: true,
  env,
};

module.exports = nextConfig;
