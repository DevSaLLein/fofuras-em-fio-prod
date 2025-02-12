import { Home } from "../pages/home/Home"
import { ProductCard } from './../components/productCard/ProductCard';

export const HomePage: React.FC = () => { 
    
    return (
        <>
            <Home/> 

            <ProductCard/>
        </>
    )
}
