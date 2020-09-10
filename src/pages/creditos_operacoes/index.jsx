import React, {useState} from 'react';
import OpcoesConta from './options_components/options_tipos_de_conta';
import OpcoesTarifa from './options_components/options_tarifa';
import OpcoesMovimento from './options_components/options_moviment';
import OpcoesPacote from './options_components/options_pacotes';
import OpcoesPublicas from './options_components/options_publicas'
import Credito from './options_contas/operacoes_credito'




const  Contas_operacoes = () => {
    const [showResultsType, setShowResultsType] = useState(false);
    const [showResultsTariff, setShowResultsTariff] = useState(false);
    const [showResultsPacotes, setShowResultsPacotes] = useState(false);
    const [showResultsMoviment, setShowResultsMoviment] = useState(false);
    const [showResultsPublicas, setShowResultsPublicas] = useState(false);

    const onClickTypes = () => {
        if (!showResultsType){
            setShowResultsType(true)
        } else {
            setShowResultsType(false)
           }
    }
    const onClickTariff = () => {
       if (!showResultsTariff){
           setShowResultsTariff(true)
        } else {
           setShowResultsTariff(false)
       }
    }
    const onClickMoviment = () => {
        if (!showResultsMoviment){
            setShowResultsMoviment(true)
        } else {
            setShowResultsMoviment(false)
        }
     }
     const onClickPacotes = () => {
        if (!showResultsPacotes){
            setShowResultsPacotes(true)
        } else {
            setShowResultsPacotes(false)
           }
     }
     const onClickPublico = () => {
        if (!showResultsPublicas){
            setShowResultsPublicas(true)
        } else {
            setShowResultsPublicas(false)
           }
     }
     return (
        <>
            <header> 
                <h1>header</h1>
            </header>
            <div className = "insfos-banco">
                <h1> Banco </h1>
                <h2> Contas e Operações </h2>
            </div>              

            <main> 
                <div className = "menu-options">
                <div className = "opcoes_division">
                    <button className= "button_creditos" onClick={onClickTypes} >TIPOS DE CONTA </button>
                    { showResultsType ? <OpcoesConta /> : null }
                </div>
                <div className = "opcoes_division">
                <button className= "button_creditos" onClick={onClickTariff} >TARIFAS </button>
                    { showResultsTariff ? <OpcoesTarifa/> : null }
                 </div>
                 <div className = "opcoes_division">
                    <button className= "button_creditos" onClick={onClickPacotes} >PACOTES </button>
                    { showResultsPacotes ? <OpcoesPacote/> : null }                 
                </div>
                 <div className = "opcoes_division">
                  <button className= "button_creditos" onClick={onClickMoviment} >MOVIMENTAÇÃO </button>
                    { showResultsMoviment ? <OpcoesMovimento/> : null }
                 </div>

                 <div className = "opcoes_division">
                    <button className= "button_creditos" onClick={onClickPublico} >PÚBLICO </button>
                    { showResultsPublicas ? <OpcoesPublicas/> : null }
                </div>
                </div>
                <Credito/>
            </main>
        </>
    )
}
export default Contas_operacoes;          
