import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe } from "../redux/Action/RecipeAction";
import "./Recipes.css"; // Custom CSS with triangle effect

const Recipes = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.recipe.recipe);

  useEffect(() => {
    dispatch(getRecipe());
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center text-dark fw-bold mb-5 display-6">🍲 Explore Unique Recipes</h2>

      {data?.length > 0 ? (
        <div className="row g-4">
          {data.map((recipe) => (
            <div className="col-md-6 col-lg-4" key={recipe.id}>
              <div className="card triangle-card fade-in border-0 shadow">
                <div className="image-wrapper">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="card-img-top"
                  />
                </div>

                <div className="card-body position-relative text-white">
                  <div className="triangle-shape"></div>
                  <h5 className="fw-bold">{recipe.name}</h5>
                  <p className="mb-0 small">
                    <strong>Cuisine:</strong> {recipe.cuisine} <br />
                    <strong>Difficulty:</strong> {recipe.difficulty} <br />
                    <strong>Prep:</strong> {recipe.prepTimeMinutes} mins <br />
                    <strong>Servings:</strong> {recipe.servings}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h4 className="text-center text-muted">No Recipe Data Found</h4>
      )}
    </div>
  );
};

export default Recipes;
