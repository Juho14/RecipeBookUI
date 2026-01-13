const ShoppingList = () => {
    // Allow user to select recipies or ingredients.
    // The ingredients are then grouped by ingredient type
    // and arranged to a shopping list.
    // The list is controlled via checkboxes and API
    // to save progress. Local storage can be used initially.
    // Maybe download it as an image?

    // Child components:
    // Ingredient selector, Recipe selector, Shopping list view
    // Custom item adder (maybe), could cause issues with data consistency.
    // Maybe implement it as an external array that is just amount name and unit.
    // with no link to actual ingredients.

    // Structure of shopping list:
    // List of ingredients (id, amount, unit, checked(later))
    // Option to group by recipies or ingredient types.
    // Below list of external ingredients (name, amount, unit, checked(later))
    // Macro summary (behind a toggle)
    return <div>Shopping list component</div>
}
export default ShoppingList
