import { useContext, useState } from "react"
import { GifCountry } from "../components/GifCountry";
import { SearchCountry } from "../components/SearchCountry"
import { CountryStatusInfo } from "../context/CountryStatusInfo";
import { InfoCountry } from "./InfoCountry";


export const MainApp = () => {

    const [countries, setCountries] = useState('');
    const [infoCountry, setInfoCountry] = useState(false)

    const onAddCountry = ( newCountry ) => {
       setCountries(  newCountry  )
    }

   

    const {statusClick } = useContext( CountryStatusInfo );
    const { status } = statusClick;



    if ( status === true ) {
      return (
        <InfoCountry/>
      );
      
    }else{
      return (
    
        <div className="contentGridCountry">
          <SearchCountry 
              onNewSearch={ onAddCountry } 
            />                    
            <GifCountry 
              key={ countries }  
              countries = {countries} 
            />
  
        </div>
        );

      }
    

      
}
