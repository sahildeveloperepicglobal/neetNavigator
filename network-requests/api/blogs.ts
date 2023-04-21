import axios from "../axios";
import { BlogsTypes } from "@/typings/blogs";

export const getAllBlogs = () =>
  axios
    .get("/blogs")
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
export const getBlogsById = (id: string) =>
  axios
    .get(`/blogs/${id}/id`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
export const getBlogsBySlug = (slug: string) =>
  axios
    .get(`/blogs/${slug}/slug`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });

export const createBlogs = (payload: BlogsTypes) =>
  axios
    .post(`/blogs`, payload)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
export const updateBlogs = (id: string, payload: BlogsTypes) =>
  axios
    .put(`/blogs/${id}`, payload)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
export const deleteBlogs = (id: string) =>
  axios
    .delete(`/blogs/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
