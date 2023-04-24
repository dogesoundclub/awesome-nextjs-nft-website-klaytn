export const clientId = "1072739158570844180";
export const redirectURI =
  process.env.NODE_ENV === "development"
    ? "http%3A%2F%2Flocalhost%3A3000%2Factivities"
    : "https%3A%2F%2Fdogesound.club%2Factivities";

export const identityURL = (network: string) =>
  `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectURI}?network=${network}%26&response_type=code&scope=identify`;
export const baseUrl = "https://discord.com/api";