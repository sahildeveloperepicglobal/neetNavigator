/* eslint-disable @next/next/no-img-element */
import React from "react";
import Style from "@/styles/blogs.module.scss";
import EditIcon from "@/public/icons/EditIcon";
import BinIcon from "@/public/icons/BinIcon";
import SearchIcon from "@/public/icons/SearchIcon";
import { useGetAllBlogs } from "@/network-requests/queries";
import Link from "next/link";
import moment from "moment";
import { useRouter } from "next/router";
import { deleteBlogs } from "@/network-requests/api/blogs";
import Image from "next/image";

const Admin = () => {
  const { data, refetch } = useGetAllBlogs();

  const router = useRouter();

  const onDeleteById = React.useCallback(
    async (id: string | undefined) => {
      if (id) {
        if (window.confirm("Are you sure to delete this blog")) {
          const response = await deleteBlogs(id);
          alert(`Blog Deleted Successfully`);

          refetch();
        }
      }
    },
    [refetch]
  );

  return (
    <>
      <div className={Style.mydiv}>
        <h1>Add Blogs</h1>
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
                <option value="2">All Category</option>
                <option value="3">All Category</option>
                <option value="4">All Category</option>
                <option value="5">All Category</option>
                <option value="6">All Category</option>
                <option value="7">All Category</option>
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
              <Link href="/admin/blogs/create" className={Style.cpbtn}>
                Create New Blogs
              </Link>
            </div>
          </li>
        </ul>
      </div>
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
                      {item.images[0] && (
                        <Image
                          height={50}
                          width={50}
                          src={item.images[0]}
                          alt="xyz"
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
                    {/* <div className={Style.date}>12 April 2023 at 18:37</div> */}
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
                            router.push(`/admin/blogs/update?id=${item._id}`)
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
    </>
  );
};

export default Admin;
