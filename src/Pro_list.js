import Product from "./component/Product";
function Pro_list() {
  let container = [
    {
      id: 1,
      course: "Html",
      price: "20",
      url: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    },
    {
      id: 2,
      course: "CSS",
      price: "20",
      url: "https://cdn-icons-png.flaticon.com/512/136/136527.png",
    },
    {
      id: 3,
      course: "Java Script",
      price: "20",
      url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      id: 4,
      course: "React js",
      price: "50",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/640px-React_Logo_SVG.svg.png",
    },
  ];

  return (
    <center>
      {/* here i have used map function to display */}
      <div className="list">
        {container.map((item) => {
          return (
            <Product
              key={item.id}
              course={item.course}
              price={item.price}
              url={item.url}
            />
          );
        })}
        {/* // i have hard coded here
         <Product
          course="Html"
          price="20"
          url="https://cdn-icons-png.flaticon.com/512/732/732212.png"
        />
        <Product
          course="Css"
          price="20"
          url="https://cdn-icons-png.flaticon.com/512/136/136527.png"
        />

        <Product
          course="Java Script"
          price="20"
          url="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        />
        <Product
          course="React"
          price="200"
          url="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/640px-React_Logo_SVG.svg.png"
        /> */}
      </div>
    </center>
  );
}
export default Pro_list;
