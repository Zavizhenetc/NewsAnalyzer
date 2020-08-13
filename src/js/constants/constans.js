export const GITHUB_BASE_URL = NODE_ENV === 'production' ? 'https://api.github.com' : 'http://api.github.com';
export const CONFIG = {
  baseUrl: `${GITHUB_BASE_URL}`
};
