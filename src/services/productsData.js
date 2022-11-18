import main from "../images/model1.jpeg";
import model2 from "../images/model2.jpg";
import model3 from "../images/model3.jpg";
import model4 from "../images/model4.jpg";
import model5 from "../images/model5.jpg";
import model6 from "../images/model6.jpg";
import model7 from "../images/model7.jpg";
import model8 from "../images/model8.jpg";
import model9 from "../images/model9.jpg";
import ReactStars from "react-rating-stars-component";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export const mainProduct = [
  { id: 1, img: model2 },
  { id: 2, img: model3 },
  { id: 3, img: model4 },
  { id: 4, img: model2 },
];
export const coloredProducts = [
  { id: 1, img: model3 },
  { id: 2, img: model5 },
];

const productsArray = [
  {
    id: 1,
    src: main,
    title: "Reebok Workout Ready Graphic T-Shirt For Men",
    price: "9,999",
  },
];

export const featuredData = [
  {
    id: 1,
    main: model9,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainPrice: "9,999",
    price: true,
    startPrice: "9,999 LE",
    discount: "30% Off",
    logo: "./adidas.png",
    pickup: true,
    rateNum: "4.2 of 5",
    rate: (
      <ReactStars
        count={5}
        value={4.9}
        size={16}
        activeColor="#ffd700"
        edit={false}
        a11y={false}
        emptyIcon={<AiOutlineStar />}
        filledIcon={<AiFillStar />}
      />
    ),
    from: "UK",
    to: "Egypt",
    days: "10days",
    store: "",
  },
  {
    id: 2,
    main: model8,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainPrice: "9,999",
    price: false,
    startPrice: "9,999 LE",
    discount: "30% Off",
    logo: "./adidas.png",
    pickup: false,
    rateNum: "4.2 of 5",
    rate: (
      <ReactStars
        count={5}
        value={4.9}
        size={16}
        activeColor="#ffd700"
        edit={false}
        a11y={false}
        emptyIcon={<AiOutlineStar />}
        filledIcon={<AiFillStar />}
      />
    ),
    from: "",
    to: "",
    days: "",
    store: "Cenera Mall",
  },
  {
    id: 3,
    main: model7,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainPrice: "9,999",
    price: true,
    startPrice: "9,999 LE",
    discount: "30% Off",
    logo: "./adidas.png",
    pickup: true,
    rateNum: "4.2 of 5",
    rate: (
      <ReactStars
        count={5}
        value={4.9}
        size={16}
        activeColor="#ffd700"
        edit={false}
        a11y={false}
        emptyIcon={<AiOutlineStar />}
        filledIcon={<AiFillStar />}
      />
    ),
    from: "UK",
    to: "Egypt",
    days: "10days",
    store: "",
  },
  {
    id: 4,
    main: model6,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainPrice: "9,999",
    price: false,
    startPrice: "9,999 LE",
    discount: "30% Off",
    logo: "./adidas.png",
    pickup: false,
    rateNum: "4.2 of 5",
    rate: (
      <ReactStars
        count={5}
        value={4.9}
        size={16}
        activeColor="#ffd700"
        edit={false}
        a11y={false}
        emptyIcon={<AiOutlineStar />}
        filledIcon={<AiFillStar />}
      />
    ),
    from: "",
    to: "",
    days: "",
    store: "Cenera Mall",
  },
  {
    id: 5,
    main: model5,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainPrice: "9,999",
    price: true,
    startPrice: "9,999 LE",
    discount: "30% Off",
    logo: "./adidas.png",
    pickup: true,
    rateNum: "4.2 of 5",
    rate: (
      <ReactStars
        count={5}
        value={4.9}
        size={16}
        activeColor="#ffd700"
        edit={false}
        a11y={false}
        emptyIcon={<AiOutlineStar />}
        filledIcon={<AiFillStar />}
      />
    ),
    from: "UK",
    to: "Egypt",
    days: "10days",
    store: "",
  },
  {
    id: 6,
    main: model2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainPrice: "9,999",
    price: true,
    startPrice: "9,999 LE",
    discount: "30% Off",
    logo: "./adidas.png",
    pickup: true,
    rateNum: "4.2 of 5",
    rate: (
      <ReactStars
        count={5}
        value={4.9}
        size={16}
        activeColor="#ffd700"
        edit={false}
        a11y={false}
        emptyIcon={<AiOutlineStar />}
        filledIcon={<AiFillStar />}
      />
    ),
    from: "UK",
    to: "Egypt",
    days: "10days",
    store: "",
  },
];

function getProductData(id) {
  let productData = productsArray.find((item) => item.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
