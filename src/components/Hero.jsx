const Hero = ({ bg, head, logo, headerLogo, textColor }) => {
    return (
        <section className="bg-no-repeat bg-auto bg-center" style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex flex-col items-center h-[700px]">
                {logo && <img src={logo} alt="Logo" className="h-20 mb-4 mt-20" />}
                {headerLogo && <h1 className={`text-${textColor} text-6xl font-semibold mt-16 mb-2`}>{headerLogo}</h1>}
                <h1 className={`text-${textColor} text-3xl mb-1`}>{head}</h1>
                <div className="flex">
                    <button className="text-[#2997FF] text-2xl hover:underline py-2 px-4 rounded mr-4">
                        Learn more
                    </button>

                    <button className="text-[#2997FF] text-2xl hover:underline py-2 px-4 rounded">Buy</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
