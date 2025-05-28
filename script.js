// Example video links array
const videos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/3JZ_D3ELwOQ"
];

const container = document.getElementById("videoContainer");

videos.forEach((videoUrl) => {
  const iframe = document.createElement("iframe");
  iframe.src = videoUrl;
  iframe.width = "560";
  iframe.height = "315";
  iframe.frameBorder = "0";
  iframe.allowFullscreen = true;
  container.appendChild(iframe);
});
