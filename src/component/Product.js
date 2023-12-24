const Product = (props) => {
  return (
    <div className="box">
      <img src={props.url} width="200" height="200" />
      <h2>Course :{props.course}</h2>
      <h3>Price: {props.price}</h3>
    </div>
  );
};
export default Product;
