// import React from 'react';
// import { useSelector } from 'react-redux';
// import WhishItem from '../component/WhishItem';
// const Whislist = () => {
//   const bagitem = useSelector((state) => state.wish || []);
// // console.log(bagitem,"they are");
//   // Fetching data from the Redux store
//   const playlists = useSelector((state) => state.items.playlists?.items || []);
// // console.log(playlists,"they are  playlists");
//   const albums = useSelector((state) => state.items.albums?.items || []);
//   // console.log(albums, "they area albums");
//   const podcast = useSelector((state) => state.items.podcast?.episodes?.items || []);
//   // console.log(podcast, "they are podcast");
//   const recommended = useSelector((state) => state.items.Recommended || []);
//   // console.log(recommended,"they are recommended");
//   // console.log(bagitem, "the items in the wishlist");
//   // Filtering items based on wishlist IDs
//   const finalplaylist = Array.isArray(playlists) ? playlists.filter((item) => bagitem.includes(item.id)) : [];
//   const finalalbum = Array.isArray(albums) ? albums.filter((item) => bagitem.includes(item.id)) : [];
//   // console.log(finalalbum, "the final album items");
//   const finalpodcast = Array.isArray(podcast) ? podcast.filter((item) => bagitem.includes(item.id)) : [];
//   // console.log(finalpodcast, "the final podcast items");
//   const finalrecomended = Array.isArray(recommended) ? recommended.filter((item) => bagitem.includes(item.id)) : [];
//   // console.log(finalrecomended, "the final recomend items");
//   return (
//     <main style={{ padding: '1rem' }}>
//       <h2>Favourite Song</h2>
//       <div className="wishlist-items-container">
//         {/* Playlists */}
//         <section>
//           {/* <h5>Playlists</h5> */}
//           {finalplaylist.length > 0 ? (
//             <WhishItem data={finalplaylist} type="playlist" />
//           ) : (
//             <p></p>
//           )}
//         </section>
//         {/* Albums */}
//         <section>
//           {/* <h5>Albums</h5> */}
//           {finalalbum.length > 0 ? (
//             <WhishItem data={finalalbum} type="album" />
//           ) : (
//             <p></p>
//           )}
//         </section>
//         {/* Podcasts */}
//         <section>
//           <h5>Podcasts</h5>
//           {finalpodcast.length > 0 ? (
//             <WhishItem data={finalpodcast} type="podcast" />
//           ) : (
//             <p></p>
//           )}
//         </section>
//         {/* Recommended */}
//         <section>
//           {/* <h5>Recommended</h5> */}
//           {finalrecomended.length > 0 ? (
//             <WhishItem data={finalrecomended} type="recommended" />
//           ) : (
//             <p></p>
//           )}
//         </section>
//       </div>
//     </main>
//   );
// };
// export default Whislist


import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { wishActions } from '../store/WishslistSlice';
const WhishItem = ({ data = [], type }) => {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(wishActions.REMOVE_FROM_WISHLIST(id));
  };
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap', // Ensure items wrap to the next line
        gap: '1rem',
        justifyContent: 'center', // Center items horizontally
        overflowY: 'auto', // Allow vertical scrolling if needed
        maxHeight: '80vh', // Limit the height of the container
        padding: '1rem',
      }}
      className="scroll-container"
    >
      {data.length > 0 ? (
        data.map((item) => {
          const imageUrl =
            item.images?.[0]?.url || item.cover?.[0]?.url || 'https://via.placeholder.com/150';
          const title = item.name || 'Unnamed Item';
          const description = item.description || '';
          const link = item.shareUrl || item.external_urls?.spotify || '#';
          return (
            <div
              key={item.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column', // Stack elements vertically
                width: '200px',
                backgroundColor: '#2c2c2c',
                padding: '1rem',
                borderRadius: '8px',
                color: 'white',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s', // Hover effect
                alignItems: 'center',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)'; // Slight zoom effect
                e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)'; // Enhance shadow
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'; // Reset zoom effect
                e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Reset shadow
              }}
            >
              <img
                src={imageUrl}
                alt={title}
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150'; // Fallback for broken images
                }}
              />
              <h5
                style={{
                  fontSize: '1rem',
                  margin: '0.5rem 0',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  maxWidth: '200px',
                }}
              >
                {title}
              </h5>
              {description && (
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#aaa',
                    margin: '0.5rem 0',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth: '200px',
                  }}
                >
                  {description}
                </p>
              )}
              <button
                onClick={() => handleRemove(item.id)}
                style={{
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: '1.5rem',
                  marginTop: '0.5rem',
                }}
              >
                <FaRegHeart />
              </button>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.9rem',
                    color: '#fff',
                    textDecoration: 'none',
                    backgroundColor: '#1DB954', // Spotify Green
                    padding: '0.5rem 1rem',
                    borderRadius: '25px',
                    display: 'inline-block',
                    marginTop: '0.5rem',
                  }}
                >
                  View on Spotify
                </a>
              )}
            </div>
          );
        })
      ) : (
        <p style={{ color: 'white', textAlign: 'center' }}>No items in the wishlist.</p>
      )}
    </div>
  );
};
export default WhishItem;