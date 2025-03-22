import "./index.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-300 to-pink-300 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8 max-w-lg w-full flex flex-col justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold mb-4 text-purple-700 text-center">
            생일 축하해, Kirin! 🎉
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line text-center">
            오늘은 단순히 나이가 한 살 더 늘어난 날이 아니라,{"\n"}
            네가 걸어온 모든 여정, 배운 것들, 그리고 주위 사람들에게 퍼뜨린
            미소들을 기념하는 날이야.{"\n\n"}
            네가 한 걸음 한 걸음 내딛을 때마다{"\n"}
            언제나 따뜻함과 진심이 남겨져 있다는 걸 알아.{"\n\n"}
            그냥 이 말은 꼭 하고 싶어.{"\n"}
            네가 있어서 세상이 더 빛나고 있다는 걸.{"\n\n"}
            올해는 너의 모든 꿈들이{"\n"}
            천천히, 하지만 확실히 길을 찾아가길 바랄게.{"\n"}
            너만의 방식으로 계속 빛나길. ✨
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 mt-8">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/present"
              className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-700 transition-colors block text-center"
            >
              🎁 선물 받기
            </Link>
          </motion.div>
          <span className="text-sm text-gray-500">- Bama Amamiya -</span>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
