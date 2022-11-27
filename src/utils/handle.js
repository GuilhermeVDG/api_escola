export default class Handle {
  static exception(error) {
    return { msg: error };
  }

  static error(error, res) {
    console.log(error);

    if (!error.msg && !(error.errors && error.errors.length)) {
      return res.status(400).send({ error: 'SOMETHING_WRONG_HAPPENNED' });
    }

    if (error.errors) {
      const errors = error.errors.map((err) => err.message);

      if (errors) return res.status(400).send({ error: errors });
    }

    return res.status(400).send({ error });
  }

  static success(resp, res) {
    return res.json(resp);
  }
}
