import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Balloon from "./Balloon";
function Present() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Memutar audio saat komponen dimuat
    const playAudio = async () => {
      try {
        await audioRef.current.play();
      } catch (e) {
        console.log(
          "Autoplay diblokir oleh browser, memerlukan interaksi pengguna."
        );
      }
    };
    playAudio();
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/images/gift.png"; // Pastikan path ke gambar benar
    link.download = "kirin-gift.png"; // Nama file saat di-download
    link.click();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-200 to-yellow-200 p-4">
      {[...Array(10)].map((_, i) => (
  <Balloon
    key={i}
    delay={i * 0.5}
    left={Math.random() * 90} // posisi random
    size={30 + Math.random() * 30} // ukuran random 30-60px
    duration={4 + Math.random() * 3} // durasi random 4-7 detik
  />
))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 max-w-md w-full text-center"
      >
        <h1 className="text-3xl font-bold text-pink-600 mb-6">🎁 깜짝 선물!</h1>
        <img
          src="/images/gift.png"
          alt="Gift for Kirin"
          className="rounded-xl mb-6"
        />
        <p className="text-gray-700 mb-4 leading-relaxed">
          작은 마음 하나 담아, 너에게 살며시 건넬게. 빛나는 오늘, 네가 웃을 수
          있다면, 그걸로 충분해. 언제나 네 곁에 따스한 바람처럼, 행복이 머물길
          바랄게. 🌷
        </p>

        {/* Tombol Download */}
        <div className="grid">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="bg-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-pink-600 transition-colors mb-4"
          >
            📥 이미지 다운로드
          </motion.button>

          <Link to="/" className="text-purple-600 hover:underline">
            돌아가기
          </Link>
        </div>
      </motion.div>

      {/* Elemen Audio */}
      <audio ref={audioRef} src="/audio/hbd.mp3" loop />
    </div>
  );
}

export default Present;
