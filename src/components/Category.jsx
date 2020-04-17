import { Breakpoint } from 'react-socks';
import data from '../data/category.json';

function CarouselCategory(props) {
  return (
    <div className="carousel-category">
      {props.category.map((aux, index) => {
        return (
          <button>
            <div className="btn-c">
              <img src={aux.src} alt={aux.name} />
              <p className="mt-2 text-xs uppercase">{aux.name}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

function Categorys(props) {
  return (
    <div className="category">
      <div>
        {props.category.map((aux) => {
          return <button key={aux.id}>{aux.name}</button>;
        })}
      </div>
    </div>
  );
}

const Category = () => {
  return (
    <>
      <Breakpoint medium up>
        <Categorys category={data} />
      </Breakpoint>

      <Breakpoint small down>
        <CarouselCategory category={data} />
      </Breakpoint>
    </>
  );
};
export default Category;
