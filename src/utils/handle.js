export default class Handle {
  static exception(error) {
    return { msg: error };
  }

  static error(error, res) {
    console.log(error);

    if (!error.msg && !(error.errors && error.errors.length)) {
      return res.status(400).send({ error: 'SOMETHING_WRONG_HAPPENNED' });
    }

    return res.status(400).send({ error: error.errors });
  }

  static success(resp, res) {
    return res.json(resp);
  }
}
