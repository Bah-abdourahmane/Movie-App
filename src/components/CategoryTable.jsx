import React from "react";
import { FaCloudDownloadAlt, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GoEye } from "react-icons/go";
import { Link } from "react-router-dom";

const Text = "text-sm leading-6 whitespace-nowrap text-left px-5 py-3";
const Head = "text-xs text-left text-dry font-semibold px-5 py-2 uppercase";

const CategoryTable = ({ data, users }) => {
  return (
    <div className="overflow-x-auto overflow-hidden relative w-full">
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead>
          <tr className="bg-dryGray">
            {users ? (
              <>
                {" "}
                <th scope="col" className={`${Head}`}>
                  Image
                </th>
                <th scope="col" className={`${Head}`}>
                  Id
                </th>
                <th scope="col" className={`${Head}`}>
                  Date
                </th>
                <th scope="col" className={`${Head}`}>
                  Full Name
                </th>
                <th scope="col" className={`${Head}`}>
                  Email
                </th>
                <th scope="col" className={`${Head} text-end`}>
                  Actions
                </th>
              </>
            ) : (
              <>
                <th scope="col" className={`${Head}`}>
                  Id
                </th>
                <th scope="col" className={`${Head}`}>
                  Date
                </th>
                <th scope="col" className={`${Head}`}>
                  Title
                </th>
                <th scope="col" className={`${Head} text-end`}>
                  Actions
                </th>
              </>
            )}
          </tr>
        </thead>
        <tbody className="bg-main divide-y divide-gray-800">
          {data.map((item, id) => Rows(item, id, users))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;

const Rows = (item, id, users) => {
  return (
    <tr key={id}>
      {users ? (
        <>
          <td className={`${Text} whitespace-nowrap`}>
            <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden">
              <img
                src={`/src/assets/${item?.image}`}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </td>
          <td className={`${Text} whitespace-nowrap`}>
            {item?._id ? item._id : "2R36T9"}
          </td>
          <td className={`${Text} whitespace-nowrap`}>
            {item?.createdAt ? item.createdAt : "02, July 2023"}
          </td>
          <td className={`${Text} whitespace-nowrap`}>{item?.Fullname}</td>
          <td className={`${Text} whitespace-nowrap`}>{item?.email}</td>
          <td className={`${Text} float-right flex-rows gap-2`}>
            <button className="bg-subMain text-white rounded flex-column w-6 h-6">
              <MdDelete className="" />
            </button>
          </td>
        </>
      ) : (
        <>
          <td className={`${Text} whitespace-nowrap font-bold`}>2R36T9</td>
          <td className={`${Text} whitespace-nowrap`}>
            {item?.createdAt ? item.createdAt : "02, July 2023"}
          </td>
          <td className={`${Text} whitespace-nowrap`}>{item.category}</td>
          <td
            className={`${Text} whitespace-nowrap float-right flex-rows gap-2`}
          >
            <button className="border border-border bg-dry flex-rows gap-3 text-border rounded px-2 py-1">
              Edit <FaEdit className="text-green-500" />
            </button>
            <button className="bg-subMain text-white rounded flex-column w-6 h-6">
              <MdDelete className="" />
            </button>
          </td>
        </>
      )}
    </tr>
  );
};
