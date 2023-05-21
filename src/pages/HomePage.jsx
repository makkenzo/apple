import Hero from '../components/Hero';
import Nav from '../components/Nav';

const HomePage = () => {
    return (
        <>
            <Nav />
            <div className="bg-white">
                <nav className="text-center text-sm text-[#1D1D1F] py-3">
                    <p>
                        Get $200–$630 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.
                        <sup>
                            <a href="#" className="text-[#0066CC]">
                                1
                            </a>
                        </sup>{' '}
                        <a href="#" className="text-[#0066CC]">
                            Shop iPhone
                        </a>
                    </p>
                </nav>
            </div>
            <Hero />
        </>
    );
};

export default HomePage;
