
export const ItemCardCountry = ( {data , title}  ) => {
    
if( typeof data != 'object' ) {
    data = {
        dato: data
    }
}

    return (
    <> 
        {
            data  ? 
            <div className="info-text" >
                 <p className="cart-Info-title">{ title }:</p>
                    {Object.values(data)?.map(( item )=>  <span key={item?.common || item.name || item}>  {item?.common || item.name || item}  </span> )}
            </div>
            :
             <></>
        }
    
    </>
  )
}

