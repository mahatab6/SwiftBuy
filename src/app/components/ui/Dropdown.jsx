import Link from "next/link";
import React from "react";

export default function Dropdown() {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        Dashboard
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <Link href="/dashboard/add-product">
          <li>
            <a>Add Product</a>
          </li>
        </Link>
      </ul>
    </div>
  );
}
