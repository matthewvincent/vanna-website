import React from 'react';
import './AlbumPromo.scss';
import albums from './albumsConfig.js';
import VannaAlbumLogo from '../../static/vanna-album-logo.png';
import Promo1 from '../../static/promo1.png';

const AlbumPromo = () => (
  <div>
	  <div className="album-promo">
      <AlbumLogo />
	  </div>
    <AlbumTeaser>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/aJ5YacpvT1E" 
        frameborder="0" 
        allowfullscreen
      >
      </iframe>
    </AlbumTeaser>
	  <div className="release-info">
	    <h1>NEW ALBUM OUT NOW</h1>
	    <PreorderButton
	  	  link="http://smarturl.it/VannaMA" 
	    > BUY CD/LP
      </PreorderButton>
      <PreorderButton
        link="http://smarturl.it/VannaMA" 
      > BUY DIGITAL
      </PreorderButton>
	  </div>
	  <MusicSection config={albums} />
  </div>
);

const AlbumLogo = () => (
  <img 
  	src={VannaAlbumLogo}  
	  className="album-logo"
  />
);

const AlbumTeaser = (props) => (
  <div className="album-teaser">
    <div className="video-background">
      <div className="responsive-video-wrapper">
        {props.children}
      </div>
    </div>
  </div>
);

const PreorderButton = (props) => (
  <a 
    className="preorder-button"  
    href={props.link}
  >
	  <span className="preorder-text">
      {props.children}
    </span>
  </a>
);

const MusicSection = ({config}) => {

  const albums = config.map((album) => (
    <AlbumLinks
      key={album.title}
      image={album.thumbnail}
      spotifyLink={album.spotifyLink}
      appleLink={album.appleLink}
      title={album.title}
      storeLink={album.storeLink}
    />
  ));

  return (
    <div className="music-section">
      <div  className="album-links-wrapper">
        {albums}
      </div>
    </div>
  );
};

const AlbumLinks = ({image, spotifyLink, appleLink, title, storeLink}) => (
  <div className={"promoted-album"}>
  	<a href={storeLink}>
  	  <img 
  	    className="promoted-album-thumbnail"
  	    src={image} 
  	  />
  	</a>
  	<div className="listen-links">
  	  <a 
  	    className="spotify-link" 
  	    href={spotifyLink}
  	  >
        <i 
          className="link-icon fa fa-spotify" 
          aria-hidden="true"
        ></i>
        SPOTIFY
  	  </a>
      <a 
        className="apple-link" 
        href={appleLink}
      >
        <i 
          className="link-icon fa fa-apple" 
          aria-hidden="true"
        ></i>
        APPLE MUSIC
      </a>
  	</div>
  </div>
);

export default AlbumPromo;