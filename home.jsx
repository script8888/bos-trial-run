//State Init
State.init({ activeIndex: null });

// Styles
const Body = styled.div`
  display: flex;
  flex-direction: column;
  color: #001e00;

  a {
    line-height: normal;
  }

  .parent-container {
    flex-grow: 1;
  }

  .container {
    width: 100%;
    max-width: 59em;
    margin: 0 auto;
  }

  /* NAV SECTION */
  .nav-section {
    padding: 0 2em;
    background-color: aliceblue;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    gap: 0.9em;
    align-items: center;
  }

  .navUrlContainer {
    position: relative;
    padding: 16px 0;
  }

  .navUrl {
    color: #161616;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      color: #848484;
      text-decoration: none;
    }
  }

  .navHoverDiv {
    display: none;
    width: 12rem;
    height: auto;
    margin-top: 1rem;
    border: 0.1rem solid #cdd8df;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 2rem;
    transition: opacity 0.5s;
    background-color: white;
    overflow: visible;
    box-shadow: 0.25rem 0.25rem 0.75rem rgba(0, 0, 0, 0.2);
    border-radius: 0.313rem;
    z-index: 4;

    &::before {
      content: "";
      position: absolute;
      left: 50%;
      margin-left: -10px;
      top: -6px;
      width: 10px;
      height: 10px;
      background: #fff;
      border-color: #cdd8df transparent transparent #cdd8df;
      border-style: solid;
      border-width: 1px;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      z-index: -1;
    }
  }

  .navUrlContainer:hover .navHoverDiv,
  .navHoverDiv:hover {
    display: block;
    opacity: 1;
    overflow: visible;
    visibility: visible;
  }

  .navHoverDiv-parent {
    display: flex;
    flex-direction: column;
  }

  .navHoverDiv-Url {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    font-weight: 400;
    text-decoration: none;
    color: #000;

    &:hover {
      background-color: #dce2ea;
    }
  }

  /* HERO SECTION */
  .hero-section {
    padding: 8rem 4rem 11rem;
  }

  .hero {
    display: flex;
    justify-content: space-between;
  }

  .hero-headerContainer > h1 {
    font-size: 3.5rem;
    margin-bottom: 0.8rem;
    line-height: 0.95;
  }

  .hero-headerContainer > p {
    font-size: 1.4rem;
  }

  .hero-headerContainer > button {
    padding: 6px 16px;
  }

  .hero-imgContainer {
    margin-top: 1rem;
  }

  .hero-imgContainer > img {
    width: 100%;
    max-width: 500px;
  }

  /* MORE INFO SECTION */
  .moreinfo-section {
    padding: 4rem 4rem 3rem;
    background-color: aliceblue;
  }

  .moreinfo-container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .moreinfo {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    justify-content: space-between;
  }

  .moreinfo-text {
    max-width: 24rem;
  }

  .moreinfo-img {
    width: 100%;
    max-width: 20rem;
  }

  .moreinfo-img > img {
    width: 100%;
  }

  /* PLAN CARDS SECTION */
  .planCards-section,
  .cc-section,
  .q-section {
    padding: 4rem 4rem 3rem;
  }

  .planCards-container > h2,
  .cc-container > h2,
  .q-container > h2 {
    text-align: center;
  }

  .planCards-flex,
  .cc-flex,
  .footer-flex {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .planCards-flexItem {
    width: calc((100% / 4) - 30px);
    margin: 15px;
  }

  .planCards-icon {
    color: #626262;
    font-size: 3rem;
  }

  /* CC SECTION */
  .cc-section {
    background-color: aliceblue;
  }

  .cc-flex {
    text-align: center;
  }

  .cc-flexItem {
    width: calc((100% / 3) - 30px);
    margin: 15px;
  }

  .cc-pTitle {
    margin-bottom: 0.4rem;
  }

  .cc-phone {
    color: #626262;
    font-size: 1rem;
  }

  /* Questions Section */
  .q-flex {
    margin-top: 1.4rem;
  }

  .q-accordion {
    cursor: pointer;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    user-select: none;
    padding-top: 25px;
  }

  .q-accordion-TitleDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    gap: 2em;
  }

  .q-accordion-TitleDiv p {
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 29px;
    flex: 73% 0;
    color: #4c4c4c;
    margin-bottom: 0;
  }

  .q-accordion hr {
    margin-top: 17px;
  }

  .q-accordion-content {
    max-height: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  .q-accordionIco {
    color: #4c4c4c;
    font-size: 1.5rem;
  }

  .q-accordion-content--active {
    max-height: 50rem;
    opacity: 1;
    visibility: visible;
  }

  /* SEARCH SECTION */
  .search-section {
    background-color: aliceblue;
  }

  .search-container {
    padding: 5rem 4rem 5rem;
    display: flex;
    justify-content: space-between;
  }

  .search-headerText {
    font-size: 1.7rem;
  }

  .search-inputParent {
    gap: 1rem;
    display: flex;
    width: 50%;
  }

  .search-inputParent > button {
    width: 100%;
    max-width: 5rem;
  }

  /* FOOTER SECTION */
  .footer-section {
    background-color: aliceblue;
  }

  .footer {
  }

  .footer-item {
    width: calc((100% / 5) - 30px);
    margin: 15px;
  }

  .footer-item > h6 {
    color: #4c4c4c;
  }

  .footer-itemLink-parent {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    font-size: 0.93rem;
    color: #000;
  }

  .footer-copyright {}
`;

