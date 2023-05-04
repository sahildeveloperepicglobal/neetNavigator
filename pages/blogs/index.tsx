/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import * as React from "react";
import Link from "next/link";
import Loading from "@/components/loading";
import { Blogs } from "network-requests/types";
import styles from "@/styles/blogs.module.scss";
import axios from "axios";
import dynamic from "next/dynamic";
import { BlogsTypes } from "@/typings/blogs";

const HTMLView = dynamic(() => import("@/components/html-view"));

export default function Blogs({ data }: { data: BlogsTypes[] }) {
  const isLoading = !data;
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.mydiv55}>
        <h1>Blogs</h1>
      </section>

      <section className={styles.blogcard}>
        {isLoading ? (
          <div
            style={{
              height: "80vh",
              display: "grid",
              placeContent: "center",
            }}
          >
            <Loading />
          </div>
        ) : (
          <ul>
            {data?.map((item, index) => {
              return (
                <li key={index}>
                  <div className={styles.box1}>
                    <img
                      src={item.images[0]}
                      alt="img"
                      crossOrigin="anonymous"
                      height={`100%`}
                      width={`100%`}
                    />
                    <Link href={`/blogs/${item.slug}`}>
                      <div className={styles.boxcontent}>
                        <h2>{item.name}</h2>
                        <HTMLView>{item.content.slice(0, 100)}</HTMLView>
                        <p>Read More</p>
                      </div>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </>
  );
}

export const getServerSideProps = async () => {
  const { data } = await axios({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs`,
  });

  return {
    props: {
      data,
    },
  };
};
