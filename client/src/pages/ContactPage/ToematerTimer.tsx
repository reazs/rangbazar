import {
  Fit,
  Alignment,
  Layout,
  useRive,
  useStateMachineInput,
  StateMachineInput,
} from "rive-react";
import { useEffect } from "react";
const ToematerTimer = () => {
  const stateMachineName = "State Machine 1";
  const { rive, RiveComponent } = useRive({
    src: "./toemater_timer.riv",
    stateMachines: stateMachineName,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });
  const ToematerController = useStateMachineInput(
    rive,
    stateMachineName,
    "break"
  ) as StateMachineInput;
  const hoverEffect = () => {
    if (ToematerController) {
      ToematerController.value = true;
    }
  };
  const handleMouseOnLeave = () => {
    if (ToematerController) {
      ToematerController.value = false;
    }
  };
  useEffect(() => {
    const submitBtn = document.getElementById("submit-btn");
    if (submitBtn) {
      submitBtn.addEventListener("mouseenter", hoverEffect);
      submitBtn.addEventListener("mouseleave", handleMouseOnLeave);
    }
    return () => {
      submitBtn?.removeEventListener("mouseenter", hoverEffect);
    };
  });

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <div className="lg:h-[950px] w-[500px]">
          <RiveComponent />
        </div>
      </div>
    </>
  );
};

export default ToematerTimer;
