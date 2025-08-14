module.exports = () => ({
  upload: {
    config: {
      actionOptions: {
        upload: {
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