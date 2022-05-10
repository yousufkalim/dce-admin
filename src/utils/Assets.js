export default function assetsURL(str) {
  const _str = `${process.env.REACT_APP_SERVER_MEDIA_URL}${String(str).replace(
    "\\",
    "/"
  )}`;
  return _str;
}
