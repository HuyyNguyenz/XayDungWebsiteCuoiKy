interface Props {
  title: string;
}

const SearchResult: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <>
      <div className="flex items-center justify-between text-14 pt-6 pb-3 mb-[0.375rem] border-b border-solid border-border-color">
        <h5 className="text-title-color uppercase font-medium">{title}</h5>
        <button className="text-text-color-2 hover:text-primary-color">
          Xem thêm
        </button>
      </div>

      <div className="flex items-center justify-start py-[0.375rem]">
        <div className="w-8 h-8">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
            alt="course_img"
          />
        </div>
        <span className="text-14 text-text-color line-clamp-2 ml-3 flex-1">
          Xây Dựng Website với ReactJS Xây Dựng Website với ReactJS Xây Dựng
          Website với ReactJS Xây Dựng Website với ReactJS Xây Dựng Website với
          ReactJS
        </span>
      </div>

      <div className="flex items-center justify-start py-[0.375rem]">
        <div className="w-8 h-8">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
            alt="course_img"
          />
        </div>
        <span className="text-14 text-text-color line-clamp-2 ml-3 flex-1">
          Xây Dựng Website với ReactJS Xây Dựng Website với ReactJS Xây Dựng
          Website với ReactJS Xây Dựng Website với ReactJS Xây Dựng Website với
          ReactJS
        </span>
      </div>

      <div className="flex items-center justify-start py-[0.375rem]">
        <div className="w-8 h-8">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
            alt="course_img"
          />
        </div>
        <span className="text-14 text-text-color line-clamp-2 ml-3 flex-1">
          Xây Dựng Website với ReactJS Xây Dựng Website với ReactJS Xây Dựng
          Website với ReactJS Xây Dựng Website với ReactJS Xây Dựng Website với
          ReactJS
        </span>
      </div>

      <div className="flex items-center justify-start py-[0.375rem]">
        <div className="w-8 h-8">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
            alt="course_img"
          />
        </div>
        <span className="text-14 text-text-color line-clamp-2 ml-3 flex-1">
          Xây Dựng Website với ReactJS Xây Dựng Website với ReactJS Xây Dựng
          Website với ReactJS Xây Dựng Website với ReactJS Xây Dựng Website với
          ReactJS
        </span>
      </div>

      <div className="flex items-center justify-start py-[0.375rem]">
        <div className="w-8 h-8">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
            alt="course_img"
          />
        </div>
        <span className="text-14 text-text-color line-clamp-2 ml-3 flex-1">
          Xây Dựng Website với ReactJS Xây Dựng Website với ReactJS Xây Dựng
          Website với ReactJS Xây Dựng Website với ReactJS Xây Dựng Website với
          ReactJS
        </span>
      </div>

      <div className="flex items-center justify-start py-[0.375rem]">
        <div className="w-8 h-8">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
            alt="course_img"
          />
        </div>
        <span className="text-14 text-text-color line-clamp-2 ml-3 flex-1">
          Xây Dựng Website với ReactJS Xây Dựng Website với ReactJS Xây Dựng
          Website với ReactJS Xây Dựng Website với ReactJS Xây Dựng Website với
          ReactJS
        </span>
      </div>
    </>
  );
};

export default SearchResult;
