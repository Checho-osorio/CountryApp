import { useEffect, useState } from "react";
import { getCountry } from "../helpers/getCountry";


export const useFetchCountries = ( contry ) => {

    const [dataCountry, setDataCountry] = useState();
    const [isLoading, setIsLoading] = useState( true );

    const getCountries = async (  ) => {
      const newContry = await getCountry();


      const filtrarBusqueda = () =>{
        let resultadoBusqueda = newContry?.filter((element) => {
             if (element.name.toString().toLowerCase().includes(contry.toLowerCase())) {
                 return element        
             }
         }); 
         setDataCountry(resultadoBusqueda);
         setIsLoading( false );
     }    
        filtrarBusqueda()
     };
 
    useEffect(()=>{
     getCountries();
    },[])

 
  return {
    dataCountry,
    isLoading
  }
}
