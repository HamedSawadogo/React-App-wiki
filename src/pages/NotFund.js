import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/fund.css";

const NotFund = () => {
   return (
     <div className='notfund'>
        <h1>Erreur 404</h1>
         <Link to={"/"}>
            <li>Retour a l'accueil</li>
         </Link>
     </div>
   );
};

export default NotFund;