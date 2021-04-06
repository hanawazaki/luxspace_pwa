import Logo from '../images/content/logo.png';

function Splash() {
    return (
        <div className="container mx-auto min-h-screen">
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="w-ful md:w-4/12 text-center">
                    <img src={Logo} alt="luxSpace" className="mx-auto mb-8" />
                    <p className="mb-16 px-4">
                        Kami menyediakan furniture berkelas yang membuat ruangan terasa homey
                </p>
                </div>
            </div>
        </div>
    )
}
export default Splash;