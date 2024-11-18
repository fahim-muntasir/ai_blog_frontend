import Button from "./common/Button";

export default function Footer() {
  return (
    <section>
      <div className="container mx-auto py-10 md:py-16 lg:py-20 px-6 md:px-0 flex flex-wrap md:flex-nowrap gap-y-8 gap-x-24 md:gap-x-0 md:justify-between border-b border-dark20 mb-10">
        <div>
          <h3 className="font-medium mb-4 md:text-lg lg:text-xl ">Home</h3>
          <ul className="text-sm lg:text-lg text-dark40 flex flex-col gap-2 ">
            <li>
              <a href="@">Features</a>
            </li>
            <li>
              <a href="@">Blogs</a>
            </li>
            <li>
              <a href="@">
                Reasources
                <div className="ml-1 relative inline-block rounded-lg p-[1px] bg-gradient-to-r from-dark20 via-dark20 to-primary">
                  <div className="bg-dark10 text-white rounded-lg py-1 px-3">
                    <span>New</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="@">Testimonials</a>
            </li>
            <li>
              <a href="@">Contact Us</a>
            </li>
            <li>
              <a href="@">Newsletter</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4 md:text-lg lg:text-xl">News</h3>
          <ul className="text-sm lg:text-lg text-dark40 flex flex-col gap-2 ">
            <li>
              <a href="@">Trending Stories</a>
            </li>
            <li>
              <a href="@">Featured Videos</a>
            </li>
            <li>
              <a href="@">Technology</a>
            </li>
            <li>
              <a href="@">Health</a>
            </li>
            <li>
              <a href="@">Politics</a>
            </li>
            <li>
              <a href="@">Environment</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4 md:text-lg lg:text-xl">Podcasts</h3>
          <ul className="text-sm lg:text-lg text-dark40 flex flex-col gap-2 ">
            <li>
              <a href="@">
                AI Revolution
                <div className=" ml-1 relative inline-block rounded-lg p-[1px] bg-gradient-to-r from-dark20 via-dark20 to-primary">
                  <div className="bg-dark10 text-white rounded-lg py-1 px-3">
                    <span>New</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="@">TechTalk AI</a>
            </li>
            <li>
              <a href="@">AI Conversations</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4 md:text-lg lg:text-xl">Blogs</h3>
          <ul className="text-sm lg:text-lg text-dark40 flex flex-col gap-2 ">
            <li>
              <a href="@">Quantum Computing</a>
            </li>
            <li>
              <a href="@">AI Ethics</a>
            </li>
            <li>
              <a href="@">Space Exploration</a>
            </li>
            <li>
              <a href="@">
                Biotechnology
                <div className=" ml-1 relative inline-block rounded-lg p-[1px] bg-gradient-to-r from-dark20 via-dark20 to-primary">
                  <div className="bg-dark10 text-white rounded-lg py-1 px-3">
                    <span>New</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="@">Renewable Energy</a>
            </li>
            <li>
              <a href="@">Biohacking</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4 md:text-lg lg:text-xl">Resources</h3>
          <ul className="text-sm lg:text-lg text-dark40 flex flex-wrap gap-5 md:flex-col">
            <li>
              <a href="@">
                <Button text="Whitepapers" classes="w-auto" />
              </a>
            </li>
            <li>
              <a href="@">
                <Button text="Ebooks" classes="w-auto" />
              </a>
            </li>
            <li>
              <a href="@">
                <Button text="Reports" classes="w-auto" />
              </a>
            </li>
            <li>
              <a href="@">
                <Button text="Research Papers" classes="w-auto" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mb-10 flex flex-wrap justify-center gap-3 md:flex-nowrap md:justify-between text-sm lg:text-lg text-dark40">
          <a href="">Terms & Conditions | Privacy Policy</a>

          <span>© 2024 Fahim Muntasir. All rights reserved.</span>
      </div>
    </section>
  );
}
