import bannerPic from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({ date, setDate }) => {
    let footer;
    if (date) {
        footer = <p className='mt-3 ml-3 font-semibold text-blue-700'>You have picked {format(date, 'PP')}</p>;
    }

    return (
        <div>
            <div className="hero min-h-full xl:py-16 2xl:py-24 bg-[url('/src/assets/images/bg.png')] bg-center bg-no-repeat bg-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerPic} className="max-w-xs md:max-w-2xl rounded-lg shadow-2xl" alt="" />
                    <div className='2xl:mr-10 border rounded-xl shadow-lg'>
                        <DayPicker
                            className='flex justify-center items-center 2xl:w-[600px] 2xl:h-[455px] bg-white xl:bg-transparent p-2 rounded-xl'
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            footer={footer}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;