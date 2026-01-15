module.exports = (text, vidLink) => {
  return text.replace(/\b(?:(\d{1,2}):)?(\d{1,2}):(\d{2})\b/g, (match, h, m, s) => {
    const hours = h ? parseInt(h, 10) : 0;
    const minutes = parseInt(m, 10);
    const seconds = parseInt(s, 10);
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    const url = `${vidLink}&t=${totalSeconds}s`;
    return `[${match}](${url})`;
  });
};