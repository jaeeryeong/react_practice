import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
        'id': 1,
        'image' : 'https://avatars.githubusercontent.com/u/12345?v=4',
        'name': 'honggildong',
        'birthday': '961222'
        },
        {
          'id': 2,
          'image' : 'https://avatars.githubusercontent.com/u/12345?v=4',
          'name': 'honggildong2',
          'birthday': '961223'
          },
          {
            'id': 3,
            'image' : 'https://avatars.githubusercontent.com/u/12345?v=4',
            'name': 'honggildong3',
            'birthday': '961224'
            }
        ]);
});

app.listen(port, () => 
    console.log(`Listening on port ${port}!`));