//COMPONENTS
const NavLinks = ({ title, url, hoverLinks }) => (
  <div className="navUrlContainer">
    <a href={url} className="navUrl">
      {title}
    </a>
    {hoverLinks && (
      <div className="navHoverDiv">
        <div className="navHoverDiv-parent">
          {hoverLinks.map((data, i) => (
            <a key={i} href={data.url} className="navHoverDiv-Url">
              {data.title}
            </a>
          ))}
        </div>
      </div>
    )}
  </div>
);

const Section = (props) => (
  <div className={props.className}>
    <div className="container" style={props?.bigger && { maxWidth: "62rem" }}>
      {props.children}
    </div>
  </div>
);
const Accordion = ({ item, isOpen, onClick }) => (
  <div onClick={onClick} className={"q-accordion"}>
    <div className={"q-accordion-TitleDiv"}>
      <p>{item.title}</p>{" "}
      {isOpen ? (
        <i className="bi bi-dash-circle-fill q-accordionIco"></i>
      ) : (
        <i className="bi bi-plus-circle-fill q-accordionIco"></i>
      )}
    </div>
    <div
      className={`q-accordion-content ${
        isOpen && "q-accordion-content--active"
      }`}
    >
      <p>{item.content}</p>
    </div>
    <hr style={{ border: "1px solid rgba(0, 0, 0, 0.17)" }} />
  </div>
);
const FOoterITems = () => (
  <div className="footer-item">
    <h6>Company</h6>
    <div className="footer-itemLink-parent">
      <a href="#">About Us</a>
      <a href="#">About Us</a>
      <a href="#">About Us</a>
    </div>
  </div>
);

//FUNCTIONS
const handleAccordionClick = (index) => {
  if (index === state.activeIndex) {
    State.update({ activeIndex: null });
  } else {
    State.update({ activeIndex: index });
  }
};

