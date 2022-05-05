import { ReactElement } from "react";
import Head from "next/head";

const MetaHead: React.FunctionComponent = (): ReactElement => {
  return (
    <Head>
      <title>CRM | Teplitsa. Technologies for Social Good</title>
      <meta
        name="description"
        content="Teplitsa. Technologies for Social Good – is a public educational project aimed to develop cooperation between non-profit sector and IT-specialists."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default MetaHead;
