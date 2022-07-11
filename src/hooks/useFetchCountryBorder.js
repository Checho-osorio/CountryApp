import { useEffect, useState } from "react";
import { getCountry } from "../helpers/getCountry";


export const useFetchCountryBorder = ( contry = '' ) => {

    const [dataCountry, setDataCountry] = useState();
    

    const getCountries = async (  ) => {
      const newContry = await getCountry();


      const filtrarBusqueda = () =>{
        let resultadoBusqueda = newContry?.filter((element) => {
             if (element?.fifa?.toLowerCase().includes(contry.toLowerCase())) {
                 return element        
             }
         }); 
         setDataCountry(resultadoBusqueda);
     }    
        filtrarBusqueda()
     };
 
    useEffect(()=>{
     getCountries();
    },[])

 
  return {
    dataCountry,
  }
}
