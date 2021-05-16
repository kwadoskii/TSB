import React from "react";
import Head from "next/head";

import config from "../constants/config.json";

export default function Title({ title = "" }) {
  return (
    <Head>
      <title>{`${config.appName.short} ${title ? " | " + title.trim() : ""}`}</title>
    </Head>
  );
}
