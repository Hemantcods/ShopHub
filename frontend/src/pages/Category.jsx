import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ListProducts from '../components/ListProducts'
import NotFound from './NotFound'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

const Category = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND}/api/products/category/${category}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data.data); // Extract the 'data' array from the response
                } else {
                    setProducts([]);
                }
            } catch (error) {
                console.error("Failed to fetch products:", error);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        if (category) {
            getProducts();
        }
    }, [category]);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navigation />
                <main className="flex-1 flex justify-center items-center">
                    <p>Loading products...</p>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
                {products.length > 0 ? <ListProducts products={products} /> : <NotFound />}
            </main>
            <Footer />
        </div>
    );
}

export default Category