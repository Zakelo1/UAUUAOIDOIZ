import {useState} from 'react';

const Multiplication = () => {
    const [premiernombre, setpremiernombre] = useState(0)
    const [deuxièmenombre, setdeuxièmenombre] = useState(0)
    const [produits, setproduits] = useState(null)
    const Multiplication1 = () =>{
        setproduits(premiernombre * deuxièmenombre)
    }
    const premiernombrechange = (event) => {
        setpremiernombre(Number(event.target.value))
    } 
    const deuxièmenombrechange = (event) => {
        setdeuxièmenombre(Number(event.target.value))
    }
    return (
        <div>
            <h2>Régale toi Nabil</h2>
            <input type="number"  
            placeholder='Ajouter le premier nombre à multiplier' value={premiernombre}
            onChange={premiernombrechange}/>
             <input type="number"  
             placeholder='Ajouter le deuxième nombre à multiplier' 
             value={deuxièmenombre}
             onChange={deuxièmenombrechange}
              />
            <button onClick={Multiplication1}>Mutiplier</button>
            {produits !== null && (
                <p>Le produits est : {produits}</p>
            )}
        </div>
    );
};

export default Multiplication;
