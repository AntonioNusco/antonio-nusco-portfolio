
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/alsiam.png"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>Antonio Nusco</h1>
            <p>Web Developer</p>
            <div className="social-links">
              {/* <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://facebook.com/" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/" target="_blank">
                <i className="fa fa-github" />
              </a> */}
              <a href="https://www.instagram.com/antonio_nusco/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/antonio-nusco-b11109227/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
