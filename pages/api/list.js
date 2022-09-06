export default async (req, res) => {
    const url = `https://${process.env.REDIS_URL}/lrange/todo/0/100?_token=${process.env.REDIS_TOKEN}`
  
    return fetch(url)
      .then((r) => r.json())
      .then((data) => {
        let result = JSON.stringify(data.result);
        return res.status(200).json(result);
      });
  };