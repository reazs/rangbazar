import { Fit, Alignment, Layout, useRive } from "rive-react";

const PresentAnimation = () => {
  const stateMachineName = "loop";
  const { RiveComponent } = useRive({
    src: "present.riv",
    stateMachines: stateMachineName,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <div className="h-[600px] w-[600px]">
          <RiveComponent />
        </div>
      </div>
    </>
  );
};

export default PresentAnimation;
