import { useContext } from "react";
import { CountryStatusInfo } from "../context/CountryStatusInfo";
import { Link } from "react-router-dom";
import icon_back from '../assets/icons/icon_back.svg'



export const BtnBack = () => {

    const {statusClick , setStatusClick} = useContext( CountryStatusInfo );

    const {countryInfo , status  } = statusClick;
    
    const onCLickBack = () => {
        setStatusClick({
          status: flase,
          countryInfo: "",
      })
    };


  return (
    <div className="seccionBackContent">
          <Link to="/" onClick={ onCLickBack }> 
            <span className="seccionBackContent-icon">
              <img src={icon_back} className="icon-back" alt="icon-back" />
            </span>
            <p className="seccionBackContent-text">
              Back
            </p>
          </Link>
        </div>
  )
}
