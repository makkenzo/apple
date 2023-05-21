const Hero = ({ bg, head, logo }) => {
    return (
        <section className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex flex-col items-center justify-center h-screen"></div>
        </section>
    );
};

export default Hero;
