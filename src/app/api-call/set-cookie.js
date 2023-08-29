export async function setCookie(req, res) {
  let response = await fetch("http://localhost:3000/api/setCookie");
  if (response.status === 201) {
    return response;
  }
}
