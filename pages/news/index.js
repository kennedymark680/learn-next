// import Link from "next/link";
import { Fragment } from "react";

// our-domain.com/news

export const getStaticProps = async () => {
  return {
    props: {
      greeting: "hello",
    },
  };
};

function NewsPage(props) {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>{props.greeting}</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
