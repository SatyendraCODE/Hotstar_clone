import React, { useLayoutEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Shows } from "../database/db";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const initial_val = {
  id: "none",
  type: "none",
  Title: "none",
  imgSrc: "",
  logoSrc: "",
  largeImgSrc: "",
  category: [""],
  detail_discription:
    "Despite the many challenges thrown her way, Anupama begins a new chapter of her life post-divorce. Head held always high, what's waiting for her next?",
  discription:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  promo_url: "",
};

const Show = () => {
  const [data, setData] = useState(initial_val);
  const { userId } = useParams();

  useLayoutEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let fetchData = Shows.filter((key, index) => key.id == userId);
    setData(...fetchData);
    // console.log(userId);
  };

  return (
    <>
      <div className="container">
        <section>
        <div
            className="position-absolute container p-0 "
            style={{ height: "100vh", overflow: "hidden" }}
          >
            <img
              src={data.largeImgSrc}
              className="img-fluid"
              alt="large image"
            />
          </div>
          <div
            className="row justify-content-between position-relative"
            style={{ height: "100vh", zIndex: 20 }}
          >
            <div className="col-5 d-flex align-items-end p-4">
              <div
                className="text-color-p p-3 rounded"
                style={{
                  "backdrop-filter": "blur(2px)",
                  "box-shadow": " 0px 0px 15px rgb(0, 0, 0)",
                  background: "rgba(0,0,0,.7)",
                }}
              >
                <div>
                  <img src={data.logoSrc} className="mb-3 img-fluid" alt="logo" />
                  <div className="mb-3">
                    <span>
                      2023 · Hindi ·
                      <span
                        className="ms-1 p-1 ps-2 pe-2 rounded bg-dark"
                        style={{
                          border: "5px",
                        }}
                      >
                        U/A 13+
                      </span>
                    </span>
                  </div>
                </div>
                <p className="mb-2">{data.discription}</p>
                <p className="mt-3 mb-4">
                  <span>{data.category[0]}</span> |{" "}
                  <span>{data.category[2]}</span> |{" "}
                  <span>{data.category[3]}</span>
                </p>
                <div className="row">
                  <div className="col-10 mb-3">
                    <Link
                      to="/subscribe"
                      className="ripple ripple-surface btn btn-dark w-100 p-3"
                      style={{ fontSize: "14px" }}
                    >
                      <MDBIcon fas icon="play" />
                      &nbsp;&nbsp;
                      <span> Subscribe to Watch Latest</span>
                    </Link>
                  </div>
                  <div className="col-10">
                    <Link
                      className="ripple ripple-surface btn btn-light w-100 text-dark p-3 ps-1 pe-1"
                      style={{ fontSize: "14px" }}
                    >
                      <MDBIcon fas icon="play" />
                      &nbsp;&nbsp; Watch Latest Free Episode &nbsp;
                      <span
                        className="text-color-p-dark-1"
                        style={{ "text-transform": "none" }}
                      >
                        {" "}
                        18-Apr
                      </span>
                    </Link>
                  </div>
                  <div className="col-2 text-center p-0">
                    <Link
                      className="ripple ripple-surface btn btn-light"
                      style={{ fontSize: "24px" }}
                    >
                      <MDBIcon fas icon="plus" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 d-flex align-items-end justify-content-center p-4">
              <div className=" text-center" style={{}}>
                <Link to="#" className="text-color-a">
                  WATCH AGAIN <span style={{ fontSize: "20px" }}>| </span>
                  <MDBIcon fas icon="redo-alt" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "800px" }}
          >
            <div>
              <iframe
                width="885"
                height="498"
                src={`https://www.youtube.com/embed/${data.url}`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Show;
