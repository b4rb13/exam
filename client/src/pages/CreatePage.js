import React, { useState, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

const CreatePage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [link, setLink] = useState("");
  const pressHandler = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await request(
          "/api/link/generate",
          "POST",
          {
            from: link,
          },
          {
            Authorization: `Bearer ${auth.token}`,
          }
        );
        history.push(`/detail/${data.link._id}`);
      } catch (e) {}
    }
  };
  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{ paddingTop: "2rem" }}>
        <div className="input-field">
          <input
            id="link"
            type="text"
            onChange={(e) => setLink(e.target.value)}
            onKeyPress={pressHandler}
            value={link}
          />
          <label htmlFor="link" className="black-text">
            Enter Link
          </label>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
