export default function VideoModal({ embedUrl, isOpen, setOpen }: { embedUrl: string; isOpen: boolean; setOpen: (open: boolean) => void }) {
  const getYoutubeId = (url: string) => {
    const regExp = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const videoId = getYoutubeId(embedUrl);

  return (
    <div className={`fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50 ${isOpen ? "block" : "hidden"}`} onClick={() => setOpen(false)}>
      <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center bg-black/50'>
        <div className='max-w-full w-[700px] h-[50vh] rounded-lg shadow-lg'>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            className='w-full h-full'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
}
