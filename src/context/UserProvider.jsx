import { useState } from "react"
import { CountryStatusInfo } from "./CountryStatusInfo"

export const UserProvider = ( { children }) => {

const [statusClick, setStatusClick] = useState( {
  status:false,
  countryInfo: {},
  search:''
} );



  return (
    <CountryStatusInfo.Provider value={ {statusClick, setStatusClick} }>
      { children }
    </CountryStatusInfo.Provider>
  )
}
