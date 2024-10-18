import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
      <section className="service section" id="services">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Our Services</h2>
            </div>
          </div>
          <div className="row">
            {/* Service Item: WordPress Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-wordpress" /></div>
                <h4>WordPress Development</h4>
                <p>Leverage the power of WordPress for a scalable and feature-rich website, with custom themes and plugins.</p>
              </div>
            </div>

            {/* Service Item: PrestaShop Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-shopping-cart" /></div>
                <h4>PrestaShop Development</h4>
                <p>Build custom e-commerce solutions using PrestaShop, ensuring optimal performance and user experience.</p>
              </div>
            </div>

            {/* Service Item: Web Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-code" /></div>
                <h4>Web Development</h4>
                <p>Turn your digital ideas into reality with robust and dynamic websites using Angular, Next.js, and Node.js.</p>
              </div>
            </div>

            {/* Service Item: SEO Optimization */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-rocket" /></div>
                <h4>SEO Optimization</h4>
                <p>Improve your search engine rankings with our SEO optimization strategies to enhance online visibility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Service;
