"use strict";

/* EcoTrack Video Configuration */

const videoSources = {
  product: {
    youtubeUrl: "https://www.youtube.com/watch?v=3iLadLkXpX8",
    streamUrl:
      "https://upcedupe-my.sharepoint.com/:v:/g/personal/u202221024_upc_edu_pe/IQBNQ0ReOzCUQ6fVcRckNCpiAZuD37qzTzPNyMf5mEDdGns?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=JcbKrf",
  },
  team: {
    youtubeUrl: "https://youtu.be/nA3qwXaTrcs",
    streamUrl:
      "https://upcedupe-my.sharepoint.com/:v:/g/personal/u20241g396_upc_edu_pe/IQAFBjnBRmXkQa2c-vyXxzIgAa0BE3k-NJIoUeiQuUkofJY?e=NXGqhN&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
  },
};

/* Extract YouTube Video ID */

function getYouTubeId(link) {
  try {
    const url = new URL(link);
    const host = url.hostname.toLowerCase().replace(/^www\./, "");
    let videoId = "";

    if (host === "youtu.be") {
      videoId = url.pathname.split("/")[1];
    } else if (
      ["youtube.com", "m.youtube.com", "youtube-nocookie.com"].includes(host)
    ) {
      if (url.pathname === "/watch") {
        videoId = url.searchParams.get("v");
      } else {
        const parts = url.pathname.split("/");
        if (["embed", "shorts", "live"].includes(parts[1])) {
          videoId = parts[2];
        }
      }
    }

    return /^[a-zA-Z0-9_-]{11}$/.test(videoId) ? videoId : null;
  } catch {
    return null;
  }
}

/* Render Videos */

Object.entries(videoSources).forEach(([type, sources]) => {
  const player = document.querySelector(`[data-video-player="${type}"]`);
  const streamLink = document.querySelector(`[data-video-stream="${type}"]`);

  if (!player || !streamLink) return;

  const videoId = getYouTubeId(sources.youtubeUrl.trim());

  if (videoId) {
    const iframe = document.createElement("iframe");

    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
    iframe.title =
      type === "product"
        ? "EcoTrack - About the Product"
        : "Horizon - About the Team";

    iframe.loading = "lazy";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;

    player.replaceChildren(iframe);
  }

  if (sources.streamUrl.trim()) {
    try {
      const url = new URL(sources.streamUrl);

      if (url.protocol === "https:") {
        streamLink.href = url.toString();
        streamLink.hidden = false;
      }
    } catch {
      console.warn(`Invalid Microsoft Stream URL for ${type} video.`);
    }
  }
});
