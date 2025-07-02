import React from 'react';

const Index = () => {
  return (
    <div className="container-fluid my-5 px-3 px-sm-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-9">
          <div className="card shadow-lg border-0 p-4 p-sm-5 bg-light text-center rounded-4">
            
            {/* 💥 Full-width styled heading */}
            <div className="mb-4 px-2 px-sm-4">
              <h1 className="text-primary fw-bold display-5 display-md-4">
                👋 Hello, Foodie! Welcome to Your All-in-One App 🍽️
              </h1>
            </div>

            <p className="fs-6 fs-sm-5 text-secondary mb-4">
              🛒 Manage your <span className="fw-bold text-dark">shopping cart</span> like a pro <br />
              🍲 Explore tasty <span className="fw-bold text-dark">recipes</span> from around the world <br />
              ⚡ Fast, Clean, and Easy — Just the way you like it!
            </p>

            <hr className="my-4" />

            <div className="mb-4">
              <p className="fs-6 fs-sm-5 text-muted">
                🔍 Use the <strong className="text-primary">Navigation Bar</strong> above to explore:
              </p>
              <p className="mb-2">
                ➤ <strong>Cart</strong>: Check out your selected items 🧺 <br />
                ➤ <strong>Recipes</strong>: Discover mouth-watering dishes 🧑‍🍳
              </p>
            </div>

            <div className="alert alert-info rounded-pill fs-6 w-100 w-sm-75 mx-auto">
              💡 Tip: Bookmark this app to plan meals & groceries efficiently!
            </div>

            <div className="mt-4">
              <div className="d-flex justify-content-center">
                <span
                  className="badge bg-success text-wrap text-break text-white fs-6 px-3 px-sm-4 py-2 rounded-pill w-100 w-sm-auto"
                  style={{ maxWidth: "100%" }}
                >
                  ✅ 100% User-Friendly | 📱 Responsive | 🌐 Built with React + ReduxThunk
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
