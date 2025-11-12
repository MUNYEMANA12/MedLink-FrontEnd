// Run: npm install ws
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });
let clients = {};

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    const data = JSON.parse(message);
    
    if (data.type === "join") {
      clients[data.role] = ws; // store ws by role (doctor/patient)
    }

    // Forward offer/answer/candidate to the other user
    if (data.type === "offer" && clients["patient"]) {
      clients["patient"].send(JSON.stringify(data));
    }

    if (data.type === "answer" && clients["doctor"]) {
      clients["doctor"].send(JSON.stringify(data));
    }

    if (data.type === "candidate") {
      const other = data.role === "doctor" ? clients["patient"] : clients["doctor"];
      if (other) other.send(JSON.stringify(data));
    }
  });

  ws.on("close", () => {
    // Remove disconnected client
    for (let role in clients) {
      if (clients[role] === ws) delete clients[role];
    }
  });
});

console.log("WebSocket signaling server running on ws://localhost:8080");
