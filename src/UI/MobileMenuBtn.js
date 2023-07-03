import MobileMenuOpen from '../assets/images/nav/icon-menu.svg';
import MobileMenuClosed from '../assets/images/nav/icon-menu-close.svg';

function MobileMenuBtn({ onClickHandler, isVisible }) {
  return (
    <button
      onClick={onClickHandler}
      className="z-30 fixed block p-3 aspect-auto border-none top-0 bg-white right-0 md:hidden"
    >
      <img className='' src={isVisible ? MobileMenuOpen : MobileMenuClosed} alt='close menu btn' aria-hidden></img>
    </button>
  );
}

export default MobileMenuBtn;
