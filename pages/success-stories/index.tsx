/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import * as React from "react";
import { Carousel } from "@/components/carousel";
import css from "@/styles/successstories.module.scss";
import { useGetAllStories } from "@/network-requests/queries";
import { StoryTypes } from "@/typings/blogs";
import { GetServerSidePropsContext } from "next";
import axios from "axios";
import Slider from "react-slick";
import { Settings } from "react-slick";
import { useRouter } from "next/router";

export default function SuccessStories({ data }: { data: StoryTypes[] }) {
  // const { data, isLoading, isFetched } = useGetAllStories();

  const router = useRouter();
  const isLoading = !data;
  const imageItems = data?.map((value) => {
    return {
      name: value.name,
      image: value.image,
      slug: value.slug,
    };
  });
  console.log(imageItems);

  const [currentStory, setCurrentStory] = React.useState<Partial<StoryTypes>>(
    data[0]
  );

  React.useMemo(() => {
    if (data) {
      setCurrentStory(data[0]);
    }
  }, [data]);

  console.log(data);

  return (
    <>
      <Head>
        <title>Success Stories</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={css.div1}>
        <h1>
          My<br></br>Success Story
        </h1>
        <img src={"/img/ss.png"} alt="" />
      </section>
      <section className={css.div2}>
        <div className={css.successimg}>
          <img
            src={currentStory?.image}
            alt={currentStory?.slug}
            crossOrigin="anonymous"
          />
        </div>
        <div className={css.successpara}>
          <h1>{currentStory?.name}</h1>
          <p>{`"${currentStory?.quotes && currentStory?.quotes[0]}"`}</p>
        </div>
      </section>
      <section className={css.div4}>
        <span>
          <img src="/img/Ellipse6.png" alt="" />
        </span>
        <span>
          <img src="/img/j1.png" alt="" />
        </span>
      </section>
      <section
        className={css.div4}
        dangerouslySetInnerHTML={{
          __html: (currentStory?.content && currentStory?.content) as string,
        }}
      ></section>

      <section
        style={{
          overflow: "hidden",
        }}
      >
        {!isLoading && (
          <Slider {...options}>
            {imageItems.map(({ image, slug, name }, index) => {
              return (
                <div key={index}>
                  <div
                    style={{
                      padding: "10px",
                    }}
                    title={name}
                  >
                    <img
                      src={image || "/image/anikajain.jpg"}
                      alt={slug}
                      crossOrigin="anonymous"
                      style={{
                        maxWidth: "100%",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onClick={() => router.push(`/success-stories/${slug}`)}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        )}
      </section>
    </>
  );
}
export const getServerSideProps = async () => {
  const { data } = await axios({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/stories`,
  });

  return {
    props: {
      data,
    },
  };
};

const options: Settings = {
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
};
