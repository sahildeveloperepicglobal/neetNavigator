import { useQuery } from "react-query";
import { BlogsTypes } from "@/typings/blogs";
import { getAllBlogs, getBlogsById } from "./api/blogs";

export const useGetBlogsById = (id: string) =>
  useQuery(["blog-by-id", id], () => getBlogsById(id), {
    refetchOnMount: false,
    enabled: !!id,
  });

export const useGetAllBlogs = () =>
  useQuery(["blogs"], (): Promise<BlogsTypes[]> => getAllBlogs());
