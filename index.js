// DICE ROLLER PROGRAM  

function rollDice(){

    const numofDice = document.getElementById("numofDice").value ;
    const diceResult = document.getElementById("diceResult") ;
    const diceImages= document.getElementById("diceImages")
    const values = [];
    const images = [];

    for(let i = 0; i<numofDice ; i++)
    {
        const value =  Math.floor(Math.random()*6) + 1;
        console.log('check the imput', value);
        
        values.push(value);
        images.push(`<img src="dice_Images/${value}.png" alt ="Dice ${value}">`);
        // images.push(`<img src="dice_Imges/${value}.png" alt="Dice ${value}">`);

        // console.log('check the images array: ', images)
    }
diceResult.textContent = `dice: ${values.join(',')}`;
diceImages.innerHTML = `diceImages: ${images.join(',')}`;
}