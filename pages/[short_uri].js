import { useEffect } from "react";

const Redirection = ({ data }) => {
  useEffect(() => {
    window.location = data.uri;
  }, [data]);
  return <p>Redirecting to {data.uri}...</p>;
};

export async function getServerSideProps(context) {
  const {
    params: { short_uri },
  } = context;

  const res = await fetch(`${process.env.BASE_URL}api/uri/${short_uri}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Redirection;
