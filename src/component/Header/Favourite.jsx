// eslint-disable-next-line react/prop-types
export default function Favourite({showFav,setShowFav}) {
    function handleModal(){
        setShowFav(!showFav)
    }
  return (
    <div onClick={handleModal} className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
      <img src="./assets/heart.svg" alt="" />
      <span>Favourite Locations</span>
    </div>
  );
}
