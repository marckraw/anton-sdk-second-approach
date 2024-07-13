export const isBrowser =
  typeof window !== "undefined" && typeof window.document !== "undefined";

export const warnIfBrowser = (modelName: string) => {
  if (isBrowser) {
    console.warn(
      `${modelName} doesn't work directly in browser environments due to CORS restrictions. Consider using a server-side proxy.`,
    );
  }
};
