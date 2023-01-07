const humanReadableError = (code: string, message: string) => {
  switch (code) {
    case "23505":
      return `This ${message} already exists`;

    default:
      return "Something went wrong";
  }
};

export default humanReadableError;
