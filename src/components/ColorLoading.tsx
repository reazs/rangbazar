import loadingLottieData from "../../public/colors-loading.json"
import Lottie from "lottie-react"
const ColorLoading = () => {
  return (
    <div className="h-[85vh] w-full flex flex-row justify-center items-center ">
      <div className=" scale-50">
        <Lottie
          height={"200px"}
          animationData={loadingLottieData}
          autoplay={true}
          loop={true}
        />
      </div>
    </div>
  );
};

export default ColorLoading