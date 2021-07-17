import React, { useEffect, useState } from "react";
import axios from "axios";

function Favorite(props) {
  const [FavoriteNumber, setFavoriteNumber] = useState(0);
  const [Favorited, setFavorited] = useState(false);

  const variable = {
    userFrom: props.userFrom,
    gameTitle: props.gameTitle
  };

  useEffect(() => {
    axios.post("/api/favorite/favoriteNumber", variable).then((response) => {
      if (response.data.success) {
        console.log(response.data.favoriteNumber);
        setFavoriteNumber(response.data.favoriteNumber);
      } else {
        alert("Failed to get favoriteNumber");
      }
    });

    axios.post("/api/favorite/favorited", variable).then((response) => {
      if (response.data.success) {
        setFavorited(response.data.favorited);
      } else {
        alert("Failed to get Favorite Info");
      }
    });
  }, []);

  const onClickFavorite = () => {
    if (Favorited) {
      axios
        .post("/api/favorite/removeFromFavorite", variable)
        .then((response) => {
          if (response.data.success) {
            setFavoriteNumber(FavoriteNumber - 1);
            setFavorited(!Favorited);
          } else {
            alert(" Failed to remove from favorite");
          }
        });

        axios.post("/api/user/removeFromFavorite", variable)
        .then((response) => {
          if (response.data.success) {
            console.log("removed game from user's favorite");
          } else {
            alert("Failed to remove from user's favorite"); 
          }
        })
    } else {
      axios.post("/api/favorite/addToFavorite", variable).then((response) => {
        if (response.data.success) {
          setFavoriteNumber(FavoriteNumber + 1);
          setFavorited(!Favorited);
        } else {
          alert(" Failed to add to Favirotes");
        }
      });

      axios.post("/api/user/addToFavorite", variable).then((response) => {
        if (response.data.success) {
          console.log("added game to user's favorite");
        } else {
          alert("Failed to add to user's favorite");
        }
      });
    }
  };

  return (
    <div>
      <button onClick={onClickFavorite}>
        {Favorited ? " Remove from Favorite " : " Add to Favorite"}
        {FavoriteNumber}
      </button>
    </div>
  );
}

export default Favorite;
