import React, { useState, useEffect, useRef } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
function MusicSearch() {
  const searchTerm = useSelector((state) => state.footer.searchTerm);
  console.log('Search term:', searchTerm);
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const audioRef = useRef(new Audio());
  const fetchToken = async () => {
    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials&client_id=4f8f1cff29d549b4bf73ed2c72678cff&client_secret=15dec2d3b36c4e5ea3e64811783466c3',
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch token: ${response.statusText}`);
      }
      const jsonData = await response.json();
      setToken(jsonData.access_token);
      
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  };
  const fetchMusicData = async (query) => {
    if (!token) {
      console.error('No token available');
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${query}&type=track&offset=0`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch music data: ${response.statusText}`);
      }
      const jsonData = await response.json();
      console.log('Music data:', jsonData);
      setTracks(jsonData.tracks.items.slice(0, 15)); // Limit to 15 tracks
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching music data:', error);
    }
  };
  const playSong = (track) => {
    if (currentTrack && currentTrack.id === track.id && isPlaying) {
      console.log('Pausing track:', track.name);
      
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (track.preview_url) {
        if(audioRef.current){
          audioRef.current.pause();
        }
        console.log('Playing track:', track.name);
        audioRef.current.src = track.preview_url;
        audioRef.current.play()
         .then(()=>{
          setCurrentTrack(track);
          setIsPlaying(true);
         })
         .catch((error)=> console.error('Error playing track',error));
      } else {
        console.log('No preview URL available for this track');
      }
    }
  };
  useEffect(() => {
    fetchToken();
  }, []);
  useEffect(() => {
    if (searchTerm && searchTerm.trim()) {
      fetchMusicData(searchTerm);
    } else {
      setTracks([]);
    }
  }, [searchTerm, token]);
  return (
    <div className="music-search">
      <div className="row mt-4">
        {loading ? (
          <div className="col-12 text-center">
            <Spinner animation="border" variant="primary" />
            <p>Loading...</p>
          </div>
        ) : tracks.length > 0 ? (
          tracks.map((track) => (
            <div key={track.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <Card className="track-card shadow-sm border-0 rounded">
                <Card.Img
                  variant="top"
                  src={track.album.images[0].url}
                  className="rounded"
                  style={{ height: '200px', objectFit: 'cover', borderRadius: '10px' }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title
                    className="text-center text-truncate"
                    style={{ fontSize: '1.1rem' }}
                  >
                    {track.name}
                  </Card.Title>
                  <Card.Text
                    className="text-center "
                    style={{ fontSize: '0.9rem',color:"floralwhite" }}
                  >
                    {track.artists[0].name}
                  </Card.Text>
                  <Button
                    variant={
                      currentTrack && currentTrack.id === track.id && isPlaying
                        ? 'danger'
                        : 'primary'
                    }
                    onClick={() => playSong(track)}
                    disabled={!track.preview_url} // Button disabled if no preview_url
                    className="w-100 mt-auto"
                    style={{ borderRadius: '20px', padding: '10px' }}
                  >
                    {currentTrack && currentTrack.id === track.id && isPlaying
                      ? 'Pause'
                      : 'Play'}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No tracks found for "{searchTerm}". Try searching for a different song.</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default MusicSearch;