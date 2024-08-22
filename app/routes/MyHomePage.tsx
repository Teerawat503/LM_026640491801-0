import Foolter from "./template/foolter";

export default function MyHomePage() {
    return (
        <div className="font-sans p-4">
            <center>
                <h1 className="text-3xl">Hello Myname is Teerawat Barnvimol</h1> <br />
                <h1 className="text-3xl"> Std. ID 026640491801-0</h1> <br />
                <h1 className="text-3xl">E-mail: teerawat.bar@rmutto.ac.th </h1> <br />
                <h1 className="text-3xl">Line ID: 0617434838 </h1> <br />
                <img src="photos/5.png" alt="This Teerawat" /> <br /> <br />
                <a href="/" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">กลับหน้าหลัก</a>
            </center>
        </div>
    );
}