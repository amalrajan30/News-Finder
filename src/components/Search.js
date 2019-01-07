import React from "react";

export default ({ handleKeywordChange, handleSourceChange, handleInput, data }) => {
  return (
    <div className="search">
      <form>
        <div className="inputs">
          <input
            className="vals"
            type="text"
            placeholder="Enter a Keyword"
            name="kyword"
            value={data.kyword}
            onChange={handleKeywordChange}
          />
          <input
            className="vals"
            type="text"
            placeholder="Enter a Source"
            name="souce"
            value={data.souce}
            onChange={handleSourceChange}
          />
          <input
            className="vals"
            type="button"
            value="Find"
            onClick={handleInput}
          />
        </div>
      </form>
    </div>
  );
};
