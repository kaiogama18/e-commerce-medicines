import { Breakpoint } from 'react-socks';

function Categorys(props) {
  return (
    <>
      <Breakpoint large up className="bg-default">
        <div className="categorys">
          {props.category.map((aux) => {
            return (
              <button className="btn-categorys" key={aux.id}>
                {aux.name}
              </button>
            );
          })}
        </div>
      </Breakpoint>
      <Breakpoint small down className="flex overflow-hidden my-5">
        {props.category.map((aux) => {
          return (
            <button className="btn-categorys" key={aux.id}>
              <div className="btn-img">
                <img src={aux.src} alt={aux.name} />
              </div>
              <p className="mt-2 text-xs uppercase">{aux.name}</p>
            </button>
          );
        })}
      </Breakpoint>
    </>
  );
}

const Category = () => {
  const data = [
    {
      id: '001',
      name: 'Suplemento',
      src: '/suplementos.png',
    },
    {
      id: '002',
      name: 'Vitaminas',
      src: '/suplementos.png',
    },
    {
      id: '003',
      name: 'Hidratante',
      src: '/suplementos.png',
    },
    {
      id: '004',
      name: 'Pediatria',
      src: '/suplementos.png',
    },
    {
      id: '005',
      name: 'Pediatria',
      src: '/suplementos.png',
    },
    {
      id: '006',
      name: 'Pediatria',
      src: '/suplementos.png',
    },
  ];
  return <Categorys category={data} />;
  // return (
  //   <section className="flex items-center justify-center overflow-hidden ">
  //     <Categorys category={data} />
  //   </section>
  // );
};
export default Category;
