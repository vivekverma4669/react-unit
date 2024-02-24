// Write Code here
// do a default export

const Image = ({ title, src, alt, width, height }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default Image;
