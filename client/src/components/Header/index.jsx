export default function Map() {
  return (
    <>
      <h1>Food Driver</h1>

      <section>
        <h2>Food Categories</h2>

        <div class='grid'>
          <div class='grid-item'>
            <a href='categories/asian'>
              <img src='images/asian.jpg' alt='Asian Food' />
              <span>Asian</span>
            </a>
          </div>

          <div class='grid-item'>
            <a href='categories/cheap'>
              <img src='images/cheap.jpeg' alt='Cheap Food' />
              <span>Cheap</span>
            </a>
          </div>

          <div class='grid-item'>
            <a href='categories/fast-food'>
              <img src='images/fast-food.jpg' alt='Fast Food' />
              <span>Fast Food</span>
            </a>
          </div>

          <div class='grid-item'>
            <a href='categories/gluten-free'>
              <img src='images/gluten-free.jpg' alt='Gluten Free Food' />
              <span>Gluten Free</span>
            </a>
          </div>

          <div class='grid-item'>
            <a href='categories/healthy'>
              <img src='images/healthy.jpg' alt='Healthy Food' />
              <span>Healthy</span>
            </a>
          </div>

          <div class='grid-item'>
            <a href='categories/restaurant'>
              <img src='images/restaurant.jpg' alt='Restaurant Food' />
              <span>Restaurant</span>
            </a>
          </div>

          <div class='grid-item'>
            <a href='categories/spicy'>
              <img src='images/spicy.jpg' alt='Spicy Food' />
              <span>Spicy</span>
            </a>
          </div>

          <div class='grid-item'>
            <a href='categories/vegan'>
              <img src='images/vegan.jpg' alt='Vegan Food' />
              <span>Vegan</span>
            </a>
          </div>

          <div class='grid-item'>
            <a href='categories/vegetarian'>
              <img src='images/vegetarian.jpeg' alt='Vegetarian Food' />
              <span>Vegetarian</span>
            </a>
          </div>
        </div>
      </section>

      <section>
        <h1>Map</h1>

        <div id='map'></div>
      </section>
    </>
  );
}
