import {useLocation} from 'react-router-dom';

function WIP() {
  const currentTab = useLocation().pathname.replace(/^\/+|\/+$/g, '');

  return (
    <div className="text-2xl font-bold">this page (<span className="italic">{currentTab}</span>) is
      currently under construction :D</div>
  );
}

export default WIP;