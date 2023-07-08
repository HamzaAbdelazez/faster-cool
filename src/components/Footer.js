import { Facebook, Twitter, Youtube } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <small class="copright">
              جميع الحقوق محفوظه شركة فاستركول للتبريد 2023
            </small>
            <br />
          </div>
          <div class="col-md-4">
            <div id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.7593699878753!2d31.334773215115185!3d30.04376058188266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f07af140a99%3A0xa9a8c594145d7575!2z2YHYp9iz2KrYsSDZg9mI2YQgRmFzdGVyIGNvb2w!5e0!3m2!1sen!2seg!4v1642087188880!5m2!1sen!2seg"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                data-rocket-lazyload="fitvidscompatible"
                data-lazy-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.7593699878753!2d31.334773215115185!3d30.04376058188266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f07af140a99%3A0xa9a8c594145d7575!2z2YHYp9iz2KrYsSDZg9mI2YQgRmFzdGVyIGNvb2w!5e0!3m2!1sen!2seg!4v1642087188880!5m2!1sen!2seg"
                data-ll-status="loaded"
                class="entered lazyloaded"
              ></iframe>
              <noscript>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.7593699878753!2d31.334773215115185!3d30.04376058188266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f07af140a99%3A0xa9a8c594145d7575!2z2YHYp9iz2KrYsSDZg9mI2YQgRmFzdGVyIGNvb2w!5e0!3m2!1sen!2seg!4v1642087188880!5m2!1sen!2seg"
                  width="100%"
                  height="200"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </noscript>
            </div>
          </div>
          <div class="col-md-4">
            <ul class="social--icons pull-left">
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/Faster.Cool14"
                  rel="noreferrer"
                >
                  <Facebook />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href="https://twitter.com/fastercool1"
                  rel="noreferrer"
                >
                  <Twitter />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UC8Dw-dZGtuaPKfJMcjLyQRg?view_as=subscriber"
                  rel="noreferrer"
                >
                  <Youtube />
                </a>
              </li>
            </ul>
            <h3 class="contact_txt">
              اتصل بنا على الارقام التالية:
              <br />
              للاستفسارات
              <br />
              <a href="tel:01008809643"> 01008809643 </a>
              <br />
              <a href="tel:01011103203"> 01011103203 </a>
              <br />
              <br />
              ادارة المبيعات
              <br />
              <a href="tel:01011103202"> 01011103202 </a>
              <br />
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
