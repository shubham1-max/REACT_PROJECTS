
import { HfInference } from '@huggingface/inference'

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    
    try {
        const response = await hf.chatCompletion({
            model: "meta-llama/Llama-3.2-3B-Instruct",
            messages: [
                { 
                    role: "user", 
                    content: `You are a professional chef assistant.

User provided: ${ingredientsString}

STEP 1 - VALIDATE:
Check if these are REAL, EDIBLE FOOD ingredients.
- VALID: vegetables, fruits, meat, fish, poultry, dairy, eggs, grains, pasta, rice, bread, spices, herbs, oils, condiments, nuts, beverages, etc.
- INVALID: electronics, furniture, vehicles, clothing, tools, household items, non-food objects
-  ANALYSE: check the ingridients very carefully and the recommend the  best dish which can be possible by adding minimum  extra ingridients from yourside.
STEP 2 - RESPOND:

If ALL items are INVALID (non-food items):
   Return this EXACT message:
   "# ❌ Oops! Invalid Ingredients
   
   I can only create recipes with **real food ingredients**.
   
   Please add edible items like:
   - 🥬 Vegetables (tomatoes, onions, carrots, etc.)
   - 🍎 Fruits (apples, bananas, berries, etc.)
   - 🍗 Proteins (chicken, beef, fish, eggs, tofu, etc.)
   - 🍚 Grains (rice, pasta, bread, etc.)
   - 🧀 Dairy (milk, cheese, yogurt, etc.)
   - 🧂 Seasonings (salt, pepper, spices, herbs, etc.)
   
   Try again with actual food items!"

If SOME or ALL items are VALID food:
   - Ignore any invalid items silently
   - Create ONE delicious recipe using the valid ingredients
   - Format in markdown:

# [Creative Recipe Name]

## Ingredients
- [quantity] [ingredient]
- [quantity] [ingredient]
- [add common pantry items if needed]

## Instructions
1. [Clear detailed step]
2. [Clear detailed step]
3. [Continue steps...]

## Tips
- [Helpful cooking tip]
- [Storage or variation tip]

Now proceed with validation and response. and dont mention that step1 validate and for step2 respond along with that generate the image  for the final reciepe.`
                }
            ],
            max_tokens: 1000,
            temperature: 0.7,
        })
        
        return response.choices[0].message.content
        
    } catch (error) {
        console.error("Recipe generation error:", error)
        throw new Error(`Failed to generate recipe: ${error.message}`)
    }
}