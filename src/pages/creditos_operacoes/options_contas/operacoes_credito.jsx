import React, {useState} from 'react';
import Tarifa from './tarifa';
import Taxas from './taxas';
import Publico from './publico';
import Garantias from './garantias'

const  Operacoes_credito = () => {
    const [showResultsTarifa, setShowResultsTarifa] = useState(false);
    const [showResultsTaxas, setShowResultsTaxas] = useState(false);
    const [showResultsPublico, setShowResultsPublico] = useState(false);
    const [showResultsGarantias, setShowResultsGarantias] = useState(false);

    const onClickTarifa = () => {
        if (!showResultsTarifa){
            setShowResultsTarifa(true)
        } else {
            setShowResultsTarifa(false)
           }
    }
    const onClickTaxas = () => {
       if (!showResultsTaxas){
            setShowResultsTaxas(true)
        } else {
            setShowResultsTaxas(false)
       }
    }
    const onClickPublico = () => {
        if (!showResultsPublico){
            setShowResultsPublico(true)
        } else {
            setShowResultsPublico(false)
        }
     }
     const onClickGarantias = () => {
        if (!showResultsGarantias){
            setShowResultsGarantias(true)
        } else {
            setShowResultsGarantias(false)
           }
     }
     return (
        <>            
            <main> 
                <div className = "menu-options">
                <div className = "opcoes_division">
                    <button className= "button_creditos" onClick={onClickPublico} >PÚBLICO </button>
                    { showResultsPublico ? <Publico/> : null }                 
                </div>
                <div className = "opcoes_division">
                    <button className= "button_creditos" onClick={onClickTarifa} >TARIFAS </button>
                    { showResultsTarifa ? <Tarifa/> : null }
                </div>
                <div className = "opcoes_division">
                <button className= "button_creditos" onClick={onClickTaxas} >TAXAS </button>
                    { showResultsTaxas ? <Taxas/> : null }
                 </div>
                 <div className = "opcoes_division">
                  <button className= "button_creditos" onClick={onClickGarantias} >GARANTIAS</button>
                    { showResultsGarantias ? <Garantias/> : null }
                 </div>
                 <button className= "button_send" > ENVIAR SOLICITAÇÃO </button>

                </div>
            </main>
        </>
    )
}
export default Operacoes_credito; 