const { Router } = require('express');
const router = Router();

router.get('/', (req, res) =>{
  res.render(`${__dirname}/dist/index.html`, { title: 'Hello guys!' });
})
.post('/send', (req,res)=>{
  console.log(req.body);

  res.send("<h2>Success</h2>");
})

.post('/contact', (req,res)=>{
  console.log(req.body);

  res.send("<h2>Success</h2>");
});
module.exports = router;
