import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./breadcrumb.css";
function BreadCrumb() {
  const location = useLocation();
  const { pathname } = location;
  let breadCrumburl = pathname.split("/").filter((url) => url !== "");
  let breadCrumbItems = breadCrumburl.map((item, index) => {
    const url = `/${breadCrumburl.slice(0, index + 1).join("/")}`;
    return {
      text: item,
      url,
    };
  });
  useEffect(() => {
    // console.log(breadCrumbItems);
  }, [location]);

  return (
    <div className="breadcrumb">
      <div className="breadcrumb-links">
        <Link className="link teal" to="/">
          Ecom.in
        </Link>
        <span className="link">/</span>

        {breadCrumbItems.map((item, index) => {
          return (
            //
            <React.Fragment key={index}>
              {index == breadCrumbItems.length - 1 ? (
                <span className="link ">{item.text}</span>
              ) : (
                <>
                  <Link className="link teal" to={item.url}>
                    {item.text}
                  </Link>
                  <span className="link">/</span>
                </>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default BreadCrumb;
