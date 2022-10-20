import { Fragment } from "react";
import Axios from "axios";

export const getServerSideProps = async () => {
  const res = await Axios.get("https://swapi.dev/api/people/2");

  console.log("RES.data", res.data);

  return {
    props: {
      res: res.data,
    },
  };
};

const MikesPage = (props) => {
  return (
    <Fragment>
      <h1>Mike's Page</h1>
      <h3>{props.res.name}</h3>
    </Fragment>
  );
};

export default MikesPage;
