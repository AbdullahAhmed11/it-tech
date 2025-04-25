const VideoPlayer = () => (
    <div className='sticky top-0 z-50 bg-white md:static md:z-auto md:bg-transparent '>

    <div className='w-full aspect-video'>
        <iframe
            src='https://www.youtube.com/embed/dQw4w9WgXcQ'
            title="Course Video"
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
            ></iframe>
    </div>
    </div>
  );
  
  export default VideoPlayer;