import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";

const Error = () => {
    return (
        <div className='flex flex-col min-h-screen bg-main-black text-main-white app-container'>
            <Header/>
            <div className='grow flex flex-col items-center justify-center uppercase text-4xl'>
                Oops something went wrong🤔.
            </div>
            <Footer/>
        </div>
    );
};

export default Error;