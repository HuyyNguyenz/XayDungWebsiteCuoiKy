import htmlCssCourse from "../../assets/images/free_course.png";
import { Course } from "../../interface";
import { root } from "../../utils";

interface Props {
  course: Course;
}

const CoursePreview: React.FC<Props> = (props) => {
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
    <div className="flex flex-col items-center justify-start border-2 border-solid border-border-color rounded-2xl my-4 p-4 md:p-6 md:flex-row">
      <div className="w-full md:w-[14.25rem]">
        <img
          className="w-full rounded-2xl"
          src={`${root}/users/image/${course.image}`}
          alt={course.name}
        />
      </div>
      <div className="flex-1 mt-2 md:ml-6 md:mt-0">
        <h2 className="text-18 text-title-color font-bold">{course.name}</h2>
        <div className="text-16 text-primary-color font-semibold">
          {Number(course.price) > 0 ? (
            <>
              <span className="text-14 text-text-color font-normal line-through mr-2">
                {price}
              </span>
              <span className="text-16 text-primary-color">{priceSale}</span>
            </>
          ) : (
            "Miễn phí"
          )}
        </div>
        <p className="text-14 text-text-color my-2 line-clamp-2">
          {course.description}
        </p>
        <button className="w-full md:max-w-[8.5rem] text-14 text-white bg-primary-color rounded-full px-4 py-2 font-semibold hover:opacity-90">
          Xem khoá học
        </button>
      </div>
    </div>
  );
};

export default CoursePreview;
