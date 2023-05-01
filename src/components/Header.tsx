import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="w-full p-5 shadow-sm flex justify-between">
      <div>
        <p>이 책은 전자책이 있습니까?</p>
      </div>
      <div>
        <ul>
          <li>
            <QuestionMarkCircleIcon className="w-6 h-6" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
