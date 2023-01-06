import { useAtom } from "jotai";

import Link from "../components/Link";
import { lightsAtom } from "../store/atoms";

export default function HomePage() {
  const [lights] = useAtom(lightsAtom);
  // Get the number of lights, that are on
  const allActiveLights = lights.filter(light => light.isOn).length;

  return (
    <div>
      <h1>Home</h1>
      <p>{allActiveLights} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
