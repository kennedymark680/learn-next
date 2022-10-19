import Link from "next/link";
import { Fragment } from "react";

// our-domain.com/news

function NewsPage() {
  return;
  <Fragment>
    <h1>The News Page</h1>;
    <ul>
      <li>
        <Link href={"NextJS is a great framework"}>
          NextJS is a great framework
        </Link>
      </li>
      <li>Anther</li>
    </ul>
  </Fragment>;
}

export default NewsPage;
