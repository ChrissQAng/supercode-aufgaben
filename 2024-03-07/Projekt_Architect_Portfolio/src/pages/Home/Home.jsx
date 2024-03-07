import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="wrapper">
          <section className="lorum">
            <div>
              <h2>PROJECT</h2>
              <h3>Lorum</h3>
            </div>
            <img
              src="../../../public/img/white_building.jpeg"
              alt="big white building"
            />
          </section>
          <section className="about">
            <div className="about-image-wrapper">
              <div>
                <img
                  className="about1-img"
                  src="../../../public/img/about1.jpeg"
                  alt="building"
                />
                <img src="../../../public/img/about3.jpeg" alt="building" />
              </div>
              <img src="../../../public/img/about2.jpeg" alt="building" />
            </div>
            <div className="about-text">
              <h2>About</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti voluptatibus similique tempora odit voluptatum,
                blanditiis suscipit ratione qui accusamus illum, architecto,
                odio ea obcaecati aperiam officia? Dolorum enim animi veritatis
                dignissimos in corporis expedita adipisci repellat porro
                incidunt. Placeat ducimus, quia animi ut reprehenderit iste
                accusantium iusto voluptatum qui vel odit quae adipisci in
                voluptatem eligendi, soluta rem consequatur facere itaque magnam
                excepturi natus. Unde, laborum architecto? Nobis, veritatis eos?
              </p>
            </div>
          </section>
          <section className="main">
            <h2>Main Focus/Mission Statement</h2>
            <div className="main-flex">
              <div className="main-content">
                <p className="main-numbers">1</p>
                <p className="main-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, lectus et facilisis placerat.
                </p>
              </div>
              <div className="main-content">
                <p className="main-numbers">2</p>
                <p className="main-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, lectus et facilisis placerat, magna mauris
                  porttitor tortor, a auctor est felis ut nisl.
                </p>
              </div>
            </div>
          </section>
          <section className="projects">
            <h2>Our Projects</h2>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
