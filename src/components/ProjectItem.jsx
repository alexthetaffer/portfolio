
const projectItem = (props) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <img className=" group-hover:opacity-10" src={props.img} alt="" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {props.title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{props.desc}</p>
        <div className="flex gap-4 justify-center">
          <a href={props.demo} target="_blank">
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg w-[100px] hover:bg-gray-100">
              Demo
            </p>
          </a>
          <a href={props.github} target="_blank">
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg w-[100px] hover:bg-gray-100">
              Code
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default projectItem;