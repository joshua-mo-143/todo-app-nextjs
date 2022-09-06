export default async (req, res) => {
    if (!req.query.todo) {
      return res.status(400).send("todo parameter required.");
    }
    let todo = encodeURI(req.query.todo);
  
    const token = "RE85d405e4ff7a49b6ab20de9188a03d1c";
    const url =
      `https://${process.env.REDIS_URL}/lpush/todo/" + todo + "?_token=" + ${process.env.REDIS_TOKEN}`;
  
    return fetch(url)
      .then((r) => r.json())
      .then((data) => {
        let result = JSON.stringify(data.result);
        return res.status(200).json(result);
      });
  };