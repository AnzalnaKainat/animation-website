import Eye from './Eye'

const PlayEyes = () => {


  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
          <Eye/>
        </div>
      
    </div>
  )
}

export default PlayEyes