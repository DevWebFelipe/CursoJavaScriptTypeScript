function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I'm developer");
      resolve();
    }, 2000);
  })
}

export default async function () {
  await promise();
  console.log('Finished');
}