import {
  useRive,
  Layout,
  Fit,
  Alignment,
  useStateMachineInput,
} from "rive-react";
const RiveAddAnimatedBtn = ({
  src = "add-animated-btn.riv",
}: {
  src?: string;
}) => {
  const { rive, RiveComponent } = useRive({
    src: src,
    stateMachines: "add to cart",
    artboard: "New Artboard",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
    onStateChange: (e) => {
      if (e) {
        const l = e.data as [];
        const state = l.toString();
        console.log(state);
        // if (state == "idle in click res") {
        // TODO send them to buy page or something related idk
        // }
      }
    },
  });

  return (
    <>
      <div className="h-full w-full  cursor-pointer">
        <RiveComponent />
      </div>
    </>
  );
};

export default RiveAddAnimatedBtn;
