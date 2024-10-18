"use client"; // Add this line at the top to mark the component as a Client Component

import type { NextPage } from "next";
import { useState } from "react";
import { useRouter } from 'next/router';

const Portfolio: NextPage = () => {
  // State to manage the active filter
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const handleClick = (link: any) => {
    window.open(link, '_blank', 'noopener,noreferrer'); // Open the link in a new tab
  };

  // Portfolio items data
  const portfolioItems = [
    {
      id: 1,
      category: "prestashop",
      title: "OraPesca",
      imgSrc: "/imgs/portfolio/FotoOraPesca.png",
      link: "https://orapesca.it",
    },
    {
      id: 2,
      category: "wordpress",
      title: "Ap0r1a",
      imgSrc: "/imgs/portfolio/FotoAp0r1a.png",
      link: "https://ap0r1a.com",
    }
  ];

  // Function to handle filter change
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  // Filter portfolio items based on the active filter
  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15">
              <button
                type="button"
                className={activeFilter === "all" ? "active" : ""}
                onClick={() => handleFilterClick("all")}
              >
                All
              </button>
              <button
                type="button"
                className={activeFilter === "wordpress" ? "active" : ""}
                onClick={() => handleFilterClick("wordpress")}
              >
                WordPress
              </button>
              <button
                type="button"
                className={activeFilter === "prestashop" ? "active" : ""}
                onClick={() => handleFilterClick("prestashop")}
              >
                PrestaShop
              </button>
            </div>
          </div>
          <div className="row">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="portfolio-item padd-15"
                data-category={item.category}
              >
                <div className="portfolio-item-inner shadow-dark" onClick={() => handleClick(item.link)}>
                  <div className="portfolio-img">
                    <img src={item.imgSrc} alt={item.title} />
                  </div>
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <div className="icon">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-search" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Portfolio;
