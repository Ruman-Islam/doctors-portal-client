import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Spinner from '../components/Common/Spinner';
import auth from '../Firebase/FirebaseConfig';

const MyAppointments = () => {
    const [user, ,] = useAuthState(auth);

    const { data, isLoading } = useQuery(['my-bookings', user?.email], () =>
        fetch(`http://localhost:5000/my-bookings?email=${user?.email}`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div class="overflow-x-auto mt-10 xl:mt-0">
            <table class="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((appointment, index) =>
                        <tr key={index}>
                            <th>{appointment.patientName}</th>
                            <td>{appointment.date}</td>
                            <td>{appointment.slot}</td>
                            <td>{appointment.treatment}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointments;