import React, {useEffect} from 'react';
import '../style.css'


 


function Garantias(){
    useEffect(() => {
        fetch('https://jsonbox.io/box_ddb0ab5da8d69da8c315/banks')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            data.map(item => {
              item.valueCredit = item.accounts[0].accountExtract.reduce((prev, next) => prev + next.value, 0).toFixed(2)
              return item;
            })
            const balance = data.reduce((prev, next) => prev + next.accounts[0].balance, 0).toFixed(2)
    
    
          })
          .catch((e) => {
            alert("ocorreu um erro ao tentar obter os dados");
          });
      }, []);
    
    
    return (
    <div className = "options_box">
        <p className = "options">Garantias</p>
    </div>

    )
}
export default Garantias;