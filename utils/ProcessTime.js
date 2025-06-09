export const ProcessTime = (startTime) => {
  const now = Date.now();
  let diff = Math.floor((now - startTime) / 1000); // diff in seconds

  const hours = Math.floor(diff / 3600);
  diff %= 3600;
  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;

  let uptimeStr = "up ";

  if (hours > 0) uptimeStr += `${hours} hour${hours > 1 ? "s" : ""}, `;
  if (minutes > 0) uptimeStr += `${minutes} minute${minutes > 1 ? "s" : ""}, `;

  uptimeStr += `${seconds} second${seconds !== 1 ? "s" : ""}`;
  return uptimeStr;
};
