import React from "react";
import { FaCloudDownloadAlt, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GoEye } from "react-icons/go";
import { Link } from "react-router-dom";

const Text = "text-sm leading-6 whitespace-nowrap text-left px-5 py-3";
const Head = "text-xs text-left text-dry font-semibold px-5 py-2 uppercase";

const Table = ({ data, admin }) => {
  return (
    <div className="overflow-x-auto overflow-hidden relative w-full">
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead>
          <tr className="bg-dryGray">
            <th scope="col" className={`${Head}`}>
              Image
            </th>
            <th scope="col" className={`${Head}`}>
              Name
            </th>
            <th scope="col" className={`${Head}`}>
              Category
            </th>
            <th scope="col" className={`${Head}`}>
              Language
            </th>
            <th scope="col" className={`${Head}`}>
              Year
            </th>
            <th scope="col" className={`${Head}`}>
              Hours
            </th>
            <th scope="col" className={`${Head} text-end`}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-main divide-y divide-gray-800">
          {data.map((movie, id) => Rows(movie, id, admin))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

const Rows = (movie, id, admin) => {
  return (
    <tr key={id}>
      <td className={`${Text} whitespace-nowrap`}>
        <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden">
          <img
            src={`/src/assets/${movie.image}`}
            alt={movie.name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </td>
      <td className={`${Text} whitespace-nowrap`}>{movie.name}</td>
      <td className={`${Text} whitespace-nowrap`}>{movie.category}</td>
      <td className={`${Text} whitespace-nowrap`}>{movie.language}</td>
      <td className={`${Text} whitespace-nowrap`}>{movie.year}</td>
      <td className={`${Text} whitespace-nowrap`}>{movie.time}</td>
      <td className={`${Text} float-right flex-rows gap-2`}>
        {admin ? (
          <>
            <button className="border border-border bg-dry flex-rows gap-3 text-border rounded px-2 py-1">
              Edit <FaEdit className="text-green-500" />
            </button>
            <button className="bg-subMain text-white rounded flex-column w-6 h-6">
              <MdDelete className="" />
            </button>
          </>
        ) : (
          <>
            <button className="border border-border bg-dry flex-rows gap-3 text-border rounded px-2 py-1">
              Edit <FaCloudDownloadAlt className="text-green-500" />
            </button>
            <Link
              to={`/movie/${movie?.name}`}
              className="bg-subMain text-white rounded flex-column w-6 h-6"
            >
              <GoEye className="" />
            </Link>
          </>
        )}
      </td>
    </tr>
  );
};
