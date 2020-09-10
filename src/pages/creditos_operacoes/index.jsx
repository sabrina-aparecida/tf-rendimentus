import React, {useState} from 'react';
import './style.css'
import CreditOperation from './options_contas/operacoes_credito';
import CountOperation from './options_components/operacoes_contas';





const  BankOptions = () => {
    const [showResultsCount, setShowResultsCount] = useState(false);
    const [showResultsCredit, setShowResultsCredit] = useState(false);
  

    const onClickCount = () => {
        if (!showResultsCount){
            setShowResultsCount(true)
        } else {
            setShowResultsCount(false)
           }
    }
    const onClickCredit = () => {
       if (!showResultsCredit){
        setShowResultsCredit(true)
        } else {
            setShowResultsCredit(false)
       }
    }

     return (
         <>
        <header> 
            <h1>header</h1>
        </header>
        <div className = "buttons_order">
            <button className= "button_show_creditos" onClick={onClickCount} >Contas e Operações</button>
                    { showResultsCount ?  <CountOperation/> : null }

                    <button className= "button_show_creditos" onClick={onClickCredit} > Operações de Crétido </button>
                    { showResultsCredit ?  <CreditOperation/> : null }
        </div>
        </>
    )
}
export default BankOptions;          
