import { useQuery } from "react-query";
import { BlogsTypes, StoryTypes } from "@/typings/blogs";
import { getAllBlogs, getBlogsById } from "./api/blogs";
import { getAllStories, getStoryById } from "./api/stories";

export const useGetBlogsById = (id: string) =>
  useQuery(["blog-by-id", id], () => getBlogsById(id), {
    refetchOnMount: false,
    enabled: !!id,
  });

export const useGetAllBlogs = () =>
  useQuery(["blogs"], (): Promise<BlogsTypes[]> => getAllBlogs());

// STORIES
export const useGetStoryById = (id: string) =>
  useQuery(["story-by-id", id], () => getStoryById(id), {
    refetchOnMount: false,
    enabled: !!id,
  });

export const useGetAllStories = () =>
  useQuery(["story"], (): Promise<StoryTypes[]> => getAllStories());
