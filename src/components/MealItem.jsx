const MealItem = ({ meal }) => {
  const { name, image, price, description} = meal;
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name}/>
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{price}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <button>Add To Cart</button>
        </p>
      </article>  
    </li>
  )
}

export default MealItem