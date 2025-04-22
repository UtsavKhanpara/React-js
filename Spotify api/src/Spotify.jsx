import React, { useEffect, useState } from 'react';
import './Spotify.css';

const Spotify = () => {
  const [record, setRecord] = useState(null);

  const getSpotifyData = () => {
    fetch(`https://mocki.io/v1/2fd0deb5-375e-4138-84fb-c260f98d4244`)
      .then((res) => res.json())
      .then((data)=>{
        setRecord(data);
        console.log(data);
      }).catch((e)=>{
        console.log(e);
      })
  };

  useEffect(() => {
    getSpotifyData();
  }, []);

  if (!record) return <div className="spotify-loading">Loading...</div>;

  return (
    <div className="spotify-container">
      <h1>🎧 Spotify Dashboard</h1>

      {/* USER */}
      <div className="section">
        <h2>User Info</h2>
        <img src={record.user.profile_image} alt="Profile" className="profile-img" />
        <p>
          <strong>Name:</strong> 
          {record.user.name}</p>
        <p>
          <strong>Email:</strong> 
          {record.user.email}</p>
        <p>
          <strong>Subscription:</strong> 
          {record.user.subscription}</p>
        <p>
          <strong>Followers:</strong> 
          {record.user.followers} | <strong>Following:</strong>
           {record.user.following}</p>
        <p>
          <strong>Badges:</strong>
           {record.user.badges.join(', ')}</p>
      </div>

      {/* STATS */}
      <div className="section">
        <h2>Listening Stats</h2>
        <p>
          <strong>Total Songs Played:</strong>
           {record.user.listening_stats.total_songs_played}</p>

        <p>
          <strong>Most Played Artist:</strong> 
          {record.user.listening_stats.most_played_artist}</p>

        <p>
          <strong>Weekly Listening (mins):</strong> 
          {record.user.listening_stats.weekly_listening_minutes}</p>

      </div>

      {/* GENRES */}
      <div className="section">
        <h2>Genres</h2>
        <ul>
          {record.genres.map((g) => 
          <li key={g.id}>{g.name}</li>)}
        </ul>
      </div>

      {/* PLAYLISTS */}
      <div className="section">
        <h2>Playlists</h2>
        {record.playlists.map((pl) => (

          <div key={pl.id} className="card">

            <h4>{pl.title}</h4>

            <p>{pl.description}</p>

            <p>
              <strong>Songs:</strong> 
              {pl.songs.join(', ')}</p>
          </div>
        ))}
      </div>

      {/* SONGS */}
      <div className="section">
        <h2>Songs</h2>
        {record.songs.map((song, index) => (
          <div key={song.id} className="card">
            <h4>{song.title} - {song.artist}</h4>
            <img src={song.cover_image} alt="song" />
            <p>
              <strong>Album:</strong>
               {song.album}
            </p>
          
            <p>
              <strong>Genres:</strong> 
              {song.genres.join(', ')}
            </p>

            <p><strong>Duration:</strong> {song.duration}</p>

            {/* 🎧 EMBED SPOTIFY PLAYER HERE */}
            <iframe
              src={`https://open.spotify.com/embed/track/1hA697u7e1jX2XM8sWA6Uy`}
              width="100%"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Player"
            />

          </div>
        ))}
      </div>


      {/* ALBUMS */}
      <div className="section">

        <h2>Albums</h2>

        {record.albums.map((album) => (

          <div key={album.id} className="card">

            <h4>{album.title} - {album.artist}</h4>

            <p><strong>Year:</strong> {album.release_year}</p>

          </div>
        ))}
      </div>

      {/* ARTISTS */}
      <div className="section">

        <h2>Artists</h2>

        {record.artists.map((art) => (
          <div key={art.id} className="card">

            <h4>{art.name}</h4>
            
            <p>{art.bio}</p>

            <p><strong>Followers:</strong> {art.followers}</p>
          </div>
        ))}
      </div>

      {/* SETTINGS */}
      <div className="section">
        <h2>Playback Settings</h2>
        <p>
          <strong>Shuffle:</strong> 
          {record.playback_settings.shuffle ? 'Yes' : 'No'}</p>

        <p>
          <strong>Repeat:</strong> 
          {record.playback_settings.repeat}</p>

          
        <p><strong>Equalizer:</strong> {record.playback_settings.equalizer}</p>
      </div>
    </div>
  );
};

export default Spotify;
