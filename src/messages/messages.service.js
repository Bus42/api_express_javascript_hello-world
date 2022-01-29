const getPublicMessage = () => {
  return {
    metadata: {
      api: "api_express_javascript_hello-world",
      branch: "basic-authorization",
    },
    text: "This is a public message.",
  };
};

const getProtectedMessage = () => {
  return {
    metadata: {
      api: "api_express_javascript_hello-world",
      branch: "basic-authorization",
    },
    text: "This is a protected message.",
  };
};

const getAdminMessage = () => {
  return {
    metadata: {
      api: "api_express_javascript_hello-world",
      branch: "basic-authorization",
    },
    text: "This is an admin message.",
  };
};

module.exports = {
  getPublicMessage,
  getProtectedMessage,
  getAdminMessage,
};
