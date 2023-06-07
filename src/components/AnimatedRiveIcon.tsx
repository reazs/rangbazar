import { useRive, useStateMachineInput } from "rive-react";
export interface AnimatedRiveIconInterface {
  src: string;
  stateMachines: string;
  artboard: string;
  autoplay: boolean;
}
const AnimatedRiveIcon = ({
  src,
  stateMachines,
  artboard,
  autoplay,
}: AnimatedRiveIconInterface) => {
  const { rive, RiveComponent } = useRive({
    src: src,
    stateMachines: stateMachines,
    artboard: artboard,
    autoplay: autoplay,
  });
  const iconHover = useStateMachineInput(rive, stateMachines, "active");
  function handleMouseEnter() {
    if (iconHover) {
      iconHover.value = true;
      rive?.play();
    }
  }
  const handleMouseLeave = () => {
    if (iconHover) {
      iconHover.value = false;
      rive?.pause();
    }
  };

  return (
    <>
      <div className="h-[44px] w-[44px] cursor-pointer">
        <RiveComponent
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </>
  );
};

export default AnimatedRiveIcon;
