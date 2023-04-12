import "./styles.css";
import ImageGallery from "./ImageGallery";
export default function App() {
  const images = [
    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
  ];
  return (
    <div className="App">
      <ImageGallery images={images} />
    </div>
  );
}
