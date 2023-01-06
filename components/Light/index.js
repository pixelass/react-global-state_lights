import { LightButton, Icon, Text, Name, State } from "./Light.styled";
import { useAtom } from "jotai";
import { lightsAtom } from "../../store/atoms";

export default function Light({ light }) {
  const [lights, setLights] = useAtom(lightsAtom);

  function handleToggle() {
    // Map all lights
    setLights(lights.map(currentLight => {
      // When the light is the same light, we want to toggle the on-state
      if (currentLight.id === light.id) {
        return {...currentLight, isOn: !currentLight.isOn}
      }
      // Otherwise we just return the light without changes
      return currentLight;
    }))
  }

  return (
    <LightButton
      type="button"
      onClick={handleToggle}
      isOn={light.isOn}
    >
      <Icon isOn={light.isOn}>💡</Icon>
      <Text>
        <Name>{light.name}</Name>
        <State>{light.isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
