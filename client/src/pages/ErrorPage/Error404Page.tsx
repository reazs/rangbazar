import { useRive, Fit, Layout, Alignment } from "rive-react";
const Error404Page = () => {
  const { RiveComponent } = useRive({
    src: "/riveAssets/404_v1.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    // artboard: "404_Land_v2",
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });
  return (
    <>
      <div className="h-[90vh] w-full">
        <RiveComponent />
      </div>
    </>
  );
};

export default Error404Page;
