import { useDispatch, useSelector } from 'react-redux';
import { checking } from '../redux/categories/categories';
import Button from '../components/button/Button';
import './pages.scss';

const CategoriesScreen = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const newstate = useSelector((state) => state);

  // const categories = '...';

  console.log(newstate);

  return (
    <div className="screen">
      <div className="container text-center">
        <div className="fieldEmpty">{categories}</div>
        <Button label="CHECK STATUS" size="big" axn={() => dispatch(checking('Under construction'))} />
      </div>
    </div>
  );
};

export default CategoriesScreen;
