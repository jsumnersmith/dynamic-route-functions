export default (req, res) => {
  const id = req.params.id;
  res.json({id: id});
}