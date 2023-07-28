import { useState } from "react";

export default function Header() {
  const categories = [
    {
      label: "Asian",
      image: "asian.jpg",
      category: "asian"
    },
    {
      label: "Cheap",
      image: "cheap.jpeg",
      category: "cheap"
    },
    {
      label: "Fast Food",
      image: "fast-food.jpg",
      category: "fast-food"
    },
    {
      label: "Gluten Free",
      image: "gluten-free.jpg",
      category: "gluten-free"
    },
    {
      label: "Healthy",
      image: "healthy.jpg",
      category: "healthy"
    },
    {
      label: "Restaurant",
      image: "restaurant.jpg",
      category: "restaurant"
    },
    {
      label: "Spicy",
      image: "spicy.jpg",
      category: "spicy"
    },
    {
      label: "Vegan",
      image: "vegan.jpg",
      category: "vegan"
    },
    {
      label: "Vegetarian",
      image: "vegetarian.jpeg",
      category: "vegetarian"
    }
  ]

  const restaurants = [
    {
      name: "KFC",
      tags: ["fast-food"],
      description: 'Fried chicken buckets and burgers'
    },
    {
      name: "Sandy Cafe",
      tags: ['healthy', 'vegan', 'vegetarian', 'gluten-free'],
      description: "Cat cafe serving coffees and breakfast food"
    },
    {
      name: 'Golden Dragon',
      tags: ['asian', 'restaurant'],
      description: "Chinese restaurant serving fusion inspired classics"
    },
    {
      name: 'Charcoal Chicken',
      tags: ['cheap'],
      description: 'You know what this is'
    },
    {
      name: "Sushi Samba",
      tags: ["asian", "restaurant", "spicy"],
      description: "Sushi rolls with a spicy kick from different cuisines"
    },
    {
      name: "Mediterranean Delights",
      tags: ["healthy", "restaurant"],
      description: "Mouthwatering Mediterranean dishes for a healthy feast"
    },
    {
      name: "Noodle Haven",
      tags: ["asian", "cheap"],
      description: "A variety of budget-friendly Asian noodles"
    },
    {
      name: "Veggie Thai",
      tags: ["asian", "vegetarian", "vegan"],
      description: "Traditional Thai cuisine with a focus on plant-based options"
    },
    {
      name: "Salsa Sensations",
      tags: ["restaurant", "spicy"],
      description: "Authentic Mexican dishes with a spicy twist"
    },
    {
      name: "Fresh & Tasty",
      tags: ["healthy", "cheap", "fast-food"],
      description: "Delicious and nutritious fast food at affordable prices"
    },
    {
      name: "Green Cuisine",
      tags: ["vegetarian", "vegan", "healthy"],
      description: "An array of green and nutritious delights"
    },
    {
      name: "Pizza Paradise",
      tags: ["cheap", "fast-food"],
      description: "Affordable and quick pizza for pizza lovers"
    },
    {
      name: "Wok & Roll",
      tags: ["asian", "cheap", "fast-food"],
      description: "Wok-fired Asian dishes with speedy service"
    },
    {
      name: "Salad Sensation",
      tags: ["healthy", "vegetarian", "vegan"],
      description: "An assortment of fresh and flavorful salads"
    },
    {
      name: "Gourmet Grill",
      tags: ["restaurant", "spicy", "healthy"],
      description: "Gourmet grilled dishes with a healthy twist"
    },
    {
      name: "Soybean Deli",
      tags: ["asian", "vegetarian", "vegan"],
      description: "Soy-based delicacies for plant-based enthusiasts"
    },
    {
      name: "Taco Tango",
      tags: ["restaurant", "spicy"],
      description: "Tantalizing tacos with a spicy dance of flavors"
    },
    {
      name: "Bowl Bonanza",
      tags: ["healthy", "cheap", "vegetarian", "vegan"],
      description: "A bonanza of nourishing bowls for all"
    },
    {
      name: "Burger Bliss",
      tags: ["cheap", "fast-food"],
      description: "Burgers that bring bliss to your taste buds"
    },
    {
      name: "Wok Star",
      tags: ["asian", "restaurant"],
      description: "A star-studded lineup of Asian delights"
    },
    {
      name: "Tofu Palace",
      tags: ["asian", "vegetarian", "vegan"],
      description: "Tofu-centered dishes fit for royalty"
    },
    {
      name: "Zesty Zucchine",
      tags: ["gluten-free", "restaurant", "spicy"],
      description: "Zesty and gluten-free dishes with a hint of spice"
    },
    {
      name: "Crispy Crust",
      tags: ["healthy", "cheap", "fast-food"],
      description: "Crispy and wholesome fast food options"
    },
    {
      name: "Vegan Vibes",
      tags: ["vegan", "restaurant"],
      description: "A vibe-filled vegan dining experience"
    },
    {
      name: "Farm Fresh",
      tags: ["healthy", "vegetarian"],
      description: "Farm-to-table vegetarian dishes for a fresh experience"
    },
    {
      name: "Healthy Bites",
      tags: ["healthy", "vegetarian"],
      description: "Fresh and wholesome vegetarian meals"
    },
    {
      name: "Sizzling Spice",
      tags: ["asian", "spicy"],
      description: "Authentic Asian cuisine with a spicy twist"
    },
    {
      name: "Green Leaf Grill",
      tags: ["vegan", "gluten-free"],
      description: "Plant-based and gluten-free delights"
    },
    {
      name: "Mama's Kitchen",
      tags: ["cheap", "restaurant"],
      description: "Homestyle dishes at pocket-friendly prices"
    },
    {
      name: "Tofu Temptations",
      tags: ["asian", "vegetarian", "vegan"],
      description: "Tantalizing tofu-based dishes from Asia"
    },
    {
      name: "FitFare Delights",
      tags: ["healthy", "fast-food"],
      description: "Quick and nutritious meals for the health-conscious"
    },
    {
      name: "Veggie Haven",
      tags: ["vegetarian", "gluten-free", "healthy"],
      description: "A haven for vegetarian and gluten-free foodies"
    },
    {
      name: "Spice Fusion",
      tags: ["asian", "restaurant", "spicy"],
      description: "A fusion of flavors from Asia's finest cuisines"
    },
    {
      name: "Garden Fresh",
      tags: ["vegan", "vegetarian", "healthy"],
      description: "Fresh and delightful vegan and vegetarian options"
    },
    {
      name: "Budget Bites",
      tags: ["cheap", "fast-food"],
      description: "Affordable and quick bites for all"
    }
  ]

  const [currentlySelectedCategory, setCurrentlySelectedCategory] = useState('')

  return (
    <>
      <section>
        <h2>Deliverizer</h2>

        {
          // if category is empty, render the categories
          currentlySelectedCategory === '' ?
            (
              <div class='grid'>
                {
                  categories.map(c => (
                    <div class='grid-item'>
                      <div onClick={() => setCurrentlySelectedCategory(c.category)}>
                        <img className="food-img" src={`images/${c.image}`} alt={`${c.label} Food`} />
                        <div>{c.label}</div>
                      </div>
                    </div>
                  ))
                }
              </div>
            ) :
            (
              // if category is selected, rendered the restaurants that include it in their tags
              <div>
                <button onClick={() => setCurrentlySelectedCategory('')}>Back to Categories</button>
                {
                  // filter out any restaurants that dont include the currently selected category in their tags
                  restaurants.filter(r => r.tags.some(t => t === currentlySelectedCategory)).map(restaurant => (
                    <div style={{ textAlign: 'left' }}>
                      <h4 style={{ marginBottom: 0 }}>{restaurant.name}</h4>
                      <p style={{ marginTop: 2 }}>{restaurant.description}</p>

                    </div>
                  ))
                }
              </div>
            )
        }

      </section>

    </>
  );
}
