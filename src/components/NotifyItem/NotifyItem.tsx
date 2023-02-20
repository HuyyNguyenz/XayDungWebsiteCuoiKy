interface Props {
  image: string;
  content: string;
  time: string;
}

const NotifyItem: React.FC<Props> = (props) => {
  const { image, content, time } = props;
  return (
    <div className="flex items-center justify-start py-2 px-5">
      <div className="w-10 h-10 object-cover">
        <img
          className="w-full h-full rounded-full"
          src={image}
          alt="image_user"
        />
      </div>
      <div className="max-w-[18.75rem] flex-1 ml-4">
        <p className="text-14 text-text-color">{content}</p>
        <span className="text-13 text-primary-color">{time}</span>
      </div>
    </div>
  );
};

export default NotifyItem;
