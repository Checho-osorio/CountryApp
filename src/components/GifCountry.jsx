import { useFetchCountries } from "../hooks/useFetchCountries";
import { GritItem } from "./GritItem";

export const GifCountry = ( {countries}) => {

    const  {dataCountry, isLoading } = useFetchCountries( countries );



  return (

    
        <div className="gridContent">
            {
            isLoading && ( <h2>Loading...</h2> )
            }
            
            {
                dataCountry?.map( ( cty )=> (
                    <GritItem 
                        key={ cty.name} 
                       // { ...cty }
                        cty = { cty }
                        />
                ))
            }
        </div>
    
  )
}
