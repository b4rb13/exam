import React from "react";
import {Link} from 'react-router-dom'

const LinksList = ({ links }) => {
  if(!links.length) {
    return <p className="center">No links</p>
  }
  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Original</th>
          <th>Short</th>
          <th>Open</th>
        </tr>
      </thead>

      <tbody>
      {links.map(({from, to, _id}, idx) => (
        <tr key={_id}>
          <td>{idx + 1}</td>
          <td>{from}</td>
          <td>{to}</td>
          <td>
            <Link to={`/detail/${_id}`}>Open</Link>
          </td>

        </tr>
      ))}

      </tbody>
    </table>
  );
};

export default LinksList;
