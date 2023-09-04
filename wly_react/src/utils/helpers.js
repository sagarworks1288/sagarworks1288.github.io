import axios from "axios";

export function axiosPost(url, params, multipart) {
  var headers = { "Content-Type": "application/json" };
  if (multipart != undefined) {
    if (multipart == 1) {
      headers = { "Content-Type": "multipart/form-data" };
    }
  }
  if (localStorage.getItem("token") != null) {
    var token = localStorage.getItem("token");
    headers.Authorization = "Bearer " + token;
  }
  return new Promise(function (resolve) {
    axios
      .post(url, params, { headers: headers })
      .then(function (response) {
        if (response.status == 200) {
          resolve(response.data);
        } else {
          resolve(null);
        }
      })
      .catch(function (AxiosError) {
        resolve(null);
        console.log(AxiosError);
    
        /*
        notification.error({
          message: `API ERROR`,
          description: error_message,
          placement: "bottomLeft",
        });
        */
      });
  });
}

export function axiosGet(url) {
  var headers = { "Content-Type": "application/json" };
  if (localStorage.getItem("token") != null) {
    var token = localStorage.getItem("token");
    headers.Authorization = "Bearer " + token;
  }

  return new Promise(function (resolve) {
    axios
      .get(url, { headers: headers })
      .then(function (response) {
        if (response.status == 200) {
          resolve(response.data);
        } else {
          resolve(null);
        }
      })
      .catch(function (AxiosError) {
        console.log(AxiosError);
        resolve({ status: false, error: AxiosError.message });
        /*
        notification.error({
          message: `API ERROR`,
          description: error_message,
          placement: "bottomLeft",
        });
        */
      });
  });
}