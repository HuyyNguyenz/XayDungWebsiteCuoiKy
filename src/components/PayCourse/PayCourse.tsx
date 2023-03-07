import { Course } from "../../interface";
import { root } from "../../utils";

interface Props {
  course: Course;
}

const PayCourse: React.FC<Props> = (props) => {
  const { course } = props;

  const price: string = new Intl.NumberFormat("vi-vn", {
    style: "currency",
    currency: "VND",
  }).format(Number(course.price));

  const priceSale: string = new Intl.NumberFormat("vi-vn", {
    style: "currency",
    currency: "VND",
  }).format(Number(course.price_sale));

  return (
    <div className="w-[60vw] mr-4 mb-4 flex-shrink-0 md:w-full md:flex-shrink-0 md:mb-0 md:mr-0">
      <div className="group relative top-0 left-0 cursor-pointer select-none">
        <div className="w-full">
          <img
            className="w-full h-full rounded-2xl object-cover"
            src={`${root}/users/image/${course.image}`}
            alt={course.name}
          />
        </div>
        <div className="absolute top-3 left-3 w-8 p-2 rounded-lg bg-[rgba(0,0,0,.3)]">
          <img
            className="w-full h-full object-cover"
            src="https://fullstack.edu.vn/static/media/crown_icon.3e4800f7485935ab6ea312a7080a85fe.svg"
            alt="crown_img"
          />
        </div>
        <div className="overlay absolute w-full h-full rounded-2xl group-hover:opacity-100 opacity-0"></div>
        <button className="center_item text-14 font-semibold text-text-color py-2 px-4 rounded-full bg-white z-20 animate-bottom-up group-hover:inline-block hidden whitespace-nowrap">
          Xem khoá học
        </button>
      </div>
      <h3 className="text-16 text-text-color font-semibold my-2 cursor-pointer select-none line-clamp-1">
        {course.name}
      </h3>
      <div className="flex items-center justify-start">
        <span className="text-14 text-text-color line-through mr-2">
          {price}
        </span>
        <span className="text-16 text-primary-color font-semibold">
          {priceSale}
        </span>
      </div>
    </div>
  );
};

export default PayCourse;
