import Banner from './Banner';
import HotJobs from '../components/HotJobs';

const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <div className='flex justify-center mt-10'>
                <HotJobs></HotJobs>
            </div>
        </div>
    );
};

export default Home;