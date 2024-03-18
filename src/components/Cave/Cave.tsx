import { useAppSelector } from '../../app/hooks';
import './Cave.scss';

type Props = {
  caveData: string[],
}

export const Cave: React.FC<Props> = ({ caveData }) => {

  const coordinates = caveData.map(point => {
    const [x, y] = point.split(',');
    const xToReturn = parseFloat(x);
    const yToReturn = parseFloat(y);
    return `${xToReturn},${yToReturn}`;
  });

  const pointsString = coordinates.join(' ');

  const [minX, minY] = coordinates.reduce((acc, cur) => {
    const [x, y] = cur.split(',');
    return [Math.min(acc[0], parseFloat(x)), Math.min(acc[1], parseFloat(y))];
  }, [Infinity, Infinity]);

  const [maxX, maxY] = coordinates.reduce((acc, cur) => {
    const [x, y] = cur.split(',');
    return [Math.max(acc[0], parseFloat(x)), Math.max(acc[1], parseFloat(y))];
  }, [-Infinity, -Infinity]);

  const width = maxX - minX;
  const height = maxY - minY;

  const viewBox = `${minX - 10} ${minY - 10} ${width + 20} ${height + 20}`;

  console.log(caveData)

  return (
    <div className="cave">
      <svg height="100%" width="100%" viewBox={viewBox} className='cave__svg'>
      <polyline points={pointsString} style={{ fill: "none", stroke: "white", strokeWidth: 10 }} />
    </svg>
    </div>
  );
};
