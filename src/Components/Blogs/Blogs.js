import React from "react";
import './Blogs.css';

const Blogs = () => {
  return (
    <div>
      <h2>This is Blogs Pages</h2>
      <div class="accordion accordion12" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is Context API ?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              The React Context API is a way for a React application to really create worldwide
              factors that can be passed around. This is the choice to "prop boring" or moving props
              from grandparent to kid to parent, etc. Setting is additionally promoted as a simpler,
              lighter way to deal with state the board utilizing Redux.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What is Cemantic Tag ?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Semantic HTML or semantic markup is HTML that acquaints significance with the website
              page instead of just show. For instance, a tag shows that the encased text is a
              passage. This is both semantic and presentational on the grounds that individuals
              realize what passages are, and programs know how to show them.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Inline Block and Inline Block Element Deffrent ?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong> An inline block is put inline</strong> (ie. on a similar line as neighboring
              substance), however it acts as a square. Its inline yet we can add width stature and
              so forth
              <strong> A block-level element </strong> always takes up the full width available
              (stretches out to the left and right as far as it can).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
