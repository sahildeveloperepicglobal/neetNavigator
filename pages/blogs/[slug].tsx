/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import useSWR from "swr";
import { useRouter } from "next/router";
import styles from "@/styles/blogs.module.scss";
import Loading from "@/components/loading";
import { GetServerSidePropsContext } from "next";
import axios from "axios";
import dynamic from "next/dynamic";
import { BlogsTypes } from "@/typings/blogs";
const HTMLView = dynamic(() => import("@/components/html-view"));

const SingleBlogPage = ({ data }: { data: BlogsTypes }) => {
  const isLoading = !data;

  return (
    <>
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
        <section className={styles.innersec}>
          <div className="container">
            <div className={styles.mainsec}>
              <div className={styles.firstsec}>
                <h1>{data?.name}</h1>
                <img
                  alt={data?.slug}
                  src={data?.images[0] || "/image/9.jpg"}
                  crossOrigin="anonymous"
                />
                {data?.content && <HTMLView>{data?.content}</HTMLView>}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default SingleBlogPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { data } = await axios({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blogs/${context.query?.slug}/slug`,
  });

  return {
    props: {
      data,
    },
  };
};
