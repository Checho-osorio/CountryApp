import { useContext, useEffect } from "react";
import { CountryStatusInfo } from "../context/CountryStatusInfo";
import { useFetchCountryBorder } from "../hooks/useFetchCountryBorder";




export const BtnCountries = ( { borderCountry }) => {

    const {statusClick , setStatusClick} = useContext( CountryStatusInfo );
    const {countryInfo ,  search  } = statusClick;
    const  { dataCountry } = useFetchCountryBorder( search );



    useEffect(()=>{
        setStatusClick({
            status: true,
            countryInfo,
            search: ""
         } )
    },[])
    
    const  onClickBorderCountry = ( value ) => {
        setStatusClick({
            status: true,
            countryInfo,
            search: value
         } )
    }

  return (

   <>   {
            borderCountry ? 
            <div className="borderCountry__content">
                <p className="borderCountry__content-title">Border Countries: </p>
                <div className="borderCountry__content-btn">
                    {
                        Object.values(borderCountry)?.map(( item )=> 
                         <button
                                onClick={ ({target}) => ( onClickBorderCountry(target.textContent)) } 
                                className="btnCountry" 
                                key={ item }>  { item }  </button> )
                    }
                </div>

            </div> : <> </>
        }
    </>
  )
}
