import options from "../../data/Options.json";
import CardService from "../ComponentsHomeContainer/CardService";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const CardsCategory = () => {
  let category = useLocation();
  if (category.pathname === '/') {
    category.pathname = '/servicios'; 
  }
  return (
    <div>
      {options.map(item => {
        if (item.path!==category.pathname) {
          return (
            <div className="my-3" key={item.id}>
              <Link to={item.path} className="text-black">
                <CardService element={item} />
              </Link>
            </div>
          )
        } else{
          return console.log(`not render ${item.path}`);;
        }
      })}
    </div>
  )
}

export default CardsCategory;