import { useEffect, useState } from "react"

const Questao02 = () => {
    //Guardando os endereços das imagens do pokémon, respectivamente da frente e das costas
    const front = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    const back = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"

    //variáveis de estado flag e value, sendo que value
    //armazenará front ou back, dependendo se flag
    //é true ou false
    const [flag, setFlag] = useState(0)
    const [value, setValue] = useState("")

    useEffect (
        () => {
            setValue("")
            //Se flag for true, value assumirá o valor "front",
            //caso contrário, será "back"
            if(flag === true) setValue((prev)=>prev+""+front)
            else setValue((prev)=>prev+""+back)
        }
        ,
        [flag]
    )

    return (
        <>
            <img src={value} alt="pokemon" style={{ width: '200px'}}/>
            <button onClick = {() => setFlag((anterior)=>!anterior)}>
                Trocar
            </button>
        </>
    )
}

export default Questao02