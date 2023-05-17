import { useEffect, useState } from "react"

const Questao03 = () => {

    //Variáveis de estado que armazenarão a capital mais populosa
    //e a menos populosa, respectivamente
    const [maiorCap, setMaiorCap] = useState("")
    const [menorCap, setMenorCap] = useState("")

    useEffect = (
        fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
        .then(
            (response) => {
                return response.json()
            }
        )
        .then(
            (data) => {
                //As duas variáveis que serão a maior e a menor capital.
                //Assumindo o índice 0 para o loop
                let maior = data[0]
                let menor = data[0]

                //Loop para encontrar a maior e menor capital em população.
                //Se durante o loop for encontrado uma capital maior ou menor
                //do que a dos valores das duas variáveis anteriores, o valor
                //é atualizado
                for(let i=0; i < data.length; i++){
                    if(data[i].population > maior.population) maior = data[i]
                    if(data[i].population < menor.population) menor = data[i]
                }
                
                //setMaior e setMenor recebem respectivamente os nomes da maior
                //e da menor capital.
                setMaiorCap("")
                setMenorCap("")
                setMaiorCap((prev)=>prev + maior.capital[0])
                setMenorCap((prev)=>prev + menor.capital[0])
                
            }
        )
        .catch(error => console.log(error))
    )

    return (
        <>
            <h1>Maior: {maiorCap}</h1>
            <h1>Menor: {menorCap}</h1>
        </>
    )
}

export default Questao03