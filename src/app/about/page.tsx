import type { NextPage } from "next";

const About: NextPage = () => {
  const skills = [
    { name: "Html5", percentage: "90%" },
    { name: "Css3", percentage: "85%" },
    { name: "Javascript", percentage: "80%" },
    { name: "Angular", percentage: "75%" },
    { name: "Next.js", percentage: "70%" },
    { name: "Node.js", percentage: "70%" },
    { name: "PrestaShop", percentage: "85%" },
    { name: "WordPress", percentage: "80%" },
    { name: "SEO Optimization", percentage: "75%" },
  ];

  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Antonio Nusco a <span>Web Developer</span>
                  </h2>
                  <p>
                    Hi, I'm Antonio Nusco, a passionate web developer with 2 years of experience specializing in <strong className="green-label">PrestaShop</strong> and <strong className="green-label">WordPress</strong> development.
                    I create custom e-commerce solutions, themes, and plugins, ensuring optimal performance and <strong className="green-label">SEO</strong>.
                    I also work with <strong className="green-label">Angular</strong>, <strong className="green-label">Next.js</strong>, <strong className="green-label">Node.js</strong>, <strong className="green-label">HTML</strong>, <strong className="green-label">CSS</strong>, and <strong className="green-label">JavaScript</strong> to build fast, responsive websites tailored to your needs.
                    Let's bring your project to life with modern, efficient, and high-ranking web solutions!
                  </p>
                </div>
              </div>
              <div className="row" style={{ justifyContent: 'center' }}>
                <div className="skills padd-15">
                  <div className="row skills-grid">
                    {skills.slice(0, 5).map((skill) => (
                      <div className="skill-item padd-15" key={skill.name}>
                        <h5>{skill.name}</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: skill.percentage }} />
                          <div className="skill-percent">{skill.percentage}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row skills-grid">
                    {skills.slice(5).map((skill) => (
                      <div className="skill-item padd-15" key={skill.name}>
                        <h5>{skill.name}</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: skill.percentage }} />
                          <div className="skill-percent">{skill.percentage}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="row" style={{ justifyContent: 'center' }}>
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>www.antonionusco.it</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>dev.antonio.nusco@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+39 3664887789</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Italy</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
