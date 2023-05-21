import { BsFillPlayCircleFill } from 'react-icons/bs';

const SliderItem = ({ bg, genre, desc }) => {
    return (
        <div className="relative h-[551px] mr-3" style={{ backgroundImage: `url(${bg})` }}>
            <div className="absolute left-14 bottom-10 flex items-center">
                <button className="bg-white rounded-full font-semibold pt-2 pb-2.5 px-6 hover:opacity-80">
                    <div className="flex items-center">
                        Stream now <BsFillPlayCircleFill size={20} className="pt-0.5 ml-1" />
                    </div>
                </button>
                <h1 className="text-white pl-10 font-bold text-lg">{genre}</h1>
                <span className="text-white font-bold text-lg px-1.5">·</span>
                <p className="text-white text-lg">{desc}</p>
            </div>
        </div>
    );
};

export default SliderItem;
