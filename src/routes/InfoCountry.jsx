import { useContext, useEffect } from "react";
import { CountryStatusInfo } from "../context/CountryStatusInfo";
import { BtnBack } from "../components/BtnBack";
import { ItemCardCountry } from "../components/ItemCardCountry";
import { BtnCountries } from "../components/BtnCountries";
import { useFetchCountryBorder } from "../hooks/useFetchCountryBorder";


export const InfoCountry = () => { 

const {statusClick , setStatusClick} = useContext( CountryStatusInfo );
const {countryInfo , search  } = statusClick;

console.log(statusClick,'statusClick')

useEffect(()=>{
  if ( search != ""){
    const { dataCountry } = useFetchCountryBorder( search ) 

    setStatusClick({
        status: true,
        countryInfo: dataCountry,
        search: ""
    })
  
    console.log(dataCountry,'dataCountry')

    setStatusClick({
      status: true,
      countryInfo: dataCountry,
      search: ""
    })
  }
},[])


console.log(countryInfo,'statusClick')





  return (
    <div className="contentCountry">
        <BtnBack />
      <div className="contenFlagSeccion">
        <img src={ countryInfo.flag } />
      </div>
      <div className="contentInfoSeccion">
      
        <div className="contentInfoSeccion__cart">
          <div className="contentInfoSeccion__cart-title">
              <p>{ countryInfo.name}</p>
          </div>
          <div className="contentInfoSeccion__cart-Info">
            <div>

              <ItemCardCountry data={ countryInfo.Nativename } title={'Native Name'}  />
              <ItemCardCountry data={ countryInfo.population } title={'Population'}  />
              <ItemCardCountry data={ countryInfo.region } title={'Region'}  />
              <ItemCardCountry data={ countryInfo.subregion } title={'Sub Region'}  />
              <ItemCardCountry data={ countryInfo.capital } title={'Capital'}  />

          </div>
          <div>
              <ItemCardCountry data={ countryInfo.tld } title={'Top Level Domain'}  />
              <ItemCardCountry data={ countryInfo.currencies } title={'Currencies'}  />
              <ItemCardCountry data={ countryInfo.languages } title={'Languages'}  />
        
          </div>
          </div>
          <div className="contentInfoSeccion__cart-borderCountry">
              <BtnCountries borderCountry={ countryInfo.borders }/>
          </div>

        </div>



      </div>


    </div>
  )
}
