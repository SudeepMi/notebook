import { useState, useEffect } from "react";

import { NavLink } from ".";
import { userService } from "services";
import Image from "next/image";


export { Trending };

function Trending({ authors, posts }) {
  const [user, setUser] = useState(null);
  const author = authors.slice(0, 4);
  const post = posts.slice(0, 6);
  console.log(post);
  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();

  }, []);

  // only show nav when logged in
  if (!user) return null;

  return (
    <div className="container-fluid px-5">
      <div className="row">
        <div className="col-md-8">
          <div className="col-md-12 d-flex justify-content-between align-items-center">
            <h3>
              {" "}
              <i className="ri-line-chart-line"></i> Trending
            </h3>
            <a href="/trending/all" className="d-flex align-items-center">
              {" "}
              ALL <i className="ri-bar-chart-horizontal-line"></i>{" "}
            </a>
          </div>
        
        <div className="row">
          <div className="col-md-12 my-5">
            <div className="row">
              <div className="col-md-6 p-2">
                <NavLink href="/trending/week">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Blog Title</h5>
                      <p className="card-text">
                        <i className="ri-bar-chart-line"></i>
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-md-6 p-2">
                <NavLink href="/trending/week">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Blog Title</h5>
                      <p className="card-text">
                        <i className="ri-bar-chart-line"></i>
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-md-6 p-2">
                <NavLink href="/trending/week">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Blog Title</h5>
                      <p className="card-text">
                        <i className="ri-bar-chart-line"></i>
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-md-6 p-2">
                <NavLink href="/trending/week">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Blog Title</h5>
                      <p className="card-text">
                        <i className="ri-bar-chart-line"></i>
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-md-6 p-2">
                <NavLink href="/trending/week">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Blog Title</h5>
                      <p className="card-text">
                        <i className="ri-bar-chart-line"></i>
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-md-6 p-2">
                <NavLink href="/trending/week">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Week</h5>
                      <p className="card-text">
                        <i className="ri-bar-chart-line"></i>
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="col-md-4 p-2">
        <div className="col-md-12 d-flex justify-content-end align-items-center text-center">
            <h5 className="text-center text-muted">
              {" "}
              <i className="ri-bubble-chart-fill"></i> Discover
            </h5>
        </div>
        <hr/>
          <div className="card mt-5">
            <div className="card-body">
              <div className="card-title d-flex justify-content-between align-items-baseline">
                <h5>
                  Popular Authors
                  </h5>
              <a href="/trending/all" className="d-flex align-items-center mt-2">
                {" "}
                <span className="mr-1">All Authors </span>
                <i className="ri-user-4-fill"></i>{" "}
              </a>
              </div>
              <div className="authors_image_wrapper">
                { author.map((author, index) => author.posts.length > 1 && (<a className="d-grid" href={author.permalink}>
                <div className="authors_image" key={index} style={{backgroundImage:"url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131)"}}>
                </div>
                <p className="text-brand">{author.name}</p>
              </a>))}
              </div>
              <hr/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
