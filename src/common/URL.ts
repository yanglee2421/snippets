const protocol = "http:";

const hostname = "localhost";
const port = "3000";
const host = `${hostname}:${port}`;

const origin = `${protocol}//${host}`;

const pathname = "/labs/";
const search = "?oauth_token=xfasf";
const hash = "#title";

export const href = `${origin}${pathname}${search}${hash}`;
