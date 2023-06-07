import AnimatedRiveIcon from "../components/AnimatedRiveIcon";
class UtilAnimatedIcons {
  static Timer = () => {
    return (
      <>
        <AnimatedRiveIcon
          stateMachines="TIMER_Interactivity"
          src="animated_icons.riv"
          autoplay={true}
          artboard="TIMER"
        />
      </>
    );
  };

  static Search = () => {
    return (
      <>
        <AnimatedRiveIcon
          stateMachines="SEARCH_Interactivity"
          src="animated_icons.riv"
          autoplay={true}
          artboard="SEARCH"
        />
      </>
    );
  };
  static Home = () => {
    return (
      <>
        <AnimatedRiveIcon
          stateMachines="HOME_Interactivity"
          src="animated_icons.riv"
          autoplay={true}
          artboard="HOME"
        />
      </>
    );
  };
  static Bell = () => {
    return (
      <>
        <AnimatedRiveIcon
          stateMachines="BELL_Interactivity"
          src="animated_icons.riv"
          autoplay={true}
          artboard="BELL"
        />
      </>
    );
  };
  static Setting = () => {
    return (
      <>
        <AnimatedRiveIcon
          stateMachines="SETTINGS_Interactivity"
          src="animated_icons.riv"
          autoplay={true}
          artboard="SETTINGS"
        />
      </>
    );
  };
  static Audio = () => {
    return (
      <>
        <AnimatedRiveIcon
          stateMachines="AUDIO_Interactivity"
          src="animated_icons.riv"
          autoplay={true}
          artboard="AUDIO"
        />
      </>
    );
  };

  static User = () => {
    return (
      <>
        <AnimatedRiveIcon
          stateMachines="USER_Interactivity"
          src="animated_icons.riv"
          autoplay={true}
          artboard="USER"
        />
      </>
    );
  };
  static Refreh = () => {
    return (
      <>
        <AnimatedRiveIcon
          stateMachines="RELOAD_Interactivity"
          src="animated_icons.riv"
          autoplay={true}
          artboard="REFRESH/RELOAD"
        />
      </>
    );
  };
  static Chat = () => {
    return (
      <>
        <AnimatedRiveIcon
          stateMachines="CHAT_Interactivity"
          src="animated_icons.riv"
          autoplay={true}
          artboard="CHAT"
        />
      </>
    );
  };
  static Star = () => {
    return (
      <>
        <AnimatedRiveIcon
          stateMachines="STAR_Interactivity"
          src="animated_icons.riv"
          autoplay={true}
          artboard="LIKE/STAR"
        />
      </>
    );
  };
}
export default UtilAnimatedIcons;
