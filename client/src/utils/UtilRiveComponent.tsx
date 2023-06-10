import {
  Layout,
  useRive,
  Fit,
  Alignment,
  useStateMachineInput,
} from "rive-react";
import { useEffect } from "react";
interface RiveComponentInterface {
  src: string;
  stateMachineName?: string;
  artboardName: string;
  autoplay?: boolean;
  isActive: boolean;
}
const UtilRiveComponent = ({
  src,
  stateMachineName = "State Machine 1",
  artboardName,
  autoplay = true,
  isActive,
}: RiveComponentInterface) => {
  const { rive, RiveComponent } = useRive({
    src: src,
    autoplay: autoplay,
    artboard: artboardName,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
    stateMachines: stateMachineName,
  });
  const stateMachine = useStateMachineInput(rive, stateMachineName, "status");
  if (stateMachine) {
    stateMachine.value = isActive;
  }
  return (
    <>
      <div
        onClick={(e) => {
          e.preventDefault();
          if (stateMachine) {
            const temp = stateMachine.value;
            stateMachine.value = !temp;
          }
        }}
        className="h-full w-full"
      >
        <RiveComponent style={{ pointerEvents: "none" }} />
      </div>
    </>
  );
};

export default UtilRiveComponent;
