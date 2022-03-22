import { useState, useEffect } from "react";

import { NavLink } from ".";
import { userService } from "services";

export { Trending };

function Trending() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  // only show nav when logged in
  if (!user) return null;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-between align-items-center">
          <h3> <i className="ri-line-chart-line"></i> Trending</h3>
          <a href="/trending/all" className="d-flex align-items-center"> ALL <i class="ri-bar-chart-horizontal-line"></i> </a>
        </div>
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
  );
}
