/* eslint-disable @next/next/no-img-element */
import React from "react";
import Style from "@/styles/blogs.module.scss";
import EditIcon from "@/public/icons/EditIcon";
import BinIcon from "@/public/icons/BinIcon";
import SearchIcon from "@/public/icons/SearchIcon";
import Link from "next/link";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import { deleteBlogs } from "@/network-requests/api/blogs";
import { useGetAllStories } from "@/network-requests/queries";

const StoryHome = () => {
  const { data, refetch, isLoading } = useGetAllStories();

  const router = useRouter();

  const onDeleteById = React.useCallback(
    async (id: string | undefined) => {
      if (id) {
        if (window.confirm("Are you sure to delete this story")) {
          const response = await deleteBlogs(id);
          alert(`Story Deleted Successfully`);
          console.log(response);
          refetch();
        }
      }
    },
    [refetch]
  );

  return (
    <>
      <div className={Style.mydiv}>
        <h1>Stories</h1>
      </div>
      <div className={Style.searchsec}>
        <ul>
          <li>
            <div className={Style.searchlistproduct}>
              <div className={Style.box}>
                <form>
                  <input type="text" placeholder="Search Order" />
                  <button>
                    <SearchIcon />
                  </button>
                </form>
              </div>
            </div>
            <div className={Style.selectoption}>
              <select>
                <option value="1">All Category</option>
              </select>
            </div>
            <div className={Style.activeselect}>
              <select>
                <option value="1">Active</option>
                <option value="2">Archived</option>
                <option value="3">Disabled</option>
              </select>
            </div>
          </li>
          <li>
            <div className={Style.actionbtnlist}>
              <Link href="/admin/stories/create" className={Style.cpbtn}>
                Create New Story
              </Link>
            </div>
          </li>
        </ul>
      </div>
      {isLoading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className={Style.allproducttable}>
          <table>
            <thead>
              <tr>
                <th>
                  <div className={Style.topcheckbox}>
                    <div className={Style.checkbox}>
                      <input type="checkbox" />
                    </div>
                  </div>
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <div className={Style.orderbox}>
                        <input type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className={Style["product-image"]}>
                        {item.image && (
                          <Image
                            height={50}
                            width={50}
                            src={item.image}
                            alt={item.slug}
                          />
                        )}
                      </div>
                    </td>
                    <td>
                      <div className={Style.productrname}>
                        <p>{item.name}</p>
                      </div>
                    </td>
                    <td>
                      <div className={Style.price}>
                        {item.categories.map((c, i) => (
                          <div key={i}>{c}</div>
                        ))}
                      </div>
                    </td>
                    <td>
                      <div className={Style.date}>
                        {moment(item.createdAt).format("DD MMM YYYY hh:mm")}
                      </div>
                    </td>
                    <td>
                      <div className={Style.actionbtn}>
                        <ul className={Style.actionbtnul}>
                          <li
                            title="edit"
                            onClick={() =>
                              router.push(
                                `/admin/stories/update?id=${item._id}`
                              )
                            }
                          >
                            <EditIcon />
                          </li>
                          <li
                            title="Delete"
                            onClick={() => onDeleteById(item._id)}
                          >
                            <BinIcon />
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default StoryHome;
