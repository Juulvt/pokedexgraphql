import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({limit, offset, total, page}) => {
    if (page == undefined) {
        page = 1;
    }
    const prevPage = page - 1;
    const nextPage = page + 1;
    return (
      <>
        <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6 mt-3">
            <div className="flex flex-1 justify-between sm:hidden">
                <Link to={`/${page - 1}`} className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</Link>
                <Link to={`/${page + 1}`} href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</Link>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                <p className="text-sm text-gray-700">
                    <span> Showing </span>
                    <span className="font-medium">{offset + 1}</span>
                    <span> to </span>
                    <span className="font-medium">{limit}</span>
                    <span> of </span>
                    <span className="font-medium">{total}</span>
                    <span> results </span>
                </p>
                </div>
                <div className="flex flex-row gap-3">
                {page == 1
                    ? <div className="relative inline-flex items-center rounded px-4 py-2 font-semibold ring-1 ring-inset text-gray-300 ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" >
                            <span className="">Previous</span>
                        </div>
                    : <Link to={`/pokedex?page=${prevPage}`} className="relative inline-flex items-center rounded px-4 py-2 font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" >
                            <span className="">Previous</span>
                        </Link>
                }
                {page >= (total / 20)
                    ?   <div className="relative inline-flex items-center rounded px-4 py-2 font-semibold ring-1 ring-inset text-gray-300 ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" >
                            <span className="">Next</span>
                        </div>
                    :   <Link to={`/pokedex?page=${nextPage}`} className="relative inline-flex items-center rounded px-4 py-2 font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                        <span className="">Next</span>
                        </Link>
                }
                </div>
            </div>
            </div>
      </>
    )
  };
  
  export default Pagination;