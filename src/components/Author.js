import React, { useState, useEffect } from "react";

function AuthorList(props) {
  const [searchterm, setSearchTerm] = useState("");
  const [authorsList, setAuthorsList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const handleOnSearchTerm = (e) => {
    const { value } = e.target;
    if (!value) setFilteredList(authorsList);
    setSearchTerm(value);
    const filteredList = authorsList.filter(({ author }) =>
      author.toLowerCase().includes(searchterm.toLocaleLowerCase())
    );
    setFilteredList(filteredList);
  };
  const fetchAuthorData = () => {
    return fetch("https://picsum.photos/v2/list");
  };

  useEffect(() => {
    fetchAuthorData()
      .then((res) => res.json())
      .then((response) => {
        setAuthorsList(response);
        setFilteredList(response);
      });
  }, []);

  return (
    <div className="App">
      <h2>Author List</h2>
      <input value={searchterm} onChange={handleOnSearchTerm}></input>
      <div>
        {filteredList.map(({ id, author }) => {
          return <div key={id}>{author}</div>;
        })}
      </div>
    </div>
  );
}
export default AuthorList;
