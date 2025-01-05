import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Add useSelector
import { itemsActions } from "../store/ItemSlice"; 
import { fetchaction } from "../store/FetchStatus";
const FetchItem = () => {
  const [isdata, setdata] = useState([]);
  const dispatch = useDispatch();
  // Access fetchStatus from the Redux store
  const fetchStatus = useSelector((state) => state.fetchstates);
  // Sequentially fetch all data
  const fetchDataSequentially = async () => {
    try {
      dispatch(fetchaction.markfetching()); // Start fetching status
      const recommendationResponse = await fetch(
        'https://spotify-scraper2.p.rapidapi.com/new_releases?limit=10&country=US&offset=0',
         {
           method: 'GET',
           headers: {
             'x-rapidapi-key': 'c6bf496fcemsh20abd564c26e2d6p17c27cjsn0e09c190e673',
             'x-rapidapi-host': 'spotify-scraper2.p.rapidapi.com',
           },
         }
       );
       const recommendationData = await recommendationResponse.json();
       console.log("Recommendations:", recommendationData);
      // Fetch playlist data
      const playlistResponse = await fetch(
        'https://spotify-scraper.p.rapidapi.com/v1/playlist/contents?playlistId=5782GLkrpvN8zbJQRjMaSW',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '564e4e0d37mshac9767d1ee0a2abp1e1c03jsncc5fb6fd5a9f',
            'x-rapidapi-host': 'spotify-scraper.p.rapidapi.com'
          }
        }
      );
      const playlistData = await playlistResponse.json();
      //console.log("Playlist:", playlistData);
      dispatch(itemsActions.addInitialItemsplaylist(playlistData));
      // Fetch artist data
      const artistResponse = await fetch(
        'https://spotify-scraper.p.rapidapi.com/v1/artist/overview?artistId=6eUKZXaKkcviH0Ku9w2n3V',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '564e4e0d37mshac9767d1ee0a2abp1e1c03jsncc5fb6fd5a9f',
            'x-rapidapi-host': 'spotify-scraper.p.rapidapi.com',
          },
        }
      );
      const artistData = await artistResponse.json();
      console.log("Artist:", artistData);
      dispatch(itemsActions.addInitialItemsartist(artistData));
      // Fetch album data
      const albumResponse = await fetch(
        'https://spotify-scraper.p.rapidapi.com/v1/album/metadata?albumId=5Otajf16kZ0zkVZWhu7LtO',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '564e4e0d37mshac9767d1ee0a2abp1e1c03jsncc5fb6fd5a9f',
            'x-rapidapi-host': 'spotify-scraper.p.rapidapi.com'
          }
        }
      );
      const albumData = await albumResponse.json();
      console.log("Album:", albumData);
      dispatch(itemsActions.addInitialItemsalbume(albumData));
      // Fetch podcast data
      const podcastResponse = await fetch(
        'https://spotify-scraper.p.rapidapi.com/v1/podcast/metadata?showId=4oTBzqC3DHbaKNFq2YXpQw',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '564e4e0d37mshac9767d1ee0a2abp1e1c03jsncc5fb6fd5a9f',
            'x-rapidapi-host': 'spotify-scraper.p.rapidapi.com',
          },
        }
      );
      const podcastData = await podcastResponse.json();
      console.log("Podcast:", podcastData);
      dispatch(itemsActions.addInitialItemspodcast(podcastData));
      // Fetch recommendations

      dispatch(itemsActions.addInitialrecomendation(recommendationData));
      dispatch(fetchaction.markfetchDone()); // Mark fetch as done
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch(fetchaction.markfetchingfinished()); // Mark fetch finished in case of error
    }
  };
  useEffect(() => {
    fetchDataSequentially();
  }, []);
  return (
    <div>
      {/* <h1>Fetch Data</h1>
      <p>
        Fetching status:{" "}
        {fetchStatus.currentlyfetching
          ? "Loading..."
          : fetchStatus.fetchDone
          ? "Done"
          : "Idle"}
      </p> */}
    </div>
  );
};
export default FetchItem;




// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { itemsActions } from "../store/ItemSlice";
// import { fetchaction } from "../store/FetchStatus";

// const FetchItem = () => {
//   const dispatch = useDispatch();
//   const fetchStatus = useSelector((state) => state.fetchstates);
//   const playlist = useSelector((state) => state.items.playlist);
//   const artist = useSelector((state) => state.items.artist);
//   const album = useSelector((state) => state.items.album);
//   const podcast = useSelector((state) => state.items.podcast);
//   const recommendations = useSelector((state) => state.items.recommendations);

//   const fetchDataSequentially = async () => {
//     try {
//       dispatch(fetchaction.markfetching());

//       const playlistResponse = await fetch(
//         "https://spotify-scraper.p.rapidapi.com/v1/playlist/contents?playlistId=5782GLkrpvN8zbJQRjMaSW",
//         {
//           method: "GET",
//           headers: {
//             "x-rapidapi-key": "564e4e0d37mshac9767d1ee0a2abp1e1c03jsncc5fb6fd5a9f",
//             "x-rapidapi-host": "spotify-scraper.p.rapidapi.com",
//           },
//         }
//       );
//       const playlistData = await playlistResponse.json();
//       dispatch(itemsActions.addInitialItemsplaylist(playlistData));

//       // Fetch other data...

//       dispatch(fetchaction.markfetchDone());
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       dispatch(fetchaction.markfetchingfinished());
//     }
//   };

//   useEffect(() => {
//     fetchDataSequentially();
//   }, []);

//   return (
//     <div>
//       <h1>Fetched Data</h1>
//       <h2>Playlist:</h2>
//       <pre>{JSON.stringify(playlist, null, 2)}</pre>
//       <h2>Artist:</h2>
//       <pre>{JSON.stringify(artist, null, 2)}</pre>
//       <h2>Album:</h2>
//       <pre>{JSON.stringify(album, null, 2)}</pre>
//       <h2>Podcast:</h2>
//       <pre>{JSON.stringify(podcast, null, 2)}</pre>
//       <h2>Recommendations:</h2>
//       <pre>{JSON.stringify(recommendations, null, 2)}</pre>
//     </div>
//   );
// };

// export default FetchItem;

