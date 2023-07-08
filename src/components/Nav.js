export function Nav() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <div className="logo">
            <a href="https://fastercool.com">
              <img
                loading="lazy"
                src="https://fastercool.com/wp-content/themes/Fastercool/img/logo.png"
                height="84"
                width="263"
                alt="logo"
                title="logo"
                data-lazy-src="https://fastercool.com/wp-content/themes/Fastercool/img/logo.png"
                data-ll-status="loaded"
                className="entered lazyloaded" />
              <noscript>
                <img
                  loading="lazy"
                  src="https://fastercool.com/wp-content/themes/Fastercool/img/logo.png"
                  height="84"
                  width="263"
                  alt="logo"
                  title="logo" />
              </noscript>
            </a>
          </div>
        </div>
        <div className="col-md-9 col-sm-12">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>

              <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <ul className="nav navbar-nav">
                  <div className="menu-head_menu-container">
                    <ul id="menu-head_menu" className="menu">
                      <li
                        id="menu-item-59"
                        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-59"
                      >
                        <a href="https://fastercool.com/" aria-current="page">
                          الرئيسيه
                        </a>
                      </li>
                      <li
                        id="menu-item-87"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-87"
                      >
                        <a href="https://fastercool.com/category/%d9%85%d9%86%d8%aa%d8%ac%d8%a7%d8%aa%d9%86%d8%a7/">
                          منتجاتنا
                        </a>
                      </li>
                      <li
                        id="menu-item-700"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-700"
                      >
                        <a href="https://fastercool.com/category/%d8%ae%d8%af%d9%85%d8%a7%d8%aa%d9%86%d8%a7/">
                          خدماتنا
                        </a>
                      </li>
                      <li
                        id="menu-item-701"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-701"
                      >
                        <a href="https://fastercool.com/category/%d8%b9%d9%85%d9%84%d8%a7%d8%a6%d9%86%d8%a7/">
                          عملائنا
                        </a>
                      </li>
                      <li
                        id="menu-item-60"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-60"
                      >
                        <a href="https://fastercool.com/%d8%a7%d9%86%d8%b5%d9%84-%d8%a8%d9%86%d8%a7/">
                          اتصل بنا
                        </a>
                      </li>
                      <li
                        id="menu-item-1341"
                        className="ask menu-item menu-item-type-post_type menu-item-object-page menu-item-1341"
                      >
                        <a href="https://fastercool.com/%d8%a7%d8%b3%d8%a3%d9%84-%d8%b9%d9%86-%d9%85%d9%86%d8%aa%d8%ac/">
                          اسأل عن منتج
                        </a>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-sm-12 no-padding hidden-lg hidden-md">
          <div className="serch--mob">
            <small className="icon icon-search"></small>
            <div className="form__serch--mob">
              <form
                className="search--box__form2"
                id="searchform"
                method="get"
                action="https://fastercool.com"
              >
                <input
                  type="text"
                  placeholder="ابحث عن منتج"
                  className="input"
                  name="s"
                  id="search" />
                <button className="btn_submait2" type="submait">
                  {" "}
                  ابحث{" "}
                </button>
              </form>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
