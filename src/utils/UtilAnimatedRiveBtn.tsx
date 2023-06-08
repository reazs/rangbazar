import { useRive, Fit, Layout, Alignment } from "rive-react";

export interface AnimatedRiveBtnInterface {
  src: string;
  stateMachineName?: string;
  autoplay?: true;
}
const UtilAnimatedRiveBtn = ({
  src,
  stateMachineName = "State Machine 1",
  autoplay = true,
}: AnimatedRiveBtnInterface) => {
  const { RiveComponent } = useRive({
    src: src,
    stateMachines: stateMachineName,

    autoplay: autoplay,
    layout: new Layout({
      alignment: Alignment.Center,
      fit: Fit.Contain,
    }),
  });
  return (
    <>
      <div className="h-full w-full cursor-pointer">
        <RiveComponent />
      </div>
    </>
  );
};

export default UtilAnimatedRiveBtn;
