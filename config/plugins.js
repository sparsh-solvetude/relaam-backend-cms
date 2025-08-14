module.exports = () => ({
  upload: {
    config: {
      actionOptions: {
        upload: {
          sizeLimit: 20 * 1024 * 1024,
          allowedTypes: [
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/gif",
            "image/svg+xml",
          ],
        },
      },
    },
  },
});