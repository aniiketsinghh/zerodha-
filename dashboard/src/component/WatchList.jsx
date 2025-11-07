import React from "react";
import { watchlist } from "../data/data";
import WatchListItem from "./WatchListItem";
import { Piechart } from "./Piechart";

const WatchList = () => {

const data = {
  labels: watchlist.map((item) => item["name"]),
  datasets: [
    {
      label: '# of Votes',
      data:watchlist.map((item) => item.price) ,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};



  return (<>
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search font-bold text-zinc-600"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((item, index) => (
          <WatchListItem item={item} key={index}/>
        ))}
          
      </ul>
      <Piechart data={data}/>
    </div>
    </>
  );
};

export default WatchList;