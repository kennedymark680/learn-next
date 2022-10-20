import { Fragment } from "react";
import { useRouter } from "next/router";

// our-domain.com/order/[orderId]

function NewsPage(props) {
  const router = useRouter();
  const { orderId } = router.query;

  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>Here is your order number: {orderId}</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
