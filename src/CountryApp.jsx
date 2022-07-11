import useLocalStorage from 'use-local-storage'
import { UserProvider } from "./context/userProvider";
import { MainApp } from "./routes/MainApp";
import icon_darkMode from './assets/icons/icon_darkMode.svg'



export const CountryApp = () => {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)

  }


  return (
    <UserProvider>
      <div className="contentApp" data-theme={theme}>
          <div className="contentHeaderApp">
              <p> Where in the world?</p>

              
              <div onClick={ switchTheme } className='content_toggle' >
                <span className='content_toggle-icon'>
                  <img src={icon_darkMode} className="icon-darkMode" alt="icon-darkMode" />
                </span>
                  <p className='content_toggle-text'> Dark Mode </p>
              </div>
              
          </div>
     
          <MainApp />
      </div>
  
    </UserProvider>
  )
}
