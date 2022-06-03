function validateUrl(value) {
  let url;

  try {
    url = new URL(value);
  } catch(err) {
    return false;
  }

  return true;
}

module.exports = { validateUrl };
