export default function getHostName() {
  if(window && window.location) {
    return window.location.host;
  }
}
