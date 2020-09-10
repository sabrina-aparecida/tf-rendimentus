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
            <div className = "insfos-banco">
                <h2> Operações de Crédito </h2>
            </div>              

            <main> 
                <div className = "menu-options">
                <div className = "opcoes_division">
                    <button className= "button_creditos" onClick={onClickTarifa} >TIPOS DE CONTA </button>
                    { showResultsTarifa ? <Tarifa/> : null }
                </div>
                <div className = "opcoes_division">
                <button className= "button_creditos" onClick={onClickTaxas} >TARIFAS </button>
                    { showResultsTaxas ? <Taxas/> : null }
                 </div>
                 <div className = "opcoes_division">
                    <button className= "button_creditos" onClick={onClickPublico} >PACOTES </button>
                    { showResultsPublico ? <Publico/> : null }                 
                </div>
                 <div className = "opcoes_division">
                  <button className= "button_creditos" onClick={onClickGarantias} >MOVIMENTAÇÃO </button>
                    { showResultsGarantias ? <Garantias/> : null }
                 </div>
                </div>
            </main>
        </>
    )
}
export default Operacoes_credito; 