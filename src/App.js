import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="maincontainer">
      <section>
        <div className="container py-5">
          <header className="text-white">
            <div className="col-lg-8 mx-auto">
              <h1>Bootstrap 4 Responsive Pricing Table Snippet</h1>
            </div>
            <br />
          </header>

          <div className="row text-center align-items-end">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="card bg-white p-5 rounded-lg shadow">
                <div className="card-body">
                  <h5 className="card-title text-uppercase text-center text-muted">
                    Free
                  </h5>
                  <h6 class="card-price text-center">
                    $0<span class="period">/pe month</span>
                  </h6>

                  <hr />
                  <ul className="list-unstyled my-5 text-small text-left text-normal">
                    <li className="mb-3">
                      <i className="fa fa-check m-2 text-tertiary"></i>
                      Single User
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check m-2 text-tertiary"></i>
                      5GB Storage
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check m-2 text-tertiary"></i>Unlimited
                      Public Projects
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check m-2 text-tertiary"></i>Community
                      Access
                    </li>
                    <li className="mb-3 text-muted">
                      <i className="fa fa-times m-2"></i>Unlimited Private
                      Projects
                    </li>
                    <li className="mb-3 text-muted">
                      <i className="fa fa-times m-2"></i>Dedicated Phone Support
                    </li>
                    <li className="mb-3 text-muted">
                      <i className="fa fa-times m-2"></i>Free Subdomain
                    </li>
                    <li className="mb-3 text-muted">
                      <i className="fa fa-times m-2"></i>Monthly Status Reports
                    </li>
                  </ul>
                  {
                    // eslint-disable-next-line
                  }
                  <a
                    href="#"
                    className="btn btn-block btn-primary text-uppercase"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="card bg-white p-5 rounded-lg shadow">
                <div className="card-body">
                  <h5 className="card-title text-uppercase text-muted text-center">
                    Pro
                  </h5>
                  <h6 class="card-price text-center">
                    $9<span class="period">/month</span>
                  </h6>

                  <hr />
                  <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li className="mb-3">
                      <i className="fa fa-check m-2 text-tertiary"></i>
                      <strong>5 Users</strong>
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check m-2 text-tertiary"></i>50GB
                      Storage
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check m-2 text-tertiary"></i>Unlimited
                      Public Projects
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check m-2 text-tertiary"></i>Community
                      Access
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check m-2 text-tertiary"></i>Unlimited
                      Private Projects
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check m-2 text-tertiary"></i>Dedicated
                      Phone Support
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check m-2 text-tertiary"></i>Free
                      Subdomains
                    </li>
                    <li className="mb-3 text-muted">
                      <i className="fa fa-times m-2"></i>Monthly Status Reports
                    </li>
                  </ul>
                  {
                    // eslint-disable-next-line}
                  }
                  <a
                    href="#"
                    className="btn btn-block btn-primary text-uppercase"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card bg-white p-5 rounded-lg shadow">
                <div className="card-body">
                  <h5 className="card-title text-uppercase text-muted text-center">
                    Plus
                  </h5>
                  <h6 class="card-price text-center">
                    $49<span class="period">/month</span>
                  </h6>

                  <hr />
                  <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li className="mb-3">
                      <i className="fa fa-check m-2 text-tertiary"></i>
                      <strong>Unlimited Users</strong>
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check m-2 text-tertiary"></i>150GB
                      Storage
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check m-2 text-tertiary"></i>Unlimited
                      Public Projects
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check m-2 text-tertiary"></i>Community
                      Access
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check m-2 text-tertiary"></i>Unlimited
                      Private Projects
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check m-2 text-tertiary"></i>Dedicated
                      Phone Support
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check m-2 text-tertiary"></i>
                      <strong>Unlimited </strong>Free Subdomains
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check m-2 text-tertiary"></i>Monthly
                      Status Reports
                    </li>
                  </ul>
                  {
                    // eslint-disable-next-line}
                  }
                  <a
                    href="#"
                    className="btn btn-block btn-primary text-uppercase"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
