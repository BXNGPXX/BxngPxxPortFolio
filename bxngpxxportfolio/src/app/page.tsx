import NavItem from "./components/nav_item"

function page () {
  return (

    <>
      <nav className="bg-black/50 min-h-fit flex justify-between px-5 py-2 sm:h-10 items-center" >

        <a href="" className="text-white md:text-lg">LOGO</a>

        <div className="">
          <NavItem title="Home" />
          <NavItem title="Contact" />
        </div>
        
      </nav>
    </>

  )
}

export default page