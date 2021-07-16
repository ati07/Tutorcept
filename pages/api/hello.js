// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from '../../data.json'
import user from '../../db/user.json'
export default function handler(req, res) {
  res.status(200).json(user)
}
