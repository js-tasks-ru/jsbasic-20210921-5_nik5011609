function truncate(str, maxlength) {
  if (str.length > 20) {
    return str.substr(0, maxlength - 1) + "…";
  } else {
    return str
  }
}
