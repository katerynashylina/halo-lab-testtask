import { Cave } from "../Cave/Cave";
import { Drone } from "../Drone/Drone";

type Props = {
  caveData: string[],
}

export const GameField: React.FC<Props> = ({ caveData }) => {
  return (
    <div className="field">
      {/* <Drone /> */}
      <Cave caveData={caveData} />
    </div>
  );
}