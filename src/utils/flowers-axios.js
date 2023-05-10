import axios from "axios";


async function get_flowers() {
  const response = await axios({
    // Endpoint to send files
    url: `http://localhost:8000/flowers/get_flowers/`,
    method: "GET",
  })
    // Catch errors if any
    .catch((err) => {
      return err.response
    });
  if (response.status === 200) {
    return response.data
  }
  else {
    return undefined
  }
}

export {get_flowers}