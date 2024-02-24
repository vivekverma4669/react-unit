
const MobileOS = () => {
  return (
    <div>

      {/* First List */}
      <div>
        <h1 data-testid="os-heading">Mobile Operating System</h1>
        <ul data-testid="os-list">
          <li>Android</li>
          <li>Blackberry</li>
          <li>iPhone</li>
          <li>Windows Phone</li>
        </ul>
      </div>


      {/* Second List */}
      <div>
        <h1 data-testid="manufacturers-heading">Mobile Manufacturers</h1>
        <ul data-testid="manufacturers-list">
          <li>Samsung</li>
          <li>HTC</li>
          <li>Micromax</li>
          <li>Apple</li>
        </ul>
      </div>


    </div>
  );
};

export default MobileOS;
