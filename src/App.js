import './App.css';
import TextComp from './Components/TextComp';
import useDevice from './hooks/useDevice';
import useMatchMedia from './hooks/useMatchMedia';

function App() {

    const media = useMatchMedia('(max-width: 600px)');
    const [isMobile, isTablet, isDesktop, isPrinting] = useDevice();

    return (
        <div className="App">
            <TextComp text='Tom' 
                      media={media} 
                      isMobile={isMobile} 
                      isTablet={isTablet} 
                      isPrinting={isPrinting} 
                      isDesktop={isDesktop} />
        </div>
    );
}

export default App;
