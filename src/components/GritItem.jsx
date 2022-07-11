import { useContext, useState } from "react"
import { CountryStatusInfo } from "../context/CountryStatusInfo";


export const GritItem = ( {cty} ) => {

const {flag, name, population, region, capital} = cty;

const { setStatusClick} = useContext( CountryStatusInfo );

const onClickItem  = ()=> {
    setStatusClick({
        status: true,
        countryInfo: cty,
        search: ""

    })
}
//{flag, name, population, region, capital}, 

  return (
    <div className="gridItem" onClick={ onClickItem } >
        <div className="gridItem__img">
         <img src={ flag } alt={ name } />
        </div>
        <div className="gridItem__info">
            <div className="gridItem__info-title">
                <p>{ name }</p>
            </div>
            <p className="gridItem__info-text"> <span>Population:</span> { population } </p>
            <p className="gridItem__info-text"><span> Region:</span> { region } </p>
            <p className="gridItem__info-text"><span> Capital:</span> { capital }</p>
        </div>
    </div>
  )
}
