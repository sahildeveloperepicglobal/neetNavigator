/* eslint-disable @next/next/no-img-element */
import React from "react";
import Style from "@/styles/blogs.module.scss";
import EditIcon from "@/public/icons/EditIcon";
import BinIcon from "@/public/icons/BinIcon";
import SearchIcon from "@/public/icons/SearchIcon";
import { useGetAllBlogs } from "@/network-requests/queries";

interface BlogsListProps {
  name: string;
  date: string;
  category: string[];
  onView?: () => void;
  onDelete?: () => void;
  onEdit?: (value: any) => any;
}

const Admin = ({
  name,
  date,
  category,
  onView,
  onDelete,
  onEdit,
}: BlogsListProps) => {
  const { data } = useGetAllBlogs();

  console.log(data);
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
              <a href="#" className={Style.cpbtn}>
                Create New Blogs
              </a>
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
            {data?.map((_data, index) => {
              return (
                <tr key={index}>
                  <td>
                    {" "}
                    <div className={Style.orderbox}>
                      <input type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div className={Style.productrname}>
                      <img src="/img/1.png" alt="" />
                    </div>
                  </td>
                  <td>
                    <div className={Style.productrname}>
                      <p>
                        Why Divan Beds are a Great Investment for Small
                        Apartments in the UK?{" "}
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className={Style.price}>
                      <div>Divan Beds</div>
                    </div>
                  </td>
                  <td>
                    <div className={Style.date}>12 April 2023 at 18:37</div>
                  </td>
                  <td>
                    <div className={Style.actionbtn}>
                      <ul className={Style.actionbtnul}>
                        <li title="edit">
                          <EditIcon />
                        </li>
                        <li title="Delete">
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
