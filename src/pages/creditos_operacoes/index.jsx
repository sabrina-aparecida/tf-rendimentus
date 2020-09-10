import React, {useState} from 'react';
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
        <main>
            <button className= "count_operation" onClick={onClickCount} >Contas e Operações</button>
                    { showResultsCount ?  <CountOperation/> : null }

                    <button className= "count_operation" onClick={onClickCredit} > Operações de Crétido </button>
                    { showResultsCredit ?  <CreditOperation/> : null }
         
        </main>
    )
}
export default BankOptions;          
