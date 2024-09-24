import Card from "./Card";

function Solutions() {
  return (
    <div>
      <div className="my-5 mx-16">
        <div className=" flex flex-1 justify-center items-center flex-col my-2 ">
          <h1>Business Segments</h1>
          <h4 className="text-slate-700 cursor-pointer hover:border-b-2 border-gray-500 my-1">
            Holistic approach towards health and wellness Core competencies of
            Active Pharmaceuticals Ingredient through specialized business
            verticals.
          </h4>
        </div>
        <div className="flex">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Solutions;
