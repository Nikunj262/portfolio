import './assets/css/app.css';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';


function App() {
  return (
    <main>
         
        <SideBar 
          name='Richard Gilfoyle' 
          position='Web Developer' 
          email='piedpiperAviato@gmail.com' 
          phone='(+1) 123 456789' 
          birthday='February 30, 2000' 
          location='Kitchener, Canada' 
        />
        <MainContent /> 

    </main>
  );
}

export default App;
