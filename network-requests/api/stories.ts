import axios from "../axios";
import { StoryTypes } from "@/typings/blogs";

export const getAllStories = () =>
  axios
    .get("/stories")
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
export const getStoryById = (id: string) =>
  axios
    .get(`/stories/${id}/id`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
export const getStoryBySlug = (slug: string) =>
  axios
    .get(`/stories/${slug}/slug`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });

export const createStory = (payload: StoryTypes) =>
  axios
    .post(`/stories`, payload)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
export const updateStory = (id: string, payload: StoryTypes) =>
  axios
    .put(`/stories/${id}`, payload)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
export const deleteStory = (id: string) =>
  axios
    .delete(`/stories/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
