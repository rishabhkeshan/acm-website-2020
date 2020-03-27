import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import SectionHeader from '../layout/Sections/SectionHeader.component';
import CarouselCard from '../layout/Sections/CarouselCard.component';
import RightArrow from '../layout/Sections/RightArrow';
import LeftArrow from '../layout/Sections/LeftArrow';
import { ReactComponent as RightLink } from '../../vectors/RightArrow.svg';

// Utility functions
import scrollHorizontally from '../../utils/scrollHorizontally';

// Data
import { BLOGS } from '../../DataStore';

const Blog = ({ findOffset }) => {
  const [blogs] = useState(BLOGS);

  // Component variables
  let node;

  return (
    <section
      ref={el => {
        if (!el) return;
        // Get element's offset Y value
        findOffset(el.getBoundingClientRect().y - 180);
      }}
      className="text-center my-12"
      id="blogs-section"
    >
      <SectionHeader>Blogs</SectionHeader>
      <div className="flex">
        <div className="hidden md:flex flex-shrink-0 justify-center items-center w-32">
          <div
            onClick={() => scrollHorizontally(node, 'left', 25, 480, 48)}
            role="button"
            tabIndex="-1"
          >
            <LeftArrow />
          </div>
        </div>
        <div
          className="hide-scrollbar flex overflow-x-scroll items-stretch p-8 md:p-16 px-4"
          ref={el => {
            if (!el) return;
            node = el;
          }}
        >
          {blogs.map((blog, index) => {
            if (index < 6)
              return (
                <CarouselCard
                  key={blog.id}
                  desc={blog.desc}
                  image={blog.image}
                  url={blog.url}
                >
                  {blog.name}
                </CarouselCard>
              );
            return false;
          })}
        </div>
        <div className="hidden md:flex flex-shrink-0 justify-center items-center w-32">
          <div
            onClick={() => scrollHorizontally(node, 'right', 25, 480, 48)}
            role="button"
            tabIndex="-1"
          >
            <RightArrow />
          </div>
        </div>
      </div>
      <div className="text-acm-blue text-2xl underline p-0 md:px-32">
        <div className="flex items-center flex-no-wrap justify-center md:justify-end">
          <Link to="/blogs">
            <div className="flex items-center flex-no-wrap justify-end">
              <div>View More Blogs</div>
              <RightLink />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

Blog.propTypes = { findOffset: PropTypes.func.isRequired };

export default Blog;
