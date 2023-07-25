export type Recipe = {
    Id: number,
    Name: string,
    Ingredients: Ingredient[],
    Preparation: string
}

export type Ingredient = {
    What: string,
    Amount: string,
}
