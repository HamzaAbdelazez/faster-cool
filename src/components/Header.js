import { Facebook, Search, Twitter, Youtube } from "react-bootstrap-icons";

export default function Header() {
  return (
    <div className="App">
      <div className="social-header">
        <div className="container">
          <div className="row">
            <div className="col-md-4" dir="ltr">
              {" "}
              <a href="tel:01008809643" className="callUS">
                {" "}
                <i className="glyphicon glyphicon-earphone"> اتصل </i> 0100 880
                9643{" "}
              </a>
            </div>
            <div className="col-md-4  hidden-sm hidden-xs">
              <span className="icon icon-search "></span>
              <form
                className=""
                id="searchform2"
                method="get"
                action="https://fastercool.com"
              >
                <input
                  type="text"
                  className="form-control"
                  name="s"
                  placeholder="بحث"
                  id="search"
                />
                <button className="btn btn-default" type="submait">
                  {" "}
                  <Search color="black" />
                </button>
              </form>{" "}
            </div>
            <div className="col-md-4 hidden-sm hidden-xs ">
              <ul className="social--icons ">
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/Faster.Cool14"
                    rel="noreferrer"
                  >
                    <Facebook color="Black" />
                  </a>
                </li>

                <li>
                  <a
                    target="_blank"
                    href="https://twitter.com/fastercool1"
                    rel="noreferrer"
                  >
                    <Twitter color="Black" />
                  </a>
                </li>

                <li>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UC8Dw-dZGtuaPKfJMcjLyQRg?view_as=subscriber"
                    rel="noreferrer"
                  >
                    <Youtube color="Black" />
                  </a>
                </li>

                <li>
                  <a
                    target="_blank"
                    href="https://business.google.com/dashboard/l/11154815708646870056"
                    rel="noreferrer"
                  >
                    <span className="icon icon-google-plus"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
