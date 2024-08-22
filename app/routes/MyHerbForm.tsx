import { useState } from "react";
import AppMenu from "./template/header&manu";
import Foolter from "./template/foolter";

export default function CreateCard() {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [cards, setCards] = useState([]);
  const [tel, setTel] = useState("");
  const [images, setImages] = useState("");
  const [type, setType] = useState("");
  const [op, setOp] = useState("");
  const [info, setInfo] = useState("");
  const [nextId, setNextId] = useState(1);
  const [use, setUse] = useState("");
  const [cardCount, setCardCount] = useState(0);

  const handleClickAdd = (na, no, tel, imag, type, op, info, use) => {
    setCards([
      ...cards,
      {
        id: nextId,
        name: na,
        note: no,
        tel: tel,
        images: imag,
        type: type,
        op: op,
        info: info,
        use: use,
      },
    ]);
    setNextId(nextId + 1);
    setCardCount(cardCount + 1);
    

  };

  return (
    <>
      <AppMenu />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">เพิ่มข้อมูลยาสมุนไพร</h1>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700">ชื่อยาสมุนไพร :</label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              name="cName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">รายละเอียด :</label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg"
              name="cNote"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <form className="max-w-sm mx-auto">
            <label className="block text-gray-700">ประเภทยาสมุนไพร :</label>
            <select id="countries"
              className="w-full px-3 py-2 border rounded-lg"
              name="cType"
              value={type}
              onChange={(e) => setType(e.target.value)}>
              <option selected>เลือกประเภท</option>
              <option value="ยาสมุนไพรในบัญชียาหลักแห่งชาติ">ยาสมุนไพรในบัญชียาหลักแห่งชาติ</option>
              <option value="ยาสมุนไพรที่ประกาศเป็นยาสามัญประจำบ้าน">ยาสมุนไพรที่ประกาศเป็นยาสามัญประจำบ้าน</option>
              <option value="ยาเฉพาะที่">ยาเฉพาะที่</option>
              <option value="ยาต้มเฉพาะราย">ยาต้มเฉพาะราย</option>
            </select>
          </form>
          <div className="mb-4">
            <label className="block text-gray-700">ผู้ผลิต :</label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              name="cInfo"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">ติดต่อผู้ผลิต เบอร์โทร: </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              name="cTel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">ภาพตัวอย่าง (URL)</label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              name="cImages"
              value={images}
              onChange={(e) => setImages(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">สรรพคุณ :</label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              name="cOp"
              value={op}
              onChange={(e) => setOp(e.target.value)}
            />
          </div>
          <p>****กรุณากรอกข้อมูลให้สมบูรณ์****</p>
          <button
            onClick={() => handleClickAdd(name, note, tel, images, type, op, info, use) }
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            เพิ่มข้อมูล
          </button> 
          <button
            onClick={() => location.reload()}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            เคลียร์
          </button>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center mb-4">
            ข้อมูลที่ถูกสมุนไพรที่ถูกเพิ่มเข้ามา ({cardCount})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className="card bg-white p-4 rounded-lg shadow-md"
              >
                <h2 className="text-xl font-bold">{card.name}</h2>
                <p>รายละเอียด :</p>
                <p>{card.note}</p>
                <p>ติดต่อผู้ผลิต :</p>
                <p>{card.tel}</p>
                <p>ประเภทยาสมุนไพร :</p>
                <p>{card.type}</p>
                <p>สรรพคุณ :</p>
                <p>{card.op}</p>
                <p>ผู้ผลิต :</p>
                <p>{card.info}</p>
                {card.images && (
                  <img
                    src={card.images}
                    alt={`${card.name}'s image`}
                    className="mt-2 rounded-lg"
                  />
                )}
                <br />
                <button
                  className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => alert("หาข้อมูลเพิ่มเติมจาก Google")}
                >
                  ข้อมูลเพิ่มเติม
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Foolter />
    </>
  );
}
