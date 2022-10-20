// our-domain.com
import Link from "next/link";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <h1>The Home Page</h1>
      <Link href="/order/123">Somewhere else</Link>
    </Fragment>
  );
}

export default HomePage;
