import Hero from '../components/Hero';
import Nav from '../components/Nav';

import bg1 from '../assets/iPhone14ProHero.png';
import bg2 from '../assets/iPhone14Hero.png';
import bg3 from '../assets/WatchSeries8Hero.png';

import watch8 from '../assets/watch8.png';

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

            <Hero bg={bg1} head="Pro. Beyond." headerLogo="iPhone 14 Pro" textColor="white" textPlace="over" />
            <Hero bg={bg2} head="Wonderfull." headerLogo="iPhone 14" textColor="black" textPlace="over" />
            <Hero bg={bg3} head="A healthy leap ahead." logo={watch8} textColor="white" textPlace="over" />
        </>
    );
};

export default HomePage;
