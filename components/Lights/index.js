import { useAtom } from "jotai";
import styled from "styled-components";

import { lightsAtom } from "../../store/atoms";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights() {
  // Use the atom to get the global state of the lights
  const [lights] = useAtom(lightsAtom);

  return (
    <StyledLights>
      {lights.map(light => {
        // Pass the entire light information int each light
        // This allows us to add additional information to our lights without
        // ever having to change the code here.
        return (
          <li key={light.id}>
            <Light light={light} />
          </li>
        );
      })}
    </StyledLights>
  );
}
