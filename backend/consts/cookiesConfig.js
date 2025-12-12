export const JWT_SECRET = "YOUR_SECRET_KEY";
export const JWT_EXPIRES_IN = "1h";
export const COOKIE_NAME = "access_token";
export const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600000, // 1 hour
};
