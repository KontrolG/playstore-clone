const getFormattedResponse = (status, content) => {
  // Clase formatted para luego formatter.setContent, set ....
  const formattedResponse = { status };
  if (status === "error") {
    formattedResponse.message = content;
  } else {
    const [contentBody] = Object.values(content) || [null];
    if (Array.isArray(contentBody)) {
      formattedResponse.results = contentBody.length;
    }
    formattedResponse.data = content;
  }
  return formattedResponse;
};

const getJSend = (statusCode, content) => {
  const status = getStatusStringFromStatusCode(statusCode);
  const jSend = { status };
  if (status === "error" || status === "fail") {
    return { ...jSend, message: content };
  } else {
    return getJSendWithData(jSend, content);
  }
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

const getJSendWithData = (data, jSend) => {
  const jSendWithData = { ...jSend, data };
  return getJSendWithDataLenght(jSendWithData);
};

const getJSendWithDataLenght = jSendWithData => {
  const [contentBody] = Object.values(jSendWithData.data) || [null];
  if (Array.isArray(contentBody)) {
    return { ...jSendWithData, results: contentBody.length };
  }
  return jSendWithData;
};

module.exports = getJSend;
