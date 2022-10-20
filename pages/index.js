// our-domain.com
import Link from "next/link";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/order/123">Somewhere else</Link>
        </li>
        <li>
          <Link href="/mike">Mike's page</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default HomePage;
