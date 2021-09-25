import Head from "next/head";
import config from "../constants/config.json";

export default function Title({ title = "", children }) {
  return (
    <Head>
      <title>{`${title ? title.trim() + " | " : ""} ${config.appName.short}`}</title>
      {children}
    </Head>
  );
}
