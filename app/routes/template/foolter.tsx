export default function Foolter() {
    return (
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024. Made In Teerawat.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="/" className="text-gray-900 dark:text-white hover:underline">   หน้าแรก /</a>
                    </li>
                    <li>
                        <a href="MyHerbForm" className="text-gray-900 dark:text-white hover:underline" aria-current="page">/ เพิ่มยาสมุนไพร /</a>
                    </li>
                    <li>
                        <a href="about" className="text-gray-900 dark:text-white hover:underline">/ ข้อมูลยาสมุนไพร /</a>
                    </li>
                    <li>
                        <a href="MyHomePage" className="text-gray-900 dark:text-white hover:underline">/ ข้อมูลของฉัน</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
