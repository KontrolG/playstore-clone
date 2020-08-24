const getJSend = (statusCode, content, errors) => {
  const status = getStatusStringFromStatusCode(statusCode);
  const jSend = { status };
  if (status === "fail") {
    return { ...jSend, data: errors };
  }
  if (status === "error") {
    return { ...jSend, message: content };
  }
  return getJSendWithData(jSend, content);
};

const getStatusStringFromStatusCode = statusCode => {
  const isSuccess = statusCode.startsWith(2);
  if (isSuccess) {
    return "success";
  }
  const isFail = statusCode.startsWith(4);
  if (isFail) {
    return "fail";
  }
  const isError = statusCode === 500;
  if (isError) {
    return "error";
  }
};

const getJSendWithData = (jSend, data) => {
  const jSendWithData = { ...jSend, data };
  return getJSendWithDataLenght(jSendWithData);
};

const getJSendWithDataLenght = jSendWithData => {
  const { data } = jSendWithData;
  if (Array.isArray(data)) {
    return { ...jSendWithData, results: data.length };
  }
  return jSendWithData;
};

module.exports = getJSend;
