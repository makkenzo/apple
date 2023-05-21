const HeroSmall = ({ bg, head, logo, headerLogo, textColor, textUnder, btn1, btn2 }) => {
    return (
        <section className="bg-no-repeat bg-auto bg-center" style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex flex-col items-center h-[580px]">
                {logo && <img src={logo} alt="Logo" className={`h-8 mb-2 ${textUnder ? 'mt-96' : 'mt-16'}`} />}
                {headerLogo && (
                    <h1 className={`text-${textColor} text-4xl font-semibold ${textUnder ? 'mt-96' : 'mt-16'} mb-2`}>
                        {headerLogo}
                    </h1>
                )}
                <h1
                    className={`text-${textColor} text-xl text-center`}
                    {...(head.__html ? { dangerouslySetInnerHTML: head } : null)}
                >
                    {head.__html ? null : head}
                </h1>
                <div className="flex">
                    {btn1 && (
                        <button className="text-[#2997FF] text-lg hover:underline py-2 px-4 rounded mr-4">
                            {btn1}
                        </button>
                    )}
                    {btn2 && (
                        <button className="text-[#2997FF] text-lg hover:underline py-2 px-4 rounded">{btn2}</button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroSmall;
