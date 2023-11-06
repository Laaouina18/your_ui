import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getCategory } from '../api/api';

const CategoriesSession = () => {
  const { sessions } = useParams();
  const dataApi = getCategory(sessions);

  const styleNav = ({ active }) => {
    return {
      border: active ? '2px solid #5F9EA0' : '2px solid black',
      color: active ? '#5F9EA0' : 'gray',
    };
  };

  return (
    <div>
      {dataApi ? (
     <div>
          <h2>{dataApi.name}</h2>
          <div className="div-as-button">
            {dataApi.sessions.map((session) => (
              <NavLink
                to={session.id}
                style={styleNav}
                className='button-session'
                key={session.id}
              >
                <p className="bold-size">{session.name}</p>
                <p>{session.id}</p>
              </NavLink>
            ))}
          </div>
		  </div>
    
      ) : (
        <p>...</p>
      )}
      <Outlet />
    </div>
  );
};
export  default CategoriesSession;
