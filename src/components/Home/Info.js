import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default () => (
  <section className="py-5">
    <div className="container">
      <Title title="our story" />
      <div className="row">
        <div className="col-10 col-sm-8 mx-auto text-center">
          <p className="lead text-muted mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure dolor
            cupiditate itaque, nobis at soluta aut temporibus doloribus illo
            amet rem est porro quas accusamus delectus vitae in ipsa nisi!
            Assumenda hic perspiciatis ducimus? Possimus aspernatur odio ex eum
            corporis vero quidem est, qui doloribus incidunt illo harum a velit?
          </p>
          <Link to="/about/">
            <button className="btn text-uppercase btn-yellow">
              about page
            </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
)
