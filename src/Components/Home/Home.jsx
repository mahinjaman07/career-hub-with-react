import Banner from '../Banner/Banner';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import JobCategories from '../JobCategories/JobCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategories></JobCategories>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;