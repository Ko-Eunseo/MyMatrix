// axios({
//   method: "post",
//   url: "http://127.0.0.1:3000/sign-in",
//   headers: {},
//   data: { email: "koeunseo@naver.com", password: "930408es" },
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function dummy() {
  try {
    const res = await axios({
      method: "post",
      url: "http://127.0.0.1:3000/sign-in",
      headers: {},
      data: { email: "koeunseo@naver.com", password: "930408es" },
    });

    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

dummy();