import React from "react";

const YouTubeEmbed = ({ src, desc }) => {
  const extractYouTubeId = (url) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  };

  const videoId = extractYouTubeId(src);

  if (!videoId) {
    return <p>Error: Invalid YouTube URL</p>;
  }

  return (
    <div>
      <h3>{desc}</h3>
      <div className="videos">
        <iframe
          width="100%"
          height="auto"
          style={{ aspectRatio: "16/9", border: "none" }}
          src={`https://www.youtube.com/embed/${videoId}`}
          title={desc}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default YouTubeEmbed;
