import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "../data";
import { categories } from "../data";

const ProductCard = ({ product }) => {
  const {
    productName,
    ratings,
    imgURL,
    price,
    brand,
  } = product;

  return (
    <div className="product-card">
      <img src={imgURL} alt={productName} />

      <h4>{productName}</h4>

      <p>{brand}</p>

      <p>⭐ {ratings}</p>

      <p>₹{price}</p>

      <button className="primary-btn">
        View Details
      </button>
    </div>
  );
};

// export default ProductCard;
const Products = () => {
  const { categoryName } = useParams();

  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [rating, setRating] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let updatedProducts = [...products];

    // Category Route Filter
    if (categoryName) {
      updatedProducts = updatedProducts.filter(
        (product) =>
          product.category.toLowerCase() ===
          categoryName.toLowerCase()
      );
    }

    // Search Filter
    if (search) {
      updatedProducts = updatedProducts.filter((product) =>
        product.productName
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // Gender Filter
    if (gender) {
      updatedProducts = updatedProducts.filter(
        (product) => product.gender === gender
      );
    }

    // Rating Filter
    updatedProducts = updatedProducts.filter(
      (product) => product.ratings >= rating
    );

    // Category Checkbox Filter
    if (!categoryName && selectedCategories.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    setFilteredProducts(updatedProducts);
  }, [
    search,
    gender,
    rating,
    selectedCategories,
    categoryName,
  ]);

  const categoryHandler = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter(
          (item) => item !== category
        )
      );
    } else {
      setSelectedCategories([
        ...selectedCategories,
        category,
      ]);
    }
  };

  return (
    <>
      <section className="product-head">
        <h3>
          {categoryName
            ? `${categoryName} `
            : "All Products"}
        </h3>

        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </section>

      <section className="products-layout">
        <div className="filters">
          <h3>Filters</h3>

          {/* Gender */}

          <div className="filter-section">
            <h4>Gender</h4>

            <label>
              <input
                type="radio"
                name="gender"
                value=""
                checked={gender === ""}
                onChange={(e) =>
                  setGender(e.target.value)
                }
              />
              All
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) =>
                  setGender(e.target.value)
                }
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) =>
                  setGender(e.target.value)
                }
              />
              Female
            </label>
          </div>

          {/* Rating */}

          <div className="filter-section">
            <h4>Minimum Rating</h4>

            <input
              type="range"
              min="0"
              max="5"
              step="0.5"
              value={rating}
              onChange={(e) =>
                setRating(Number(e.target.value))
              }
            />

            <p>{rating} ⭐ & Above</p>
          </div>

          {/* Categories */}

          {!categoryName && (
            <div className="filter-section">
              <h4>Categories</h4>

              {categories.map((category) => (
                <label key={category.categoryName}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      category.categoryName
                    )}
                    onChange={() =>
                      categoryHandler(
                        category.categoryName
                      )
                    }
                  />

                  {category.categoryName}
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="products-container">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.productName}
              product={product}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;