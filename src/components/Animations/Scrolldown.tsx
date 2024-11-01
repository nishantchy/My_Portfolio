import { useLottie } from "lottie-react";
import ScrollDownAnimation from "../../lottie/scrolldown.json";
export default function ScrollDown() {
  const options = {
    animationData: ScrollDownAnimation,
    loop: true,
  };
  const { View } = useLottie(options);
  return <div className="pt-[100px] max-w-[100px] w-full mx-auto">{View}</div>;
}
