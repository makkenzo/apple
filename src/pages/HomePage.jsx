import Hero from '../components/Hero';
import Nav from '../components/Nav';
import HeroSmall from '../components/HeroSmall';

import bg1 from '../assets/iPhone14ProHero.png';
import bg2 from '../assets/iPhone14Hero.png';
import bg3 from '../assets/WatchSeries8Hero.png';

import grid1 from '../assets/iphone_tradein_promo__d5au3rkw5kuq_large.jpg';
import grid2 from '../assets/promo_wwdc23__b68ptht3mro2_large.jpg';
import grid3 from '../assets/promo_ipad__fioegapg12qi_large.jpg';
import grid4 from '../assets/promo_mbp__ek7p477bkp6q_large.jpg';
import grid5 from '../assets/promo_homepod__f7jnolq94m2y_large.jpg';
import grid6 from '../assets/tile__cauwwcyyn9hy_large.jpg';

import watch8 from '../assets/watch8.png';
import tradeInLogo from '../assets/logo_tradein__d1fpktgipvki_large.png';
import wwdcLogo from '../assets/promo_logo_wwdc23__gcsmmrgbhlme_large.png';
import iCard from '../assets/logo__dcojfwkzna2q_large.png';
import Carousel from '../components/Carousel';

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

            <Hero bg={bg1} head="Pro. Beyond." headerLogo="iPhone 14 Pro" textColor="white" />
            <Hero bg={bg2} head="Wonderfull." headerLogo="iPhone 14" textColor="black" />
            <Hero bg={bg3} head="A healthy leap ahead." logo={watch8} textColor="white" />

            <div className="grid grid-cols-2 grid-rows-3 gap-4 mt-4">
                <HeroSmall
                    bg={grid1}
                    head="Upgrade and save. It's that easy."
                    logo={tradeInLogo}
                    textColor="black"
                    btn1="See what your device is worth"
                />
                <HeroSmall
                    bg={grid2}
                    head={{ __html: 'Apple Worldwide Developers Conference.<br />Join us online June 5-9.' }}
                    logo={wwdcLogo}
                    textColor="white"
                    btn1="Learn more"
                    textUnder
                />
                <HeroSmall
                    bg={grid3}
                    head="Lovable. Drawable. Magical."
                    headerLogo="iPad"
                    textColor="black"
                    btn1="Learn more"
                    btn2="Buy"
                />
                <HeroSmall
                    bg={grid4}
                    head="Supercharged by M2 Pro and M2 Max."
                    headerLogo="MacBook Pro"
                    textColor="white"
                    btn1="Learn more"
                    btn2="Buy"
                />
                <HeroSmall
                    bg={grid5}
                    head="Profound sound."
                    headerLogo="Homepod"
                    textColor="white"
                    btn1="Learn more"
                    btn2="Buy"
                />
                <HeroSmall
                    bg={grid6}
                    head={{ __html: 'Get up to 3% Daily Cash back.<br />with every purchase' }}
                    logo={iCard}
                    textColor="black"
                    btn1="Learn more"
                    btn2="Apply now"
                />
            </div>

            <Carousel />
        </>
    );
};

export default HomePage;
