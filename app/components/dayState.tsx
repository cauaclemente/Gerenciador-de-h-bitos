
import { IoMdCheckmark } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import { TiDelete } from "react-icons/ti";

const DayState = ({ day }: { day: boolean | undefined }) => {

  const renderIcon = () => {
    if (day === true) return <IoMdCheckmark color="#00ff9d" size={20} className="md:size-6"/>;
    if (day === false) return <TiDelete color="red" size={20} className="md:size-6" />;
    return <TbPointFilled color="#abbbd2" size={20} className="md:size-6"  />;
  };

  return (
    <div className="flex justify-center items-center h-9">
      {renderIcon()}
    </div>
  );
};

export default DayState;

