import Button from '../components/button/Button';
import './pages.scss';

const CategoriesScreen = () => (
  <div className="screen">
    <div className="container text-center">
      <Button label="CHECK STATUS" size="big" axn={() => console.log('check status btn pressed')} />
    </div>
  </div>
);

export default CategoriesScreen;
