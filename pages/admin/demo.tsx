/* eslint-disable @next/next/no-img-element */
import React from "react";
import Style from "/styles/blogs.module.scss";
import Input from "@/components/element/input";
import ChipInput from "@/components/chip-input";
import DynamicImageGrid from "@/components/element/image-picker-grid";
import AddMoreButton from "@/components/element/addmore";

const Admin = () => {
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
                  />
                </li>
                <li>
                  <Input
                    name="slug"
                    type="text"
                    label={"Slug (uniq for every blog)"}
                    placeholder="Auto Generated"
                  />
                </li>
                <li>
                  <br />
                  <label htmlFor="">Content</label> <br />
                  <br />
                  {/* <IRichTextEditor
                    id="rte"
                    sticky={false}
                    placeholder="Type Here"
                    controls={[
                      ["bold", "italic", "underline"],
                      ["link", "image", "video", "blockquote", "code"],
                      ["unorderedList", "h1", "h2", "h3"],
                      ["alignLeft", "alignCenter", "alignRight"],
                    ]}
                  /> */}
                </li>
                <li className="grid">
                  <ChipInput
                    label={`Category`}
                    placeholder="Add Category..."
                    onChange={function (e: any): void {}}
                  />
                </li>
                <br />
                <h2>SEO</h2>
                <li>
                  <Input
                    name="metaTitle"
                    type="text"
                    label={"Meta Title"}
                    placeholder="Enter meta title"
                  />
                </li>
                <li>
                  <Input
                    name="metaDescription"
                    type="text"
                    label={"Meta Description"}
                    placeholder="Enter meta description"
                  />
                </li>

                <li className="grid">
                  <ChipInput
                    label={`Key Word`}
                    placeholder="Add Key-Word"
                    onChange={function (e: any): void {
                      throw new Error("Function not implemented.");
                    }}
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
                  getValue={function (value: any): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={Style.mainheading}>
        <AddMoreButton title="Submit Blog Data" />
      </div>
    </>
  );
};

export default Admin;
