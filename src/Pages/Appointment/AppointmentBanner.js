import bannerPic from '../../assets/images/chair.png';
// import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {
    // let footer = <p className='mt-3 ml-3 font-semibold text-blue-700'>Please pick a day.</p>;
    // if (date) {
    //     footer = <p className='mt-3 ml-3 font-semibold text-blue-700'>You have picked {format(date, 'PP')}</p>;
    // }

    return (
        <div>
            <div className="hero min-h-full 2xl:py-36 bg-[url('/src/assets/images/bg.png')] bg-center bg-no-repeat bg-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerPic} className="max-w-xs md:max-w-3xl rounded-lg shadow-2xl" alt="" />
                    <div className='2xl:mr-10 bg-white border rounded-lg shadow-lg '>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        // footer={footer}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;