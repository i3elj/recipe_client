export class Recipe {
    Id: number = 0
    Name: string = ""
    Ingredients: Ingredient[] = []
    Image_url: string = ""
    Preparation: string = ""
}

export type Ingredient = {
    What: string,
    Amount: string,
}
