const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const { createCanvas, loadImage } = require('canvas');
const { match } = require('assert');
const app = express();
const server = http.Server(app);
const io = socketIO(server);
const mysql = require("mysql2");

const PORT = 5000
app.set('port', PORT);
app.use('/static', express.static(__dirname + '/static'));


var mouse = {
    x: 0,
    y: 0
};


var p = 0;

var canvas = createCanvas(2600, 1600)
var ctx = canvas.getContext("2d");
canvas.width = 2600;
canvas.height = 1600;
var gridSize = 10

const tabelName = "users"
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "PixelBattle",
    password: "",
    port: "3306"
});
connection.connect(function(err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    } else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

var pizic = 0.5

const ip = "192.168.1.130"
var user = {};
server.listen(PORT, ip, function() {

    drawBoard();
    console.log(`http://${ip}:${PORT}/`);
});
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', function(request, response) {
    response.sendFile(path.join(__dirname, 'login.html'));
});
// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = express.urlencoded({ extended: false });

app.post('/login', urlencodedParser, function(request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.user} - ${request.body.password}`);
})

io.on('connection', function(socket) {
    socket.on('new player', function() {
        user[socket.id] = {
            auth: false
        };
        // socket.end(response.sendFile(path.join(__dirname, 'index.html')))
        console.log("New connection ", socket.handshake.address)

        io.sockets.emit('state', user, canvas.toDataURL());
    });
    socket.on("entrance", function(login, password) {
        if (login == "") return;
        if (password == "") return;
        const zapros = `INSERT INTO \`users\` ( \`login\`, \`pasworld\`, \`setPixels\`) VALUES ('${login}','${password}', '${0}')`

        connection.query(zapros, function(err, results) {
            if (err) console.log(err);
            else {

            }
            console.log(results);
        });

    })
    socket.on('ckick', function(i, j, c) {

        console.log("ckick", socket.handshake.address)
        i = Math.floor(i / gridSize)
        j = Math.floor(j / gridSize)
        drawCanvas(i, j, c)
        io.sockets.emit('edit', canvas.toDataURL());

    })

    socket.on("disconnect", function() {
        delete user[socket.id]
    })
});

function drawCanvas(i, j, c) {

    switch (c) {


        case 0:
            ctx.fillStyle = '#FFFFFF';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break

        case 1:
            ctx.fillStyle = '#C2C2C2';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 2:
            ctx.fillStyle = '#858585';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 3:
            ctx.fillStyle = '#474747';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 4:
            ctx.fillStyle = '#000000';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 5:
            ctx.fillStyle = '#94DF44';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 6:
            ctx.fillStyle = '#4BB34B';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 7:
            ctx.fillStyle = '#5CBF0E';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 8:
            ctx.fillStyle = '#FDCA5E';
            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 9:
            ctx.fillStyle = '#FFA75F';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 10:
            ctx.fillStyle = '#FF9F00';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 11:
            ctx.fillStyle = '#FF717D';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 12:
            ctx.fillStyle = '#FE3347';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 13:
            ctx.fillStyle = '#DB2635';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 14:
            ctx.fillStyle = '#CD3EE6';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 15:
            ctx.fillStyle = '#A329B8';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 16:
            ctx.fillStyle = '#70B5F6';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break
        case 17:
            ctx.fillStyle = '#488DD0';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);
            break
        case 18:
            ctx.fillStyle = '#1893E1';

            ctx.fillRect((i * gridSize) + 1, (j * gridSize) + 1, gridSize - 1, gridSize - 1);

            break


    }
}


function drawBoard() {
    for (var x = 0; x <= canvas.width; x += gridSize) {
        ctx.moveTo(pizic + x + p, p);
        ctx.lineTo(pizic + x + p, canvas.height + p);

    }

    for (var x = 0; x <= canvas.height; x += gridSize) {
        ctx.moveTo(p, pizic + x + p);
        ctx.lineTo(canvas.width + p, pizic + x + p);

    }

    ctx.lineWidth = 1;
    ctx.strokeStyle = "#625C5C";
    ctx.stroke();
}