//DATA VAR
const moreInfoItems = [
  {
    title: "Text 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere euismod dui eget ultrices. Cras condimentum dui eget erat commodo, in venenatis eros blandit.",
    buttonTxt: "Create now",
    buttonUrl: "#",
    imgUrl: "https://i.ibb.co/CmHBjxJ/website-3227784-640.jpg",
  },
  {
    title: "Text 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere euismod dui eget ultrices. Cras condimentum dui eget erat commodo, in venenatis eros blandit.",
    buttonTxt: "Create now",
    buttonUrl: "#",
    imgUrl: "https://i.ibb.co/CmHBjxJ/website-3227784-640.jpg",
  },
  {
    title: "Text 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere euismod dui eget ultrices. Cras condimentum dui eget erat commodo, in venenatis eros blandit.",
    buttonTxt: "Create now",
    buttonUrl: "#",
    imgUrl: "https://i.ibb.co/CmHBjxJ/website-3227784-640.jpg",
  },
  {
    title: "Text 4",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere euismod dui eget ultrices. Cras condimentum dui eget erat commodo, in venenatis eros blandit.",
    buttonTxt: "Create now",
    buttonUrl: "#",
    imgUrl: "https://i.ibb.co/CmHBjxJ/website-3227784-640.jpg",
  },
];
const faqData = [
  {
    title: "What is Hosting?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere euismod dui eget ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere euismod dui eget ultrices.",
  },
  {
    title: "What hosting should I go for?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere euismod dui eget ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere euismod dui eget ultrices.",
  },
];
return (
  <Body>
    <div className="parent-container">
      <Section bigger={true} className="nav-section">
        <div className="nav">
          <img
            style={{ maxWidth: "5rem", width: "100%" }}
            src={props.logo ?? "https://i.ibb.co/T8j9nvG/Logo.png"}
            alt={`${props.brandName ?? "Company"} Logo`}
          />

          <div style={{ display: "flex", gap: "1.2rem" }}>
            <NavLinks
              title={"Hosting"}
              url={"#"}
              hoverLinks={[
                { title: "Link 1", url: "#" },
                { title: "Link 2", url: "#" },
                { title: "Link 3", url: "#" },
                { title: "Link 4", url: "#" },
              ]}
            />

            <NavLinks
              title={"Security"}
              url={"#"}
              hoverLinks={[
                { title: "Link 1", url: "#" },
                { title: "Link 2", url: "#" },
                { title: "Link 3", url: "#" },
                { title: "Link 4", url: "#" },
              ]}
            />

            <NavLinks title={"Domains"} url={"#"} />
            <NavLinks title={"Email"} url={"#"} />
            <NavLinks title={"Resources"} url={"#"} />
          </div>

          <button>Contact Us</button>
        </div>
      </Section>

      <Section className="hero-section">
        <div className="hero">
          <div className="hero-headerContainer">
            <h1>{props.heroHeader ?? "Create your first website today."}</h1>
            <p>{props.heroPText ?? "Starting at $1.99/month."}</p>
            <button>{props.heroBtnText ?? "Get Started"}</button>
          </div>

          <div className="hero-imgContainer">
            <img
              src={`${
                props.heroImg ??
                "https://i.ibb.co/GRVCLBS/speed-4028234-640.jpg"
              }`}
              alt={`hero image`}
            />
          </div>
        </div>
      </Section>

      <Section className="moreinfo-section">
        <div className="moreinfo-container">
          {moreInfoItems.map((data, i) => (
            <div
              key={index}
              style={{
                flexDirection: i % 2 === 0 ? "row" : "row-reverse",
              }}
              className="moreinfo"
            >
              <div className="moreinfo-text">
                <h3>{data.title}</h3>
                <p>{data.desc}</p>
                <a href={data.buttonUrl}>
                  <button>{data.buttonTxt}</button>
                </a>
              </div>

              <div className="moreinfo-img">
                <img src={data.imgUrl} alt={`${data.title} image`} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="planCards-section">
        <div className="planCards-container">
          <h2>
            {props.planCardsHeader ??
              "Choose the ideal web hosting package from our wide selection"}
          </h2>
          <div key={data} className="planCards-flex">
            {[1, 2, 3, 4].map((data) => (
              <div className="planCards-flexItem">
                <i className="bi bi-hdd-stack-fill planCards-icon"></i>
                <h5>Shared Hosting</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas posuere euismod dui eget ultrices.
                </p>
                <p>$2.99/month</p>
                <button>Choose Plan</button>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="cc-section">
        <div className="cc-container">
          <h2>
            {props.ccTitle ??
              "Round-the-Clock Assistance: We're Here When You Need Us."}
          </h2>
          <div className="cc-flex">
            <div className="cc-flexItem">
              <i className="bi bi-telephone-fill cc-phone"></i>
              <p className="cc-pTitle">Call us</p>
              <a href={`tel:${props.ccPhone ?? "(666) 798-888"}`}>
                {props.ccPhone ?? "(666) 798-888"}
              </a>
            </div>
            <div className="cc-flexItem">
              <i className="bi bi-telephone-fill cc-phone"></i>
              <p className="cc-pTitle">Call us</p>
              <a href={`tel:${props.ccPhone ?? "(666) 798-888"}`}>
                {props.ccPhone ?? "(666) 798-888"}
              </a>
            </div>
            <div className="cc-flexItem">
              <i className="bi bi-telephone-fill cc-phone"></i>
              <p className="cc-pTitle">Call us</p>
              <a href={`tel:${props.ccPhone ?? "(666) 798-888"}`}>
                {props.ccPhone ?? "(666) 798-888"}
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section className="q-section">
        <div className="q-container">
          <h2>Got Inquiries? We Have Solutions.</h2>
          <div className="q-flex">
            {faqData.map((data, i) => (
              <Accordion
                item={data}
                isOpen={i === state.activeIndex}
                onClick={() => handleAccordionClick(i)}
                key={i}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section className="search-section">
        <div className="search-container">
          <h4 className="search-headerText">Find Your Perfect Domain</h4>
          <div className="search-inputParent">
            <input type="text" placeholder="Enter Your Domain Here" />{" "}
            <button>Find It</button>
          </div>
        </div>
      </Section>
    </div>

    <Section bigger={true} className="footer-section">
      <div className="footer">
        <div className="footer-flex">
          <FOoterITems />
          <FOoterITems />
          <FOoterITems />
          <FOoterITems />
          <FOoterITems />
        </div>
        <hr />
        <div className="footer-copyright">
          <p>© Copyrigh 2023, All Rights Reserved</p>
        </div>
      </div>
    </Section>
  </Body>
);
