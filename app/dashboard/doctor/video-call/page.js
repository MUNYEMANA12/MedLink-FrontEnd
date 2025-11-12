"use client";
import { useEffect, useRef, useState } from "react";

export default function VideoCall() {
  const localVideo = useRef(null);
  const remoteVideo = useRef(null);
  const [pc, setPc] = useState(null);
  const [ws, setWs] = useState(null);

  const role = "doctor"; // change to "patient" for patient page

  useEffect(() => {
    const peerConnection = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
    });
    setPc(peerConnection);

    // Capture local stream
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        localVideo.current.srcObject = stream;
        stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
      });

    // Remote stream
    peerConnection.ontrack = (event) => {
      remoteVideo.current.srcObject = event.streams[0];
    };

    // Handle ICE candidates
    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        ws.send(JSON.stringify({ type: "candidate", candidate: event.candidate, role }));
      }
    };

    // Connect to signaling server
    const socket = new WebSocket("ws://localhost:8080");
    setWs(socket);

    socket.onopen = () => {
      socket.send(JSON.stringify({ type: "join", role }));
    };

    socket.onmessage = async (msg) => {
      const data = JSON.parse(msg.data);

      if (data.type === "offer" && role === "patient") {
        await peerConnection.setRemoteDescription(data.offer);
        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);
        socket.send(JSON.stringify({ type: "answer", answer, role }));
      }

      if (data.type === "answer" && role === "doctor") {
        await peerConnection.setRemoteDescription(data.answer);
      }

      if (data.type === "candidate") {
        await peerConnection.addIceCandidate(data.candidate);
      }
    };

  }, []);

  const startCall = async () => {
    if (!pc || role !== "doctor") return;
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    ws.send(JSON.stringify({ type: "offer", offer, role }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Video Consultation ({role})</h1>
      {role === "doctor" && (
        <button
          onClick={startCall}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl mb-6 hover:bg-blue-700 transition"
        >
          Start Call
        </button>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3">
        <div className="bg-black rounded-xl h-96 flex items-center justify-center">
          <video ref={localVideo} autoPlay muted className="w-full h-full rounded-xl" />
        </div>
        <div className="bg-black rounded-xl h-96 flex items-center justify-center">
          <video ref={remoteVideo} autoPlay className="w-full h-full rounded-xl" />
        </div>
      </div>
    </div>
  );
}
