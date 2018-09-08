import React from 'react';

const IndividualEmployee = (employee) => {
  const imageUrl = employee.employee.avatar;
  console.log(imageUrl);
  return (
    <tr>
    <td>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{employee.employee.firstName} {employee.employee.lastName}</div>
          {employee.employee.bio}
        </div>
      </div>
    </td>
    </tr>
  );
};

export default IndividualEmployee;
