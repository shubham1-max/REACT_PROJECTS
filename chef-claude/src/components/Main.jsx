import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import Ingredients from "./Ingridients";  //ok
import { getRecipeFromMistral } from "../ai";
export default function Main() {


    const [ingredients, setIngredients] = React.useState([])

    const [reciepe, setreciepe] = React.useState("")


    const reciepesection= React.useRef(null)
    console.log(reciepesection)  //it is object having (property)  current:(passedvalue=null)

    React.useEffect(()=>{
        
        if(reciepe!== ""  && reciepesection.current !==null){
              reciepesection.current.scrollIntoView({behaviour:"smooth"});  //internal property of browser
        }

    },[reciepe])




    function submit(formData) {  //recieve formdata as a object

        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }




    async function getreciepe() {
        // console.log(recipeShown)
           const reciepeMarkdown= await getRecipeFromMistral(ingredients) //function call
        // setreciepeShown((prevreciepeShown) => !prevreciepeShown)
        setreciepe(reciepeMarkdown) // changing the state or modifying the value of reciepe
    console.log(reciepeMarkdown)
     }
       
    return (
        <>

            <div id="content">
                <form action={submit}  /*onSubmit={handleSubmit}*/ className="add-ingredient-form">
                    <input
                        type="text"
                        placeholder="e.g. oregano"
                        aria-label="Add ingredient"
                        name="ingredient"
                    />
                    <button>Add ingredient</button>
                </form>

                {ingredients.length > 0 && <Ingredients 
                    ingredients={ingredients}
                    getReciepe={getreciepe}
                    ref={reciepesection}

                />}
              


                {reciepe && < ClaudeRecipe 
                               recipe={reciepe}
                            />}
            </div>


        </>
    );
}