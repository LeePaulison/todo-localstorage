import { useMatches, NavLink } from "react-router-dom";

export const Navigation = () => {
  let matches = useMatches();

  return (
    <div className='flex flex-row self-start p-4 w-full'>
      {matches.map((match, idx) => {
        return (
          <div key={idx} className='flex flex-row items-center'>
            <NavLink to={match.pathname} className='font-lg font-bold'>
              {match.handle.crumbs}
            </NavLink>
            {idx < matches.length - 1 && <span className='font-lg font-bold'>/</span>}
          </div>
        );
      })}
      <NavLink to='/about' className='font-lg font-bold ms-auto'>
        About
      </NavLink>
    </div>
  );
};
