import { Layout, useRive, Fit, Alignment } from "rive-react";
interface LoadRiveInterface {
  src: string;
  stateMachineName?: string;
  autoplay?: boolean;
}
const UtilLoadRive = ({
  src,
  stateMachineName = "State Machine 1",
  autoplay = true,
}: LoadRiveInterface) => {
  const { RiveComponent } = useRive({
    src: src,
    autoplay: autoplay,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    stateMachines: stateMachineName,
  });

  return (
    <>
      <div className="h-full w-full">
        <RiveComponent />
      </div>
    </>
  );
};

export default UtilLoadRive;
