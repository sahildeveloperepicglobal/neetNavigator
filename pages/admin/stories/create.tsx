/* eslint-disable @next/next/no-img-element */
import React from "react";
import slugify from "slugify";
import dynamic from "next/dynamic";
import { useImmer } from "use-immer";
import { useRouter } from "next/router";
import Style from "/styles/blogs.module.scss";
import Input from "@/components/element/input";
import ChipInput from "@/components/chip-input";
import AddMoreButton from "@/components/element/addmore";
import { uploadBlogImage } from "@/network-requests/image";
import DynamicImageGrid from "@/components/element/image-picker-grid";
import { useCreateNewStory } from "@/network-requests/mutations";

const IRichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});

const CreateStory = () => {
  const router = useRouter();

  const [state, setState] = useImmer({
    name: "",
    slug: "",
    image: "",
    content: "",
    quotes: [],
    categories: [],
  });
  const { mutate, isLoading } = useCreateNewStory();

  const onChangeState = React.useCallback(
    (key: keyof typeof state, value: any) => {
      setState((draft) => {
        draft[key] = value;
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
    const image = await getImageUrl(state.image);
    const data = {
      ...state,
      image,
    };
    console.log(data);
    mutate(data, {
      onSuccess: (data: any) => {
        router.back();
        alert(data?.message || "Story Created Successfully");
      },
      onError: () => {
        alert("Something went wrong");
      },
    });
  }, [mutate, router, state]);

  console.log(state);
  return (
    <>
      <div className={Style.mydiv}>
        <h1>Create Story</h1>
      </div>
      <div
        className={`${Style.tablebox} ${Style.mt2} ${Style.productuploadtabbox}`}
      >
        <div className={Style.tabbox}>
          <div className="tabcontantinner">
            <h4>Story</h4>
            <div className="box">
              <ul>
                <li>
                  <Input
                    name="name"
                    type="text"
                    label={"Heading"}
                    placeholder="Enter blog title"
                    onChange={({ target }) => {
                      onChangeState("name", target.value);
                      onChangeState(
                        "slug",
                        slugify(target.value, { lower: true, strict: true })
                      );
                    }}
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
                <li className="grid">
                  <ChipInput
                    label={`Quotes`}
                    value={state.quotes}
                    placeholder="Add Quotes..."
                    onChange={(value) => onChangeState("quotes", value)}
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
              </ul>
            </div>
          </div>
        </div>
        <div className={Style.right}>
          <h4>Image</h4>
          <div className={Style["box"]}>
            <ul>
              <li>
                <DynamicImageGrid
                  initialValue={state.image}
                  getValue={(value) => onChangeState("image", value[0])}
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

export default CreateStory;
