'use strict';
function loader(mother) {
    const loader = `
                  <section class = "section__loader">
                    <div class = "loader__child"></div>
                    <div class = "loader__child"></div>
                    <div class = "loader__child"></div>
                    <div class = "loader__child"></div>
                    <div class = "loader__child"></div>
                    <div class = "loader__child"></div>
                    <div class = "loader__child"></div>
                    <div class = "loader__child"></div>
                    <div class = "loader__child"></div>
                    <div class = "loader__child"></div>
                    <div class = "loader__child"></div>
                    <div class = "loader__child"></div>
                  </section>`;
    mother.innerHTML = loader;
  }
  
export { loader };