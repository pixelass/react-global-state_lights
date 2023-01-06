import styled from "styled-components";
import Button from "../Button";
import { useAtom } from "jotai";
import { lightsAtom } from "../../store/atoms";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions() {
  const [lights, setLights] = useAtom(lightsAtom);


  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          // Map all lights
          setLights(lights.map(currentLight => {
            // Turn all lights off (explicit)
            return {...currentLight, isOn: false}

          }))
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          // Map all lights
          setLights(lights.map(currentLight => {
            // Turn all lights on (explicit)
            return {...currentLight, isOn: true}

          }))
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
