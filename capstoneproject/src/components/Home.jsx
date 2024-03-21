import tabImage from "../assets/HomeImage.jpeg";

/**
 * Home component displays home page content.
 * @returns {JSX.Element} Home component UI.
 */
function Home() {
  return (
    <div>
      <h1 className="header">Sales, Sales, Sales and More Sales!!</h1>
      <img src={tabImage} alt="image" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dui enim,
        molestie at mauris sit amet, aliquet egestas elit. Nam sapien massa,
        pharetra vitae nisi ac, condimentum sodales est. Mauris fermentum est eu
      </p>
      <p>
        ex porta tristique. Duis scelerisque, quam et ultrices rutrum, augue
        mauris elementum sapien, et volutpat lacus mauris a tellus. Cras eget
        tellus at diam semper commodo maximus eget magna. Fusce turpis erat,
        dignissim et lectus ac, laoreet vehicula enim. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      </p>
      <p>
        Mauris et arcu et orci gravida pellentesque quis volutpat odio. Nulla
        sodales, massa eu rutrum dignissim, dui magna volutpat massa, id
        vulputate tortor dolor id ex. Curabitur tincidunt neque ut consequat
        vulputate. Duis aliquet mauris efficitur, malesuada nulla non, porta
        neque. Nullam quis tristique ex, id sollicitudin neque. Nunc eget arcu
        nec lacus auctor pharetra ornare non lectus. Vestibulum interdum magna
        nulla. Maecenas nec iaculis massa, et porttitor tortor. Mauris diam sem,
        gravida ut vulputate in, tincidunt luctus sem. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}

export default Home;
