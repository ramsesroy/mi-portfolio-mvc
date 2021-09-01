const express = require('express');
const app = express();
const port = 3030;
app.use(express.static('public'));
const indexRouter = require('./routers/index');


//enrutamiento
//index
app.use('/', indexRouter);
app.use('/about', indexRouter);



/*servidor*/
 app.listen(port, () => console.log(`Server running in http://localhost:${port}`));
