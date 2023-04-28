/* eslint-disable @next/next/no-img-element */
import React from "react";
import pMap from "p-map";
import dynamic from "next/dynamic";
import { useImmer } from "use-immer";
import Style from "/styles/blogs.module.scss";
import Input from "@/components/element/input";
import ChipInput from "@/components/chip-input";
import AddMoreButton from "@/components/element/addmore";
import { uploadBlogImage } from "@/network-requests/image";
import DynamicImageGrid from "@/components/element/image-picker-grid";
import { useCreateNewBlog } from "@/network-requests/mutations";
import { useRouter } from "next/router";

const IRichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});

const CreateBlog = () => {
  const router = useRouter();

  const [state, setState] = useImmer({
    name: "",
    slug: "",
    content: "",
    images: [],
    categories: [],
    meta: {
      title: "",
      description: "",
      keywords: [],
    },
  });
  const { mutate, isLoading } = useCreateNewBlog();

  const onChangeState = React.useCallback(
    (key: keyof typeof state, value: any) => {
      setState((draft) => {
        draft[key] = value;
      });
    },
    [setState]
  );
  const onChangeMetaState = React.useCallback(
    (key: keyof (typeof state)["meta"], value: any) => {
      setState((draft) => {
        draft.meta[key] = value;
      });
    },
    [setState]
  );

  const onSubmitData = React.useCallback(async () => {
    const getImageUrl = async (image: any) => {
      if (image && typeof image !== "string") {
        const imageUrl = await uploadBlogImage(image as Blob);
        return imageUrl;
      }
      return image;
    };
    const imagesUrl = (await pMap(state.images, getImageUrl)) as string[];
    const data = {
      ...state,
      images: imagesUrl,
    };
    mutate(data, {
      onSuccess: (data: any) => {
        router.back();
        alert(data?.message || "Blog Created Successfully");
      },
      onError: () => {
        alert("Something went wrong");
      },
    });
  }, [mutate, state]);

  return (
    <>
      <div className={Style.mydiv}>
        <h1>Create Blog</h1>
      </div>
      <div
        className={`${Style.tablebox} ${Style.mt2} ${Style.productuploadtabbox}`}
      >
        <div className={Style.tabbox}>
          <div className="tabcontantinner">
            <h2> Blog Information</h2>
            <div className="box">
              <ul>
                <li>
                  <Input
                    name="name"
                    type="text"
                    label={"Blog Heading"}
                    placeholder="Enter blog title"
                    onChange={({ target }) =>
                      onChangeState("name", target.value)
                    }
                    value={state.name}
                  />
                </li>
                <li>
                  <Input
                    name="slug"
                    type="text"
                    label={"Slug (uniq for every blog)"}
                    placeholder="Auto Generated"
                    onChange={({ target }) =>
                      onChangeState("slug", target.value)
                    }
                    value={state.slug}
                  />
                </li>
                <li>
                  <label
                    style={{
                      fontSize: "0.85rem",
                      padding: "0.4rem",
                      fontWeight: "500",
                    }}
                  >
                    Content
                  </label>

                  <IRichTextEditor
                    id="rte"
                    sticky={false}
                    placeholder="Type Here"
                    controls={[
                      ["bold", "italic", "underline"],
                      ["link", "image", "video", "blockquote", "code"],
                      ["unorderedList", "h1", "h2", "h3"],
                      ["alignLeft", "alignCenter", "alignRight"],
                    ]}
                    onChange={(value) => onChangeState("content", value)}
                    value={state.content}
                  />
                </li>
                <li className="grid">
                  <ChipInput
                    value={state.categories}
                    label={`Category`}
                    placeholder="Add Category..."
                    onChange={(value) => onChangeState("categories", value)}
                  />
                </li>
                <br />
                <h2>SEO</h2>
                <li>
                  <Input
                    type="text"
                    name="metaTitle"
                    value={state.meta.title}
                    label={"Meta Title"}
                    placeholder="Enter meta title"
                    onChange={({ target }) =>
                      onChangeMetaState("title", target.value)
                    }
                  />
                </li>
                <li>
                  <Input
                    type="text"
                    name="metaDescription"
                    value={state.meta.description}
                    label={"Meta Description"}
                    placeholder="Enter meta description"
                    onChange={({ target }) =>
                      onChangeMetaState("description", target.value)
                    }
                  />
                </li>

                <li className="grid">
                  <ChipInput
                    label={`Key Word`}
                    value={state.meta.keywords}
                    placeholder="Add Key-Word"
                    onChange={(value) => onChangeMetaState("keywords", value)}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Style.right}>
          <h2>Blog Image</h2>
          <div className={Style["box"]}>
            <ul>
              <li>
                <DynamicImageGrid
                  initialValue={state.images}
                  getValue={(value) => onChangeState("images", value)}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={Style.mainheading}>
        <AddMoreButton onClick={onSubmitData} title="Submit Blog Data" />
      </div>
    </>
  );
};

export default CreateBlog;
