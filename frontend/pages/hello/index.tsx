import { NextPage } from "next";
import { useEffect, useState } from "react";
import HelloWorld from "../../components/HelloWorld";
import { getHelloWorld } from "../../server/actions/HelloWorld";

interface Props {
  helloWorld: string;
}

const Hello: NextPage<Props> = ({ helloWorld }) => {
  const [helloWorldId, setHelloWorldId] = useState(0);

  useEffect(() => {
    getHelloWorld(2)
      .then((response) => setHelloWorldId(response ? parseInt(response) : -1))
  }, []);

  return (
    <>
      <HelloWorld />
      <h5>From getStaticProps: {helloWorld}</h5>
      <h5>From getId: {helloWorldId}</h5>
    </>
  );
}

export async function getStaticProps() {
  try {
    const helloWorld: string | void = await getHelloWorld(2);
    
    return {
      props: {
        helloWorld: JSON.parse(JSON.stringify(helloWorld)) as string
      },
      revalidate: 1
    }
  } catch (error) {
    return {
      props: {},
      revalidate: 1
    };
  }
}

export default Hello;